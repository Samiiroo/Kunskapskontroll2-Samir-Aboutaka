// hämtar elementen från dom 
let input = document.querySelector('.input-text');
let main = document.querySelector('#name');
let temp = document.querySelector('.temp');
let wind = document.querySelector('.wind');
let humid = document.querySelector('.humid');
let desc = document.querySelector('.desc');
let clouds = document.querySelector('.clouds');
let button = document.querySelector('.submit');
let icon = document.querySelector('.icon')
// skapar en eventlyssnare på knappen submit.
button.addEventListener('click', (event)=>{
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=d41566c275a38fc320506f84421f5425&units=metric')
  .then(response => response.json())
  .then(data => { console.log(data);

    let windValue = data.wind.speed.toFixed(0); //skapar en variabel där värdet på vind sätts in och omvandlas till hel tal
    let humidValue = data.main.humidity; //skapar en variabel där värdet på fukt sätts in och omvandlas till hel tal
    let tempValue = data.main.temp.toFixed(0);//skapar en variabel där värdet på Temperatur sätts in och omvandlas till hel tal
    let nameValue = data.name;//skapar en variabel där värdet är namn på staden
    let descValue = data.weather[0].description;//skapar en variabel där värdet är description på vädret
    let iconId = data.weather[0].icon;//skapar en variabel och lägger in icon numret på aktuellt väder och sparar det.
    let iconUrl = `http://openweathermap.org/img/wn/${iconId}@2x.png`; // skapar en variabel med icon url plus iconId Variabeln
    
    //// här lägger  jag in värdena från temperatur vind humiditet och descpriptin värdet i domen
    main.innerHTML = nameValue;
    desc.innerHTML = 'Description : ' + descValue;
    temp.innerHTML = 'Temperature : ' + tempValue;
    wind.innerHTML = 'Wind Speed : ' + windValue+'ms';
    humid.innerHTML = 'Humidity : ' + humidValue + '%'; 
    
    
    icon.setAttribute("src", iconUrl) //  sätter attributet src på icon elementet med iconUrl som värde
    icon.style.display ="block" 
    let info = document.querySelector('.info').style.display="block"
    input.value ="";
    ///////////////////////////om temperaturen är lägre än 15 så visas temperatur elementet temp blå  och röd när temperaturen är högre än 15
    (tempValue < 15)? 
      temp.style.color="blue":temp.style.color="red"
    console.log(tempValue);
  })
  .catch(err => alert('Please type city that exist in this World!')); // error check om man skriver fel eler inget alls
  })