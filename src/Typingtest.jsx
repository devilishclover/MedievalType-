import { useState } from "react"
import Letter from "./Letter.jsx"
import './styles/Typingtest.css'

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
"The steaming cauldron doth cook our victuals whilst we labor and rest",
"Lo the great bird of metal that doth fly oer the clouds bearing men through the firmament",
"Behold the shining coin of plastic that openeth all doors yet holdeth no gold within",
"Hark the wondrous wand that casteth pictures upon paper without quill or ink",
"Lo the glowing hearth without flame that warmeth by secret spark unseen",
"See the vessel of glass that holdeth fizzing potions sweet and fair",
"Behold the humble wheel of music whose cords doth turn by touch alone",
"Lo the shimmering tube wherein the fish of light swim in endless circles",
"Hark the small box that knoweth all tongues and answereth all questions with haste",
"Behold the silver bird that bringeth letters through the air swifter than Mercury himself",
"Lo the mirror of metal that revealeth distant lands though the eyes remain still",
"See the corded serpent that feedeth the house with lightnings power",
"Hark the black disc that singeth with the needles kiss",
"Lo the carriage of silence that glideth without steed nor smoke",
"Behold the tower that whispereth to all corners of the earth through unseen winds",
"See the glass box that keepeth meats from spoiling though summer be long",
"Lo the painted can that casteth color upon the walls in mortal minutes",
"Behold the humble loaf that riseth by powder alone without yeast or care",
"Hark the shining thread that weaveth voices through the darkened air",
"Lo the endless ribbon of moving stairs that lifteth the weary without toil",
"Behold the mighty fan that summoneth the wind from still air",
"See the carriage of sleep that rocketh gently with the hum of hidden wheels",
"Lo the glowing tablet whereon the learned write without quill or scroll",
"Hark the glass eye that remembereth all deeds and playeth them again for mirth",
"Behold the vessel of sound that whispereth music unto the ear alone",
"See the painted light that captureth a moment and keepeth it forever still",
"Lo the humble cup that heateth water in the blink of an eye",
"Behold the black box that changeth the channel of dreams with a fingers touch",
"Hark the shining mirror that guideth men through the night upon darkened roads",
"Lo the basket with spinning arms that cleanseth garments without brook or stone",
"See the rolling beast that sweepeth the floor with whirling bristles unseen",
"Behold the shining cage where food doth turn beneath the beam of sun made captive",
"Lo the plastic fruit of light that gloweth with numbers to wake the slumbering soul",
"Hark the endless tape that windeth songs and stories through its hidden coils",
"Behold the small glass lantern that revealeth mens faces in the still of night",
"Lo the invisible road where messages run swifter than thought between distant minds",
"See the endless wall of shelves that bringeth tales and news from every land",
"Behold the tinkling cube that coldeth drink though no winter be near",
"Hark the small chariot of bread that bringeth warmth and scent with every dawn",
"Lo the silver forked tongue that bringeth flame with a single spark",
"Behold the humble latch that openeth by code and not by key",
"See the chair that turneth upon a single point as though enchanted by elves",
"Lo the plastic scroll that playeth moving images in the palm of thine hand",
"Hark the shining serpent of copper that feedeth all our crafts and contraptions",
"Behold the painted wagon that carrieth youth to places of learning each morn",
"Lo the pocket sun that guideth travelers by unseen stars",
"See the glowing rune of letters that doth show the hearts of distant friends",
"Behold the great black road that runneth from sea to sea bearing endless feet",
"Lo the humble pen that bleeds not yet speaketh forever",
"See the iron box that guardeth bread with lock and fire alike",
"Behold the cloth of glass that bendeth the world to our will",
"Hark the sleeping stone that waketh at touch and speaketh in riddles true", 
"Lo the silver needle that draweth cloth with speed beyond mortal hand",
"Behold the black wand that summoneth letters upon the glowing square",
"Hark the humble vessel that carrieth men upon rivers of tar and stone",
"See the shimmering glass that keepeth the sun from burning the eyes of men",
"Lo the small beast of wheels that delivereth parcels swifter than horse or hawk",
"Behold the shining armor men don not for war but for play upon the field",
"Hark the tower of fire that doth cook meat without coal or flame",
"See the painted card that openeth all gates yet holdeth no name of power",
"Lo the hidden wire that whispereth songs beneath the earth unseen",
"Behold the gleaming cube that counteth numbers faster than thought",
"Hark the golden drink that waketh men from the sleep of weariness",
"See the tiny torch that bringeth daylight unto the darkest cave",
"Lo the roaring box that draweth dust as though it were smoke from hell",
"Behold the scroll of film that captureth laughter and grief alike",
"Hark the restless wheel that never sleepeth upon the floor of toil",
"See the glass vessel that turneth sand to time by spark alone",
"Lo the small shell that singeth oceans through cords of copper",
"Behold the soft chair that melteth the spine as though it were wax",
"Hark the swift quill that needeth neither ink nor rest",
"See the silver stick that openeth doors by unseen charm",
"Lo the great hall of mirrors where men trade gold unseen by hand",
"Behold the endless ribbon of moving words that telleth all things and yet naught",
"Hark the glowing box that changeth the world with unseen touch",
"See the winged chariot that bringeth letters and lovers across the sea",
"Lo the vessel of oil that carrieth light unto nights end",
"Behold the house of numbers that counteth mens days and pay alike",
"Hark the humming coil that draweth the very air unto cold",
"See the golden plate that summoneth feast by heat alone",
"Lo the spinning disc that holdeth all knowledge and yet breaketh by scratch",
"Behold the feathered wand that cleanseth teeth with mint and zeal",
"Hark the silver serpent that bringeth clear water from the depths of stone",
"See the painted page that speaketh of lands beyond knowing",
"Lo the swift bird of news that crieth each morn of mens triumph and folly",
"Behold the shining glass that bindeth the sun to our walls",
"Hark the leather pouch that guardeth coin yet openeth at will",
"See the quiet hall where men commune through shining screens unseen",
"Lo the iron mouth that devoureth coin and yieldeth drink",
"Behold the painted mask that guardeth breath from the taint of the air",
"Hark the ringing bell that singeth from the pocket of man",
"See the glowing rod that summoneth fire without flint or spark",
"Lo the endless chain of carts that carry goods from dawn till dusk",
"Behold the silver crown that resteth in the ear and bringeth song to one alone",
"Hark the gentle breeze born of a whirring blade that cools the fevered brow",
"See the tiny chamber where sound doth sleep until awoken by will",
"Lo the painted wand that maketh lips as roses and cheeks as dawn",
"Behold the shining gate that knoweth its master by sight alone",
"Hark the glassy cube that showeth moving tales of war and jest",
"See the black path of ink that windeth through the minds of men unseen",
"Lo the glowing rune upon the wall that counteth hours by light",
"Behold the tireless wheel that serveth man yet knoweth no rest",
"Hark the gentle screen that shieldeth us from the wrath of sun and storm",
"See the silver cage that keepeth beasts of light within",
"Lo the humming bird of metal that cleanseth air by breath of fire",
"Behold the restless lamp that followeth man through field and forest",
"Hark the roaring box of metal that bringeth cool to summers heat",
"See the humble cord that bindeth all the world in hidden knots",
"Lo the endless road of light where chariots of flame do race",
"Behold the circle of glass that sharpeneth the sight of the old and weary",
"Hark the black box that guardeth the secrets of every house",
"See the tiny carriage that moveth of its own mind and learneth the path of man",
"Lo the white page that yieldeth not to ink yet showeth all with but a spark",
"Behold the vessel of wind that turneth mills without hand or horse",
"Hark the painted fruit that gloweth with light to call the buyer near",
"See the silver coin that buyeth words from the heavens unseen",
"Lo the shining tunnel where voices echo yet no man walks",
"Behold the round glass that showeth all the earth as if held in a palm",
"Hark the hidden ear that listeneth to mens talk and never tires",
"See the fiery thread that bringeth life to all yet killeth in excess",
"Lo the singing stone that telleth time without bell or sun",
"Behold the moving stair that knoweth both ascent and fall",
"Hark the painted wall that changeth its scene with but a whisper of touch",
"See the humming orb that knoweth the weather before the clouds do stir",
"Lo the iron pen that burneth words upon leather and cloth alike",
"Behold the moving lantern that guideth ships through fog and storm",
"Hark the still glass that bringeth far-off kin into thine own chamber",
"See the iron box that guardeth flame yet never smoketh",
"Lo the painted vessel that rideth the sea without sail or oar",
"Behold the glowing rune that openeth the vault of the world",
"Hark the soft cloud that holdeth the words of all mankind",
"See the black staff that awakeneth sleeping devices with touch alone",
"Lo the endless feast of sight that streameth without cease or care",
"Behold the silver ring that counteth steps and dreams alike",
"Hark the iron heart that beateth within every chariot of man",
"See the window that showeth strangers from all corners of the earth",
"Lo the gilded key that turneth locks made only of thought",
"Behold the inkless scroll that holdeth more words than all libraries of Rome",
"Hark the crystal heart that pulseth with the worlds song unending",
"See the small mirror that flattereth none and yet serveth all",
"Lo the iron tongue that tolls within every home though no bell be hung",
"Behold the shining beast that drinketh fuel and devoureth miles",
"Hark the living wire that bindeth heart to heart across the void",
"See the invisible book where men inscribe their daily musings",
"Lo the pale lamp that mocketh the moon and outshines her grace",
"Behold the endless song that loopeth till the stars grow cold",
"Hark the phantom flame that heateth our dwellings without wood or smoke",
"See the restless courier that bringeth food swifter than hunger itself",
"Lo the painted idol that danceth upon every wall and speaketh without breath"


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