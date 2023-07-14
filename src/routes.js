import Footer from 'components/Footer'
import HeaderNav from 'components/HeaderNav'

import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const Home = lazy(() => import('pages/Home'))
const Menu = lazy(() => import('pages/Menu'))
const About = lazy(() => import('pages/About'))
const Dishes = lazy(() => import ('pages/dishes'))
const NotFound = lazy(() => import('pages/notFound'))
const DefaultPage = lazy(() => import('components/DefaultPage'))


export default function AppRoutes(){
    return(
        <main className='container'>
            <Router>
                <HeaderNav/>
                <Suspense fallback={<p> Loading...</p>}>
                    <Routes >
                        <Route path="/" element={<DefaultPage/>}>
                            <Route index element={<Home/>}/>
                            <Route path="Menu" element={<Menu/>}/>
                            <Route path="About" element={<About/>}/> 
                        </Route>
                        <Route path="*" element={<NotFound/>} />
                        <Route path='dishes/:id' element={<Dishes/>}/>
                    </Routes>
                </Suspense>
                <Footer/> 
            </Router>
       
        </main>
    )
}


