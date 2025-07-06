# 🌤️ Weather Web App

A simple and responsive weather application that provides real-time weather information using the **OpenWeatherMap API**. Users can check the weather by either allowing location access or searching by city name.

### 🔗 Live Demo  
👉 [Click here to view the app](https://weather-web-three-iota.vercel.app/)

---

## Features

- **Current Location Weather**: Fetches weather data using the Geolocation API
- **City Search**: Search weather by city name from anywhere in the world
- **Comprehensive Weather Data**:
  - Temperature (in Celsius)
  - Wind speed
  - Humidity levels
  - Atmospheric pressure
  - Weather condition icons
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Clean UI**: Built with pure HTML, CSS, and JavaScript for fast performance

---

## Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **API**: [OpenWeatherMap API](https://openweathermap.org/api)
- **Hosting**: Vercel
- **Version Control**: Git & GitHub

---

## 📸 Screenshot

<img width="1919" height="876" alt="Weather App Interface" src="https://github.com/user-attachments/assets/02e9f519-2f7d-489a-aea6-8a77ba9ebba7" />

---

## How It Works

1. **Automatic Location Detection**: On page load, the app requests your current geolocation and fetches weather data automatically
2. **Manual City Search**: Enter any city name to get instant weather updates
3. **Dynamic UI Updates**: The interface updates in real-time with:
   - Temperature conversion from Kelvin to Celsius
   - Weather condition icons
   - Wind speed, humidity, and pressure statistics
4. **Error Handling**: Graceful handling of API errors and invalid city names

---

## Code Highlights

```javascript
const API_KEY = 'YOUR_API_KEY';
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

async function search() {
    try {
        const data = await fetch(`${BASE_URL}weather?q=${city.value}&appid=${API_KEY}`);
        const info = await data.json();
        const tempInCelsius = (info.main.temp - 273.15).toFixed(2);
        temp.innerHTML = `${tempInCelsius}°C`;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}
```

---

## Setup & Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/MOHITH2511/Weather_Web.git
   ```

2. **Navigate to the project folder**
   ```bash
   cd Weather_Web
   ```

3. **Get your API key**
   - Visit [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account
   - Generate your API key

4. **Update the API key**
   - Open the JavaScript file
   - Replace `'YOUR_API_KEY'` with your actual API key

5. **Run the application**
   - Open `index.html` in your browser
   - Allow location access when prompted (optional)

---

## 🔐 Security Note

- **Development**: For learning purposes, the API key can be used in client-side code
- **Production**: Consider implementing server-side API calls or using environment variables to secure your API key
- **Rate Limits**: Be mindful of OpenWeatherMap's rate limits for free accounts

---

## 🌟 Future Enhancements

- 5-day weather forecast
- Weather alerts and notifications
- Multiple location bookmarks
- Dark/Light theme toggle
- Weather charts and graphs

---

## 🙌 Author

**Mohith S**
- [GitHub](https://github.com/MOHITH2511)
- [LinkedIn](https://linkedin.com/in/mohith-s)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/MOHITH2511/Weather_Web/issues).

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
