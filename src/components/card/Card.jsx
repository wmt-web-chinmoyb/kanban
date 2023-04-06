import React from "react";
import "./Card.css";
import { CheckSquare, Clock, MoreHorizontal } from "react-feather";
import Chip from "../chip/Chip";

const Card = () => {
  return (
    <div className="card">
      <div className="card_top">
        <div className="card_labels">
          <Chip close={true} text="frontend" color="green" />
        </div>
        <MoreHorizontal />
      </div>
      <div className="card_title">
        fdfdf
      </div>
      <div className="card_footer">
        <p ><Clock/>4 april</p>
        <p><CheckSquare/>1/3</p>
      </div>
    </div>
  );
};

export default Card;
