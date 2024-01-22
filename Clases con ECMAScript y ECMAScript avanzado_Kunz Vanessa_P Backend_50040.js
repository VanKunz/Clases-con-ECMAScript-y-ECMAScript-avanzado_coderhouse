class ProductManager {
  constructor() {
    this.products = [];
    this.autoIncrementId = 1;
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    // Validar que todos los campos sean obligatorios
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.error("Todos los campos son obligatorios");
      return;
    }

    // Validar que no se repita el campo "code"
    if (this.products.some(product => product.code === code)) {
      console.error("Ya existe un producto con el mismo código");
      return;
    }

    // Agregar el producto con id autoincrementable
    const product = {
      id: this.autoIncrementId++,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    this.products.push(product);
    console.log(`Producto agregado: ${title}`);
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find(product => product.id === id);

    if (product) {
      return product;
    } else {
      console.error("Producto no encontrado");
      return null;
    }
  }
}

// Ejemplo de uso
const productManager = new ProductManager();

productManager.addProduct("Producto 1", "Descripción 1", 20.99, "img1.jpg", "P1", 10);
productManager.addProduct("Producto 2", "Descripción 2", 30.99, "img2.jpg", "P2", 15);

console.log("Lista de productos:", productManager.getProducts());

const productIdToFind = 1;
const foundProduct = productManager.getProductById(productIdToFind);

if (foundProduct) {
  console.log(`Producto encontrado con ID ${productIdToFind}:`, foundProduct);
}
