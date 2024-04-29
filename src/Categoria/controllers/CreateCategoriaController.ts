import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCategoriaService } from "../services/CreateCategoriaService"; 

class CreateCategoriaController {
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { nome, cor } = request.body as { nome: string, cor: string };

        const categoriaService = new CreateCategoriaService();

        const categoria = await categoriaService.execute({ nome, cor });

        reply.send(categoria);
    }
}

export { CreateCategoriaController };