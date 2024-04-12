import {Router, Routes, Route} from 'react-dom'
import './App.css'
import HomePage from './components/home/HomePage'
import BooksPage from './components/books/BooksPage'
function App() {
  

  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path = '/' element = {<HomePage/>}/>
            <Route path = '/books' element = {<BooksPage/>}/>
          </Routes>
        </Router>
      </div>
     
    </>
  )
}

export default App
