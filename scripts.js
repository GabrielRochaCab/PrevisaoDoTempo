const key = "7e0f540828b0a66b293a5156b05517cb";

function onScreen(data) {
  console.log(data);
  document.querySelector(".cidade").innerHTML = "Tempo em " + data.name;
  document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C";
  document.querySelector(".prev").innerHTML = data.weather[0].description;
  document.querySelector(".umd").innerHTML = data.main.humidity + "%";
  document.querySelector(
    ".img-prev"
  ).src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
}
async function searchCity(city) {
  //busca a cidade no servidor
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
  ).then((response) => response.json());
  onScreen(data);
}
function clickHere() {
  //Pega o valor da busca e executa searchCity
  const city = document.querySelector(".textBox").value;
  searchCity(city);
}
