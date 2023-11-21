const products=[
    {
      id: "1",
      name: "Disco duro externo Seagate Backup Plus",
      "img": "../../../public/img/muestra.jpg",
      price: "129.99",
      category: "Almacenamiento",
      descripcion: "Disco duro externo de 2 TB con conectividad USB 3.0 para una rápida transferencia de datos.",
      stock: "20"
    },
    {
      id: "2",
      name: "Teclado mecánico Corsair K70",
      img:"../../../public/img/muestra.jpg",
      price: "129.99",
      category: "Perifericos",
      descripcion: "Teclado mecánico gaming con retroiluminación RGB y interruptores Cherry MX Red para una respuesta rápida.",
      stock: "40"
    },
    {
      id: "3",
      name: "Monitor Dell UltraSharp",
      img: "../../../public/img/muestra.jpg",
      price: "299.99",
      category: "Monitores",
      descripcion: "Monitor de alta resolución (2560x1440) de 27 pulgadas con tecnología IPS para colores nítidos.",
      stock: "30"
    },
    {
      id: "4",
      name: "Procesador Intel Core i7-11700K",
      img: "../../../public/img/muestra.jpg",
      price: "399.99",
      category: "CPU",
      descripcion: "Procesador de 8 núcleos y 16 hilos con frecuencia base de 3.6 GHz y frecuencia turbo de 5.0 GHz.",
      stock: 20
    },
    {
      id: "5",
      name: "Memoria RAM Corsair Vengeance LPX 16GB",
      img: "../../../public/img/muestra.jpg",
      price: "89.99",
      category: "CPU",
      descripcion: "Módulo de memoria DDR4 de 16 GB con velocidad de 3200 MHz para un rendimiento rápido y estable.",
      stock: 30
    },
    {
      id: "6",
      name: "Gabinete NZXT H510",
      img: "../../../public/img/muestra.jpg",
      price: "69.99",
      category: "CPU",
      descripcion: "Gabinete compacto con panel lateral de vidrio templado y gestión de cables integrada para un aspecto limpio.",
      stock: 15
    },
    {
      id: "7",
      name: "Mouse inalámbrico Logitech MX Master 3",
      img:"../../../public/img/muestra.jpg",
      price: "79.99",
      category: "Perifericos",
      descripcion: "Mouse inalámbrico de alta precisión con botón de pulgar personalizable y batería recargable.",
      stock: 25
    },
    {
      id: "8",
      name: "SSD Samsung 970 EVO 500GB",
      img: "../../../public/img/muestra.jpg",
      price: "149.99",
      category: "Almacenamiento",
      descripcion: "Disco SSD NVMe de 500 GB con velocidades de lectura/escritura ultrarrápidas para un rendimiento excepcional.",
      stock: 25
    },
    {
      id: "9",
      name: "Tarjeta gráfica NVIDIA GeForce RTX 3070",
      img: "../../../public/img/muestra.jpg",
      price: "699.99",
      category: "CPU",
      descripcion: "Tarjeta gráfica gaming con 8 GB de memoria GDDR6 y tecnología de trazado de rayos en tiempo real.",
      stock: 25
    },
    {
      id: "10",
      name: "Fuente de poder EVGA SuperNOVA 750 G3",
      img:"../../../public/img/muestra.jpg",
      price: "129.99",
      category: "CPU",
      descripcion: "Fuente de alimentación modular de 750W con certificación 80 PLUS Gold para eficiencia energética.",
      stock: 18
    },
    {
      id: "11",
      name: "Monitor ASUS ROG Swift PG279Q",
      img: "../../../public/img/muestra.jpg",
      price: "699.99",
      category: "Monitores",
      descripcion: "Monitor IPS de 27 pulgadas con resolución 1440p, tasa de refresco de 165 Hz y tecnología G-Sync.",
      stock: 15
    },
    {
      id: "12",
      name: "Altavoces Logitech G560",
      img: "../../../public/img/muestra.jpg",
      price: "199.99",
      category: "Perifericos",
      descripcion: "Altavoces gaming con iluminación RGB sincronizada con la pantalla y sonido envolvente.",
      stock: "20"
    },
    {
      id: "13",
      name: "Router inalámbrico ASUS RT-AX88U",
      img: "../../../public/img/muestra.jpg",
      price: "249.99",
      category: "CPU",
      descripcion: "Router Wi-Fi 6 de doble banda con 8 puertos LAN gigabit y tecnología AiProtection para seguridad de red.",
      stock: "15"
    },
    {
      id: "14",
      name: "Impresora multifunción Epson EcoTank",
      img: "../../../public/img/muestra.jpg",
      price: "299.99",
      category: "CPU",
      descripcion: "Impresora multifunción con tanques de tinta recargables, ideal para imprimir grandes volúmenes.",
      stock: 35
    },
    {
      id: "15",
      name: "Cámara web Logitech C920 HD Pro",
      img: "../../../public/img/muestra.jpg",
      price: "79.99",
      category: "Perifericos",
      descripcion: "Cámara web HD con enfoque automático y corrección automática de luz para videollamadas nítidas.",
      stock: "25"
    }
  ];
  export const getProducts = () => {
    return new Promise((resolve, reject) => {
      
      if (products.length > 0) {
        setTimeout(() => {
          resolve(products);
        }, 2000);
      } else {
        reject("No hay productos");
      }
    });
  };

  export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
      
      if (products.length > 0) {
        const product = products.find( p => p.id === id);
        
        setTimeout(() => {
          if(!product) {
            reject(`No se encuentra el productos con el id ${id}`)
          }
          resolve(product);
        }, 2000);
      } else {
        reject("No hay productos");
      }
    });
  };