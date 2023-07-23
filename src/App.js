import { useState } from "react";
import "./App.css";

function App() {
  const [power, setPower] = useState(true);

  const drum_pad = [
    {
      id: "Q",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      id: "W",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      id: "E",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      id: "A",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      id: "S",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      id: "D",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      id: "Z",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      id: "X",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
    {
      id: "C",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
  ];

  const clickHandler = (id) => {
    const audio = document.getElementById(id);
    power && audio.play();
  };

  return (
    <div className="App">
      <div id="drum-machine">
        <label className="power">
          <b>Power</b>
        </label>
        <div id="display">
          <label className="switch">
            <input
              type="checkbox"
              checked={power}
              onChange={() => setPower((prevState) => !prevState)}
            />
            <span className="slider"></span>
          </label>
          <div className="drum-pads-container">
            {drum_pad.map((pad) => {
              return (
                <button
                  className="drum-pad"
                  key={pad.id}
                  onClick={() => clickHandler(pad.id)}
                  onKeyDown={function (event) {
                    console.log(pad.id);
                  }}
                >
                  <audio className="clip" id={pad.id} src={pad.audio}></audio>
                  <b>{pad.id}</b>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
