import React, { useState, useRef  } from 'react';
import { styled } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import { Button, Card, CardActions, CardContent, CardHeader, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, Typography } from '@mui/material';
import './App.css';
import SpinningWheel from './SpinningWheel';


let data = [ 
  {
    question: "What Agile value emphasizes the importance of individuals and interactions over processes and tools?",
    answerchoices:[
        "A. Responding to change over following a plan",
        "B. Individuals and interactions over processes and tools",
        "C. Deliver working solutions frequently over comprehensive documentation",
        "D. Welcome changing requirements, even late in development",
    ],
    correctanswer: "B",
    reasoning: "The Agile value \"Individuals and interactions over processes and tools\" underscores the significance of effective collaboration and communication within the team."
  },
  {
    question: "What is a key characteristic of Agile project management?",
    answerchoices:[
        "A. Strict adherence to a detailed project plan",
        "B. Embracing change and delivering value iteratively",
        "C. Following a rigid schedule with minimal flexibility",
        "D. Extensive upfront documentation",
    ],
    correctanswer: "B",
    reasoning: "Agile project management emphasizes embracing change and delivering value iteratively over following a rigid plan."
  },
  {
    question: "What is the purpose of a Sprint in Agile Scrum?",
    answerchoices:[
        "A. A continuous development phase",
        "B. A fixed time frame for iterative work",
        "C. A stakeholder feedback session",
        "D. A project status report",
    ],
    correctanswer: "B",
    reasoning: "In Agile Scrum, a Sprint is a fixed time frame during which a specific amount of work is completed and ready for review."
  },
  {
    question: "What role does the Product Owner play in Agile project management?",
    answerchoices:[
        "A. Managing daily team tasks",
        "B. Representing the customer and prioritizing the product backlog",
        "C. Facilitating Scrum meetings",
        "D. Creating detailed project plans",
    ],
    correctanswer: "B",
    reasoning: "The Product Owner represents the customer, defines features, and prioritizes the product backlog to align with customer needs."
  },
  {
    question: "What Agile practice focuses on continuous improvement by visualizing work and limiting work in progress?",
    answerchoices:[
        "A. Scrum",
        "B. Kanban",
        "C. Extreme Programming (XP)",
        "D. Lean",
    ],
    correctanswer: "B",
    reasoning: "Kanban is an Agile practice that focuses on continuous improvement by visualizing work on a board and limiting work in progress."
  },
  {
    question: "What is the primary goal of a retrospective meeting in Agile project management?",
    answerchoices:[
        "A. Planning future Sprints",
        "B. Reviewing and improving team processes",
        "C. Conducting stakeholder meetings",
        "D. Providing daily project updates",
    ],
    correctanswer: "B",
    reasoning: "The primary goal of a retrospective meeting in Agile is to review and improve team processes, fostering continuous improvement."
  },
  {
    question: "In which process group does project planning primarily occur according to the PMBOK Guide?",
    answerchoices:[
        "A. Initiating",
        "B. Planning",   
        "C. Executing",
        "D. Monitoring and Controlling",
    ],
    correctanswer: "B",
    reasoning: "Project planning primarily occurs in the Planning process group, where detailed plans and documentation are developed."
  },
  {
    question: "What is the purpose of the Scope Baseline in project management?",
    answerchoices:[
        "A. To define the project schedule",
        "B. To provide a basis for project execution and control",
        "C. To identify project risks",
        "D. To document stakeholder communication requirements",
    ],
    correctanswer: "B",
    reasoning: "The Scope Baseline provides a basis for project execution and control, including the project scope statement, WBS, and WBS dictionary"
  },
  {
    question: "Which type of dependency is characterized by one task not starting until another task finishes?",
    answerchoices:[
        "A. Start-to-Start (SS)",
        "B. Finish-to-Start (FS)",
        "C. Start-to-Finish (SF)",
        "D. Finish-to-Finish (FF)",
    ],
    correctanswer: "B",
    reasoning: "In a Finish-to-Start (FS) dependency, one task cannot start until another task finishes.\n"
  },
  {
    question: "What is the primary output of the Perform Quality Assurance process in the PMBOK Guide?",
    answerchoices:[
        "A. Quality metrics",
        "B. Quality control measurements",
        "C. Quality management plan",
        "D. Quality audit",
    ],
    correctanswer:"D",
    reasoning: "The primary output of the Perform Quality Assurance process is a Quality Audit, which is a structured review of quality control results."
  },
  {
    question: "In which knowledge area is the Cost Performance Index (CPI) used to assess project performance?",
    answerchoices:[
        "A. Cost Management",
        "B. Schedule Management",  
        "C. Risk Management", 
        "D. Quality Management",
    ],
    correctanswer: "A",
    reasoning: "The Cost Performance Index (CPI) is used to assess project performance in the Cost Management knowledge area."
  },
  {
    question: "What document provides a comprehensive framework for managing a project by defining its policies, procedures, and templates?",
    answerchoices:[
        "A. Project Charter",
        "B. Project Management Plan",
        "C. Organizational Process Assets",
        "D. Project Scope Statement",
    ],
    correctanswer: "B",
    reasoning: "The Project Management Plan provides a comprehensive framework for managing a project, including policies, procedures, and templates."
  },
  {
    question: "*What is the purpose of a Risk Register in project management according to the PMBOK Guide?",
    answerchoices:[
        "A. To identify project stakeholders",
        "B. To document project issues",
        "C. To identify and track project risks",
        "D. To define project scope",
    ],
    correctanswer: "C",
    reasoning: "The Risk Register is used to identify and track project risks, including their probability, impact, and planned responses."
  },
  {
    question: "In which process does the project team acquire goods and services from outside the performing organization?",
    answerchoices:[
        "A. Plan Procurement Management",
        "B. Conduct Procurements",
        "C. Control Procurements",
        "D. Close Procurements",
    ],
    correctanswer: "B",
    reasoning: "The process of acquiring goods and services from outside the performing organization is conducted in the Conduct Procurements process."
  },
  {
    question: "What is the primary purpose of the Close Project or Phase process in the PMBOK Guide?",
    answerchoices:[
        "A. To finalize all project documentation",
        "B. To obtain formal acceptance of the project deliverables",
        "C. To conduct a final project status meeting",
        "D. To close out all contracts associated with the project or phase",
    ],
    correctanswer: "D",
    reasoning: "The primary purpose of the Close Project or Phase process is to close out all contracts associated with the project or phase."
  },
  {
    question: "Which organizational structure is characterized by a project manager having full authority over the project, including resources and budget?",
    answerchoices:[
        "A. Functional organization",
        "B. Matrix organization",
        "C. Projectized organization",
        "D. Balanced matrix organization",
    ],
    correctanswer: "C",
    reasoning: "In a Projectized organization, the project manager has full authority over the project, including resources and budget."
  },
  {
    question: "What Agile value emphasizes the importance of working solutions over comprehensive documentation?",
    answerchoices:[
        "A. Responding to change over following a plan",
        "B. Individuals and interactions over processes and tools",
        "C. Deliver working solutions frequently over comprehensive documentation",
        "D. Customer collaboration over contract negotiation",
    ],
    correctanswer: "C",
    reasoning: "The Agile value \"Deliver working solutions frequently over comprehensive documentation\" highlights the emphasis on tangible outcomes."
  },
  {
    question: "In Agile, what is the purpose of a Daily Stand-up or Scrum meeting?",
    answerchoices:[
        "A. Monthly project status update",
        "B. Daily coordination and communication within the team",
        "C. Quarterly project planning session",
        "D. Annual project review",
    ],
    correctanswer: "B",
    reasoning: "The Daily Stand-up or Scrum meeting is a short daily session for team members to coordinate, share updates, and discuss impediments."
  },
  {
    question: "What Agile principle encourages sustainable development and a steady pace of work?",
    answerchoices:[
        "A. Welcome changing requirements, even late in development",
        "B. Continuous attention to technical excellence and good design",
        "C. Deliver working solutions frequently",
        "D. Customer collaboration over contract negotiation",
    ],
    correctanswer: "B",
    reasoning: "The Agile principle \"Continuous attention to technical excellence and good design\" emphasizes sustainable development practices."
  },
  {
    question: "What Agile practice involves visualizing work on a board and limiting work in progress to improve flow?",
    answerchoices:[ 
        "A. Scrum",
        "B. Kanban",
        "C. Lean",
        "D. Extreme Programming (XP)",
    ],
    correctanswer: "B",
    reasoning: "Kanban involves visualizing work on a board and limiting work in progress to optimize flow and efficiency."
  },
  {
    question: "What is the purpose of a retrospective meeting in Agile project management?",
    answerchoices:[
        "A. Planning future Sprints",
        "B. Reviewing and improving team processes",
        "C. Conducting stakeholder meetings",
        "D. Daily updates on project progress",
    ],
        correctanswer: "B",
    reasoning: "The retrospective meeting in Agile is for reviewing and improving team processes, fostering continuous improvement."
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