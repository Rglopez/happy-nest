Happy Nest --- Sitio Web

Sitio web para Happy Nest, un centro de educación y cuidado infantil
a domicilio.

La versión incluida en este proyecto mantiene la estructura y el
contenido principal del sitio original, incorporando una identidad
visual más cálida, infantil y moderna basada en colores pastel, formas
orgánicas y elementos decorativos.

✨ Características

Diseño responsive para computadores, tablets y móviles.

Paleta de colores pastel:

Verde salvia

Rosa suave

Lila

Amarillo crema

Celeste

Hero principal con el logo de Happy Nest.

Tarjetas visuales para misión, visión y servicios.

Sección de proceso con pasos numerados.

Elementos decorativos inspirados en flores, corazones y formas
orgánicas.

Animaciones suaves de aparición al hacer scroll.

Escena visual 3D realizada con Three.js.

Texturas suaves inspiradas en papel/crayón.

Soporte para prefers-reduced-motion para reducir animaciones
cuando el usuario lo solicita.

📁 Estructura del proyecto

happy_nest_pastel/
├── index.html      # Estructura y contenido de la página
├── styles.css      # Estilos, colores, diseño responsive y animaciones
├── app.js          # Escena 3D, efectos y animaciones
└── logo.png        # Logo de Happy Nest

🚀 Cómo utilizarlo

Opción 1 --- Abrir directamente

Abre index.html en un navegador moderno.

Opción 2 --- Usar un servidor local

Desde la carpeta del proyecto puedes utilizar, por ejemplo:

python -m http.server 8000

Luego abre:

http://localhost:8000

Esta opción es recomendable para trabajar con el proyecto localmente.

🧩 Tecnologías utilizadas

HTML5 --- estructura del sitio.

CSS3 --- diseño visual, responsive, efectos y animaciones.

JavaScript --- interacciones y comportamiento.

Three.js --- escena 3D del hero.

Canvas API --- generación de texturas visuales.

IntersectionObserver API --- animaciones de entrada al hacer
scroll.

Google Fonts --- tipografías Baloo 2 y Nunito.

🎨 Identidad visual

La propuesta visual busca transmitir:

Calidez

Confianza

Ternura

Seguridad

Cercanía

Creatividad

Infancia y juego

La paleta pastel reemplaza los colores más intensos de la versión
anterior y se combina con bordes redondeados, sombras suaves y formas
orgánicas.

🏡 Contenido del sitio

El sitio conserva las principales secciones:

Hero / presentación

Happy Nest

Educación y cuidado profesional en el hogar

Rango de edad de 3 meses a 6 años

Valores principales

Nuestra Misión

Nuestra Visión

Nuestros Servicios

Babysitter Educativa

Educadora de Párvulos

¿Cómo Funciona?

¿Por qué Happy Nest?

Contacto

📱 Responsive

El diseño adapta automáticamente:

Tipografías

Espaciados

Tarjetas

Elementos decorativos

Hero

Menú visual y contenido

a diferentes tamaños de pantalla.

🔧 Personalización

Colores

Los colores principales se encuentran al comienzo de styles.css,
dentro de :root.

Por ejemplo:

--color-primary: #8DBFA8;
--color-secondary: #F3A6A6;
--color-yellow: #F5D78E;
--color-lilac: #B9A8D8;
--color-sky: #A9D9E7;

Puedes modificar estos valores para adaptar la identidad visual de Happy
Nest.

Contenido

Los textos principales se encuentran directamente en index.html.

Escena 3D

Los elementos de la ilustración del hero se encuentran en app.js,
incluyendo:

Casita

Árboles

Flores

Sol

Texturas

Iluminación

Movimiento

Parallax

🌐 Dependencia externa

El proyecto carga Three.js desde CDN mediante index.html:

<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>

También utiliza Google Fonts desde styles.css.

Por lo tanto, para disponer de todas las características visuales al
ejecutar el proyecto, se recomienda tener conexión a Internet.

📞 Contacto

La información de contacto actualmente incluida en el sitio se encuentra
en index.html, dentro de la sección Contacto.

Antes de publicar el sitio definitivamente, conviene comprobar que los
datos, enlaces y canales de contacto estén actualizados.

📝 Notas de desarrollo

La intención de esta versión es mejorar la presentación visual sin
cambiar la arquitectura general del sitio. Los cambios se concentran
principalmente en:

Diseño visual.

Paleta de colores.

Tipografía.

Formas.

Decoraciones.

Sombras.

Animaciones.

Escena 3D.

📄 Licencia

No se especifica una licencia de software en los archivos originales. Si
este proyecto se va a publicar o distribuir, se recomienda definir una
licencia apropiada.

Happy Nest
Educación, cuidado y acompañamiento con cariño.
