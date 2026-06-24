"use client";

import MobileBookingBar from "@/components/MobileBookingBar";
import BookingCard from "@/components/BookingCard";
import AmenitiesGrid from "@/components/AmenitiesGrid";
import HostInfo from "@/components/HostInfo";
import RoomGallery from "@/components/RoomGallery";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { properties } from "@/data/properties";
import type { Property } from "@/types/property";
import RoomInfoHeader from "@/components/RoomInfoHeader";

const ONE_DAY_IN_MS = 1000 * 60 * 60 * 24;

export default function RoomDetailPage() {
  const params = useParams();
  const roomId = Number(params.id);

  const [room, setRoom] = useState<Property | null>(null);
  const [loadedRoomId, setLoadedRoomId] = useState<number | null>(null);
  const isLoading = loadedRoomId !== roomId;
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [guests, setGuests] = useState(1);

  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      const selectedRoom = properties.find((property) => property.id === roomId);

      setRoom(selectedRoom ?? null);
      setLoadedRoomId(roomId);
    }, 1000);

    return () => clearTimeout(loadingTimer);
  }, [roomId]);

  function getNightCount(startDate: Date | null, endDate: Date | null) {
    if (!startDate || !endDate) {
      return 0;
    }

    const differenceInMs = endDate.getTime() - startDate.getTime();

    if (differenceInMs <= 0) {
      return 0;
    }

    return Math.ceil(differenceInMs / ONE_DAY_IN_MS);
  }

  const nights = getNightCount(checkInDate, checkOutDate);
  const totalPrice = room ? nights * room.pricePerNight : 0;

  const minCheckOutDate = checkInDate
    ? new Date(checkInDate.getTime() + ONE_DAY_IN_MS)
    : new Date();

  function handleCheckInChange(date: Date | null) {
    setCheckInDate(date);

    if (date && checkOutDate && checkOutDate <= date) {
      setCheckOutDate(null);
    }
  }

  function handleCheckOutChange(date: Date | null) {
    setCheckOutDate(date);
  }

  function goToPreviousPhoto() {
    if (!room) return;

    setCurrentPhotoIndex((currentIndex) => {
      if (currentIndex === 0) {
        return room.photos.length - 1;
      }

      return currentIndex - 1;
    });
  }

  function goToNextPhoto() {
    if (!room) return;

    setCurrentPhotoIndex((currentIndex) => {
      if (currentIndex === room.photos.length - 1) {
        return 0;
      }

      return currentIndex + 1;
    });
  }

  function decreaseGuests() {
    setGuests((currentGuests) => {
      if (currentGuests <= 1) {
        return 1;
      }

      return currentGuests - 1;
    });
  }

  function increaseGuests() {
    setGuests((currentGuests) => {
      if (currentGuests >= 6) {
        return 6;
      }

      return currentGuests + 1;
    });
  }

  if (isLoading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white px-4 text-gray-950">
        <div className="rounded-3xl border border-gray-200 px-6 py-8 text-center shadow-sm">
          <p className="text-4xl">🏡</p>
          <p className="mt-3 font-semibold">Cargando alojamiento...</p>
          <p className="mt-1 text-sm text-gray-500">
            Estamos preparando los detalles.
          </p>
        </div>
      </main>
    );
  }

  if (!room) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white px-4 text-gray-950">
        <div className="rounded-3xl border border-gray-200 px-6 py-8 text-center shadow-sm">
          <p className="text-4xl">😕</p>
          <h1 className="mt-3 text-xl font-bold">Alojamiento no encontrado</h1>

          <Link
            href="/"
            className="mt-5 inline-flex rounded-full bg-rose-500 px-5 py-3 text-sm font-semibold text-white"
          >
            Volver al inicio
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white pb-32 text-gray-950">
      <RoomGallery
        photos={room.photos}
        currentPhotoIndex={currentPhotoIndex}
        onPrevious={goToPreviousPhoto}
        onNext={goToNextPhoto}
      />
      <section className="-mt-8 rounded-t-[2rem] bg-white px-6 py-7 md:mx-auto md:mt-8 md:max-w-6xl md:rounded-3xl md:border md:border-gray-100 md:shadow-sm">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,1fr)_360px]">
          <div>
            <RoomInfoHeader
              title={room.title}
              rating={room.rating}
              reviewCount={room.reviewCount}
              location={room.location}
            />       
            <HostInfo hostName={room.hostName} hostYears={room.hostYears} />   
            <AmenitiesGrid amenities={room.amenities} />       
            
            <section className="mt-6 border-t border-gray-200 pt-6">
              <h2 className="text-xl font-bold">Descripción</h2>

              <p className="mt-3 leading-7 text-gray-600">
                Este alojamiento es una opción cómoda para una escapada. Tiene
                una ubicación interesante, servicios básicos y una experiencia
                pensada para viajeros que quieren reservar de forma sencilla.
              </p>
            </section>
          </div>
          <BookingCard
              room={room}
              guests={guests}
              nights={nights}
              totalPrice={totalPrice}
              checkInDate={checkInDate}
              checkOutDate={checkOutDate}
              minCheckOutDate={minCheckOutDate}
              onCheckInChange={handleCheckInChange}
              onCheckOutChange={handleCheckOutChange}
              onDecreaseGuests={decreaseGuests}
              onIncreaseGuests={increaseGuests}
          /> 
        </div>
      </section>
        <MobileBookingBar
          pricePerNight={room.pricePerNight}
          guests={guests}
          nights={nights}
          totalPrice={totalPrice}
          onDecreaseGuests={decreaseGuests}
          onIncreaseGuests={increaseGuests}
        />
    </main>
  );
}