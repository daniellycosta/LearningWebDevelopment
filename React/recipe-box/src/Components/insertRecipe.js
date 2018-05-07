import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import RecipesCards from './recipesCards.js'

const style = {
  margin:{
    marginRight:10,
    marginTop:10,
  }
};

export default class DialogInsertRecipes extends React.Component {
  state = {
    open: false,
    valueName:"",
    isEditMode:false,
    editID:"",
    valueIngred:"",
    recipes:[{
        title:"",
        ingredients:[
          "",
          "",
          ""]
        }],
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  /*saveRecipes = () =>{
    localStorage.setItem("RecipesApp",
      JSON.stringify(this.state.recipes))
  };*/

  handleClose = () => {
    this.setState({open: false});
    let myobj={}
    if(this.state.isEditMode){
      myobj=this.state.recipes.map((item,index) => (index === this.state.editID) ? ({
            title: this.state.valueName,
            ingredients: this.state.valueIngred.split(',')
          }) : item)
    }else{
      myobj=[...this.state.recipes,{
        title: this.state.valueName,
        ingredients:this.state.valueIngred.split(','),
        }]
    }
    this.setState({recipes:myobj,isEditMode:false},()=>{
      localStorage.setItem("RecipesApp",JSON.stringify(this.state.recipes))
    })
  };

  handleChange = (event) => {
      this.setState({
        [event.target.id]: event.target.value,
      });
  };
 
  handleDelete = (cardId)=>{
    const toDelete = this.state.recipes.indexOf(cardId);
    this.setState({
      recipes: this.state.recipes.filter((item,index)=> index !== toDelete)
      },()=>{
        localStorage.setItem("RecipesApp",JSON.stringify(this.state.recipes))
      })
  }

  handleEdit = (cardId) =>{
    const id = this.state.recipes.indexOf(cardId);
    this.setState({
      isEditMode:true,
      editID:id,
      valueName:this.state.recipes[id].title,
      valueIngred:this.state.recipes[id].ingredients.join(","),
    },()=>{
        localStorage.setItem("RecipesApp",JSON.stringify(this.state.recipes))
      })
    this.handleOpen();
  }

  componentDidMount(){
    this.setState({
      recipes: JSON.parse(localStorage.getItem("RecipesApp"))}) 
  };

  render() {
    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];

    return (
      <div>
      <RecipesCards objects = {this.state.recipes} onClickDelete={this.handleDelete} onClickEdit={this.handleEdit}/>
        <RaisedButton
          label="Add Recipe" 
          primary={true}
          style={style.margin}
          onClick={this.handleOpen} />

        <Dialog
          title="Add New Recipe"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          Please insert the recipe name and ingredients (separated by commas)<br />
          <form onSubmit={this.handleClose}>
            <TextField ref={"teste"}
            hintText="Chocolate Cake"
            floatingLabelText="Recipe Name"
            id="valueName"
            value={this.state.valueName}
            onChange={this.handleChange}
            required
            /><br />
            <TextField ref={"teste2"}
            hintText="Eggs, Flour, Butter, Milk, Cocoa Powder..."
            floatingLabelText="Ingredients"
            multiLine={true}
            rows={2}
            id="valueIngred"
            value={this.state.valueIngred}
            onChange={this.handleChange}
            required        
            /><br />
            <input type="submit" style={{display:'none'}}/>
          </form>
        </Dialog>
      </div>
    );
  }
}