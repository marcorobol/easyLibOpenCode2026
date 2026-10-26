const request = require('supertest');

const api = request(process.env.API_URL || 'http://localhost:3000');
const operator = {
  email: 'mario@easylib.it',
  password: 'secret'
};

describe('US-02 Autenticazione operatori', () => {
  test('AC-US02-01: autenticazione con credenziali valide restituisce 200 con un token', async () => {
    const response = await api
      .post('/api/v1/authentications')
      .send(operator);

    expect(response.status).toBe(200);
    expect(response.body.token).toEqual(expect.any(String));
  });

  test('AC-US02-02: autenticazione con password errata restituisce 401 Unauthorized', async () => {
    const response = await api
      .post('/api/v1/authentications')
      .send({
        ...operator,
        password: 'sbagliata'
      });

    expect(response.status).toBe(401);
  });

  test('AC-US02-03: accesso al profilo senza token è rifiutato e con il token restituisce l’email dell’operatore', async () => {
    const withoutToken = await api.get('/api/v1/operators/me');

    expect(withoutToken.status).toBe(401);

    const authentication = await api
      .post('/api/v1/authentications')
      .send(operator);
    const token = authentication.body.token;

    const withToken = await api
      .get('/api/v1/operators/me')
      .set('Authorization', `Bearer ${token}`);

    expect(withToken.status).toBe(200);
    expect(withToken.body.email).toBe(operator.email);
  });
});
