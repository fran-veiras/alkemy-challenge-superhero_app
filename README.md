## IMPORTANTE
antes de empezar a utilizar la aplicación, es importante permitir contenido no seguro, ya que las credenciales del login se obtienen de una ruta http
![This is an image](https://i.ibb.co/MskWy9G/Captura-de-Pantalla-2021-11-26-a-la-s-18-59-02.png)
![This is an image](https://i.ibb.co/QCV71w0/Captura-de-Pantalla-2021-11-26-a-la-s-18-59-38.png)

## Login
Las petición de las credenciales se realizan con Axios y el formulario cuenta con Formik integrado para el manejo de eventos.
El usuario no puede acceder a ninguna de las rutas sin previamente pasar por el login.
<hr />
> Email: challenge@alkemy.org Password: react

## Home
Esta cuenta con un dashboard donde se muestran los equipos creados, estos presentan el poder total del equipo (suma total de powerstats de cada uno de los integrantes, powerstats, intelligence, strength, speed, durability, power, combat)
<hr />
- Además, cada heroe cuenta con infomación extra, Weight & height, Aliases, Eye color, Hair color,Work

> Todos los equipos son recibidos del localStorage y tienen la opción de ser eliminados.

<hr />
![This is an image](https://i.ibb.co/P6HGVHv/Captura-de-Pantalla-2021-11-26-a-la-s-12-40-51.png)

## Creador de equipos y buscador de heroes
El creador de equipos cuenta con un buscador de heroes integrados, estos son recibidos desde SuperHero API cuando el usuario realiza una busqueda. 
Cada heroe cuanta con una barra de información desplegable en donde se encuentra nombre y orientación del heroe.

<hr />
> En la parte inferior hay una barra llamada "Your Current Team" en esta se puede ver y eliminar si se desea, a los heroes seleccionados.
> Solo se pueden agregar 3 heroes con orientación buena y 3 con mala. No se puede seleccionar dos veces el mismo heroe.

![This is an image](https://i.ibb.co/ns1NhrC/Captura-de-Pantalla-2021-11-26-a-la-s-14-25-13.png)
