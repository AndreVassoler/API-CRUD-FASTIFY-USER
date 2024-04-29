import prismaClient from "../../prisma";

class ListTarefaService{
    async execute(){

        const tarefa = await prismaClient.tarefa.findMany()

        return tarefa;
        
    }
        
}

export { ListTarefaService }