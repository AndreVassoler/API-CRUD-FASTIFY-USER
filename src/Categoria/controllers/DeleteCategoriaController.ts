import { FastifyRequest, FastifyReply } from "fastify"
import { DeleteCategoriaService } from "../services/DeleteCategoriaService"; 


class  DeleteCategoriaController {
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { id } = request.query as { id: string }

        const categoriaService = new DeleteCategoriaService();

        const categoria = await categoriaService.execute({ id })

        reply.send(categoria);
    }

}

export { DeleteCategoriaController }