import { createMocks } from 'node-mocks-http';
import esPrimo from '../../../src/pages/api/esPrimo';

describe('/api/esPrimo', () => {
  test('identifica correctamente un número primo', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: { numero: 5 },
    });

    await esPrimo(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual({ esPrimo: true });
  });

  test('identifica correctamente un número no primo', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: { numero: 4 },
    });

    await esPrimo(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual({ esPrimo: false });
  });

  test('maneja entradas inválidas de manera adecuada', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: { numero: 'invalido' }, // Entrada inválida
    });

    await esPrimo(req, res);

    expect(res._getStatusCode()).toBe(400); // Se espera un código de estado de solicitud incorrecta (bad request)
    expect(JSON.parse(res._getData())).toEqual({ error: 'Debe ingresar un número válido, ayor que 1' });
  });

  test('maneja entradas faltantes de manera adecuada', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {}, // Falta la propiedad 'numero'
    });

    await esPrimo(req, res);

    expect(res._getStatusCode()).toBe(400); // Se espera un código de estado de solicitud incorrecta (bad request)
    expect(JSON.parse(res._getData())).toEqual({ error: 'Debe ingresar un número válido, ayor que 1' });
  });
});
