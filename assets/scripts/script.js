const cities=['Москва', 'Самара','Уфа','Сочи','Казань'];
let temperatures=[];

for (let i=0; i<cities.length; i++){
let temperature=prompt(`Укажите температуру для ${cities[i]}`);
temperatures.push(Number(temperature));
}
console.log(temperatures);

const cityList = document.getElementById('cityList');

for (let i = 0; i < cities.length; i++) {
  const listItem = document.createElement('li');
  listItem.textContent = `Температура в ${cities[i]}: ${temperatures[i]}°C`;
  cityList.appendChild(listItem);
}

const maxTemp = Math.max(...temperatures);
const minTemp = Math.min(...temperatures);

document.getElementById('maxTemp').textContent = `Максимальная температура: ${maxTemp}°C`;
document.getElementById('minTemp').textContent = `Минимальная температура: ${minTemp}°C`;