const API_KEY = `0ecf626a1664da05515eca7b718251b8`;

const searchTemperature = () => {
    const city = document.getElementById('city-name').value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => displayTemperature(data));
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemperature = temperature => {
    setInnerText('city', temperature.name);
    setInnerText('temp-number', temperature.main.temp);
    setInnerText('condition', temperature.weather[0].main);
    console.log(temperature);

    // show icon

    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;

    const imageIcon = document.getElementById('weather-icon');
    imageIcon.setAttribute('src', url);
}




