import React, {useEffect, useState} from "react";

const SurveyTakerDataHook = () => {
    //answerInputs is an array of arrays. Could be multiple answers due to checkboxes.
    const [answerInputs, setAnswerInputs] = useState([]);

    // useEffect(() => {
    //     console.log("useEffect " + answerInputs);
    // }, [answerInputs])

    // this should get called once fetch request is made.
    const initializeAnswerInputs = (inputs) => {
        setAnswerInputs(inputs);
    }

    // this operation feels heavy handed
    const updateCheckBoxes = (event, id)  => {
        console.log(id);
        const input = event.target.value
        const newArr = [...answerInputs];
        console.log(newArr)
        const checkBoxes = newArr[id];
        
        const exists = checkBoxes.includes(input);

        if (exists) checkBoxes.splice(checkBoxes.indexOf(input), 1);
        else checkBoxes.push(input);

        setAnswerInputs(newArr);
    }

    // handling state for radio buttons
    const updateRadioButtons = (event, id) => {
        const input = event.target.value;
        const newArr = [...answerInputs];

        newArr[id] = [input];

        setAnswerInputs(newArr);
    }

    const updateOpenEnded = (event, id) => {
        let input = event.target.value;
        const newArr = [...answerInputs];

        newArr[id] = [input];
        
        setAnswerInputs(newArr);
    }

    return {
        initializeAnswerInputs,
        updateCheckBoxes,
        updateRadioButtons,
        updateOpenEnded,
        answerInputs
    }
}

export default SurveyTakerDataHook;