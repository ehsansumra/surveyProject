import Form from "react-bootstrap/Form";
import React, { useState } from "react";

//currently unused. Keeping here in case I decide to optimize QuestionForm.
const Input = ({style}) => {
    const [text, setText] = useState("")

    const updateText = (e) => {
        setText(e.target.value)
    }

    return (
        <Form.Control style={style} placeholder="Answer" value={text} onChange={(e) => updateText(e)}  />
    )
}

export {Input};