import supertest from 'supertest';
import buildApp from '../src/server' 

describe('Testes de integração para CRUD de tarefas', () => {
  let app: ReturnType<typeof buildApp>; 
  let request: supertest.SuperTest<supertest.Test>;

  // Antes de todos os testes, inicializa a instância do supertest
  beforeAll(() => {
    let request = supertest(app);
  });

  // Teste: Criar uma nova tarefa
  it('Deve criar uma nova tarefa', async () => {
    const novaTarefa = {
      titulo: 'Título da Tarefa',
      descricao: 'Descrição da tarefa',
      dataCriacao: '2024-04-15T10:00:00Z',
      dataConclusao: '2024-04-20T10:00:00Z',
      tipo: 'Tarefa',
      categoria: 'Categoria Teste',
      status: 'Pendente',
      userAssociado: 1,
    };

    const response = await request.post('/tarefas').send(novaTarefa);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.titulo).toBe(novaTarefa.titulo);
    expect(response.body.descricao).toBe(novaTarefa.descricao);
    // Verificar outros atributos da tarefa...
  });

  // Teste: Obter os detalhes de uma tarefa existente
  it('Deve obter os detalhes de uma tarefa existente', async () => {
    // Suponha que você tenha criado uma tarefa de teste anteriormente e armazenado seu ID
    const taskId = '1234567890';

    const response = await request.get(`/tarefas/${taskId}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toBe(taskId);
    // Verificar outros atributos da tarefa...
  });

  // Teste: Atualizar os detalhes de uma tarefa existente
  it('Deve atualizar os detalhes de uma tarefa existente', async () => {
    // Suponha que você tenha criado uma tarefa de teste anteriormente e armazenado seu ID
    const taskId = '1234567890';

    const updatedTarefaData = {
      titulo: 'Novo Título',
      descricao: 'Nova Descrição',
      dataCriacao: '2024-04-16T10:00:00Z',
      dataConclusao: '2024-04-21T10:00:00Z',
      tipo: 'Outra Tarefa',
      categoria: 'Nova Categoria',
      status: 'Concluída',
      userAssociado: 2,
    };

    const response = await request.put(`/tarefas/${taskId}`).send(updatedTarefaData);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toBe(taskId);
    expect(response.body.titulo).toBe(updatedTarefaData.titulo);
    expect(response.body.descricao).toBe(updatedTarefaData.descricao);
    // Verificar outros atributos atualizados da tarefa...
  });

  // Teste: Excluir uma tarefa existente
  it('Deve excluir uma tarefa existente', async () => {
    // Suponha que você tenha criado uma tarefa de teste anteriormente e armazenado seu ID
    const taskId = '1234567890';

    const response = await request.delete(`/tarefas/${taskId}`);

    expect(response.status).toBe(204);
  });
});
