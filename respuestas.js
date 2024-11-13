//Solución 1: Crear un nuevo libro si no existe

const fs = require('fs');
const path = './respuestasLibros.json';
const leerLibros = () => {
    const data = fs.readFileSync(path, 'utf-8'); return JSON.parse(data);
};

const crearLibroSiNoExiste = (nuevoLibro) => {
    const libros = leerLibros(); const libroExiste = libros.some(libro => libro.titulo === nuevoLibro.titulo);
    if (!libroExiste) {
        libros.push(nuevoLibro);
        fs.writeFileSync(path, JSON.stringify(libros, null, 2));
        console.log('Libro creado:', nuevoLibro);
    } else {
        console.log('El libro ya está registrado.');
    }
};

crearLibroSiNoExiste({ titulo: "El Señor de los Anillos", autor: "J.R.R. Tolkien", año: 1954, precio: 20.99, copias: 10 });

//Solución 2: Leer libros por rango de precio

const leerLibrosPorRangoDePrecio = (precioMin, precioMax) => {
    const libros = leerLibros();
    const librosFiltrados = libros.filter(libro => libro.precio >= precioMin && libro.precio <= precioMax);
    if (librosFiltrados.length > 0) {
        console.log('Libros en el rango de precio:', librosFiltrados);

    } else {
        console.log('No hay libros en ese rango de precio.');

    }
};
leerLibrosPorRangoDePrecio(15, 25);

//Solución 3: Actualizar el número de copias de un libro

const actualizarCopiasDeLibro = (titulo, nuevasCopias) => {
    const libros = leerLibros();
    const index = libros.findIndex(libro => libro.titulo === titulo);
    if (index !== -1) {
        libros[index].copias = nuevasCopias;
        fs.writeFileSync(path, JSON.stringify(libros, null, 2));
        console.log('Número de copias actualizado:', libros[index]);

    } else {
        console.log('Libro no encontrado.');

    }
};
actualizarCopiasDeLibro("El Señor de los Anillos", 5);

//Solución 4: Eliminar un libro por título

const eliminarLibro = (titulo) => {
    let libros = leerLibros();
    const librosFiltrados = libros.filter(libro => libro.titulo !== titulo);
    if (libros.length !== librosFiltrados.length) {
        fs.writeFileSync(path, JSON.stringify(librosFiltrados, null, 2)); 
        console.log('Libro eliminado:', titulo);
    }
    else {
        console.log('Libro no encontrado.');
    }

};

eliminarLibro("El Señor de los Anillos");


//Solución 5: Leer todos los libros disponibles

const leerTodosLosLibros = () => {
    const libros = leerLibros();
    if (libros.length > 0) {
        console.log('Libros disponibles:', libros);

    } else {
        console.log('La base de datos de libros está vacía.');

    }
};
leerTodosLosLibros();

//Solución 6: Actualizar el precio de un libro específico

const actualizarPrecioDeLibro = (titulo, nuevoPrecio) => {
    const libros = leerLibros();
    const index = libros.findIndex(libro => libro.titulo === titulo);

    if (index !== -1) {
        libros[index].precio = nuevoPrecio;
        fs.writeFileSync(path, JSON.stringify(libros, null, 2));
        console.log('Precio del libro actualizado:', libros[index]);

    } else {
        console.log('Libro no encontrado.');

    }
};

actualizarPrecioDeLibro("El Señor de los Anillos", 22.50);

