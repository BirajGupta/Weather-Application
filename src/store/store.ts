import { configureStore } from '@reduxjs/toolkit';
import appReducer from './reducers/appReducer';
import weatherReducer from './reducers/weatherReducer';

const store = configureStore({
  reducer: {
    app: appReducer,
    weather: weatherReducer,
  },
});

// App store maintains the app data and weather data in app and weather reducer resp
export type AppStore = ReturnType<typeof store.getState>;

export default store;
