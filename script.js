async function loadData(city) {
  const link = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&appid=dcf4c6c8f2588229356038121e5d01fb';
  const response = await fetch(link);
  const data = response.json();
  return data;
}

const weatherData = loadData('dhaka').then(data =>
  display(data)
);

function display(data){
 const object = data;
 console.log(object.main.temp);
}

// console.log(weatherData[1]);
// for (let i = 0; i < weatherData.length; i++) {
//   console.log(weatherData[i]);
// }
