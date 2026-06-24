"use client";
import MapPlaceholder from "@/components/MapPlaceholder";
import SortControl from "@/components/SortControl";
import type { SortOrder } from "@/components/SortControl";
import CatalogHeader from "@/components/CatalogHeader";
import { useState } from "react";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";

export default function CatalogPage() {
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

  const sortedProperties = [...properties].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.pricePerNight - b.pricePerNight;
    }

    return b.pricePerNight - a.pricePerNight;
  });

  return (
    <main className="min-h-screen bg-white pb-8 text-gray-950">
      <CatalogHeader />
      
      <section className="mx-auto max-w-7xl px-4 py-5">
        <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-xl font-bold md:text-2xl">
              Más de {sortedProperties.length} alojamientos
            </h1>

            <p className="text-sm text-gray-500">
              Resultados disponibles para tu próxima escapada.
            </p>
          </div>
          <SortControl sortOrder={sortOrder} onSortChange={setSortOrder} />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-[minmax(0,1fr)_380px] lg:grid-cols-[minmax(0,1fr)_460px]">
          <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {sortedProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </section>
          
          <MapPlaceholder />
        </div>
      </section>
    </main>
  );
}