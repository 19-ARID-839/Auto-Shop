import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Card.css";
const Cards = (props) => {
  return (
    <div>
      <Card className="cars-design">
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title className="card-title">
            <p>{props.title}</p>
          </Card.Title>
          {/* <Card.Text className="card-text">{props.text}</Card.Text> */}
          <div className="button-aligment">
            <Button className="button-individual-1">{props.button1}</Button>
            <Button className="button-individual">{props.button2}</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Cards;
