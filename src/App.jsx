import './styles/App.css'
import Keyboard from './Keyboard.jsx'
import Typingtest from './Typingtest.jsx'
import Music from './Music.jsx'
import medievalMusic from './assets/Medieval.mp3'
import guyImage from './assets/guy.png'

function App() {
  return (
    <div className="main">
      <Typingtest />
      <div className='keyboard-container'>
        <img src={guyImage} alt="guy" />
        <Keyboard />
        <p className="note">Note: If a letter appears not to be able to be typed, it is due to the font making certain characters difficult to understand. You'd better study up on your medieval fonts peasant!</p>
        <Music medievalMusic={medievalMusic} />
      </div>
    </div>
   )
}

export default App
