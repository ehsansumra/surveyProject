import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppNav from "./AppNav";
import CreateSurvey from "./routes/CreateSurvey";
import SurveyList from "./routes/SurveyList";
import SurveyResults from "./routes/SurveyResults";
import TakeSurvey from "./routes/TakeSurvey";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <AppNav />
            <Routes>

                <Route path="take_survey" element={<TakeSurvey />} />
                <Route path="create_survey" element={<CreateSurvey />} />
                <Route path="test" element={<SurveyList />} />
                <Route path="results" element={<SurveyResults />} />

            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;