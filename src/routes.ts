import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateUserController } from "./User/controllers/CreateUserController";
import { ListUserController } from "./User/controllers/ListUserController";
import { DeleteUserController } from "./User/controllers/DeleteUserController";
import { CreateCategoriaController } from "./Categoria/controllers/CreateCategoriaController";
import { ListCategoriaController } from "./Categoria/controllers/ListCategoriaController";
import { DeleteCategoriaController } from "./Categoria/controllers/DeleteCategoriaController";
import { CreateTarefaController } from "./Tarefa/controllers/CreateTarefaController";
import { ListTarefaController } from "./Tarefa/controllers/ListTarefaController";
import { DeleteTarefaController } from "./Tarefa/controllers/DeleteTarefaController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {


/* ============================== ROTAS DE USER ==============================  */

    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
        return { ok: true }
    })

    fastify.post("/user", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateUserController().handle(request, reply)
    })
    
    fastify.get("/user", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListUserController().handle(request, reply)
    })
   
    
    fastify.delete("/user", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteUserController().handle(request, reply)
    })


    /* ============================== ROTAS DE CATEGORIA ==============================  */

    fastify.post("/categoria", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateCategoriaController().handle(request, reply)
    })
    
    fastify.get("/categoria", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListCategoriaController().handle(request, reply)
    })
   
    
    fastify.delete("/categoria", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteCategoriaController().handle(request, reply)
    })

    /* ============================== ROTAS DE Tarefa ==============================  */

    fastify.post("/tarefa", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateTarefaController().handle(request, reply)
    })
    
    fastify.get("/tarefa", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListTarefaController().handle(request, reply)
    })
   
    
    fastify.delete("/tarefa", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteTarefaController().handle(request, reply)
    })

   

}