// Vous devez insérer les nouveaux tests ici
import { assert } from 'console';
import 'jest-extended';
import app from '../../src/app';

const request = require('supertest');

describe('redemarrerJeu.test.ts', () => {
  
  beforeAll( async () => {
    await request(app).post('/api/v1/joueur').send({ nom: 'Joueur1' });
    await request(app).post('/api/v1/joueur').send({ nom: 'Joueur2' });
  });

  it("devrait implémenter test", async () => {
    const response = await request(app).get('/api/v1/jeu/redemarrerJeu');

    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
  });

});
