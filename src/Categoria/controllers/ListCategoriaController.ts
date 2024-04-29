import { FastifyRequest, FastifyReply } from "fastify";
import { ListCategoriaService } from "../services/ListCategoriaService"; 


class ListCategoriaController{
    async handle(request:FastifyRequest, reply: FastifyReply){
        const listCategoriaService = new ListCategoriaService();

        const user = await listCategoriaService.execute();

        reply.send(user);
    }

}

export { ListCategoriaController }