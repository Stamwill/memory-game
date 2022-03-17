import React from "react";
import classes from "./CardBlock.module.css";
import Card from "components/Card";

const easy = [1, 2, 3, 4, 5, 6];
const intermediate = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const CardBlock = () => {
  const [easyDiff, setEasy] = React.useState(false);
  const [intermediateDiff, setIntermediate] = React.useState(false);
  const [impossibleDiff, setImpossible] = React.useState(false);

  const handleEasy = () => {
    setIntermediate(false);
    setEasy(true);
  };

  const handleIntermediate = () => {
    setEasy(false);
    setIntermediate(true);
  };

  return (
    <section className={classes.root}>
      <div className={classes.buttons}>
        <button className={classes.button} onClick={handleEasy}>
          Easy
        </button>
        <button className={classes.button} onClick={handleIntermediate}>
          Intermediate
        </button>
      </div>
      <div className={classes.cards}>
        {/* Easy difficulty, 6 images */}
        {easyDiff ? easy.map((idx) => <Card key={idx} />) : null}
        {/* Intermediate difficulty, 12 images */}
        {intermediateDiff
          ? intermediate.map((idx) => <Card key={idx} />)
          : null}
      </div>
    </section>
  );
};

export default CardBlock;
