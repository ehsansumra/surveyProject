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
const QuestionForm = ({ type, addForm }) => {
    // components is an array of AnswerBox components, Used to track and alter the display and # of answer fields on the screen
    const [question, setQuestion] = useState("");

    const answersHook = AnswersHook();

    // this might be unneccessary
    const createAnswerBox = (answer, index) => {
        return <AnswerBoxes answer={answer} answersHook={answersHook} key={index} index={index} />
    }

    //Prevent the the default refresh of the form
    const handleSubmit = async (event) => {
        event.preventDefault();
        // this deep copy may be unneccessary
        const answersArr = [...answersHook.answers]
        const formData = {
            question: question,
            answers: answersArr,
            type: type
        }
        addForm(formData)
    }

    return (
        <Card className="question-card">
            <Form onSubmit={handleSubmit}>
                <Card.Header className="card-header">
                    <div className="edit-container">
                        <Form.Label className="question-title">{type}</Form.Label>
                        {
                            type !== "Open Ended" ?
                                <SButton onClick={() => answersHook.addAnswer()} variant="dark" className="edit-button" text="Add answer" />
                                : null
                        }
                    </div>
                </Card.Header>

                <Card.Body>
                    <Form.Control className="text-field" value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Question" ></Form.Control>
                    <Form.Group>
                        {answersHook.answers.map((answer, i) => (createAnswerBox(answer, i)))}
                    </Form.Group>
                </Card.Body>

                <Card.Footer>
                    <div className="edit-container">
                        <Button type="submit" variant="dark" className="submit-button">Save</Button>
                    </div>
                </Card.Footer>
            </Form>

        </Card>
    )
}

export { QuestionForm };