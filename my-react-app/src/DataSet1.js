import React, { useState, useRef  } from 'react';
import { styled } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import { Button, Card, CardActions, CardContent, CardHeader, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, Typography } from '@mui/material';
import './App.css';
import SpinningWheel from './SpinningWheel';

let data = [
  {
    question: "During which phase is the project team most likely to identify and plan for potential risks that may impact the project?",
    answerchoices:[ 
        "A. Initiating",
        "B. Planning",
        "C. Executing",
        "D. Closing",
    ],
    correctanswer: "B",
    reasoning: "Identifying and planning for potential risks is a key activity during the Planning phase to ensure effective risk management throughout the project."
  },
  {
    question: "What is a common challenge in virtual teams that project managers need to address?",
    answerchoices:[
        "A. Lack of team building activities",
        "B. Overemphasis on face-to-face communication",
        "C. Time zone differences and communication barriers",
        "D. Too much reliance on team autonomy",
    ],
    correctanswer: "C",
    reasoning: "Virtual teams often face challenges related to time zone differences and communication barriers, requiring project managers to address these issues."
  },
  {
    question: "What is a key responsibility of a project manager in building and maintaining a high-performing team?",
    answerchoices:[ 
        "A. Assigning tasks based on team members' preferences",
        "B. Resolving conflicts and promoting collaboration",
        "C. Limiting team autonomy to ensure control",
        "D. Minimizing communication to avoid misunderstandings",
    ],
    correctanswer: "B",
    reasoning: "Project managers play a crucial role in resolving conflicts and fostering collaboration to maintain a high-performing team\n\n"
  },
  {
    question: "In Tuckman's stages of team development, what happens during the \"Norming\" stage?",
    answerchoices:[ 
        "A. Team members establish their roles and responsibilities",
        "B. Conflicts and differences are addressed, leading to cohesion",
        "C. The team experiences initial excitement and motivation",
        "D. Team members focus on achieving project milestones",
    ],
    correctanswer: "B",
    reasoning: "The \"Norming\" stage is characterized by resolving conflicts and establishing cohesion within the team."
  },
  {
    question: "Which stakeholder management strategy involves keeping stakeholders satisfied by meeting their expectations and requirements?",
    answerchoices:[ 
        "A. Engagement",
        "B. Mitigation",
        "C. Neutral",
        "D. Maximization",
    ],
    correctanswer: "A",
    reasoning: "The engagement strategy focuses on meeting stakeholders' expectations and keeping them satisfied"
  },
  {
    question: "What tool or technique is commonly used for documenting and managing stakeholder requirements?",
    answerchoices:[ 
        "A. Brainstorming",
        "B. RACI matrix",
        "C. Stakeholder register",
        "D. SWOT analysis",
    ],
    correctanswer: "C",
    reasoning: "The stakeholder register is a document used for recording and managing information related to stakeholders, including their requirements"
  },
  {
    question: "During team development, what role does a project manager typically play in the \"Forming\" stage?",
    answerchoices:[ 
        "A. Facilitating collaboration and resolving conflicts",
        "B. Establishing team norms and roles",
        "C. Celebrating team achievements",
        "D. Allowing team members to work independently",
    ],
    correctanswer: "B",
    reasoning: "In the \"Forming\" stage, the project manager helps establish team norms and roles to guide the team."
  },
  {
    question: "What is the purpose of a stakeholder communication plan?",
    answerchoices:[ 
        "A. To control stakeholder behavior",
        "B. To ensure stakeholders receive the right information at the right time",
        "C. To exclude certain stakeholders from project updates",
        "D. To delegate communication responsibilities to team members",
    ],
    correctanswer: "B",
    reasoning: "A stakeholder communication plan is designed to ensure that stakeholders receive the appropriate information in a timely manner."
  },
  {
    question: "During team development, what is a key activity in the \"Performing\" stage?",
    answerchoices:[ 
        "A. Resolving conflicts and addressing differences",
        "B. Establishing team norms and roles",
        "C. Focusing on achieving project goals and tasks",
        "D. Building cohesion and addressing team dynamics",
    ],
    correctanswer: "C",
    reasoning: "The \"Performing\" stage is characterized by a focus on achieving project goals and tasks as the team works efficiently together.\n"
  },
  {
    question: "What is the significance of a team charter in project management?",
    answerchoices:[ 
        "A. Developing a risk management plan",
        "B. Creating a stakeholder register",
        "C. Defining stakeholder communication requirements",
        "D. Identifying project constraints",
    ],
    correctanswer: "D",
    reasoning: "A team charter helps define the team's purpose, goals, roles, and responsibilities, contributing to effective project management."
  },
  {
    question: "In Agile, what does the term \"sprint\" refer to?",
    answerchoices:[ 
        "A. A team collaboration session",
        "B. A specific time frame for project development work",
        "C. A stakeholder feedback meeting",
        "D. A tool for managing project risks",
    ],
    correctanswer: "B",
    reasoning: "In Agile, a \"sprint\" refers to a specific time frame (usually 2-4 weeks) during which a set of development work is completed and made ready for review."
  },
  {
    question: "What is a key characteristic of a cross-functional team?",
    answerchoices:[ 
        "A. Limited diversity in skills and expertise",
        "B. Members with similar backgrounds and experiences",
        "C. Varied skills and expertise from different functional areas",
        "D. Strict adherence to a hierarchical structure",
    ],
    correctanswer: "C",
    reasoning: "Cross-functional teams are composed of members with varied skills and expertise from different functional areas, promoting diversity."
  },
  {
    question: "During team development, what is a key responsibility of the project manager in the \"Storming\" stage?",
    answerchoices:[
        "A. Facilitating collaboration and resolving conflicts",
        "B. Establishing team norms and roles",
        "C. Celebrating team achievements",
        "D. Encouraging team independence",
    ],
    correctanswer: "A",
    reasoning: "In the \"Storming\" stage, conflicts may arise, and the project manager plays a crucial role in facilitating collaboration and resolving conflicts."
  },
  {
    question: "What is the primary purpose of a team charter in project management?",
    answerchoices:[ 
        "A. Developing a risk management plan",
        "B. Defining project scope and objectives",
        "C. Creating a stakeholder register",
        "D. Identifying project constraints",
    ],
    correctanswer: "B",
    reasoning: "A team charter helps define the team's purpose, goals, roles, and responsibilities, contributing to effective project management."
  },
  {
    question: "During the \"Performing\" stage of team development, what is a key characteristic of team dynamics?",
    answerchoices:[ 
        "A. Frequent conflicts and disagreements",
        "B. Focus on achieving project goals and tasks",
        "C. Formation of team norms and roles",
        "D. Independence and isolation of team members",
    ],
    correctanswer: "B",
    reasoning: "The \"Performing\" stage is characterized by a focus on achieving project goals and tasks as the team works efficiently together.\n"
  },
  {
    question: "What is a common challenge in managing virtual teams?",
    answerchoices:[ 
        "A. Overemphasis on face-to-face communication",
        "B. Limited availability of online collaboration tools",
        "C. Time zone differences and communication barriers",
        "D. Homogeneous team composition",
    ],
    correctanswer: "C",
    reasoning: "Virtual teams often face challenges related to time zone differences and communication barriers, requiring effective management."
  },
  {
    question: "What role does a project manager play during the \"Forming\" stage of team development?",
    answerchoices:[ 
        "A. Establishing team norms and roles",
        "B. Celebrating team achievements",
        "C. Resolving conflicts and addressing differences",
        "D. Focusing on achieving project milestones",
    ],
    correctanswer: "A",
    reasoning: "In the \"Forming\" stage, the project manager helps establish team norms and roles to guide the team."
  },
  {
    question: "What is a key benefit of effective team communication in project management?",
    answerchoices:[ 
        "A. Increased team autonomy",
        "B. Minimization of conflicts and disagreements",
        "C. Isolation of team members",
        "D. Limited collaboration opportunities",
    ],
    correctanswer: "B",
    reasoning: "Effective team communication contributes to minimizing conflicts and disagreements, fostering a positive team environment."
  },
  {
    question: "In Agile, what is the significance of the term \"Daily Stand-up\" or \"Scrum\"?",
    answerchoices:[ 
        "A. Monthly team celebration",
        "B. A daily team meeting for brief updates",
        "C. An annual project review",
        "D. Quarterly project planning session",
    ],
    correctanswer: "B",
    reasoning: "The Daily Stand-up or Scrum is a brief daily meeting in Agile, where team members provide updates on their progress and discuss any impediments."
  },
  {
    question: "What is a potential consequence of poor team communication in project management?",
    answerchoices:[ 
        "A. Increased team cohesion",
        "B. Enhanced problem-solving abilities",
        "C. Misunderstandings, conflicts, and project delays",
        "D. Accelerated project timelines",
    ],
    correctanswer: "C",
    reasoning: "Poor team communication can lead to misunderstandings, conflicts, and project delays, emphasizing the importance of effective communication."
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