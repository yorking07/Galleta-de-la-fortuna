//hice un rafce
//en que estructura se guardan las props 
const Phrase = ({phraseRandom}) => {
    console.log(phraseRandom);
  return (
    
        <p className="app__phrase">{phraseRandom.phrase}</p>
    
  )
}

export default Phrase