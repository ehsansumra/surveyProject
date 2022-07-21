import React, { useState, useEffect } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { SButton } from "./SButton";
import Button from "react-bootstrap/Button";

//Consider optimizing in the future
//this component rerenders after onChange is called, which is called on every key press.
const AnswerBoxes = ({ answersHook, answer, index }) => {

    return (
        <InputGroup key={index}>
            <Form.Control placeholder="Answer" value={answer} onChange={(e) => answersHook.updateInput(e, index)} className="edit-button text-field" />
            <Button onClick={() => answersHook.deleteAnswer(index)} variant="secondary" className="edit-button text-field" >&#x2715;</Button>
        </InputGroup>
        // answersHook.answers.map((answer, i) => (createAnswerBox(answer, i)))
    )
}

export { AnswerBoxes };