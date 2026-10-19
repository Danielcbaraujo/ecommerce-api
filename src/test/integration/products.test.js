const request = require("supertest");
const app = require("../../app");
const productsRepository = require("../../repositories/productsRepository");
const Test = require("supertest/lib/test");

jest.mock("../../repositories/productsRepository");

describe("GET /products", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("deve retornar 200 e uma lista de produtos", async () => {
    const products = [
      {
        id: 1,
        name: "Mouse",
        price: "80.00",
        stock_quantity: 50,
      },
    ];

    productsRepository.findAll.mockResolvedValue(products);

    const response = await request(app).get("/products");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(products);
    expect(response.body[0]).toHaveProperty("id");
    expect(response.body[0]).toHaveProperty("name");
    expect(response.body[0]).toHaveProperty("price");
  });

  test("deve retornar 500 quando o Repository falhar", async () => {
    productsRepository.findAll.mockRejectedValue(
      new Error("Falha simulada no banco")
    );

    const consoleError = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    try {
      const response = await request(app).get("/products");

      expect(response.status).toBe(500);
      expect(response.body).toEqual({
        error: "Erro interno do servidor",
      });
    } finally {
      consoleError.mockRestore();
    }
  });

});
describe("GET /", () => {
  test("deve retornar 200 e a mensagem da API", async () => {
    const response = await request(app).get("/");

    expect(response.status).toBe(200);

    expect(response.body).toEqual({
      message: "API da loja virtual funcionando!",
    });
  });
});