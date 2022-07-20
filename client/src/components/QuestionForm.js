import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup"
import CloseButton from "react-bootstrap/CloseButton"
import Button from "react-bootstrap/Button"
import { SButton } from "./SButton";

import "../styles/QuestionForm.css";


// TODO: CLEAN UP DA CODE
const QuestionForm = (props) => {
    // components is an array of AnswerBox components, Used to track and alter the display and # of answer fields on the screen
    const [components, setComponents] = useState([]);

    const [question, setQuestion] = useState("");

    const [answers, setAnswers] = useState([])


    const createAnswerBox = (answer, index) => {
        return (
            <InputGroup>
                <Form.Control placeholder="Answer" style={fieldStyle} value={answer} onChange={(e) => updateInput(e, index)}  />
                <SButton onClick={() => deleteAnswer(index)} style={fieldStyle} variant="secondary" className="edit-button" text="Delete" />
            </InputGroup>
        )
    }

    const updateInput = (e, index) => {
        const newArr = [...answers];
        newArr[index] = e.target.value;

        setAnswers(newArr)
    }

    const addAnswer = () => {
        setAnswers([...answers, ""])
    }

    const deleteAnswer = (index) => {
        if (answers.length <= 2) return
        const newArr = [...answers];
        newArr.splice(index, 1)

        setAnswers(newArr)
    }

    // update components state with another AnswerBox
    const addComponent = () => {
        let len = components.length;
        setComponents([...components, <AnswerBox key={len} index={len}/>])
        console.log(components)
    }

    // remove an AnswerBox from components state.
    const handleRemove = (idx) => {
        console.log("key " + idx)
        console.log(components)
        const newArr = [...components]

        setComponents(newArr)


    }

    let fieldStyle = { marginBottom: "15px", borderRadius: "0" }

    // this is being tracked by components state.
    // contains a button that calls handleRemove
    
    const AnswerBox = ({ index}) => {
        return (
            <InputGroup>
                <Form.Control placeholder="Answer" style={fieldStyle} />
                <SButton onClick={() => handleRemove(index)} style={fieldStyle} variant="secondary" className="edit-button" text="Delete" />
            </InputGroup>
        )
    }

    //Prevent the the default refresh of the form
    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     setAnswers([...components.value]);
    //     console.log(answers)

    //     console.log("handleSubmit call")
    // }

    return (
        <Card className="question-card" style={{ width: "600px", backgroundColor: "#F1F1F1" }}>
            <Card.Body>

                <Form >

                    <div className="edit-container">
                        <SButton onClick={addAnswer} variant="secondary" className="edit-button" text="Add answer" />
                    </div>

                    <Form.Group>
                        <Form.Label>{props.label}</Form.Label>
                        <Form.Control value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Question" style={fieldStyle}></Form.Control>
                    </Form.Group>

                    <Form.Group>

                        {answers.map((answer, i) => (createAnswerBox(answer, i)))}
                    </Form.Group>

                    <div className="edit-container">
                        <Button type="submit" className="submit-button">Save</Button>
                    </div>

                </Form>

            </Card.Body>

        </Card>
    )
}

export { QuestionForm };