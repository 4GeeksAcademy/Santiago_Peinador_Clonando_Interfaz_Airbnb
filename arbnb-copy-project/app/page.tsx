"use client";

import NotFoundState from "@/components/NotFoundState";
import LoadingState from "@/components/LoadingState";
import CategoryFilterBar from "@/components/CategoryFilterBar";
import HomeHeader from "@/components/HomeHeader";
import BottomNav from "@/components/BottomNav";
import Link from "next/link";
import { useEffect, useState } from "react";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";
import type { Property } from "@/types/property";

const categories = [
  { name: "Playa", icon: "🏖️" },
  { name: "Mansiones", icon: "🏰" },
  { name: "Tendencias", icon: "🔥" },
  { name: "Montaña", icon: "⛰️" },
  { name: "Ciudad", icon: "🏙️" },
];

export default function HomePage() {
  const [searchText, setSearchText] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todas");
  const [allProperties, setAllProperties] = useState<Property[]>([]);
  const [visibleProperties, setVisibleProperties] = useState<Property[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setAllProperties(properties);
      setVisibleProperties(properties);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(loadingTimer);
  }, []);

  function filterProperties(text: string, category: string) {
    let filteredProperties = allProperties;

    if (category !== "Todas") {
      filteredProperties = filteredProperties.filter(
        (property) => property.category === category
      );
    }

    if (text.trim() !== "") {
      filteredProperties = filteredProperties.filter((property) =>
        property.title.toLowerCase().includes(text.toLowerCase())
      );
    }

    setVisibleProperties(filteredProperties);
  }

  function handleSearchChange(value: string) {
    setSearchText(value);
    filterProperties(value, activeCategory);
  }

  function handleCategoryChange(category: string) {
    setActiveCategory(category);
    filterProperties(searchText, category);
  }

  return (
    <main className="min-h-screen bg-white pb-24 text-gray-950">
      <HomeHeader
        searchText={searchText}
        onSearchChange={handleSearchChange}
      />
      <CategoryFilterBar
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />
      <section className="mx-auto max-w-7xl px-4 py-6">
        <div className="mb-5">
          <h1 className="text-xl font-bold md:text-2xl">
            Alojamientos populares
          </h1>
          <p className="text-sm text-gray-500">
            Busca, filtra y explora alojamientos disponibles.
          </p>

          <Link
            href="/catalog"
            className="mt-4 inline-flex rounded-full bg-gray-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 md:hidden"
          >
            Ver catálogo
          </Link>
        </div>
        {isLoading ? (
          <LoadingState
            icon="🏠"
            title="Cargando alojamientos..."
            description="Estamos preparando las propiedades disponibles."
          />
        ) : visibleProperties.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {visibleProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <NotFoundState
            icon="🔎"
            title="No encontramos alojamientos"
            description="Prueba con otra búsqueda o cambia la categoría seleccionada."
          />
        )}
      </section>
      <BottomNav />
    </main>
  );
}