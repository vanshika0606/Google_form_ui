// import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Card2 from './components/Card2'
import Card3 from './components/Card3'
import Dropdown from './components/Dropdown.tsx';
function App() {
  
  return (
    <div className='flex center'>
      <div className='flex'>
      <Card/>
      <Card2 type="radio" name="radio"  title="MCQ"/>
      <Card2 type="checkbox" name="checkbox"  title="Checkbox"/>
      <Card3 type="Short Answer" />
      <Card3 type="ParaGraph" cls="long"/>
      <Dropdown/>
      </div>
    </div>
  )
}

export default App
