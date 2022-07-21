import React, { useState } from "react";

const FormDataHook = () => {

    const [formData, setFormData] = useState([]);

    const addFormData = (data) => {
        setFormData([...formData, data]);
    }

    const deleteFormData = (index) => {
        const newArr = [...formData];
        newArr.splice(index, 1)
        setFormData(newArr);
    }

    const moveQuestionDown = (index) => {
        if (!formData[index + 1]) return;
        let newArr = [...formData];
        let temp = newArr[index + 1];

        newArr[index + 1] = newArr[index];
        newArr[index] = temp;

        setFormData(newArr);
    }

    const moveQuestionUp = (index) => {
        if (!formData[index - 1]) return;
        let newArr = [...formData];

        let temp = newArr[index - 1];
        newArr[index - 1] = newArr[index];
        newArr[index] = temp;

        setFormData(newArr);
    }

    return {
        addFormData,
        deleteFormData,
        moveQuestionDown,
        moveQuestionUp,
        formData
    }
}

export { FormDataHook };
