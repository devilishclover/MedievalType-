import Key from './Key.jsx' 
import './Keyboard.css'

function Keyboard() {
const keyNames = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
];

  return (
    <div className="keyboard">
      {keyNames.map((keyName) => (
        <div className="key-row" key={keyName.join('')}>
            {keyName.map((key) => (
                <div key={key}>
                <Key key={key} keyName={key} />
                </div> 
            ))}
            </div>
      ))}
      <Key key="space" keyName=" " className="space" />
    </div>
  );
}

export default Keyboard;