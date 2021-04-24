import "./styles.css";
import { useState } from "react";

// var userName = "AKASH";
// var color = "blue";

var emojiDictionary = {
  "😂": "Joy Of Tears",
  "😉": "Winking Face",
  "🤩": "Star Struck",
  "🤐": "Zipper Mouth",
  "🤥": "Lying Face"
};

var emojisArray = Object.keys(emojiDictionary);

export default function App() {
  const [emojiName, setEmoji] = useState("");
  function inputEmojiHandler(event) {
    var userInput = event.target.value;

    if (userInput) {
      if (userInput in emojiDictionary) {
        var message = emojiDictionary[userInput];
      } else {
        message = "Sorry We don't have that in our database";
      }
      setEmoji(message);
    } else {
      setEmoji(null);
    }
  }

  function clickedItem(item) {
    setEmoji(emojiDictionary[item]);
  }

  return (
    <div className="App">
      <h1 style={{ color: "gold" }}>
        Emoji <span style={{ color: "black" }}>Interpreter</span>
      </h1>

      <input
        placeholder="Put Your Emoji Here"
        onChange={inputEmojiHandler}
      ></input>
      <h1>{emojiName}</h1>

      <h3> Emojis in our database </h3>

      {emojisArray.map(function (emoji) {
        return (
          <span
            key={emoji}
            style={{ padding: "0.5rem", fontSize: "1.5rem", cursor: "pointer" }}
            onClick={() => clickedItem(emoji)}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
