import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import { AppProvider } from './context';
import './index.css';
import Home from './pages/Home/Home';
import About from "./pages/About/About";
import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";
import PopularTopics from './components/SmallMenu/PopularTopics';
import Conclusion from './components/SmallMenu/Conclusion';
import ReaderReactions from './components/SmallMenu/ReaderReactions';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <div className="home-page" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/purpleflower2.png)` }}>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/about" element={<About />} />
            <Route path="/book" element={<BookList />} />
            <Route path="/book/:id" element={<BookDetails />} />
            <Route path="/PopularTopics" element={<PopularTopics />} /> 
            <Route path="/ReaderReactions" element={<ReaderReactions />} />
            <Route path="/Conclusion" element={<Conclusion />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  </AppProvider>
 
);
