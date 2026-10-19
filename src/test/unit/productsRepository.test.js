const pool = require("../../config/database");
const productsRepository = require("../../repositories/productsRepository");

jest.mock("../../config/database");

describe("productsRepository.findAll", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("deve executar a consulta e retornar os produtos", async () => {
    const products = [
      { id: 1, name: "Mouse", price: "80.00" },
      { id: 2, name: "Teclado", price: "150.00" },
    ];

    pool.query.mockResolvedValue({
      rows: products,
    });

    const result = await productsRepository.findAll();

    expect(pool.query).toHaveBeenCalledWith(
      "SELECT * FROM products"
    );

    expect(result).toEqual(products);
  });
});