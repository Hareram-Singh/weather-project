import { useState } from 'react'
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import Topbutton from './component/topbutton'
import Inputs from './component/Inputs'
import TimeLocation from './component/TimeLocation'
import TemperatureDetails from './component/TemperatureDetails'
import Forecast from './component/Forecast'
import getFormatedWeatherData from './Services/WeatherService'
function App() {
  const [count, setCount] = useState(0)
  const fetchweather = async ()=>{
    const data= await getFormatedWeatherData({q:'lucknow'});
    console.log(data)
    
  }
  fetchweather();
  return (
    <>
      <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400'>
        <Topbutton/>
        <Inputs/>
        <TimeLocation/>
        <TemperatureDetails/>
        <Forecast title={"hourly forecast"}/>
        <Forecast title={"Daily forecast"}/>
      </div>
    </>
  )
}

export default App
