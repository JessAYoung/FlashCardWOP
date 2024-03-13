import React, { useState, useRef  } from 'react';
import { styled } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import { Button, Card, CardActions, CardContent, CardHeader, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, Typography } from '@mui/material';
import './App.css';
import SpinningWheel from './SpinningWheel';


let data = [
  {
      question: "During stakeholder analysis, what does the term \"Legitimacy\" refer to?",
      answerchoices:[
           "A. The legality of stakeholder involvement",
           "B. The authority and credibility of a stakeholder",
           "C. The frequency of stakeholder communication",
           "D. The financial contributions of stakeholders",
          ],
      correctanswer: "B",
      reasoning: "Legitimacy refers to the authority and credibility of a stakeholder in the context of the project."
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
      question: "What is a fundamental principle of Agile project management?",
      answerchoices:[ 
          "A. Comprehensive documentation over working solutions",
          "B. Following a rigid plan over responding to change",
          "C. Contract negotiation over customer collaboration",
          "D. Delivering working solutions frequently over comprehensive documentation",
      ],
      correctanswer: "D",
      reasoning: "Agile values delivering working solutions frequently over extensive documentation, emphasizing the importance of tangible results."
    },
    {
      question: "In Agile, what is the purpose of a daily stand-up or Scrum meeting?",
      answerchoices:[ 
          "A. Monthly team celebration",
          "B. A daily team meeting for brief updates",
          "C. An annual project review",
          "D. Quarterly project planning session",
      ],
      correctanswer: "B",
      reasoning: "The daily stand-up or Scrum meeting is a brief daily session where team members provide updates on their progress and discuss any impediments."
    },
    {
      question: "What is the role of the product owner in Agile project management?",
      answerchoices:[ 
          "A. Managing the project schedule",
          "B. Representing the customer and prioritizing the product backlog",
          "C. Leading daily stand-up meetings",
          "D. Creating detailed project documentation",
      ],
      correctanswer: "B",
      reasoning: "The product owner represents the customer, prioritizes the product backlog, and ensures that the team is delivering value aligned with customer needs."
    },
    {
      question: "What is the purpose of the retrospective meeting in Agile?",
      answerchoices:[ 
          "A. Planning future sprints",
          "B. Reviewing and improving team processes",
          "C. Daily updates on project progress",
          "D. Conducting stakeholder meetings",
      ],
      correctanswer: "B",
      reasoning: "The retrospective meeting in Agile is for reviewing and improving team processes, focusing on continuous improvement."
    },
    {
      question: "What is the significance of the term \"Sprint\" in Agile project management?",
      answerchoices:[ 
          "A. A team collaboration session",
          "B. A specific time frame for project development work",
          "C. A stakeholder feedback meeting",
          "D. A tool for managing project risks",
      ],
      correctanswer: "D",
      reasoning: "In Agile, a \"Sprint\" refers to a specific time frame (usually 2-4 weeks) during which a set of development work is completed and made ready for review."
    },
    {
      question: "What Agile principle emphasizes the importance of maintaining a sustainable pace of work?",
      answerchoices:[
          "A. Continuous attention to technical excellence and good design",
          "B. Delivering working solutions frequently",
          "C. Welcome changing requirements, even late in development",
          "D. Agile processes promote sustainable development",],
      correctanswer: "D",
      reasoning: "The Agile principle \"Agile processes promote sustainable development\" highlights the importance of maintaining a sustainable pace to ensure long-term success."
    },
    {
      question: "What is the primary focus of Agile teams in terms of customer collaboration?",
      answerchoices:[ 
          "A. Detailed contract negotiation",
          "B. Following a predefined project plan",
          "C. Responding to change over following a plan",
          "D. Engaging in constant communication and collaboration with customers",
      ],
      correctanswer: "D",
      reasoning: "Agile emphasizes constant communication and collaboration with customers to ensure that the delivered product meets their evolving needs."
    },
    {
      question: "What Agile practice involves breaking down the project into small, manageable units of work?",
      answerchoices:[ 
          "A. Sprint planning",
          "B. Kanban",
          "C. Iterative development",
          "D. Incremental development",
      ],
      correctanswer: "C",
      reasoning: "Iterative development in Agile involves breaking down the project into small, manageable units of work, allowing for continuous improvement and adaptation."
    },
    {
      question: "What is the role of a Scrum Master in Agile project management?",
      answerchoices:[ 
          "A. Managing the project budget",
          "B. Ensuring team compliance with project plans",
          "C. Facilitating the Scrum process and removing impediments",
          "D. Creating detailed project documentation",
      ],
      correctanswer: "C",
      reasoning: "The Scrum Master's role is to facilitate the Scrum process, coach the team, and remove impediments to ensure smooth development."
    },
    {
      question: "What Agile value emphasizes the importance of individuals and interactions over processes and tools?",
      answerchoices:[ 
          "A. Customer collaboration over contract negotiation",
          "B. Responding to change over following a plan",
          "C. Individuals and interactions over processes and tools",
          "D. Working solutions over comprehensive documentation",
      ],
      correctanswer: "C",
      reasoning: "The Agile value \"Individuals and interactions over processes and tools\" emphasizes the significance of effective collaboration and communication within the team"
    },
    {
      question: "What is a core principle of Agile project management?",
      answerchoices:[ 
          "A. Detailed upfront planning",
          "B. Comprehensive documentation",
          "C. Responding to change over following a plan",
          "D. Strict adherence to a fixed schedule",
      ],
      correctanswer: "C",
      reasoning: "Agile values responding to change over following a rigid plan, emphasizing flexibility and adaptability."
    },
    {
      question: "What is the primary purpose of a Sprint Review in Agile Scrum?",
      answerchoices:[ 
          "A. Detailed project planning",
          "B. Demonstrating completed work to stakeholders",
          "C. Daily team coordination",
          "D. Conducting retrospective analysis",
      ],
      correctanswer: "B",
      reasoning: "The Sprint Review is conducted to demonstrate completed work to stakeholders and gather feedback for continuous improvement."
    },
    {
      question: "What is the role of a Product Owner in Agile project management?",
      answerchoices:[
          "A. Managing the team's daily tasks",
          "B. Representing the customer and prioritizing the product backlog",
          "C. Conducting Sprint planning sessions",
          "D. Ensuring compliance with project plans",
      ],
      correctanswer: "B",
      reasoning: "The Product Owner represents the customer, defines features, and prioritizes the product backlog to ensure customer needs are met."
    },
    {
      question: "What Agile practice involves breaking down work into small, manageable units and delivering them incrementally?",
      answerchoices:[
          "A. Scrum",
          "B. Kanban",
          "C. Waterfall",
          "D. Lean",
      ],
      correctanswer: "A",
      reasoning: "Scrum involves breaking down work into small, manageable units (Sprints) and delivering them incrementally for continuous improvement."
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