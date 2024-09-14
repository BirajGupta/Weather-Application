import React, { useEffect } from 'react'
import CurrentWeather from '../components/CurrentWeather/CurrentWeather'
import Forecast from '../components/Forecast/Forecast'
import { useLocation } from 'react-router'
import { useDispatch } from 'react-redux'
import { fetchWeather } from '../store/fetchWeather'

function WeatherInfo() {

  const location = useLocation()
  const dispatch = useDispatch()
  useEffect(() => {
    if(location.state) dispatch(fetchWeather(location.state));
  }, [location])

  return (
    <>
       <CurrentWeather />
       <Forecast />
    </>
  )
}

export default WeatherInfo
