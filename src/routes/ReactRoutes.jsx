import {BrowserRouter, Route, Router, Routes} from 'react-router-dom'
import Home from '../commponents/homePage/Home'

export default function ReactRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}></Route>
            </Routes>
        </BrowserRouter>
    )
}