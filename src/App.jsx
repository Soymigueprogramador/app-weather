// Importaciones
import "./App.css";

const App = () => {
  // Logica de la aplicacion

  return (
    <>
      <div className="container">
        <div className="search-box">
          <i className="fa-solid fa-location-dot" />
          <input type="text" placeholder="Enter your location" />
          <button className="fa-solid fa-magnifying-glass" />
        </div>
        <div className="not-found">
          <img src="images/404.png" />
          <p>Oops! Invalid location :/</p>
        </div>
        <div className="weather-box">
          <img src="" />
          <p className="temperature" />
          <p className="description" />
        </div>
        <div className="weather-details">
          <div className="humidity">
            <i className="fa-solid fa-water" />
            <div className="text">
              <span />
              <p>Humidity</p>
            </div>
          </div>
          <div className="wind">
            <i className="fa-solid fa-wind" />
            <div className="text">
              <span />
              <p>Wind Speed</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
