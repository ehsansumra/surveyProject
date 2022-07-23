import React, {useEffect, useState} from "react";

const SurveyTakerDataHook = () => {
    //answerInputs is an array of arrays. Could be multiple answers due to checkboxes.
    const [answerInputs, setAnswerInputs] = useState([]);

    useEffect(() => {
        console.log(answerInputs);
    }, [answerInputs])

    // this should get called once fetch request is made.
    const initializeAnswerInputs = (inputs) => {
        setAnswerInputs(inputs);
    }

    const updateCheckBoxes = (event, id, index)  => {
        const input = event.target.value
        const newArr = [...answerInputs];
        console.log(newArr)
        console.log(id)
        const exists = newArr[id].some(item => item === index);

        if (!exists) {
            newArr[id].push(index);
        }
        if (exists) {
            newArr[id].splice(index, 1);
        }

        setAnswerInputs(newArr);
    }

    // handling state for radio buttons
    const updateRadioButtons = (event, id, index) => {
        const input = event.target.value;
        console.log(id)

        // if (!Array.isArray(input)) return;
        
        const newArr = [...answerInputs];

        if (input === "on") newArr[id] = [index];
        else newArr[id] = []
        
        setAnswerInputs(newArr);
    }

    const updateOpenEnded = (event, index) => {
        let input = event.target.value;
        // if (!Array.isArray(input)) return;

        const newArr = [...answerInputs];
        newArr[index] = [input];
        
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