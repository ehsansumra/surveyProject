import React, {useState, useEffect} from 'react';

const AnswersHook = () => {

    const [answers, setAnswers] = useState([])

    const updateInput = (event, index) => {
        
        const newArr = [...answers];
        newArr[index] = event.target.value;

        setAnswers(newArr)
    }

    const addAnswer = (a) => {
        console.log(a)
        console.log([...answers, ""])
        setAnswers([...answers, ""])
    }

    const deleteAnswer = (index) => {
        const newArr = [...answers];
        newArr.splice(index, 1)

        setAnswers(newArr)
    }

    return {
        updateInput,
        addAnswer,
        deleteAnswer,
        answers
    }
}

export {AnswersHook};