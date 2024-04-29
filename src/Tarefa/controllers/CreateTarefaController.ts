import { FastifyRequest, FastifyReply } from "fastify";
import { CreateTarefaService } from "../services/CreateTarefaService"; 

class CreateTarefaController {
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { titulo, descricao, dataCriacao, dataConclusao, tipo, categoria, status, userAssociado  } = request.body as { titulo: string, descricao: string, dataCriacao: string, dataConclusao: string, tipo: string, categoria: string, status: string, userAssociado: number };

        const tarefaService = new CreateTarefaService();

        const tarefa = await tarefaService.execute({ titulo, descricao, dataCriacao, dataConclusao, tipo, categoria, status, userAssociado  });

        reply.send(tarefa);
    }
}

export { CreateTarefaController };