import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { HomePage } from './components/home.page'

export const Main = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </Router>
    )
}
