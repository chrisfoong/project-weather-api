
export async function fetchWeather(city:string) {
  const api_key = "";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;

  await new Promise((resolve) => setInterval(resolve, 1500));
  const res = await fetch(url, { cache: 'no-store' }); // สำคัญมาก!
  if (!res.ok) throw new Error("Failed to fetch weather");
  return res.json();
}