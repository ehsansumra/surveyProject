import React, { useState, useEffect } from 'react';
import '../styles/CreateSurvey.css';
import { SButton } from "./SButton"
import { QuestionForm } from './QuestionForm';
import { ConstructQuestion } from "./ConstructQuestion";
import Card from "react-bootstrap/Card"


const CreateSurvey = () => {

    let buttonStyle = { margin: "5px" }

    const [component, setComponent] = useState(null);

    const [formData, setFormData] = useState([]);

    const updateForm = (data) => {
        setFormData([...formData, data]);
        setComponent();
    }

    const setQuestionForm = (title) => {
        setComponent(<QuestionForm key={title} title={title} updateForm={updateForm} />);
    }
    // Have each button press render a interactable component
    return (
        <>

            <div className="main-content">
                {formData.map((data, i) => (
                    <>
                        <ConstructQuestion key={i} data={data} />
                        <div className="break"></div>
                    </>

                )
                )}

                <Card className="create-box">
                    <Card.Header >Add a question.</Card.Header>
                    <Card.Body className="button-container">
                        <SButton onClick={() => setQuestionForm("Multiple Choice")} className="create-button" text="Multiple Choice" />
                        <SButton onClick={() => setQuestionForm("Check Boxes")} className="create-button" text="Check Boxes"  />
                        <SButton onClick={() => setQuestionForm("Open Ended")} className="create-button" text="Open Ended" />
                    </Card.Body>
                </Card>

                <div className="break"></div>
                {component}




            </div>
        </>

    )
}

export default CreateSurvey;