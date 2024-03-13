import React, { useState, useRef  } from 'react';
import { styled } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import { Button, Card, CardActions, CardContent, CardHeader, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, Typography } from '@mui/material';
import './App.css';
import SpinningWheel from './SpinningWheel';


let data = [
  {
    question: "In project management, what does the term \"Team Norms\" refer to?",
    answerchoices:[
        "A. Strict rules limiting team interactions",
        "B. Agreed-upon standards of behavior within the team",
        "C. Exclusivity of team communication",
        "D. Isolation of team members",
    ],
    correctanswer: "B",
    reasoning: "Team norms refer to agreed-upon standards of behavior within the team, promoting a shared understanding of how team members should interact.\n"
  },
  {
    question: "What is the primary purpose of stakeholder identification in project management?",
    answerchoices:[ 
        "A. To exclude certain individuals from project communications",
        "B. To determine who will have authority over the project",
        "C. To identify and analyze individuals or groups who may impact or be impacted by the project",
        "D. To assign roles and responsibilities to team members",
    ],
    correctanswer: "C",
    reasoning: "Stakeholder identification is the process of identifying and analyzing individuals or groups who may impact or be impacted by the project, ensuring effective stakeholder management."
  },
  {
    question: "What tool or technique is commonly used for categorizing stakeholders based on their level of influence and interest in the project?",
    answerchoices:[ 
        "A. Stakeholder Analysis Matrix",
        "B. RACI matrix",
        "C. Project Charter",
        "D. Work Breakdown Structure (WBS)",
    ],
    correctanswer: "A",
    reasoning: "The Stakeholder Analysis Matrix is a tool used for categorizing stakeholders based on their level of influence and interest in the project."
  },
  {
    question: "What is the key benefit of effective stakeholder engagement in project management?",
    answerchoices:[ 
        "A. Decreased project complexity",
        "B. Increased project risks",
        "C. Enhanced project success and stakeholder satisfaction",
        "D. Limited stakeholder involvement",
    ],
    correctanswer: "C",
    reasoning: "Effective stakeholder engagement contributes to enhanced project success and stakeholder satisfaction, creating positive project outcomes."
  },
  {
    question: "During stakeholder analysis, what is the significance of assessing stakeholders' attitude and potential influence?",
    answerchoices:[ 
        "A. To categorize stakeholders based on their level of interest",
        "B. To identify stakeholders with conflicting interests",
        "C. To determine the budget allocation for stakeholder engagement",
        "D. To prioritize communication and engagement efforts",
    ],
    correctanswer: "D",
    reasoning: "Assessing stakeholders' attitude and potential influence helps prioritize communication and engagement efforts, focusing on those with higher impact."
  },
  {
    question: "What is the primary objective of stakeholder engagement planning in project management?",
    answerchoices:[ 
        "A. To exclude certain stakeholders from project activities",
        "B. To identify potential conflicts among stakeholders",
        "C. To define how stakeholders will be involved in project activities",
        "D. To create a hierarchical structure of stakeholders",
    ],
    correctanswer: "C",
    reasoning: "Stakeholder engagement planning is done to define how stakeholders will be involved in project activities and ensure effective communication."
  },
  {
    question: "What stakeholder engagement strategy involves continuous collaboration and shared decision-making with stakeholders?",
    answerchoices:[ 
        "A. Monitor",
        "B. Inform",
        "C. Collaborate",
        "D. Control",
    ],
    correctanswer: "C",
    reasoning: "The \"Collaborate\" engagement strategy involves continuous collaboration and shared decision-making with stakeholders."
  },
  {
    question: "In stakeholder management, what does the term \"Salience\" refer to?",
    answerchoices:[
        "A. The importance or significance of a stakeholder's role",
        "B. The frequency of stakeholder communication",
        "C. The geographical location of stakeholders",
        "D. The timeline for project completion",
    ],
    correctanswer: "A",
    reasoning: "Salience refers to the importance or significance of a stakeholder's role in the project.\n"
  },
  {
    question: "What is the primary purpose of stakeholder engagement assessment in project management?",
    answerchoices:[ 
        "A. To limit stakeholder communication",
        "B. To identify potential risks associated with stakeholders",
        "C. To exclude stakeholders from project activities",
        "D. To assess and adjust engagement strategies based on stakeholder feedback",
    ],
    correctanswer: "D",
    reasoning: "Stakeholder engagement assessment is done to assess and adjust engagement strategies based on stakeholder feedback, ensuring effective communication.\n"
  },
  {
    question: "What is the significance of stakeholder communication requirements in project management?",
    answerchoices:[ 
        "A. To limit communication with certain stakeholders",
        "B. To define the frequency and method of communication with stakeholders",
        "C. To exclude stakeholders from project activities",
        "D. To create a stakeholder hierarchy",
    ],
    correctanswer: "B",
    reasoning: "Stakeholder communication requirements define the frequency and method of communication with stakeholders, ensuring effective and targeted communication."
  },
  {
    question: "During stakeholder engagement, what is the purpose of a communication matrix?\n",
    answerchoices:[ 
        "A. To exclude certain stakeholders from project communications",
        "B. To identify potential risks associated with stakeholders",
        "C. To define the frequency and method of communication with stakeholders",
        "D. To create a stakeholder hierarchy",
    ],
    correctanswer: "C",
    reasoning: "A communication matrix is used to define the frequency and method of communication with stakeholders, ensuring effective and targeted communication."
  },
  {
    question: "What is the first step in the stakeholder management process?",
    answerchoices:[ 
        "A. Identify stakeholders",
        "B. Analyze stakeholders",
        "C. Plan stakeholder engagement",
        "D. Monitor and control stakeholders",
    ],
    correctanswer: "A",
    reasoning: "The initial step in stakeholder management is to identify all potential stakeholders involved in the project."
  },
  {
    question: "What is the primary purpose of a stakeholder register?",
    answerchoices:[ 
        "A. To document stakeholder conflicts",
        "B. To prioritize stakeholders",
        "C. To record stakeholder information",
        "D. To create a stakeholder hierarchy",
    ],
    correctanswer: "C",
    reasoning: "A stakeholder register is used to record and document information about identified stakeholders, including their interests and expectations."
  },
  {
    question: "In stakeholder analysis, what does the power/interest grid assess?\n",
    answerchoices:[ 
        "A. Stakeholder influence and interest in the project",
        "B. Stakeholder authority and hierarchy",
        "C. Stakeholder communication preferences",
        "D. Stakeholder financial contributions",
    ],
    correctanswer: "A",
    reasoning: "The power/interest grid assesses both the influence and interest of stakeholders in the project, helping prioritize engagement efforts"
  },
  {
    question: "What is the primary objective of stakeholder engagement planning?",
    answerchoices:[
        "A. Exclude certain stakeholders from project activities",
        "B. Minimize stakeholder influence",
        "C. Define how stakeholders will be involved in project activities",
        "D. Create a hierarchical structure of stakeholders",
    ],
    correctanswer: "C",
    reasoning: "Stakeholder engagement planning aims to define how stakeholders will be involved in project activities and ensure effective communication."
  },
  {
    question: "What stakeholder engagement strategy involves continuous collaboration and shared decision-making with stakeholders?",
    answerchoices:[ 
        "A. Monitor",
        "B. Inform",
        "C. Collaborate",
        "D. Control",
    ],
    correctanswer: "C",
    reasoning: "The \"Collaborate\" engagement strategy involves continuous collaboration and shared decision-making with stakeholders."
  },
  {
    question: "During stakeholder communication, what is the purpose of a communication matrix?\n",
    answerchoices:[
        "A. To exclude certain stakeholders from project communications",
        "B. To identify potential risks associated with stakeholders",
        "C. To define the frequency and method of communication with stakeholders",
        "D. To create a stakeholder hierarchy",
    ],
    correctanswer: "C",
    reasoning: "A communication matrix is used to define the frequency and method of communication with stakeholders, ensuring effective and targeted communication."
  },
  {
    question: "What is the key benefit of effective stakeholder engagement?",
    answerchoices:[ 
        "A. Decreased project complexity",
        "B. Increased project risks",
        "C. Enhanced project success and stakeholder satisfaction",
        "D. Limited stakeholder involvement",
    ],
    correctanswer: "C",
    reasoning: "Effective stakeholder engagement contributes to enhanced project success and stakeholder satisfaction, creating positive project outcomes."
  },
  {
    question: "What tool or technique is commonly used for managing and controlling stakeholder engagement?",
    answerchoices:[ 
        "A. Stakeholder Analysis Matrix",
        "B. RACI matrix",
        "C. Stakeholder register",
        "D. Issue log",
    ],
    correctanswer: "D",
    reasoning: "The issue log is commonly used for managing and controlling stakeholder engagement by documenting and tracking issues related to stakeholders."
  },
  {
    question: "What is the significance of stakeholder communication requirements in project management?",
    answerchoices:[ 
        "A. To limit communication with certain stakeholders",
        "B. To define the frequency and method of communication with stakeholders",
        "C. To exclude stakeholders from project activities",
        "D. To create a stakeholder hierarchy",
    ],
    correctanswer: "B",
    reasoning: "Stakeholder communication requirements define the frequency and method of communication with stakeholders, ensuring effective and targeted communication."
  },
];
  
  
  function BasicCard({ card, setCardIndex, selectedAnswer, setSelectedAnswer }) {
    const [expanded, setExpanded] = useState(false);
    //const [selectedAnswer, setSelectedAnswer] = useState('');
    const [showFeedback, setShowFeedback] = useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
    const handleAnswerChange = (event) => {
      setSelectedAnswer(event.target.value);
      setShowFeedback(false); // Reset feedback visibility when a new answer is selected
    };
  
    const handleSubmit = () => {
      setShowFeedback(true); // Show feedback on submit
    };
  
    const isCorrect = selectedAnswer === card.correctanswer;
  
    return (
      <Card sx={{ maxWidth: 345, minWidth: 275 }}>
        <CardHeader title={card.question} />
        <CardContent>
          <FormControl component="fieldset" variant="standard">
            <FormGroup>
              {card.answerchoices.map((choice, index) => (
                <FormControlLabel
                  key={index}
                  control={
                    <Checkbox
                      checked={selectedAnswer === choice[0]} // Compare letter answer 
                      onChange={handleAnswerChange}
                      value={choice[0]}
                    />
                  }
                  label={choice}
                />
              ))}
            </FormGroup>
            {showFeedback && (
              <FormHelperText>
                {isCorrect ? "Correct answer! 🎉" : "Incorrect answer. Try again! ❌"}
              </FormHelperText>
            )}
          </FormControl>
        </CardContent>
        <CardActions disableSpacing>
          <Button onClick={handleExpandClick} variant="outlined"> 
            {expanded ? "Hide Answer" : "Show Answer"}
          </Button>
          <Button onClick={handleSubmit} variant="outlined">Check Answer</Button>
        </CardActions>
        {expanded && (
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Reasoning: {card.reasoning}
            </Typography>
          </CardContent>
        )}
      </Card>
    );
  }
  
  function App() {
    const [cardIndex, setCardIndex] = React.useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [showFeedback, setShowFeedback] = useState(false);
  
    const handleNext = () => {
      setCardIndex((prevIndex) => (prevIndex + 1) % data.length);
      setSelectedAnswer(''); // Reset selected answer
      setShowFeedback(false); // Hide feedback
    };
  
    const handlePrev = () => {
      setCardIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
      setSelectedAnswer(''); // Reset selected answer
      setShowFeedback(false); // Hide feedback
    };
  
    const handleRandomize = () => {
      const randomIndex = Math.floor(Math.random() * data.length);
      setCardIndex(randomIndex);
      setSelectedAnswer(''); // Reset selected answer
      setShowFeedback(false); // Hide feedback
    };
  
    return (
      <div className="App">
        <header className="App-header">
          <SpinningWheel />
          <Button onClick={handleRandomize} variant="outlined" style={{ marginBottom: '1rem' }}>Randomize</Button>
          <BasicCard card={data[cardIndex]} setCardIndex={setCardIndex} setSelectedAnswer={setSelectedAnswer} setShowFeedback={setShowFeedback} selectedAnswer={selectedAnswer} showFeedback={showFeedback} />
          <CardActions>
            <Button onClick={handlePrev} variant="outlined">
              Prev Card
            </Button>
            <Button onClick={handleNext} variant="outlined">
              Next Card
            </Button>
          </CardActions>
        </header>
      </div>
    );
  }
  
  export default App;