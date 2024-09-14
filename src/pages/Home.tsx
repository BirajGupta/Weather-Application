import React from 'react';
import { useSelector } from 'react-redux';
import Footer from '../components/Footer/Footer';
import Forecast from '../components/Forecast/Forecast';
import Header from '../components/Header/Header';
import Search from '../components/Search/Search';
import Spinner from '../components/ui/Spinner/Spinner';
import CurrentWeather from '../components/CurrentWeather/CurrentWeather';
import { AppStore } from '../store/store';
import TableContainer from '../components/CityTable/CityTable';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import WeatherInfo from './weatherInfo';

const Home = () => {
  const { loading } = useSelector((state: AppStore) => ({
    loading: state.app.isLoading,
  }));

  return (
    <>
      {loading && <Spinner />}
      <Header />
      <Search />
      <Routes>
        <Route path='/' element={<TableContainer/>} />
        <Route path='/weatherInfo' element={<WeatherInfo/>} />
      </Routes>
      <Footer />
    </>
  );
};

export default Home;
