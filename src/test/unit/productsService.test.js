const productsRepository = require("../../repositories/productsRepository");

jest.mock("../../repositories/productsRepository");

const productsService = require("../../services/productsService");

const products = [
  { id: 1, name: "Mouse", price: "80.00" },
  { id: 2, name: "Teclado", price: "150.00" },
];

describe("productsService.findAll", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("deve retornar os produtos do Repository", async () => {
    productsRepository.findAll.mockResolvedValue(products);

    const result = await productsService.findAll();

    expect(productsRepository.findAll).toHaveBeenCalled();
    expect(result).toEqual(products);
  });

  test("deve propagar o erro do Repository", async ()=>{
    productsRepository.findAll.mockRejectedValue(new Error("Falha no banco"))
    
    await expect(productsService.findAll()).rejects.toThrow("Falha no banco");
    


  })
});


