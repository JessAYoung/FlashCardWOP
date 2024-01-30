import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from  '@mui/material/Typography';

let data = [
  {
    question: "Hi I am Question 1",
    answerchoices: "",
    answer: "",
    reasoning: ""
  },
  {
    question: "Hi I am Question 2",
    answerchoices: "",
    answer: "",
    reasoning: ""
  },
  {
    question: "Hi I am Question 3",
    answerchoices: "",
    answer: "",
    reasoning: ""
  },
  {
    question: "Hi I am Question 4",
    answerchoices: "",
    answer: "",
    reasoning: ""
  },
  {
    question: "Hi I am Question 5",
    answerchoices: "",
    answer: "",
    reasoning: ""
  },
  {
    question: "Hi I am Question 6",
    answerchoices: "",
    answer: "",
    reasoning: ""
  }
];
  

function BasicCard(props) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        {props.card.question}
      </CardContent>
      <CardActions>
        <Button onClick={()=>{setCardIndex(cardIndex - 1)}} variant= "outlined">Prev Card</Button>
        <Button onClick={()=>{setCardIndex(cardIndex + 1)}} variant= "outlined">Next Card</Button>
      </CardActions>
    </Card>
  );
}

function App() {
  const [cardIndex, setCardIndex] = React.useState(0)
  return (
    <div className="App">
      <header className="App-header">
         <BasicCard card={ data[cardIndex] }/>
      </header>
    </div>
  );
}

export default App;
