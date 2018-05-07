import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import RaisedButton from 'material-ui/RaisedButton';

import InsertRecipe from './Components/insertRecipe.js'

const initialRecipes = [{
        title:"Brigadeiro",
        ingredients:[
          "butter",
          "cocoa powder",
          "condensed milk"]
        },{
        title: "Roasted bread",
         ingredients:[
           "bread",
           "butter"]
        }]
if(!localStorage.getItem("RecipesApp"))
  localStorage.setItem("RecipesApp", JSON.stringify(initialRecipes))

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={}
  }

  render(){
    return(
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
      <InsertRecipe/>
    </MuiThemeProvider>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
  );
