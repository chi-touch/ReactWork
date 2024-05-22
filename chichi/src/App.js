import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Heroes from "./Pages/Home/Heroes";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route>
                        <Route element={<Heroes/>} path={"/home"}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
