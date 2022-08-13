import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Page from '../components/Page';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import alternateBG from '../utils/AlternateBG';
const SurveyList = () => {
    // fetch request here. (all survey names)
    const [surveyList, setSurveyList] = useState([]); //left off here, do the fetch req

    const getIds = async () => {
        fetch("/api/surveyid")
            .then(res => res.json())
            .then(idJson => {
                console.log(idJson[0].ids)
                setSurveyList(idJson[0].ids)
            })
            .catch(err => console.log(err))

    }

    const handleClick = () => {

    }

    useEffect(() => {
        console.log("bruh momento")
        getIds();
    }, [])
    const names = ['Survey 1', 'Survey 2', 'Survey 3']

    return (
        <Page>
            <div className="main-content" style={{ marginTop: "20px" }}>
                <Card className="question-card" >


                    {
                        surveyList.map((survey, i) => (
                            <Card.Body 
                            style={{ 
                                backgroundColor: alternateBG(i),
                                margin:"10px",
                                display: "flex", 
                                justifyContent: "space-between", 
                                alignItems:"center", 
                                padding:"0",
                                margin:"0",
                                }}>
                                
                                <Card.Text style={{textAlign:"center", width:"100px", marginTop:"20px" }}className>
                                    {"Survey " + survey}
                                </Card.Text>
                                
                                <div style={{ width: "220px", display: "flex", justifyContent: "space-evenly" }}>
                                    
                                    <Link to={"../take_survey?surveyId=" + survey}><Button variant="dark" style={{}}>
                                        Take
                                    </Button></Link>
                                    <Link to={"../results?surveyId=" + survey}><Button variant="dark" style={{}}>
                                        Results
                                    </Button></Link>
                               
                                </div>

                            </Card.Body>
                        ))
                    }
                </Card>
            </div>
        </Page>

    )
}

export default SurveyList;