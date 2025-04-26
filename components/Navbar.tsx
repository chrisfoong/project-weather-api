import Link from "next/link";
import WeatherLogo from "./WeatherLogo";

export default function Navbar() {
    return (
        <>
            <nav className="flex justify-between">
                <Link target="_blank" href={"https://www.youtube.com/watch?v=LKZyp2cSAy4"} className="p-5 text-white hover:text-green-300"> <WeatherLogo /> </Link>
                <Link target="_blank" href="https://openweathermap.org/" className="p-5 text-white hover:text-green-300">Goes to OpenWeatherAPI</Link> 
            </nav>
            <hr className="mb-4"/>
        </>
    )
}