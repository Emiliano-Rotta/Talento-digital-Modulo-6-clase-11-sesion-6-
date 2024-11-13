# Ejercicio

Consignas
Ejercicio 1: Crear un nuevo libro si no existe
Implementa una función crearLibroSiNoExiste que permita agregar un nuevo libro en libros.json solo si el título no está registrado en la base de datos.
La función debe recibir como parámetros el título, el autor, el año de publicación, el precio y la cantidad de copias en inventario.
Si el libro ya existe, muestra un mensaje indicando que ya está registrado.
Si es un libro nuevo, guárdalo en libros.json y confirma que se ha agregado correctamente.

Ejercicio 2: Leer libros por rango de precio
Implementa una función leerLibrosPorRangoDePrecio que lea todos los libros y filtre aquellos cuyo precio esté dentro de un rango dado.
La función debe recibir dos parámetros: precioMin y precioMax.
Imprime una lista de libros dentro del rango de precio dado o indica que no hay libros en ese rango si no encuentra ninguno.

Ejercicio 3: Actualizar el número de copias de un libro
Agrega una función actualizarCopiasDeLibro que permita modificar la cantidad de copias de un libro existente.
La función debe recibir el título del libro y el nuevo número de copias.
Si el libro no existe, muestra un mensaje indicando que no se encontró el libro.
Si se encuentra el libro, actualiza el número de copias y guarda los cambios en libros.json.

Ejercicio 4: Eliminar un libro por título
Implementa una función eliminarLibro que permita borrar un libro específico de la base de datos, según el título.
La función debe recibir el título del libro a eliminar.
Si el libro existe, elimínalo y guarda el archivo actualizado en libros.json.
Si no se encuentra el libro, muestra un mensaje de error indicando que el libro no existe.

Ejercicio 5: Leer todos los libros disponibles
Implementa una función leerTodosLosLibros que lea todos los libros de la base de datos y los imprima en la consola.
Si no hay libros registrados, muestra un mensaje indicando que la base de datos está vacía.

Ejercicio 6: Actualizar el precio de un libro específico
Agrega una función actualizarPrecioDeLibro que permita modificar solo el precio de un libro existente.
La función debe recibir el título del libro y el nuevo precio.
Si el libro no existe, muestra un mensaje de error.
Si se encuentra el libro, actualiza el precio y guarda los cambios en libros.json.

