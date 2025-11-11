import { useState } from "react"
import Letter from "./Letter.jsx"
import './Typingtest.css'

let handleKeyPressGlobal = null;

function Typingtest() {
    const sentences = [
      "Lo a tiny box doth speak across the aether bearing the voices of distant kin",
"A glowing orb suspended banishing nights shadow with but a flick of thine hand",
"Hark the iron carriage doth roar upon the cobblestones swifter than the steed of yore",
"The wind doth carry invisible minstrels filling chambers with melodies unknown",
"A wondrous chest of frost doth preserve the feast whilst summers heat assaults the hearth",
"Behold the moving pictures upon the glowing screen that charm the eyes of all",
"Lo the clattering keys doth summon words from the ether to parchment and page",
"Hark the buzzing lantern that doth summon warmth and light unto our humble dwelling",
"The silver disc doth spin with tunes that stir the heart and move the feet",
"See the iron steed upon rails that carrieth souls across dale and hill with haste",
"Behold the wondrous moving wagon that carrieth goods from town to town with ease",
"Lo the tiny box of letters that speak with ink unseen and messages swift",
"Hark the ticking contraption that doth mark the hours of our mortal toil",
"See the glassy window that doth reveal the heavens and the passing clouds above",
"The steaming cauldron doth cook our victuals whilst we labor and rest"
    ]
    
    const [sentence, setSentence] = useState(() => {
        const randomIndex = Math.floor(Math.random() * sentences.length);
        const randomSentence = sentences[randomIndex];
        const splitSentence = randomSentence.split('');
        return splitSentence.map((char, index) => ({
            letter: char,
            id: index
        }));
    })

    const [currentLetter, setCurrentLetter] = useState(0)

    if (handleKeyPressGlobal) {
        window.removeEventListener("keydown", handleKeyPressGlobal);
    }

    handleKeyPressGlobal = (e) => {
        if (e.repeat) return;
        
        if (currentLetter < sentence.length) {
            if (e.key === sentence[currentLetter].letter) {
            const newIndex = currentLetter + 1;
            setCurrentLetter(newIndex);
            
            if (newIndex === sentence.length) {
                const randomSentence = sentences[Math.floor(Math.random() * sentences.length)]
                const splitSentence = randomSentence.split('');
                setSentence(splitSentence.map((char, index) => ({
                    letter: char,
                    id: index
                })))
                setCurrentLetter(0);
            }
        }
    }
    };

    window.addEventListener("keydown", handleKeyPressGlobal);

    return (
        <div className="typing-test">
            {sentence.map((charObj) => (
                <Letter 
                    key={charObj.id} 
                    letter={charObj.letter}
                    pressed={charObj.id < currentLetter}
                />
            ))}
        </div>
    )
} 

export default Typingtest