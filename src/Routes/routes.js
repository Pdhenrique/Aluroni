import DefaultPage from 'components/DefaultPage'
import HeaderNav from 'components/HeaderNav'
import Home from 'pages/Home'
import Menu from 'pages/Menu'
import { memo } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function AppRoutes(){
    return(
        <main>
            <Router>
                <HeaderNav/>
                
                <Routes>
                    <Route path="/" element={<DefaultPage/>}>
                        <Route index element={<Home/>}/>
                        <Route path="Menu" element={<Menu/>}/>
                    </Route>
                </Routes>
            </Router>
       
        </main>
    )
}


export default memo(AppRoutes)