import React from "react";
import CardBlock from "blocks/CardBlock";
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.root}>
      <h1 className={classes.header}>Please check how good your memory is!</h1>

      <CardBlock />
    </div>
  );
}

export default App;

// 3 difficulties easy (6 imgs) - intermediate(12 imgs) - hard(20)
// cards that flip to show img on click
// animation when same imgs are clicked after delay
// restart button
// timer
