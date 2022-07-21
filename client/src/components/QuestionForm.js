import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup"
import CloseButton from "react-bootstrap/CloseButton"
import Button from "react-bootstrap/Button"
import { SButton } from "./SButton";
import { AnswerBoxes } from "./AnswerBox";
import "../styles/QuestionForm.css";
import { AnswersHook } from "../hooks/AnswersHook";


// TODO: CLEAN UP DA CODE
const QuestionForm = ({ title, updateForm }) => {
    // components is an array of AnswerBox components, Used to track and alter the display and # of answer fields on the screen
    useEffect(() => console.log("QuestionForm rerender"))
    const [question, setQuestion] = useState("");

    const answersHook = AnswersHook();

    const createAnswerBox = (answer, index) => {
        return <AnswerBoxes answer={answer} answersHook={answersHook} key= {index} index={index} />
    }

    let fieldStyle = { marginBottom: "15px", borderRadius: "0" }

    //Prevent the the default refresh of the form
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = {question: question, answers: answersHook.answers}
        updateForm(formData)
    }

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    }

    return (
        <Card className="question-card">
            <Card.Body>

                <Form onSubmit={handleSubmit}>

                    <Form.Group>
                        <div className="edit-container">
                            <Form.Label>{title}</Form.Label>
                            <SButton onClick={() => {
                                increment();
                                answersHook.addAnswer(count);
                            }
                                } variant="secondary" className="edit-button" text="Add answer" />
                        </div>

                        <Form.Control value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Question" style={fieldStyle}></Form.Control>
                    </Form.Group>

                    <Form.Group>
                        {answersHook.answers.map((answer, i) => (createAnswerBox(answer, i)))}
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