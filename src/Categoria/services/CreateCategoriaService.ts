import prismaClient from "../../prisma";

interface CreateCategoriaProps {
    nome: string 
    cor: string
}

class CreateCategoriaService {
    async execute({ nome, cor }: CreateCategoriaProps) {
        console.log("ROTA FOI CHAMADA");

        if (!nome || !cor) {
            throw new Error("Preencha todos os campos");
        }

        const categoria = await prismaClient.categoria.create({
            data: {
                nome,
                cor,
            }
        }); 

        return categoria;
    }
}

export { CreateCategoriaService };