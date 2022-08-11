import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Page from '../components/Page';
const SurveyList = () => {
    // fetch request here. (all survey names)
    const [surveyList, setSurveyList] = useState([]); //left off here, do the fetch req
    const names = ['Survey 1', 'Survey 2', 'Survey 3']
    return (
        <Page>
            <div className="main-content" style={{marginTop:"20px"}}>
                {
                    names.map(survey => (
                        <Button className="question-card" style={{textAlign:'left', padding:"20px", paddingLeft:'30px'}}>{survey}</Button>
                    ))
                }
            </div>
        </Page>

    )
}

export default SurveyList;