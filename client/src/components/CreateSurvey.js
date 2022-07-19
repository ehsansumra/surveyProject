import React, {useState} from 'react';
import '../styles/CreateSurvey.css';
import { SButton } from "./SButton"
import { MultipleChoice } from './MultipleChoice.js';
import Card from "react-bootstrap/Card"
import { QuestionForm } from './QuestionForm';
const CreateSurvey = () => {
    let buttonStyle = {margin: "5px"}

    const [component, setComponent] = useState(null);
    
    const addQuestionForm = (title) => {
        setComponent(<QuestionForm label={title} title={title}/>);
    }

    // Have each button press render a interactable component
    return (
        <div className="main-content">
            <div className="create-box">
                <div className="drop-down">Add a question.</div>
                <div className="button-container">
                    <SButton onClick={() => addQuestionForm("Multiple Choice")} className="create-button" text="Multiple Choice" style={buttonStyle} />
                    <SButton onClick={() => addQuestionForm("Check Boxes")} className="create-button" text="Check Boxes" style={buttonStyle} />
                    <SButton onClick={() => addQuestionForm("Open Ended")} className="create-button" text="Open Ended" style={buttonStyle} />
                </div>
            </div>

            <div className="break"></div>
            {component}

        </div>
        
    )
}

export default CreateSurvey;