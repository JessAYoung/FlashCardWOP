import React, { useState, useRef  } from 'react';
import { styled } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import { Button, Card, CardActions, CardContent, CardHeader, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, Typography } from '@mui/material';
import './App.css';
import SpinningWheel from './SpinningWheel';


let data = [   
  {
      question: "During team development, what is a key responsibility of the project manager in the \"Norming\" stage?",
      answerchoices:[ 
          "A. Celebrating team achievements",
          "B. Establishing team norms and roles",
          "C. Resolving conflicts and addressing differences",
          "D. Allowing team members to work independently",
      ],
      correctanswer: "A",
      reasoning: "In the \"Norming\" stage, the project manager fosters team cohesion by celebrating achievements and reinforcing positive team dynamics."
    },
    {
      question: "What is a characteristic of effective team leadership in project management?",
      answerchoices:[ 
          "A. Strict control and micromanagement",
          "B. Focusing solely on individual achievements",
          "C. Empowering team members and promoting collaboration",
          "D. Avoiding direct communication with team members",
      ],
      correctanswer: "C",
      reasoning: "Effective team leadership involves empowering team members, promoting collaboration, and creating a positive and supportive environment."
    },
    {
      question: "What is the purpose of a responsibility assignment matrix (RAM) in project management?",
      answerchoices:[ 
          "A. Documenting project risks",
          "B. Identifying project constraints",
          "C. Assigning roles and responsibilities to team members",
          "D. Defining project scope and objectives",
      ],
      correctanswer: "C",
      reasoning: "A Responsibility Assignment Matrix (RAM) is used to assign roles and responsibilities to team members, ensuring clarity in project execution."
    },
    {
      question: "During team development, what is a potential outcome of effective team collaboration in the \"Performing\" stage?",
      answerchoices:[ 
          "A. Increased conflicts and disagreements",
          "B. A decrease in team productivity",
          "C. High levels of trust and efficient task execution",
          "D. Limited focus on achieving project goals",
      ],
      correctanswer: "C",
      reasoning: "Effective team collaboration in the \"Performing\" stage leads to high levels of trust and efficient task execution, contributing to overall team success."
    },
    {
      question: "What is a key responsibility of the project manager in managing multicultural teams?",
      answerchoices:[ 
          "A. Promoting cultural homogeneity within the team",
          "B. Ignoring cultural differences to avoid conflicts",
          "C. Adapting communication and leadership styles to diverse cultures",
          "D. Limiting collaboration opportunities across cultures",
      ],
      correctanswer: "C",
      reasoning: "Managing multicultural teams involves adapting communication and leadership styles to accommodate diverse cultures and enhance collaboration."
    },
    {
      question: "During which phase is the project team focused on defining detailed project tasks, timelines, and resource requirements?",
      answerchoices:[
      "A. Initiating", 
      "B. Planning",
      "C. Executing", 
      "D. Monitoring and Controlling"
      ],
      correctanswer: "B",
      reasoning: "Detailed project tasks, timelines, and resource requirements are defined during the Planning phase."
    },
    {
      question: "What is the primary purpose of the Project Scope Statement in the project development life cycle?",
      answerchoices:[
          "A. Identify project stakeholders",
          "B. Define project objectives and goals",   
          "C. Describe how project risks will be managed",    
          "D. Establish the boundaries and deliverables of the project"
      ],
      correctanswer: "D",
      reasoning: "The Project Scope Statement establishes the boundaries and deliverables of the project, defining what is included and excluded."
    },
    {
      question: "During the Monitoring and Controlling phase, what process involves comparing actual project performance against the project management plan?",
      answerchoices:[ 
          "A. Risk Identification",
          "B. Earned Value Management",
          "C. Change Control",
          "D. Quality Assurance"
      ],
      correctanswer: "B",
      reasoning: "Earned Value Management is a process in the Monitoring and Controlling phase that involves comparing actual project performance against the project management plan."
    },
    {
      question: "In which phase does the project manager conduct a retrospective to gather insights and lessons learned for future projects?",
      answerchoices:[ 
          "A. Initiating",
          "B. Planning",
          "C. Executing",
          "D. Closing",
      ],
      correctanswer: "D",
      reasoning: "Conducting a retrospective and gathering lessons learned typically occurs during the Closing phase."
    },
    {
      question: "What is the primary focus of the Initiating phase in the project development life cycle?",
      answerchoices:[ 
          "A. Creating the project schedule",
          "B. Defining project objectives and goals",
          "C. Implementing the project plan",
          "D. Obtaining formal acceptance",
      ],
      correctanswer: "B",
      reasoning: "The Initiating phase focuses on defining project objectives, goals, and obtaining formal authorization to start the project."
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