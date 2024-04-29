import { FastifyRequest, FastifyReply } from "fastify";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { name, peso, email, tarefaAssociado, senha } = request.body as { name: string, peso: number, senha: string, email: string, tarefaAssociado: number };

        const userService = new CreateUserService();

        const user = await userService.execute({ name, peso, email, tarefaAssociado, senha });

        reply.send(user);
    }
}

export { CreateUserController };
