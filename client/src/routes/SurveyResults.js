import React, {useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Page from '../components/Page';
import ResultQuestion from '../components/survey_results/ResultQuestion';
import { Link, useSearchParams } from "react-router-dom";
const SurveyResults = () => {
    const [results, setResults] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    useEffect(() => {
        const surveyId = searchParams.get("surveyId");
        fetch("/api/results/" + surveyId)
            .then(res => res.json())
            .then(result => {
                setResults(result)
            })
    }, [])

    return (
        <Page>
            <Form className="main-content">
            <Card className="question-card">
               {
                results ?
                // <ResultQuestion data={results[0]}/> 
                results.map((result, i) => (
                    <ResultQuestion key={i} data={result}/>
                )):
                null
               }
               </Card>
            </Form>
        </Page>
    )
}

export default SurveyResults;