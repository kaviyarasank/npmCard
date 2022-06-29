import { Card, CardImg,CardBody } from 'reactstrap';
    import * as React from 'react';
    import "./card.css"
  
  const CardComponent = (props) => {

    return (
        <div className='cardmainDiv'>
        <Card className='card-box'>
          <CardBody className=''>
          <i className={"fa-solid fa-thumbs-up"}  key={props.id} onClick={props.like}></i>
          <CardImg  src={props.image} alt="Card image cap" className='cardimages'/>
            <button className='cardButton border-0' data-testid="card-button" onClick={props.button}>{props.buttonName}</button>
          </CardBody>
        </Card>
        <div className='cardtextdiv mt-3'>
        <p className='cardtext'>{props.name}</p>
          <p className='prices'>{props.price}</p>
          </div>
        </div>
    );
  };
  
  export default CardComponent;