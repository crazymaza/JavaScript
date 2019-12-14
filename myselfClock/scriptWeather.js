const city = document.querySelector('.city'),
	weatherImg = document.querySelector('.weather-img'),
	temperature = document.querySelector('.temperature'),
	weatherText = document.querySelector('.weather-text'),
	clockWeather = document.querySelector('.clock'),
	weather = document.querySelector('.weather');
fetch('http://api.openweathermap.org/data/2.5/weather?q=Moscow&APPID=708b4e1b372c94127364ded0e99d9ad3')
	.then(function (resp) {
		return resp.json()
	})
	.then(function (data) {
		console.log(data);
		city.textContent = data.name;
		weatherImg.src = `https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png`;
		temperature.innerHTML = `${Math.floor(data.main['temp'] - 273)}&deg`;
		weatherText.textContent = data.weather[0]['description'];
	})
	.catch(function () {
		console.log("bla");
	});

clockWeather.addEventListener('click', () => {
	clockWeather.style.opacity = '0';
	weather.style.opacity = '1';
	weather.style.zIndex = '100';
});
weather.addEventListener('click', () => {
	clockWeather.style.opacity = '1';
	weather.style.opacity = '0';
	weather.style.zIndex = '0';
});
