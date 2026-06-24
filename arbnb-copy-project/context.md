# Contexto del proyecto

Vamos a construir una pequeña copia visual de Airbnb usando Next.js y React.

La idea principal no es crear una aplicación real con usuarios, pagos o reservas funcionando de verdad. Lo que queremos es practicar cómo se organiza una interfaz profesional usando componentes pequeños y reutilizables.

El proyecto tendrá tres páginas principales:

## 1. Página de inicio

La página de inicio será la primera pantalla que verá el usuario.

En esta página mostraremos una interfaz parecida a Airbnb, con una barra superior, una zona de búsqueda, categorías de alojamientos y una lista de propiedades destacadas.

El usuario podrá ver diferentes alojamientos y hacer clic en ellos para ir a la página de detalle.

## 2. Página de catálogo

La página de catálogo mostrará los resultados de búsqueda.

Aquí el usuario verá una lista de alojamientos disponibles. También habrá una zona de filtros y un espacio que representará el mapa.

No vamos a crear un mapa real todavía. De momento será una zona visual para entender dónde iría esa parte en una aplicación real.

Esta página nos servirá para practicar cómo reutilizar las tarjetas de alojamientos que ya usamos en la página de inicio.

## 3. Página de detalle

La página de detalle mostrará la información completa de un alojamiento.

Aquí el usuario podrá ver imágenes, el título del alojamiento, la ubicación, la valoración, una descripción, los servicios disponibles y una tarjeta de reserva.

La reserva no será real. Solo construiremos la parte visual para entender cómo se organiza esa información.

## Usuario principal

El usuario de esta aplicación es una persona que quiere encontrar un alojamiento para viajar.

Quiere poder buscar un lugar, ver varias opciones, comparar precios y entrar en una propiedad para ver más detalles antes de reservar.

## Componentes principales

Vamos a dividir la interfaz en componentes pequeños para que el código sea más fácil de entender.

Algunos componentes importantes serán:

* Header: la parte superior de la página.
* SearchBar: la barra de búsqueda.
* CategoryTabs: las categorías de alojamientos.
* PropertyCard: la tarjeta de cada alojamiento.
* PropertyGrid: la lista de alojamientos.
* FilterBar: los filtros de la página de catálogo.
* MapPlaceholder: el espacio visual donde iría el mapa.
* ImageGallery: la galería de imágenes del alojamiento.
* BookingCard: la tarjeta de reserva.
* Footer: la parte final de la página.

Cada componente tendrá una responsabilidad concreta. Por ejemplo, la tarjeta de alojamiento solo se encargará de mostrar la información de un alojamiento.

## Enfoque mobile-first

Primero vamos a diseñar pensando en móvil, usando como referencia una pantalla de 375px de ancho.

Después adaptaremos la interfaz para pantallas más grandes, como tablets y ordenadores, a partir de 768px.

Esto significa que primero haremos diseños simples, en una sola columna, fáciles de usar desde el móvil.

## Navegación

La navegación entre páginas debe funcionar sin recargar el navegador.

Usaremos las rutas de Next.js para movernos entre:

* La página de inicio.
* La página de catálogo.ls
* La página de detalle de cada alojamiento.

## Datos del proyecto

Al principio no usaremos una base de datos real.

Los alojamientos, precios, imágenes y textos estarán escritos directamente en el proyecto como datos de prueba.

Esto nos permite centrarnos primero en aprender cómo construir la interfaz.

## Objetivo final

El objetivo final es tener un prototipo visual con tres páginas conectadas entre sí.

Este proyecto nos ayudará a practicar cómo observar una interfaz real, dividirla en piezas pequeñas y construirla paso a paso usando componentes de React.
