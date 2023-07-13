import DefaultPage from 'components/DefaultPage'
import Footer from 'components/Footer'
import HeaderNav from 'components/HeaderNav'
import About from 'pages/About'
import Home from 'pages/Home'
import Menu from 'pages/Menu'
import Dishes from 'pages/dishes'
import NotFound from 'pages/notFound'
import { memo } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function AppRoutes(){
    return(
        <main className='container'>
            <Router>
                <HeaderNav/>
                
                <Routes>
                    <Route path="/" element={<DefaultPage/>}>
                        <Route index element={<Home/>}/>
                        <Route path="Menu" element={<Menu/>}/>
                        <Route path="About" element={<About/>}/>
                        
                    </Route>
                    <Route path="*" element={<NotFound/>} />
                    <Route path='dishes/:id' element={<Dishes/>}/>
                </Routes>
                <Footer/>
            </Router>
       
        </main>
    )
}


export default memo(AppRoutes)