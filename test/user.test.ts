import supertest from 'supertest';
import buildApp from '../src/server' 

describe('Testes de integração para CRUD de tarefas', () => {
  let app: ReturnType<typeof buildApp>; 
  let request: supertest.SuperTest<supertest.Test>;

  // Antes de todos os testes, inicializa a instância do supertest
  beforeAll(() => {
    let request = supertest(app);
  });


  // Teste: Criar um novo usuário
  it('Deve criar um novo usuário', async () => {
    const userData = { // Dados do usuário a serem enviados na solicitação POST
      name: 'Teste',
      email: 'teste@teste.com',
      senha: 'senha',
    };

    const response = await request.post('/users').send(userData); // Enviar solicitação POST para criar um usuário

    // Verificar se a resposta está de acordo com o esperado
    expect(response.status).toBe(201); // Verificar o status da resposta
    expect(response.body).toHaveProperty('id'); // Verificar se o corpo da resposta possui a propriedade 'id'
    expect(response.body.name).toBe(userData.name); // Verificar se o nome do usuário na resposta corresponde ao fornecido
    expect(response.body.email).toBe(userData.email); // Verificar se o email do usuário na resposta corresponde ao fornecido
  });

  // Teste: Obter os detalhes de um usuário existente
  it('Deve obter os detalhes de um usuário existente', async () => {
    const userId = '1234567890'; // ID do usuário existente a ser buscado

    const response = await request.get(`/users/${userId}`); // Enviar solicitação GET para obter os detalhes do usuário

    // Verificar se a resposta está de acordo com o esperado
    expect(response.status).toBe(200); // Verificar o status da resposta
    expect(response.body).toHaveProperty('id'); // Verificar se o corpo da resposta possui a propriedade 'id'
    expect(response.body.id).toBe(userId); // Verificar se o ID do usuário na resposta corresponde ao esperado
  });

  // Teste: Atualizar os detalhes de um usuário existente
  it('Deve atualizar os detalhes de um usuário existente', async () => {
    const userId = '1234567890'; // ID do usuário existente a ser atualizado

    const updatedUserData = { // Novos dados do usuário a serem enviados na solicitação PUT
      name: 'Novo Nome',
      email: 'novoemail@teste.com',
    };

    const response = await request.put(`/users/${userId}`).send(updatedUserData); // Enviar solicitação PUT para atualizar os detalhes do usuário

    // Verificar se a resposta está de acordo com o esperado
    expect(response.status).toBe(200); // Verificar o status da resposta
    expect(response.body).toHaveProperty('id'); // Verificar se o corpo da resposta possui a propriedade 'id'
    expect(response.body.id).toBe(userId); // Verificar se o ID do usuário na resposta corresponde ao esperado
    expect(response.body.name).toBe(updatedUserData.name); // Verificar se o nome do usuário na resposta corresponde ao novo nome fornecido
    expect(response.body.email).toBe(updatedUserData.email); // Verificar se o email do usuário na resposta corresponde ao novo email fornecido
  });

  // Teste: Excluir um usuário existente
  it('Deve excluir um usuário existente', async () => {
    const userId = '1234567890'; // ID do usuário existente a ser excluído

    const response = await request.delete(`/users/${userId}`); // Enviar solicitação DELETE para excluir o usuário

    // Verificar se a resposta está de acordo com o esperado
    expect(response.status).toBe(204); // Verificar o status da resposta - 204 significa que a requisição foi bem-sucedida e não há conteúdo para retornar
  });
});
