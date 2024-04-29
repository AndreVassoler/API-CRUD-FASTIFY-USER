import prismaClient from "../../prisma";

interface CreateUserProps {
    name: string;
    peso: number;
    senha: string;
    email: string;
    tarefaAssociado: number;
}

class CreateUserService {
    async execute({ name, peso, senha, email, tarefaAssociado }: CreateUserProps) {
        console.log("ROTA FOI CHAMADA");

        if (!name || !peso || !email || !senha || !tarefaAssociado) {
            throw new Error("Preencha todos os campos");
        }

        const user = await prismaClient.user.create({
            data: {
                name,
                peso,
                email,
                senha,
                tarefaAssociado,
            }
        }); 

        return user;
    }
}

export { CreateUserService };
