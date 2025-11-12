import './styles/App.css'
import Keyboard from './Keyboard.jsx'
import Typingtest from './Typingtest.jsx'
import guyImage from './assets/guy.png'
import Music from './Music.jsx'
import medievalMusic from './assets/Medieval.mp3'

function App() {
  return (
    <div className="main">
      <Typingtest /> 
      <div className='keyboard-container'>
        <img src={guyImage} alt="guy" />
        <Keyboard />
        <Music medievalMusic={medievalMusic} />
        <p className="note">Note: If a letter appears not to be able to be typed, it is due to the font making certain characters difficult to understand. You'd better study up on your medieval fonts peasant!
        </p>
        
      </div>
    </div>
   )
}

export default App
