import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RestModel from './Dish';
import AddDish from './addDish';

/* Main Component */
class Main extends Component {
  constructor() {
   
    super();
    //Initialize the state in the constructor
    this.state = {
        RestModel: [],
        currentDish: null
    }

    this.handleAddDish = this.handleAddDish.bind(this);
  }
  /*componentDidMount() is a lifecycle method
   * that gets called after the component is rendered
   */
  componentDidMount() {
    /* fetch API in action */
    fetch('/api/dishes')
        .then(response => {
            return response.json();
        })
        .then(RestModel => {
            //Fetched product is stored in the state
            this.setState({ RestModel });
        });
  }
 
 renderDishes() {
    const listStyle = {
        listStyle: 'none',
        fontSize: '18px',
        lineHeight: '1.8em',
    }
    return this.state.RestModel.map(dish => {
        return (
            /* When using list you need to specify a key
             * attribute that is unique for each list item
            */
           <li style={listStyle} onClick={
            () =>this.handleClick(dish)} key={dish.id} >
            { dish.title } 
        </li>        
        );
    })
  }
  handleClick(dish) {

    //handleClick is used to set the state
    this.setState({currentDish:dish});

}

handleAddDish(dish) {
  dish.cost = Number(dish.cost);
  fetch( '/api/dishes', {
      method:'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      
      body: JSON.stringify(dish)
  })
  .then(response => {
      return response.json();
  })
  .then( data => {
     
      this.setState((prevState)=> ({
          dishes: prevState.dishes.concat(data),
          currentDish: data
      }))
  })
}  

render() {

    const mainDivStyle =  {
         display: "flex",
         flexDirection: "row"
     }
     
     const divStyle = {
        
         justifyContent: "flex-start",
         padding: '10px',
         width: '35%',
         background: '#f0f0f0',
         padding: '20px 20px 20px 20px',
         margin: '30px 10px 10px 30px'
         
     }
 
     return (
         <div>
           <div style= {mainDivStyle}>
             <div style={divStyle}>
                 <h3> All dishes </h3>
                   <ul>
                     { this.renderDishes() }
                   </ul> 
 
             </div> 
             <RestModel dish={this.state.currentDish} />
           </div>
           <AddDish onAdd={this.handleAddDish} />
         </div>
       
     );
  }
}

export default Main;

/* The if statement is required so as to Render the component 
 * on pages that have a div with an ID of "root";  
 */ 

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}