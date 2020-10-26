import React, { Component } from 'react';
/* Stateless component or pure component
 * { product } syntax is the object destructing
 */
const RestModel = ({dish}) => {
  const divStyle = {
      display: 'flex',
      flexDirection: 'column',
      width: '65%',
      margin: '30px 10px 10px 30px'
  }

  //if the props for product is null, return Product doesn't exist
  if(!dish) {

    return(<div style={divStyle}><h2>  No Dishes was selected </h2> </div>);
  }
    
  //Else, display the product data
  return(  
    <div style={divStyle}> 
     
    <div class="card mb-3">
    <img src={`dishes_images/${dish.img}`} width="400" alt={dish.img} ></img>
    <div class="card-body">
    <h1 class="card-title"> {dish.title} </h1>
    <p class="card-text"> {dish.description} </p>
     
      <h5 class="card-title"> Composition:</h5><p class="card-text"> {dish.composition} </p>
      <h5 class="card-title"> Price:</h5><p class="card-text">  {dish.cost}₽</p>
      <h5 class="card-title"> Tags:</h5><p class="card-text"> {dish.tags} </p>
      <p class="card-text"><small class="text-muted"> {dish.datatime}</small></p>
    </div>
    </div>
    </div>
  )
}

export default RestModel ;
