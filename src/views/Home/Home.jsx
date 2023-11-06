import React from 'react'
import "./Home.css"
import { useSearchParams } from 'react-router-dom'
function Home() {
  const GREETINGS =[
    "May the source of light and life shine in our hearts, now and always, as we strive together for the common good of all.",
    "Thinking of you during the Festival of Lights and wishing you a year rich with blessings.",
    "As the scent of incense, lamps and sweets fills your home, here's hoping love and light fill your heart",
    "Wishing you a home filled with happiness, a life filled with prosperity, and a heart filled with love",
    "You have added so much joy to my life. May Diwali bring light and love to yours"
   ]
    const [searchParams]= useSearchParams();
    const to = searchParams.get("to");
    const from = searchParams.get("from");
    const greetingNumber = searchParams.get("g") >= GREETINGS.length ? 0 :searchParams.get("g") || 0 ;
  return (
    <div className='card'>
      <span className='to-text'>Dear,{to} 🌹</span>
      <p className='g-text'>{GREETINGS[greetingNumber]}
 </p>
 <span className='from-text'> 🙏 your Loving {from}</span>
    </div>
  )
}

export default Home
