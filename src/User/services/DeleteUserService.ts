import prismaClient from "../../prisma";

interface DeleteUserProps{
    id: string;
}

class DeleteUserService{
    async execute({ id }: DeleteUserProps){
        if(!id){
            throw new Error("Solicitação invalida.")
        }

        const findUser = await prismaClient.user.findFirst({
            where:{
                id: id
            }
        })

        if(!findUser){
            throw new Error("Cliente não existe!!!")
        }

        await prismaClient.user.delete({
            where:{
                id: findUser.id
            }
        })

        return { message: "Deletado com sucesso!!!" }
    }
}

export { DeleteUserService }