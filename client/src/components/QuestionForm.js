import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup"
import CloseButton from "react-bootstrap/CloseButton"
import { SButton } from "./SButton";


import "../styles/QuestionForm.css";

const QuestionForm = (props) => {
    const [components, setComponents] = useState([]);

    const addComponent = () => {
        setComponents([...components, <AnswerBox/>])
    }

    //TODO: try deleting specific components depending on button press.
    const removeComponent = () => {
        setComponents([...components].slice(0, components.length - 1));
    }

    let fieldStyle = {marginBottom: "15px", borderRadius:"0"}

    const AnswerBox = (props) => {
        return (
            <InputGroup>
                <Form.Control placeholder="Answer" style={fieldStyle} />
                <SButton onClick={removeComponent} style={fieldStyle} variant="secondary" className="edit-button" text="Delete" />
            </InputGroup>
        )
    }

    return (
        <Card className="question-card" style={{ width: "600px", backgroundColor: "#F1F1F1"}}>
            <Card.Body>

                <Form>
                    
                    <div className="edit-container">
                        <SButton onClick={addComponent} variant="secondary" className="edit-button" text="Add answer" />
                    </div>

                    <Form.Group>
                        <Form.Label>{props.label}</Form.Label>
                        <Form.Control placeholder="Question" style={fieldStyle}></Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <AnswerBox/>
                        {components.map((item, i) => (<AnswerBox key={i.toString()}/>))}
                    </Form.Group>

                    <div className="edit-container">
                        <SButton className="submit-button" text="Save" />
                    </div>

                </Form>

            </Card.Body>

        </Card>
    )
}

export { QuestionForm };