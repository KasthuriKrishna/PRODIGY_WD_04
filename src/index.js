import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import VehicleList from './VehicleList';
import VehicleRegistrationForm from './VehicleRegistrationForm';
import Apps from './ResponsiveLanding/App'
import Stop from './Stopwatch/Stop'
import Weather from './WeatherApp/Weather'
import Tictactoe from './TicTac/Tictactoe'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Tictactoe/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
