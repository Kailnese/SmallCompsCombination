import React from 'react'
import routes from './routes'
import { useRoutes } from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

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