import React from "react";
import classes from "./CardBlock.module.css";
import Card from "components/Card";

const arr = [1, 2, 3, 4, 5, 6];
const CardBlock = () => {
  return (
    <section className={classes.root}>
      {/* Easy difficulty, 6 images */}
      {arr.map((item, idx) => (
        <Card key={idx} />
      ))}
    </section>
  );
};

export default CardBlock;
