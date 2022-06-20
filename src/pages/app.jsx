// url: /
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Header from 'pages/_header';
import Footer from 'pages/_footer';

import TitlePage from 'pages/title-page';
import ProductIdPage from './product-id-page';

import './app.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<TitlePage />} />
            <Route path="/product/:id" element={<ProductIdPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
