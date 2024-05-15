import './App.css'
import image from './assets/image.jpg'

import Navbar from './components/Navbar/Navbar'
import AppRoutes from './routes/AppRoutes';
import { Image } from 'react-bootstrap';

function App() {

  return (

    <div className="App">

      <Navbar />
      <AppRoutes />

    </div>
  )
}

export default App;


