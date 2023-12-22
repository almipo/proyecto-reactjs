
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

const products = [
  {
    
    name: "Disco duro externo Seagate Backup Plus",
    img: "https://www.deffo.com.ar/wp-content/uploads/2020/08/STHN2000401-1.jpg",
    price: 129.99,
    category: "Almacenamiento",
    description: "Disco duro externo de 2 TB con conectividad USB 3.0 para una rápida transferencia de datos.",
    stock: 20
  },
  {
    
    name: "Teclado mecánico Corsair K70",
    img: "https://www.venex.com.ar/products_images/1558560696_crop572_tecladocorsairk70rgbmk2mechanicalespch9109010sp.jpg",
    price: 129.99,
    category: "Perifericos",
    description: "Teclado mecánico gaming con retroiluminación RGB y interruptores Cherry MX Red para una respuesta rápida.",
    stock: 40
  },
  {
    
    name: "Monitor Dell UltraSharp",
    img: "https://d2r9epyceweg5n.cloudfront.net/stores/001/095/952/products/1549534583_img_11360481-c5bb44c0b38942429d15987152468288-1024-1024.jpg",
    price: 299.99,
    category: "Monitores",
    description: "Monitor de alta resolución (2560x1440) de 27 pulgadas con tecnología IPS para colores nítidos.",
    stock: 30
  },
  {
    
    name: "Procesador Intel Core i7-11700K",
    https:"https://images-na.ssl-images-amazon.com/images/I/71ou-lHA93L._MCnd_AC_SR462,462_.jpg" ,  
     price: 399.99,
    category: "CPU",
    description: "Procesador de 8 núcleos y 16 hilos con frecuencia base de 3.6 GHz y frecuencia turbo de 5.0 GHz.",
    stock: 20
  },
  {
    
    name: "Memoria RAM Corsair Vengeance LPX 16GB",
    img: "https://front.dev.malditohard.com.ar/img/migration/MEMORIA-DDR4-8GB-CORSAIR-3000MHZ-VENGEANCE-LPX-BLACK.webp",
    price: 89.99,
    category: "CPU",
    description: "Módulo de memoria DDR4 de 16 GB con velocidad de 3200 MHz para un rendimiento rápido y estable.",
    stock: 30
  },
  {
    
    name: "Gabinete NZXT H510",
    img: "https://mcegamer.com/wp-content/uploads/2019/08/h510-6-1.png",
    price: 69.99,
    category: "CPU",
    description: "Gabinete compacto con panel lateral de vidrio templado y gestión de cables integrada para un aspecto limpio.",
    stock: 15
  },
  {
    
    name: "Mouse inalámbrico Logitech MX Master 3",
    img: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/7d6675f6-dcea-4451-8cc1-c08a2bf92e5c.__CR0,0,200,225_PT0_SX200_V1___.png",
    price: 79.99,
    category: "Perifericos",
    description: "Mouse inalámbrico de alta precisión con botón de pulgar personalizable y batería recargable.",
    stock: 25
  },
  {
    
    name: "SSD Samsung 970 EVO 500GB",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKb7A0TM86M7-5JJUWk37u-OTx0c3R8OtuJW4xit8rTMl14jFnMZxYy_v4HjaYKddVBDY&usqp=CAU",
    price: 149.99,
    category: "Almacenamiento",
    description: "Disco SSD NVMe de 500 GB con velocidades de lectura/escritura ultrarrápidas para un rendimiento excepcional.",
    stock: 25
  },
  {
    
    name: "Tarjeta gráfica NVIDIA GeForce RTX 3070",
    img: "https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/I/71e4SKbcvVS._AC_UL600_SR600,600_.jpg",
    price: 699.99,
    category: "CPU",
    description: "Tarjeta gráfica gaming con 8 GB de memoria GDDR6 y tecnología de trazado de rayos en tiempo real.",
    stock: 25
  },
  {
   
    name: "Fuente de poder EVGA SuperNOVA 750 G3",
    img: "https://thumb.pccomponentes.com/w-300-300/articles/35/356275/1299-silverstone-sx700-pt-700w-80-plus-platinum-modular.jpg",
    price: 129.99,
    category: "CPU",
    description: "Fuente de alimentación modular de 750W con certificación 80 PLUS Gold para eficiencia energética.",
    stock: 18
  },
  {
    
    name: "Monitor ASUS ROG Swift PG279Q",
    img:"https://http2.mlstatic.com/D_NQ_NP_864493-MLA71522929921_092023-O.webp",
    price: 699.99,
    category: "Monitores",
    description: "Monitor IPS de 27 pulgadas con resolución 1440p, tasa de refresco de 165 Hz y tecnología G-Sync.",
    stock: 15
  },
  {
    
    name: "Altavoces Logitech G560",
    img: "https://http2.mlstatic.com/D_NQ_NP_952291-MLA42125475557_062020-O.webp",
    price: 199.99,
    category: "Perifericos",
    description: "Altavoces gaming con iluminación RGB sincronizada con la pantalla y sonido envolvente.",
    stock: 20
  },
  {
    
    name: "Router inalámbrico ASUS RT-AX88U",
    img: "https://images-eu.ssl-images-amazon.com/images/I/61ZnQpc0l+L._AC_UL600_SR600,600_.jpg",
    price: 249.99,
    category: "CPU",
    description: "Router Wi-Fi 6 de doble banda con 8 puertos LAN gigabit y tecnología AiProtection para seguridad de red.",
    stock: 15
  },
  {
    
    name: "Impresora multifunción Epson EcoTank",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtQvq7Zu9Jcb_bSUIYs3w6sAEibA8ATWz6MA&usqp=CAU",
    price: 299.99,
    category: "CPU",
    description: "Impresora multifunción con tanques de tinta recargables, ideal para imprimir grandes volúmenes.",
    stock: 35
  },
  {
   
    name: "Cámara web Logitech C920 HD Pro",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNlU7_ERZcVugFSh4MXOhkF3uRN1MBlcawmQ&usqp=CAU",
    price: 79.99,
    category: "Perifericos",
    description: "Cámara web HD con enfoque automático y corrección automática de luz para videollamadas nítidas.",
    stock: 25
  }
];


export const seedProducts = () => {
    products.forEach((products) => {
      addDoc(collection(db, "products"), products);
    });
  };