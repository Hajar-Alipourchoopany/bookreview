import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home';
import About from "./pages/About/About";
import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";
import PopularTopics from './components/SmallMenu/PopularTopics';
import Conclusion from './components/SmallMenu/Conclusion';
import ReaderReactions from './components/SmallMenu/ReaderReactions';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';


function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home />}>
      <Route path="/about" element={<About />} />
      <Route path="/book" element={<BookList />} />
      <Route path="/book/:id" element={<BookDetails />} />
      <Route path="/PopularTopics" element={<PopularTopics />} /> 
      <Route path="/ReaderReactions" element={<ReaderReactions />} />
      <Route path="/Conclusion" element={<Conclusion />} />
      <Route path="/Login" element={<Login /> } />
      <Route path="/Signup" element={<SignUp />} />
    </Route>
  </Routes>
  </>
  )
}

export default App
