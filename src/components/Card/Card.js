import React from "react";
import propTypes from "prop-types";
import classes from "./Card.module.css";

const Card = (props) => {
  const { children } = props;
  return <div className={classes.root}>{children}</div>;
};

Card.propTypes = {
  children: propTypes.node,
};

export default Card;
