import prismaClient from "../../prisma";

interface CreateTarefaProps {
    titulo: string;
    descricao: string;
    dataCriacao: string;
    dataConclusao: string;
    tipo: string;
    categoria?: string;
    status: string;
    userAssociado: Number; // Corrigido de Number para number
}

class CreateTarefaService { // Corrigido o nome da classe para CreateTarefaService
    async execute({ titulo, descricao, dataCriacao, dataConclusao, tipo, categoria, status, userAssociado }: CreateTarefaProps) {
        console.log("ROTA FOI CHAMADA");

        if (!titulo || !descricao || !dataCriacao || !dataConclusao || !tipo || !status || !userAssociado) {
            throw new Error("Preencha todos os campos");
        }

        const tarefa = await prismaClient.tarefa.create({
            data: {
                titulo,
                descricao, 
                dataCriacao, 
                dataConclusao, 
                tipo, 
                categoria, 
                status, 
                userAssociado,
            }
        }); 

        return tarefa;
    }
}

export { CreateTarefaService };
