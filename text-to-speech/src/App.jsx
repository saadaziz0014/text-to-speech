import React, { useState } from "react";
import Speech from "react-speech";
import Navbar from "./Navbar";
const App = () => {
  const [data, setData] = useState("");
  return (
    <div>
      <Navbar />
      <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
        <main role="main" className="inner cover">
          <h1 className="cover-heading">Text to Speech.</h1>
          <input
            className="lead"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
          <Speech
            text={data}
            pitch="1"
            rate="1"
            volume="1"
            lang="en-GB"
            textAsButton={true}
            displayText="Play"
            voice="Google UK English Male"
            stop={true}
            stopText="Stop"
            pause={true}
            resume={true}
          />
        </main>
        <footer className="mastfoot mt-auto"></footer>
      </div>
    </div>
  );
};

export default App;
