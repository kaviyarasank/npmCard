# Usage

import CardComponent from "custom-cardpack/dist/card";

import './App.css';

function App() {

  const handleClick=()=>{

    alert("hai")

  }

const AddLike=()=>
{

}

  return (

    <div className="App">

     <Button name="Add" onClick={handleClick}/>

     <CardComponent buttonName="AddTocart" image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" className="" 

     like={AddLike}/>

    </div>

  );
}

export default App;

## Available props

1.like

2.image

3.button

4.buttonName

5.name

6.price