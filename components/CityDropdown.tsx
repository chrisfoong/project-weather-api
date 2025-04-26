"use client";
import { city } from "./CityList";

type Props = {
  onSelect: (city: string) => void;
};

export default function CityDropdown({ onSelect }: Props) {
    return (
        <select
        className="border rounded px-4 py-2 mb-2"
        onChange={(e) => onSelect(e.target.value)}
        >
        {city.map((c) => (
            <option key={c.city} value={c.city}>
            {c.name}
            </option>
        ))}
        </select>
  );
}