import { FastifyRequest, FastifyReply } from "fastify";
import { ListTarefaService } from "../services/ListTarefaService"; 


class ListTarefaController{
    async handle(request:FastifyRequest, reply: FastifyReply){
        const listTarefaService = new ListTarefaService();

        const tarefa = await listTarefaService.execute();

        reply.send(tarefa);
    }

}

export { ListTarefaController }