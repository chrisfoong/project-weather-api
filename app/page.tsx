"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import CityDropdown from "../components/CityDropdown";
import { fetchWeather } from "@/libs/api"; 

export default function Home() {
    const [city, setCity] = useState<string>("Bangkok"); // ใช้ state เก็บ city ที่เลือก
    const [weather, setWeather] = useState<any>(null);

    useEffect(() => {
        const result = async (city:string) => {
        const data = await fetchWeather(city).then((res) => setWeather(res));
      };
        result(city);

    }, [city]); // 🔁 re-fetch เมื่อ city เปลี่ยน

    if (!weather) return (
        <div className="h-screen flex items-center justify-center">
          <h1 className="text-xl font-bold">⏳ Fetching Data...</h1>
        </div>
      );

    return (
      <div className="mx-auto w-[200px] bg-green-500 p-4 rounded-2xl">
        <CityDropdown onSelect={(selected) => setCity(selected)} />
        <h1>Weather in {weather.name}</h1>
        <p>🌡 Temp: {weather.main.temp}°C</p>
        <p>💧 Humidity: {weather.main.humidity}%</p>
        <Image
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt="weather"
          width={100}
          height={100}
        />
      </div>
  );
}
