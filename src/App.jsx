import './App.css'
import Keyboard from './Keyboard.jsx'
import Typingtest from './Typingtest.jsx'
import medievalMusic from './assets/Medieval.mp3'

function App() {
  return (
    <div className="main">
      <audio controls loop>
      <source src={medievalMusic} type="audio/mpeg" />
    </audio>
      <Typingtest />
      <div className='keyboard-container'>
        <img src="/src/assets/guy.png" alt="guy" />
        <Keyboard />
        <p className="note">Note: If a letter appears not to be able to be typed, it is due to the font making certain characters difficult to understand. You'd better study up on your medieval fonts peasant!</p>
      </div>
      
    </div>
   )
}

export default App
