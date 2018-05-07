import React from 'react';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin:{
    marginRight:10,
    marginTop:10,
  },
  border:{
    borderBottom:"1px solid #b3b3b3",
    paddingBottom:10,
  }
};

const Recipes = (props) =>{
  let recipesList = props.objects.map((object, index1)=>{
    
    let ingrList = object.ingredients.map((ingred,index2)=>(
    <CardText key={`Rec${index1}Ind${index2}`}>
      {ingred}
    </CardText>
  ))
    
    return(
      <Card key={index1}>
        <CardHeader
          title={object.title}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true}>
          <h2 style={style.border}>Ingredients:</h2>
          {ingrList}
        </CardText>
        <CardText expandable={true}>
          <RaisedButton label="Delete" secondary={true} style={style.margin}
          onClick={() => props.onClickDelete(object)}/>
          <FlatButton label="Edit" onClick={() => props.onClickEdit(object)} />
        </CardText>
      </Card>
  )})
  return recipesList
};

export default Recipes;