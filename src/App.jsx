import './App.css'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import HomePage from './pages/HomePage/HomePage'
import BarDetailsPage from './pages/BarDetailsPage/BarDetailsPage'
import AddBarPage from './pages/AddBarPage/AddBarPage'
import AllCommentsPage from './pages/AllCommentsPage/AllCommentsPage'
import AddCommentPage from './pages/AddCommentPage/AddCommentPage'
import EditCommentPage from './pages/EditCommentPage/EditCommentPage'
import AboutUsPage from './pages/AboutUsPage/AboutUsPage'
import AllBarsPage from './pages/AllBarsPage/AllBarsPage'




function App() {

  return (

    <div className="App">

      <Navbar />

      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/bars" element={<AllBarsPage />} />
        <Route path="/bar/:barId" element={<BarDetailsPage />} />
        <Route path="bar/nuevo-bar" element={<AddBarPage />} />
        <Route path="/todos-los-comentarios" element={<AllCommentsPage />} />
        <Route path="/nuevo-comentario" element={<AddCommentPage />} />
        <Route path="/editar-comentario" element={<EditCommentPage />} />
        <Route path="/sobre-nosotros" element={<AboutUsPage />} />

      </Routes>

    </div>
  )
}

export default App;


