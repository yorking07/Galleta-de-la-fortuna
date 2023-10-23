
import { useState } from 'react'
import './App.css'
import phrases from './utils/phrases.json'
import getRamdomFromArr from './services/getRamdomFromArr'
import Phrase from './components/Phrase'
import ButtonPhrase from './components/ButtonPhrase'
import bgArr from './utils/bgArr.json'

function App() {
// const quote=getRamdomFromArr(phrases) opcional
// useStatesnipped
  const [phraseRandom, setphraseRandom] = useState( getRamdomFromArr(phrases))
  console.log(phraseRandom);
  const [bgApp, setBgApp] = useState(getRamdomFromArr(bgArr))
  const objStyle ={
    backgroundImage: `url('../fondo${bgApp}.jpg')`
  }

  return (
    <>
      <div style={objStyle} className='app'>
        <h1 className='app__title'>Galleta de la Fortuna</h1> 
        {/* esta es una prop */}
        <article className='app__card'>
        <Phrase phraseRandom={phraseRandom}  
        />
        {/* mando otra prop para que cuando presiones click tmb se le aplique */}
         <ButtonPhrase setphraseRandom={setphraseRandom} setBgApp={setBgApp}/>
         </article>
      </div>
      
    </>
  )
}

export default App
