import React, { useState, useEffect } from 'react';
import '../styles/CreateSurvey.css';
import { SButton } from "./SButton"
import { QuestionForm } from './QuestionForm';
import { ConstructQuestion } from "./ConstructQuestion";
import Card from "react-bootstrap/Card"


const CreateSurvey = () => {

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

    const moveDown = (index) => {
        if (!formData[index + 1]) return;
        let newArr = [...formData];
        let temp = newArr[index + 1];
        
        newArr[index + 1] = newArr[index];
        newArr[index] = temp;

        setFormData(newArr);
    }

    const moveUp = (index) => {
        if (!formData[index - 1]) return;
        let newArr = [...formData];

        let temp = newArr[index - 1];
        newArr[index - 1] = newArr[index];
        newArr[index] = temp;

        setFormData(newArr);
    }

    const setQuestionForm = (type) => {
        setComponent(<QuestionForm key={type} type={type} addForm={addForm} />);
    }

    return (
        <div className="page">

            <div className="main-content">
                {formData.map((data, i) => (
                    <ConstructQuestion key={i} index={i} data={data} deleteForm={deleteForm} handleMoveUp={moveUp} handleMoveDown={moveDown}/>
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