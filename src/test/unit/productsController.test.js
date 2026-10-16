const productsService = require("../../services/productsService");
const productsController = require("../../controllers/productsController");

jest.mock("../../services/productsService");

describe("productsController.findAll", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("retorna 200 e a lista de produtos", async () => {
    const products = [
      {
        id: 1,
        name: "Mouse",
        price: "80.00",
        stock_quantity: 50,
      },
    ];

    productsService.findAll.mockResolvedValue(products);

    const req = {};

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await productsController.findAll(req, res);

    expect(productsService.findAll).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(products);
  });
});
