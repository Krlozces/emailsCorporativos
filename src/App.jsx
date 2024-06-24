import { Route, Routes } from 'react-router-dom';
import './App.css';
import FrequentQuestions from './components/FrequentQuestions';
import Whatsapp from './components/Whatsapp';
import Index from './components/Index';
import Contact from './components/Contact';
import Products from './components/Products';
import BenefitsPage from './components/BenefitsPage';
import ChatBot from './components/ChatBot';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Index />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/products' element={<Products />} />
      <Route path='/benefits' element={<BenefitsPage />} />
      <Route path='/questions' element={<FrequentQuestions />} />
    </Routes>
    <Whatsapp />
    <ChatBot />
    </>
  )
}

export default App
