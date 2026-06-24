/*
  Este archivo define la forma de los datos de cada alojamiento.
  TypeScript usa esta interfaz para saber qué propiedades existen
  dentro de cada objeto de alojamiento.
*/
export interface Amenity {
  icon: string;
  label: string;
}
export interface Property {
  id: number;
  title: string;
  location: string;
  category: string;
  // Precio por noche del alojamiento.
  // Este nombre debe coincidir con data/properties.ts y los componentes.
  pricePerNight: number;
  rating: number;
  reviewCount: number;
  hostName: string;
  hostYears: number;
  amenities: Amenity[];
  photos: string[];
}