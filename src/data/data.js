const productos=[
    {
      id: "retro1",
      nombre:"Campera Michigan",
      descripcion: "Campera Michigan State temporada 2006",
      precio: 100,
      categoria: "nfl",
      stock: 10,
      imagen:"/imagenes/campera_michigan.png"
    },
    {
      id: "retro2",
      nombre:"Campera Orlando Magic",
      descripcion: "Campera de los Orlando Magic temporada 2017",
      precio: 140,
      categoria: "nba",
      stock: 6,
      imagen:"/imagenes/campera_orlando.png"
    },
    {
      id: "retro3",
      nombre:"Campera Phoenix Suns",
      descripcion: "Campera Phoenix Suns temporada 2020",
      precio: 160,
      categoria: "nba",
      stock: 4,
      imagen:"/imagenes/campera_phoenix.png"
    },
    {
      id: "retro4",
      nombre:"Buzo Miami Dolphins",
      descripcion: "Hoddie de los Dolphins temporada 2023",
      precio: 80,
      categoria: "nfl",
      stock: 12,
      imagen:"/imagenes/campera_dolphins.png"
    },
    {
      id: "retro5",
      nombre:"Campera Las Vegas Raiders",
      descripcion: "Campera mitica de Las Vegas Raiders temporada 1999",
      precio: 200,
      categoria: "nfl",
      stock: 3,
      imagen:"/imagenes/campera_raiders.png"
    },
    {
      id: "retro6",
      nombre:"Campera New York Yankees",
      descripcion: "Campera de los Yankees temporada 2000",
      precio: 70,
      categoria: "mlb",
      stock: 5,
      imagen:"/imagenes/campera_yankees.png"
    },
    {
      id: "retro7",
      nombre:"Campera San Francisco 49ers",
      descripcion: "Campera de los campeones del Superbowl temporada 2024",
      precio: 140,
      categoria: "nfl",
      stock: 2,
      imagen:"/imagenes/campera_49ers.png"
    },





  ]

  const obtenerProductos=()=>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve(productos)
      },2000);
    });
  };

  export default obtenerProductos;