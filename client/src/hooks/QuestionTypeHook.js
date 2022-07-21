import React, { useState } from "react";

const QuestionTypeHook = () => {
    const [type, setType] = useState(null);

    // "Multiple Choice", "Open Ended", "Check Boxes" or null
    const setQuestionType = (questionType) => {
        setType(questionType);
    }

    return {
        setQuestionType,
        type
    }
}

export { QuestionTypeHook };