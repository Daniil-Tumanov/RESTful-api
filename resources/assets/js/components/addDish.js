import React, { Component } from 'react';

class AddDish extends Component {

  constructor(props) {
    super(props);
       /* Initialize the state. */
       this.state = {
          newDish: {
              title: '',
              description: '',
              composition: '',
              cost: 0,
              tags: '',
              img: ''
          }
        }
    
    //Boilerplate code for binding methods with `this`
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  
  /* This method dynamically accepts inputs and stores it in the state */
  handleInput(key, e) {
    
    /*Duplicating and updating the state */
    var state = Object.assign({}, this.state.newDish); 
    state[key] = e.target.value;
    this.setState({newDish: state });
  }
 /* This method is invoked when submit button is pressed */
  handleSubmit(e) {
    //preventDefault prevents page reload   
    e.preventDefault();
    /*A call back to the onAdd props. The control is handed over
     *to the parent component. The current state is passed 
     *as a param
     */
    this.props.onAdd(this.state.newDish);
  }

  render() {
    const divStyle = {
      position: 'relative',
      flexDirection: 'space-between',
      
      marginLeft: '30px'
    }
    return(
      <div> 
       
        <div style={divStyle}> 
         <h2> Add new dish </h2>
        <form onSubmit={this.handleSubmit}>
        <div class="form-row">
        <div class="col-sm-10">
          <label> 
            Title: 
            <input type="text" class="form-control" onChange={(e)=>this.handleInput('title',e)} />
          </label>
          </div>
          
          <div class="col-sm-10">
          <label> 
            Description: 
            <input  type="text" class="form-control" onChange={(e)=>this.handleInput('description',e)} />
          </label>
          </div>
          <div class="col-sm-10">
          <label> 
            Composition: 
            <input  type="text" class="form-control" onChange={(e)=>this.handleInput('composition',e)} />
          </label>
          </div>

          <div class="col-sm-10">
          <label>
            Cost:
            <input type="number" class="form-control" onChange={(e)=>this.handleInput('cost', e)}/>
          </label>
          </div>

          <div class="col-sm-10">
          <label> 
            Tags: 
            <input type="text" class="form-control" onChange={(e)=>this.handleInput('tags',e)} />
          </label>
          </div>

          <div class="col-sm-10">
          <label> 
            Image: 
            <input  type="file" class="form-control-file" onChange={(e)=>this.handleInput('img',e)} />
          </label>
          </div>

          <div class="col-sm-10">
          <input  type="submit" class="btn btn-primary" value="Submit" />
          </div>
          </div>
            </form>
      </div>
    </div>)
  }
}

export default AddDish;