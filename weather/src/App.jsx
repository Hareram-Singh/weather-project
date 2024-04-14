import { useEffect, useState } from "react";
import "./App.css";
import Topbutton from "./component/topbutton";
import Inputs from "./component/Inputs";
import TimeLocation from "./component/TimeLocation";
import TemperatureDetails from "./component/TemperatureDetails";
import Forecast from "./component/Forecast";
import getFormatedWeatherData from "./Services/WeatherService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [query, setQuery] = useState({ q: "delhi" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  // const [count, setCount] = useState(0)
  useEffect(() => {
    const fetchweather = async () => {
      const message = query.q ? query.q : "current location.";

      toast.info("Fetching weather for " + message);
      await getFormatedWeatherData({ ...query, units }).then((data) => {
        toast.success(
          `Successfully fetched weather for ${data.name}, ${data.country}.`
        );
        setWeather(data);
      });
    };
    fetchweather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700";
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return "from-cyan-700 to-blue-700";

    return "from-yellow-700 to-orange-700";
  };
  return (
    <>
      <div
        className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br  h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}
      >
        <Topbutton setQuery={setQuery} />
        <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

        {weather && (
          <div>
            <TimeLocation weather={weather} />
            <TemperatureDetails weather={weather} />

            <Forecast title="hourly forecast" items={weather.hourly} />
            <Forecast title="daily forecast" items={weather.daily} />
          </div>
        )}
      </div>

      <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />
    </>
  );
}

export default App;
