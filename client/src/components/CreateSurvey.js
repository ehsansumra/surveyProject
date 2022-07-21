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

    const addForm = (data) => {
        setFormData([...formData, data]);
        setComponent();
    }

    const deleteForm = (index) => {
        const newArr = [...formData];
        newArr.splice(index, 1)
        setFormData(newArr);
    }

    const setQuestionForm = (type) => {
        setComponent(<QuestionForm key={type} type={type} addForm={addForm} />);
    }
    // Have each button press render a interactable component
    return (
        <div className="page">

            <div className="main-content">
                {formData.map((data, i) => (
                    <ConstructQuestion key={i} index={i} data={data} deleteForm={deleteForm} />
                )
                )}

                <Card className="create-box">
                    <Card.Header className="card-header" >Add a question.</Card.Header>
                    <Card.Body className="button-container">
                        <SButton variant="dark" onClick={() => setQuestionForm("Multiple Choice")} className="create-button" text="Multiple Choice" />
                        <SButton variant="dark" onClick={() => setQuestionForm("Check Boxes")} className="create-button" text="Check Boxes" />
                        <SButton variant="dark" onClick={() => setQuestionForm("Open Ended")} className="create-button" text="Open Ended" />
                    </Card.Body>
                </Card>

                <div className="break"></div>
                {component}




            </div>
        </div>

    )
}

export default CreateSurvey;