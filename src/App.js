
import './App.css';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
const [forcast, setForcast] = useState()
const [first, setfirst] = useState(true)
const [mode, setMode] = useState('white')
const [location , setLocation] = useState('')
const [unit , setUnit] = useState('metric')
const changeMode = ()=>{
  if(first===true){
    setfirst(false);
    setMode('black')


  }
  else if(first===false){
    setfirst(true);
    setMode('white')
  }

}
const fetchData = async()=>{
 let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=023d91de44a1c34b60240fd3e8e5d989&units=${unit}`   
 let data = await axios.get(url)
 let newData = data.data
 console.log(newData)
 setForcast(newData)
//  let parsedData = await data.json()
  // setForcast(parsedData)
  // console.log(parsedData)     
}
  useEffect(() => {
    fetchData()
  }, [location , unit])
  return (
    <>
    <div className="w-full md:flex md:flex-row flex-col flex">
    <Sidebar unit={unit} setUnit={setUnit} forcast={forcast} location={location} setLocation={setLocation} mode={mode}/>
    <Home unit={unit} setUnit={setUnit} first={first} forcast={forcast} mode={mode} changeMode={changeMode}/> 
      
    </div>
    </>
  );
}

export default App;
