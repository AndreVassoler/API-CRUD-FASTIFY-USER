import prismaClient from "../../prisma";

interface DeleteCategoriaProps{
    id: string;
}

class DeleteCategoriaService{
    async execute({ id }: DeleteCategoriaProps){
        if(!id){
            throw new Error("Solicitação invalida.")
        }

        const findCategoria = await prismaClient.categoria.findFirst({
            where:{
                id: id
            }
        })

        if(!findCategoria){
            throw new Error("Cliente não existe!!!")
        }

        await prismaClient.categoria.delete({
            where:{
                id: findCategoria.id
            }
        })

        return { message: "Deletado com sucesso!!!" }
    }
}

export { DeleteCategoriaService }