// Vous devez insérer les nouveaux tests ici
import { assert } from 'console';
import 'jest-extended';
import app from '../../src/app';

const request = require('supertest');

describe('GET /api/v1/jeu/redemarrerJeu', () => {

  it("GET /api/v1/jeu/redemarrerJeu retourne 200", async () => {
    const response = await request(app).get("/api/v1/jeu/redemarrerJeu");
    expect(response.status).toBe(200);
  });

  it("jouer après redemarrerJeu retourne 404", async () => {
    
    await request(app).get("/api/v1/jeu/redemarrerJeu");

    const response = await request(app).get("/api/v1/jeu/jouer/Joueur1");

    expect(response.status).toBe(404);
  });

});
