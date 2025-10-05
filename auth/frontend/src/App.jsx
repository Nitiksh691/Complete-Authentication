import React from 'react'
import Approutes from './Routes/Approutes'
import { AuthProvider } from './context/AuthContext'
import Navbar from './components/Navbar'
import Footer from './components/footer'

const App = () => {
  return (
    <AuthProvider>
      <Navbar />
      <Approutes />
      <Footer/>
    </AuthProvider>
  )
}

export default App
