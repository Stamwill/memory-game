import React from "react";
import classnames from "clsx";
import propTypes from "prop-types";
import classes from "./Card.module.css";

const Card = (props) => {
  const [flipped, setflipped] = React.useState(false);

  const handleClick = () => {
    setflipped((prevstate) => !prevstate);
    console.log("clicked");
  };

  const { children } = props;
  return (
    <div className={classes.root} onClick={handleClick}>
      <div className={classnames(classes.card, { [classes.flipped]: flipped })}>
        <div className={classes.front}>front</div>
        <div className={classes.back}>back</div>
        {children}
      </div>
    </div>
  );
};

Card.propTypes = {
  children: propTypes.node,
};

export default Card;
