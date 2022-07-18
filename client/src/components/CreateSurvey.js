import React from 'react';
import '../styles/CreateSurvey.css';
import { SButton } from "./SButton"
import { MultipleChoice } from './MultipleChoice.js';
import Card from "react-bootstrap/Card"

const CreateSurvey = () => {
    let buttonStyle = {margin: "5px"}
    // Have each button press render a interactable component
    return (
        <div className="main-content">
            <div className="create-box">
                <div className="drop-down">Add a question.</div>
                <div className="button-container">
                    <SButton className="create-button" text="Multiple Choice" style={buttonStyle} />
                    <SButton className="create-button" text="Check Boxes" style={buttonStyle} />
                    <SButton className="create-button" text="Open Ended" style={buttonStyle} />
                </div>
            </div>
        </div>
    )
}

export default CreateSurvey;