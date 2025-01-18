import { useState } from 'react'
import './App.css'
import Navigation from './components/navigation.jsx';
import Project from './components/Project.jsx';
import Footer from './components/footer.jsx';

function App() {

  return (
    <>
    <Navigation />
    <Project/>
    <Footer />
    </>
  )
}
export default App
