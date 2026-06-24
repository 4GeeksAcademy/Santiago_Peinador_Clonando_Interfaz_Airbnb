import type { Property } from "@/types/property";
/*
  Este archivo contiene los datos falsos de los alojamientos.
  De momento no usamos una API ni una base de datos.
  Guardamos aquí la información para pintar:
  - las tarjetas de la Home
  - las tarjetas del Catálogo
  - la página de detalle de cada alojamiento
  Las imágenes están dentro de public/properties.
  En Next.js, todo lo que está dentro de public se referencia desde "/".
*/
export const properties: Property[] = [
  {
    id: 1,
    title: "Casa junto a la playa",
    location: "Mallorca, España",
    category: "Playa",
    pricePerNight: 120,
    rating: 4.8,
    reviewCount: 128,
    hostName: "Laura",
    hostYears: 5,
    // Imagen real del alojamiento.
    // La ruta apunta a public/properties/beach-house.webp.
    photos: ["/properties/beach-house.webp"],
    amenities: [
      { icon: "📶", label: "Wifi" },
      { icon: "🍳", label: "Cocina" },
      { icon: "🚗", label: "Parking" },
      { icon: "❄️", label: "Aire acondicionado" },
    ],
  },
  {
    id: 2,
    title: "Mansión moderna con piscina",
    location: "Marbella, España",
    category: "Mansiones",
    pricePerNight: 340,
    rating: 4.9,
    reviewCount: 86,
    hostName: "Carlos",
    hostYears: 8,
    // Ruta de la imagen de la mansión moderna.
    photos: ["/properties/modern-mansion.webp"],
    amenities: [
      { icon: "🏊", label: "Piscina" },
      { icon: "📶", label: "Wifi" },
      { icon: "🚗", label: "Parking" },
      { icon: "🔥", label: "Barbacoa" },
    ],
  },
  {
    id: 3,
    title: "Apartamento céntrico",
    location: "París, Francia",
    category: "Tendencias",
    pricePerNight: 95,
    rating: 4.7,
    reviewCount: 214,
    hostName: "Sophie",
    hostYears: 3,
    // Ruta de la imagen del apartamento de París.
    photos: ["/properties/paris-apartment.webp"],
    amenities: [
      { icon: "📶", label: "Wifi" },
      { icon: "☕", label: "Cafetera" },
      { icon: "🧺", label: "Lavadora" },
      { icon: "🚇", label: "Cerca del metro" },
    ],
  },
  {
    id: 4,
    title: "Cabaña tranquila en la montaña",
    location: "Andorra",
    category: "Montaña",
    pricePerNight: 150,
    rating: 4.6,
    reviewCount: 73,
    hostName: "Marc",
    hostYears: 6,
    // Ruta de la imagen de la cabaña de montaña.
    photos: ["/properties/mountain-cabin.webp"],
    amenities: [
      { icon: "🔥", label: "Chimenea" },
      { icon: "📶", label: "Wifi" },
      { icon: "🐶", label: "Admite mascotas" },
      { icon: "🚗", label: "Parking" },
    ],
  },
  {
    id: 5,
    title: "Loft con vistas a la ciudad",
    location: "Madrid, España",
    category: "Ciudad",
    pricePerNight: 110,
    rating: 4.5,
    reviewCount: 142,
    hostName: "Ana",
    hostYears: 4,
    // Ruta de la imagen del loft urbano.
    photos: ["/properties/city-loft.webp"],
    amenities: [
      { icon: "📶", label: "Wifi" },
      { icon: "🧺", label: "Lavadora" },
      { icon: "❄️", label: "Aire acondicionado" },
      { icon: "🍳", label: "Cocina" },
    ],
  },
  {
    id: 6,
    title: "Villa frente al mar",
    location: "Ibiza, España",
    category: "Playa",
    pricePerNight: 260,
    rating: 5,
    reviewCount: 64,
    hostName: "Javier",
    hostYears: 7,
    // Ruta de la imagen de la villa frente al mar.
    photos: ["/properties/sea-villa.webp"],
    amenities: [
      { icon: "🏊", label: "Piscina" },
      { icon: "📶", label: "Wifi" },
      { icon: "🍳", label: "Cocina" },
      { icon: "🚗", label: "Parking" },
    ],
  },
];