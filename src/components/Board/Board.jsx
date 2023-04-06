import React from "react";
import "./Board.css";
import { MoreHorizontal } from "react-feather";
import Card from "../card/Card";
import Editable from "../Editable/Editable";
const Board = () => {
  return (
    <div className="board">
      <div className="board_top">
        <p className="board_top_title">
          To do <span> {"  "}2</span>
        </p>
        <MoreHorizontal />
      </div>
      <div className="board_cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

        

        <Editable placeholder="enter cards title" title="Add card"/>
      </div>
    </div>
  );
};

export default Board;
