import getRamdomFromArr from "../services/getRamdomFromArr"
import phrases from "../utils/phrases.json"
import bgArr from '../utils/bgArr.json'

const ButtonPhrase = ({setphraseRandom,setBgApp }) => {
  
    const handleChangePhrase=()=>{
        // const quote=getRamdomFromArr(phrases)

        setphraseRandom(getRamdomFromArr(phrases))
        setBgApp(getRamdomFromArr(bgArr))
    }
  return (
    <button className="app__btn" onClick={handleChangePhrase}>
      Ver otro
    </button>
  )
}

export default ButtonPhrase