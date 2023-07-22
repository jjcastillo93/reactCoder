const productos = [
    {
      id: 1,
      imagen: 'https://i.ibb.co/1Gv9C9N/offroader-jeep-driving-highway.jpg',
      nombre: 'Producto 1',
      precio: 10.99,
      descripcion: 'Descripción del producto 1',
      stock: 5,
      category: "autos"
    },
    {
      id: 2,
      imagen: 'https://i.ibb.co/p4twVgF/navy-blue-coupe-sedan-driving-highway-accross-mountains.jpg',
      nombre: 'Producto 2',
      precio: 19.99,
      descripcion: 'Descripción del producto 2',
      stock: 10,
      category: "autos"
    },
    {
        id: 3,
        imagen: 'https://i.ibb.co/kQBDw5d/low-angle-white-modern-car-outdoors.jpg',
        nombre: 'Producto 3',
        precio: 19.99,
        descripcion: 'Descripción del producto 2',
        stock: 10,
        category: "autos"
      },
      {
        id: 4,
        imagen: 'https://i.ibb.co/9NpDLMB/green-haki-color-sedan-car-driving-road.jpg',
        nombre: 'Producto 4',
        precio: 19.99,
        descripcion: 'Descripción del producto 2',
        stock: 10,
        category: "autos"
      },
      {
        id: 5,
        imagen: 'https://i.ibb.co/k5FWyKZ/white-offroader-jeep-parking.jpg',
        nombre: 'Producto 5',
        precio: 19.99,
        descripcion: 'Descripción del producto 2',
        stock: 10,
        category: "autos"
      },
      {
        id: 6,
        imagen: 'https://i.ibb.co/YhDSLL4/black-sport-coupe-car-drive-highway.jpg',
        nombre: 'Producto 6',
        precio: 19.99,
        descripcion: 'Descripción del producto 2',
        stock: 10,
        category: "autos"
      },
      {
        id: 7,
        imagen: 'https://i.ibb.co/hMSGxRj/black-sport-car-highway-drive-sunset.jpg',
        nombre: 'Producto 7',
        precio: 19.99,
        descripcion: 'Descripción del producto 2',
        stock: 10,
        category: "autos"
      },
      {
        id: 8,
        imagen: 'https://i.ibb.co/dgjvXXB/red-mini-coupe-driving-highway-with-high-speed.jpg',
        nombre: 'Producto 8',
        precio: 19.99,
        descripcion: 'Descripción del producto 2',
        stock: 10,
        category: "autos"
      },
      {
        id: 9,
        imagen: 'https://i.ibb.co/m0J5QPS/different-car-accessories-composition.jpg',
        nombre: 'Producto 9',
        precio: 19.99,
        descripcion: 'Descripción del producto 2',
        stock: 10,
        category: "partes"
      },
      {
        id: 10,
        imagen: 'https://i.ibb.co/J5gNC8N/different-car-accessories-composition-1.jpg',
        nombre: 'Producto 10',
        precio: 19.99,
        descripcion: 'Descripción del producto 2',
        stock: 10,
        category: "partes"
      },
      {
        id: 11,
        imagen: 'https://i.ibb.co/VHZBrzX/hands-only-mechanic-holding-tire-repair-garage-replacement-winter-summer-tires.jpg',
        nombre: 'Producto 11',
        precio: 19.99,
        descripcion: 'Descripción del producto 2',
        stock: 10,
        category: "partes"
      },
      {
        id: 12,
        imagen: 'https://i.ibb.co/p2rPx0g/female-model-with-tattooed-body-wearing-protective-goggles-car-engine.jpg',
        nombre: 'Producto 12',
        precio: 19.99,
        descripcion: 'Descripción del producto 2',
        stock: 10,
        category: "partes"
      },
      {
        id: 13,
        imagen: 'https://i.ibb.co/Nj8wy1k/front-view-worker-spraying-powder-paint-from-gum.jpg',
        nombre: 'Producto 13',
        precio: 19.99,
        descripcion: 'Descripción del producto 2',
        stock: 10,
        category: "pintura"
      },
      {
        id: 14,
        imagen: 'https://i.ibb.co/JQYxSK7/man-wiping-car-with-microfiber-after-wash.jpg',
        nombre: 'Producto 14',
        precio: 19.99,
        descripcion: 'Descripción del producto 2',
        stock: 10,
        category: "pintura"
      },
      {
        id: 15,
        imagen: 'https://i.ibb.co/2Swz8Vn/service-worker-painting-car-auto-service.jpg',
        nombre: 'Producto 15',
        precio: 19.99,
        descripcion: 'Descripción del producto 2',
        stock: 10,
        category: "pintura"
      },
      {
        id: 16,
        imagen: 'https://i.ibb.co/ftts3y1/service-worker-painting-car-auto-service-1.jpg',
        nombre: 'Producto 16',
        precio: 19.99,
        descripcion: 'Descripción del producto 2',
        stock: 10,
        category: "pintura"
      },
  ];
  export function getData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos);
      }, 1000);
    });
  }
  
  export function getProductData(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const product = productos.find((producto) => producto.id === parseInt(id));
        resolve(product);
      }, 1000);
    });
  }
  
  export function getProductsByCategory(category) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const filteredProducts = productos.filter(
          (producto) => producto.category === category
        );
        resolve(filteredProducts);
      }, 1000);
    });
  }

  export default getData;