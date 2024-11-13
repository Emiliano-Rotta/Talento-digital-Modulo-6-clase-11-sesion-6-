//CRUD
const fs = require("fs")
const path = './comics.json'

//funcion para leer la base de datos de los comics
const readComics = () => {
    const data = fs.readFileSync(path, 'utf-8') //me viene en formato .json
    return JSON.parse(data) //paso de Json a JS
}
// console.log(readComics())

//funcion para crear un nuevo comics

// const createComics = (newComics) => {
//     const comics = readComics()
//     const comicsExists = comics.some(c => c.titulo === newComics.titulo) //devuelve true o false
//     if(!comicsExists){
//         comics.push(newComics);
//         fs.writeFileSync(path, JSON.stringify(comics, null, 2));
//         console.log("Comics creado: ", newComics)
//     }else{
//         console.log("ya existe este comics: ", newComics) //para evitar que se recargue nodemon al cargar un elemento, copiar nodemon.json
//     }
// }  

//   let nuevo = {
//     "titulo": "Capitan America",
//     "autor": "Stan Lee",
//     "año": 1988,
//     "precio": 29.99,
//     "stock": 15
//   }
// //   createComics(nuevo)


const updateComic = (titulo, updatedData) => {
    const comics = readComics();
    const index = comics.findIndex(comic => comic.titulo === titulo);
    console.log(index)
    if (index !== -1) {
        comics[index] = { ...comics[index], ...updatedData };
        fs.writeFileSync(path, JSON.stringify(comics, null, 2));
        console.log('Cómic actualizado:', comics[index]);
    } else {
      console.log('Cómic no encontrado.');
    }
  };

let actualizar = {
   
    "stock": 25
  }

//   updateComic("Superman",actualizar)

const deleteComic = (titulo) => {
    let comics = readComics();
    console.log(comics) //todos
    comics = comics.filter(c => c.titulo !== titulo);
    console.log(comics) //todos menos el del titulo del parametro
    fs.writeFileSync(path, JSON.stringify(comics, null, 2));
    console.log('comics eliminado: ', titulo)
}
// deleteComic("Batman")

//  CLI “Command Line Interface”, es cualquier programa con el cual se interactúa por medio de la línea de comandos de un sistema operativo, encargándose de interpretar los comandos ingresados, y actuar acorde a ellos.



const createComics = (newComics) => {
    const comics = readComics()
    const comicsExists = comics.some(c => c.titulo === newComics.titulo) //devuelve true o false
    if(!comicsExists){
        comics.push(newComics);
        fs.writeFileSync(path, JSON.stringify(comics, null, 2));
        console.log("Comics creado: ", newComics)
    }else{
        console.log("ya existe este comics: ", newComics) //para evitar que se recargue nodemon al cargar un elemento, copiar nodemon.json
    }
}  

//comando recibido por consola node app.js create "spiderman" "Marvel" 2000 15.85 10
comando = process.argv[2]
const datos = process.argv.slice(3) // un array que corta desde la pocision 3 en adelante
console.log(datos)

if (comando === "create") {
    let nuevo = {
        "titulo": datos[0],
        "autor": datos[1],
        "año": datos[2],
        "precio": datos[3],
        "stock": datos[4],
      }
      createComics(nuevo)

}else if(comando === "delete"){
    deleteComic(datos[0])
    //comando recibido por consola node app.js delete "spiderman"
}
  
