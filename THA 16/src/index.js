import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div className="container">
    <div className="board">
      <h1> Meme </h1>
      <img
        className="meme-img"
        alt="Meme"
        src="https://i.imgflip.com/59neox.jpg"
      />
    </div>
    <div className="board">
      <h1> ChessBoard </h1>
      <img
        className="meme-img"
        alt="Chess"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrtZbzDdDgH9l69hr2gXlWoa1jXNozR-k67g&usqp=CAU"
      />
    </div>
  </div>,
  document.getElementById("root")
);
