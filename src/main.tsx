import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { HomePage } from './pages/home/home.page'

export const Main = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </Router>
        </div>
    )
}
