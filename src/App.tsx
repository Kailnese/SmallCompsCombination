import React from 'react'
import routes from './routes'
import { BrowserRouter as Router, Route, useRoutes } from 'react-router-dom'

import MainLayout from './components/layout/MainLayout'

const App = () => {
    const routing = useRoutes(routes);
    return (
        <>
            {routing}
        </>
    )
}

export default App;