import supertest from 'supertest';
import buildApp from '../src/server' 

describe('Testes de integração para CRUD de tarefas', () => {
  let app: ReturnType<typeof buildApp>; 
  let request: supertest.SuperTest<supertest.Test>;

  // Antes de todos os testes, inicializa a instância do supertest
  beforeAll(() => {
    let request = supertest(app);
  });

  // Teste: Criar uma nova categoria
  it('Deve criar uma nova categoria', async () => {
    const novaCategoria = {
      name: 'Nome da Categoria',
      cor: '#FF0000', // Cor em formato hexadecimal
    };

    const response = await request.post('/categorias').send(novaCategoria);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.name).toBe(novaCategoria.name);
    expect(response.body.cor).toBe(novaCategoria.cor);
  });

  // Teste: Obter os detalhes de uma categoria existente
  it('Deve obter os detalhes de uma categoria existente', async () => {
    // Suponha que você tenha criado uma categoria de teste anteriormente e armazenado seu ID
    const categoryId = '1234567890';

    const response = await request.get(`/categorias/${categoryId}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toBe(categoryId);
    // Verificar outros atributos da categoria...
  });

  // Teste: Atualizar os detalhes de uma categoria existente
  it('Deve atualizar os detalhes de uma categoria existente', async () => {
    // Suponha que você tenha criado uma categoria de teste anteriormente e armazenado seu ID
    const categoryId = '1234567890';

    const updatedCategoriaData = {
      name: 'Novo Nome',
      cor: '#00FF00', // Nova cor em formato hexadecimal
    };

    const response = await request.put(`/categorias/${categoryId}`).send(updatedCategoriaData);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toBe(categoryId);
    expect(response.body.name).toBe(updatedCategoriaData.name);
    expect(response.body.cor).toBe(updatedCategoriaData.cor);
    // Verificar outros atributos atualizados da categoria...
  });

  // Teste: Excluir uma categoria existente
  it('Deve excluir uma categoria existente', async () => {
    // Suponha que você tenha criado uma categoria de teste anteriormente e armazenado seu ID
    const categoryId = '1234567890';

    const response = await request.delete(`/categorias/${categoryId}`);

    expect(response.status).toBe(204);
  });
});
