import React, { useState } from 'react'
import Image from './assets/img/livro.png'
import { ToastComponent } from './components/Toast'
import { Home } from './screens/Home'

function App() {

  return (
    <>
      <ToastComponent />
      <Home/>
    </>
  )
}

export default App
