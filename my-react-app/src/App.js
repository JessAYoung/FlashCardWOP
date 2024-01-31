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
    questions: "During which phase is the project team focused on defining detailed project tasks, timelines, and resource requirements?",
    answerchoices: "A. Initiating B. Planning C. Executing D. Monitoring and Controlling\n",
    correctanswer: "B",
    reasoning: "Detailed project tasks, timelines, and resource requirements are defined during the Planning phase."
  },
  {
    questions: "What is the primary purpose of the Project Scope Statement in the project development life cycle?",
    answerchoices: "- A. Identify project stakeholders\n    - B. Define project objectives and goals\n    - C. Describe how project risks will be managed\n    - D. Establish the boundaries and deliverables of the project\n",
    correctanswer: "D",
    reasoning: "The Project Scope Statement establishes the boundaries and deliverables of the project, defining what is included and excluded."
  },
  {
    questions: "During the Monitoring and Controlling phase, what process involves comparing actual project performance against the project management plan?",
    answerchoices: "- A. Risk Identification\n    - B. Earned Value Management\n    - C. Change Control\n    - D. Quality Assurance\n",
    correctanswer: "B",
    reasoning: "Earned Value Management is a process in the Monitoring and Controlling phase that involves comparing actual project performance against the project management plan."
  },
  {
    questions: "In which phase does the project manager conduct a retrospective to gather insights and lessons learned for future projects?",
    answerchoices: "- A. Initiating\n    - B. Planning\n    - C. Executing\n    - D. Closing\n",
    correctanswer: "D",
    reasoning: "Conducting a retrospective and gathering lessons learned typically occurs during the Closing phase."
  },
  {
    questions: "What is the primary focus of the Initiating phase in the project development life cycle?",
    answerchoices: "- A. Creating the project schedule\n    - B. Defining project objectives and goals\n    - C. Implementing the project plan\n    - D. Obtaining formal acceptance\n",
    correctanswer: "B",
    reasoning: "The Initiating phase focuses on defining project objectives, goals, and obtaining formal authorization to start the project."
  },
  {
    questions: "During which phase is the project team most likely to identify and plan for potential risks that may impact the project?",
    answerchoices: "- A. Initiating\n    - B. Planning\n    - C. Executing\n    - D. Closing\n",
    correctanswer: "B",
    reasoning: "Identifying and planning for potential risks is a key activity during the Planning phase to ensure effective risk management throughout the project."
  },
];

function BasicCard(props) {
  const handleNextCard = () => {
    props.setCardIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrevCard = () => {
    props.setCardIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="body1" color="text.secondary">
          {props.card.questions}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handlePrevCard} variant="outlined">
          Prev Card
        </Button>
        <Button onClick={handleNextCard} variant="outlined">
          Next Card
        </Button>
      </CardActions>
    </Card>
  );
}

function App() {
  const [cardIndex, setCardIndex] = React.useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <BasicCard card={data[cardIndex]} setCardIndex={setCardIndex} />
      </header>
    </div>
  );
}

export default App;

