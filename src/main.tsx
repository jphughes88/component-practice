import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { FirstComponent } from './components/FirstComponent'

export const Main = () => {
    return (
        <Router>
            <Routes>
                <Route path="/first" element={<FirstComponent />} />
            </Routes>
        </Router>
    )
}
