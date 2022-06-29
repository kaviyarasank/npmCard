import { Card, CardImg, CardBody } from 'reactstrap';
import * as React from 'react';
import "./card.css";

const CardComponent = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "cardmainDiv"
  }, /*#__PURE__*/React.createElement(Card, {
    className: "card-box"
  }, /*#__PURE__*/React.createElement(CardBody, {
    className: ""
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-thumbs-up",
    key: props.id,
    onClick: props.like
  }), /*#__PURE__*/React.createElement(CardImg, {
    src: props.image,
    alt: "Card image cap",
    className: "cardimages"
  }), /*#__PURE__*/React.createElement("button", {
    className: "cardButton border-0",
    "data-testid": "card-button",
    onClick: props.button
  }, props.buttonName))), /*#__PURE__*/React.createElement("div", {
    className: "cardtextdiv mt-3"
  }, /*#__PURE__*/React.createElement("p", {
    className: "cardtext"
  }, props.name), /*#__PURE__*/React.createElement("p", {
    className: "prices"
  }, props.price)));
};

export default CardComponent;