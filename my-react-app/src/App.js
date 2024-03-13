import React, { useState, useRef  } from 'react';
import { styled } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import { Button, Card, CardActions, CardContent, CardHeader, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, Typography } from '@mui/material';
import './App.css';
import SpinningWheel from './SpinningWheel';
import NavigationBar from './Navigation-Bar';
import DataSet1 from './DataSet1'; // Ensure these imports are correct
import DataSet2 from './DataSet2';
import DataSet3 from './DataSet3';
import DataSet4 from './DataSet4';
import DataSet5 from './DataSet5';

let data = [
  {
    question: "During which phase is the project team focused on defining detailed project tasks, timelines, and resource requirements?",
    answerchoices: [
      "A. Initiating",
      "B. Planning",
      "C. Executing",
      "D. Monitoring and Controlling"
    ],
    correctanswer: "B",
    reasoning: "The correct answer is B - Detailed project tasks, timelines, and resource requirements are defined during the Planning phase."
  },
    {
      question: "What is the primary purpose of the Project Scope Statement in the project development life cycle?",
      answerchoices: [
        "A. Identify project stakeholders",
        "B. Define project objectives and goals",
        "C. Describe how project risks will be managed",
        "D. Establish the boundaries and deliverables of the project"
      ],
      correctanswer: "D",
      reasoning: "The correct answer is D -The Project Scope Statement establishes the boundaries and deliverables of the project, defining what is included and excluded."
    },
    {
      question: "During the Monitoring and Controlling phase, what process involves comparing actual project performance against the project management plan?",
      answerchoices: [
        "A. Risk Identification",
        "B. Earned Value Management",
        "C. Change Control",
        "D. Quality Assurance"
      ],
      correctanswer: "B",
      reasoning: "Earned Value Management is a process in the Monitoring and Controlling phase that involves comparing actual project performance against the project management plan."
    },
    {
      question: "The correct answer is B - In which phase does the project manager conduct a retrospective to gather insights and lessons learned for future projects?",
      answerchoices: [
        "A. Initiating",
        "B. Planning",
        "C. Executing",
        "D. Closing"
      ],
      correctanswer: "D",
      reasoning: "The correct answer is D - Conducting a retrospective and gathering lessons learned typically occurs during the Closing phase."
    },
    {
      question: "What is the primary focus of the Initiating phase in the project development life cycle?",
      answerchoices: [
        "A. Creating the project schedule",
        "B. Defining project objectives and goals",
        "C. Implementing the project plan",
        "D. Obtaining formal acceptance"
      ],
      correctanswer: "B",
      reasoning: "The correct answer is B - The Initiating phase focuses on defining project objectives, goals, and obtaining formal authorization to start the project."
    },
    {
      question: "During which phase is the project team most likely to identify and plan for potential risks that may impact the project?",
      answerchoices: [
        "A. Initiating",
        "B. Planning",
        "C. Executing",
        "D. Closing"
      ],
      correctanswer: "B",
      reasoning: "The correct answer is B - Identifying and planning for potential risks is a key activity during the Planning phase to ensure effective risk management throughout the project."
    },
    {
      question: "What is a common challenge in virtual teams that project managers need to address?",
      answerchoices: [
        "A. Lack of team building activities",
        "B. Overemphasis on face-to-face communication",
        "C. Time zone differences and communication barriers",
        "D. Too much reliance on team autonomy"
      ],
      correctanswer: "C",
      reasoning: "The correct answer is C - Virtual teams often face challenges related to time zone differences and communication barriers, requiring project managers to address these issues."
    },
    {
      question: "What is a key responsibility of a project manager in building and maintaining a high-performing team?",
      answerchoices: [
        "A. Assigning tasks based on team members' preferences",
        "B. Resolving conflicts and promoting collaboration",
        "C. Limiting team autonomy to ensure control",
        "D. Minimizing communication to avoid misunderstandings"
      ],
      correctanswer: "B",
      reasoning: "The correct answer is B - Project managers play a crucial role in resolving conflicts and fostering collaboration to maintain a high-performing team."
    },
    {
      question: "In Tuckman's stages of team development, what happens during the 'Norming' stage?",
      answerchoices: [
        "A. Team members establish their roles and responsibilities",
        "B. Conflicts and differences are addressed, leading to cohesion",
        "C. The team experiences initial excitement and motivation",
        "D. Team members focus on achieving project milestones"
      ],
      correctanswer: "B",
      reasoning: "The correct answer is B - The 'Norming' stage is characterized by resolving conflicts and establishing cohesion within the team."
    },
    {
      question: "Which stakeholder management strategy involves keeping stakeholders satisfied by meeting their expectations and requirements?",
      answerchoices: [
        "A. Engagement",
        "B. Mitigation",
        "C. Neutral",
        "D. Maximization"
      ],
      correctanswer: "A",
      reasoning: "The correct answer is A - The engagement strategy focuses on meeting stakeholders' expectations and keeping them satisfied."
    }
  ];
  
  
  function App() { 
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <NavigationBar />
            <Routes>
              <Route path="/DataSet1" element={<DataSet1 />} />
              <Route path="/DataSet2" element={<DataSet2 />} />
              <Route path="/DataSet3" element={<DataSet3 />} />
              <Route path="/DataSet4" element={<DataSet4 />} />
              <Route path="/DataSet5" element={<DataSet5 />} />
            </Routes>
          </header>
        </div>
      </Router>
    );
  }
  
  export default App;