import { Routes, Route } from 'react-router-dom'

import HomePage from './../pages/HomePage/HomePage'
import BarDetailsPage from './../pages/BarDetailsPage/BarDetailsPage'
import AddBarPage from './../pages/AddBarPage/AddBarPage'
import AllCommentsPage from './../pages/AllCommentsPage/AllCommentsPage'
import AddCommentPage from './../pages/AddCommentPage/AddCommentPage'
import EditCommentPage from './../pages/EditCommentPage/EditCommentPage'
import AboutUsPage from './../pages/AboutUsPage/AboutUsPage'
import AllBarsPage from './../pages/AllBarsPage/AllBarsPage'
import EditBarPage from '../pages/EditBarPage/EditBarPage'

const AppRoutes = () => {

    return (

        <Routes>

            <Route path="/" element={<HomePage />} />
            <Route path="/bars" element={<AllBarsPage />} />
            <Route path="/bar/:barId" element={<BarDetailsPage />} />
            <Route path="bar/nuevo-bar" element={<AddBarPage />} />
            <Route path="/bar/editar-bar/:barId" element={<EditBarPage />} />

            <Route path="/todos-los-comentarios" element={<AllCommentsPage />} />
            <Route path="/nuevo-comentario" element={<AddCommentPage />} />
            <Route path="/editar-comentario/:commentId" element={<EditCommentPage />} />
            <Route path="/sobre-nosotros" element={<AboutUsPage />} />

        </Routes>
    )
}

export default AppRoutes