import "./App.css";
import Container from "./components/Container";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Container />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
