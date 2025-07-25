const API_KEY='ac7495915bd884f628018f0418d2a168'
const BASE_URL ="https://api.openweathermap.org/data/2.5/"


var lon,lat; 

var city=document.getElementById('city')
var temp=document.getElementById('temp')
var cname=document.getElementById('name')
var wind=document.getElementById('wind')
var pres=document.getElementById('pres')
var hum=document.getElementById('hum')
var img=document.getElementById('img')

function getCurrent()
{
    navigator.geolocation.getCurrentPosition(async (result)=>{
        const l = result.coords 
        lon = l.longitude
        lat = l.latitude
        console.log({"lon":lon,"lat":lat});
        const data = await fetch(`${BASE_URL}weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
        console.log(data);
        if (data.status==200)
        {
          const info = await data.json();
          console.log(info);
          cname.innerHTML=info.name
          temp.innerHTML=info.main.temp
          wind.innerHTML=info.wind.speed
          img.src=`https://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`
          pres.innerHTML=info.main.pressure
          hum.innerHTML=info.main.humidity

        }
    })
}
async function search(){
    const data = await fetch(`${BASE_URL}weather?q=${city.value}&appid=${API_KEY}`)
    console.log(data);
    if(data.status==200)
    {
        const info = await data.json();
        console.log(info);
        cname.innerHTML=info.name
        temp.innerHTML=info.main.temp
        wind.innerHTML=info.wind.speed
        img.src=`https://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`
        pres.innerHTML=info.main.pressure
        hum.innerHTML=info.main.humidity   
    }
        }

getCurrent()