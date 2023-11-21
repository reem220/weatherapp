
import { useState } from 'react'
import './App.css'

import axios from 'axios'

function App() {
  const [da,setData]=useState({})
  const [locat,setLocation]=useState('')
  const [islod,setLod]=useState(false)
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${locat}&units=metric&appid=e4a916a5fffad4d7c83e3e5155386cd6`
const searchLocation= (e) =>{
  if (e.key ==='Enter'){
    setLod(true)

    axios.get(url).then((res)=>{
      setData(res.data)
      console.log(res.data)
      setLod(false)

    })
    setLocation(' ')
  }
}
  return (
    <>
<div className="app">
<div className="search">
  <input type="text" placeholder='Enter Location' value={locat} 
  onChange={e=>setLocation(e.target.value)}
  onKeyDown={searchLocation}
  />
</div>
{islod && <p style={{textAlign:"center"}}>Loading...</p>}
<div className="container">
<div className="top">
<div className="location">
  {da.name && <p>{da.name}</p>}
</div>
<div className="temp">
  {da.main&& <h1>{da.main.temp.toFixed()}</h1>}
</div>
<div className="description">
  {da.weather && <p>{da.weather[0].description}</p>}
</div>
</div>
<div className="bottom">
<div className="feels">
  {da.main && <p>{da.main.feels_like.toFixed()}</p> }
  <p>Feels Like</p>
</div>
<div className="humidity">
{da.main && <p>{da.main.humidity}</p> }

  <p>Humidity</p>
</div>
<div className="wind">
 {da.wind && <p className="bold">{da.wind.speed} KPH</p> } 
  <p>Wind Speed</p>
</div>

</div>



</div>


















</div>





    
    </>


      )
}

export default App
