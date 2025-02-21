export function ProyectsArray(){

    const projectsArray = [
        {
            nombre: "Federacion de Ajedrez de Olavarría",
            descripcion: "Página web para la federación de ajedrez de Olavarría.",
            descripcionAvanzada:"Desarrollo y despliegue de la API de FAO para el backend utilizando Express. Tambien utilicé Multer y Cloudinary para guardar imágenes en al nube en formato webp, BlackBlaze para guardar los PGN de las partidas y Turso como base de datos. El frontend esta desarrollado con React JS utilizando el API context de React y React-Query para optimizar las llamadas a la base de datos guardando recursos en el cache.El frontend además utiliza la API pública de chess-api para la evaluación de las partidas. La web muestra la historia de la federacion, noticias, eventos, listado de jugadores con sus datos y torneos de la ciudad.",
            imagenPortada: "/Screenshot 2025-02-08 at 14-45-07 Federación de ajedrez Olavarría.png",
            link: 'https://federacionajedrezolavarria.onrender.com/',
            tecnologiasUsadas: ['react', 'javascript', 'bootstrap', 'node'],
            linkGithub: "https://github.com/juancruz12345/fao-frontend"
          },
          {
            nombre: "E-commerce",
            descripcion: "Template para un e-commerce con registro de usuarios y Paypal integrado.",
            descripcionAvanzada:"E-coomerce template con registro de usuarios usando Mailboxlayer como validador de emails y Email js para enviarlos. Como base de datos utilicé Turso. El frontend cuenta con un catalogo de productos, carrito y pasarela de pago. Tambien tiene un panel de opciones para modificar datos del usuario y sus preferencias sobre las notificaciones. El backend esta desarrollado con Express y el frontend con Next js, tailwind y shadcn para la UI.",
            imagenPortada: "/Screenshot 2025-02-19 at 12-04-18 Next.js.png",
            tecnologiasUsadas: ['node','next js', 'tailwind', 'shadcn'],
            linkGithub: "https://github.com/juancruz12345/E-commerce-Next-Frontend"
          },
          {
            nombre: "Truco Online",
            descripcion: "Juego de truco online para jugar contra una IA",
            descripcionAvanzada:"Juego de truco online para jugar contra una IA. Desarrollado con Javascript, React y React-bootstrap",
            imagenPortada: "/Screenshot 2025-02-08 at 14-25-08 Truco online.png",
            link: 'https://truco-online.vercel.app/',
            tecnologiasUsadas: ['react', 'javascript', 'bootstrap'],
            linkGithub: "https://github.com/juancruz12345/truco-online"
          },
        {
          nombre: "PaisajistApp",
          descripcion: "Página web de paisajismo enfocada en jardínes.",
          descripcionAvanzada:"Aplicacion web de paisajismo enfocada en jardines. La áplicacion permite cargar una imágen de fondo y ofrece un listado de plantas para agregar al lienzo. Las plantas también están clasificadas por su nivel de mantenimiento, riego, horas de sol necesarias y además permite redimesionar las imágenes. Esta desarrollada con React JS y React Bootstrap. Para la manipulación de imagenes utilicé la Fabric JS en conjunto con el API Canvas de Javascript.",
          imagenPortada: "/Screenshot 2024-10-23 at 18-51-22 PaisajistApp.png",
          link: 'https://paisajist-app.vercel.app/',
          tecnologiasUsadas: ['react', 'javascript', 'bootstrap'],
          linkGithub: "https://github.com/juancruz12345/PaisajistApp"
        },
        {
          nombre: "Clothes",
          descripcion: "Template de e-commerce propio",
          descripcionAvanzada:"E-commerce con funcion de carrito desarrollado con React, bootstrap y javascript.",
          imagenPortada: "/Screenshot 2025-02-04 at 11-03-13 Clothes.png",
          tecnologiasUsadas: ['react', 'javascript', 'bootstrap'],
          linkGithub: "https://github.com/juancruz12345/E-commerce"
        },
        
        {
          nombre: "Tv Online",
          descripcion: "Página web para ver tv online gratis",
          descripcionAvanzada:"Pagina web para ver algunos canales de televisión, mayormente de Argentina. La web esta desarrolalda con React JS y React Bootstrap, y utiliza los embeds de free-embes.com ",
          imagenPortada: "/Screenshot 2024-09-16 at 19-06-25 TV Online.png",
          tecnologiasUsadas: ['react', 'javascript', 'bootstrap'],
          linkGithub: "https://github.com/juancruz12345/TV-Online"
        },
        {
          nombre: "Drawing App",
          descripcion: "Web app para dibujar similar a paint",
          descripcionAvanzada:"Web app para dibujar similar a paint utilizando solo vanilla Javascript y su API Canvas JS. La aplicacion tiene la amyoria de herramientas principales para dibujar como asi tambien la posibilidad de subir una imagen o descargar el dibujo.",
          imagenPortada: "/drawingapp.png",
          tecnologiasUsadas: ['javascript', 'css'],
          linkGithub: "https://github.com/juancruz12345/Drawing-App"
        },
        {
          nombre: "Chat online",
          descripcion: "Aplicación de chat online utilizando socket.io",
          descripcionAvanzada:"Aplicacion de chat online. El backend utiliza Express, Turso y Socket.io para el manejo de web sockets. Tanto el backend como el frontend estan desarrollados con vanilla JS.",
          imagenPortada: "/chat.png",
          tecnologiasUsadas: ['javascript', 'node', 'css'],
          linkGithub: "https://github.com/juancruz12345/Chat"
        },
        {
          nombre: "Tetris",
          descripcion: "Juego de tetris desarrollado con vanilla JS",
          descripcionAvanzada:"Juego de tetris desarrollado con vanilla JS utilizando el API Canvas. El juego guarda la puntuacion más alta y el nombre del jugador en el local storage.",
          imagenPortada: "/Screenshot 2024-11-02 at 14-13-49 Tetris.png",
          tecnologiasUsadas: ['javascript', 'css'],
          linkGithub: "https://github.com/juancruz12345/Tetris-JS"
        }
        
      ];
    return {projectsArray}
}