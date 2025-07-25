import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route} from "react-router-dom"
import Layout from "./components/Layout"
import HomePage from './pages/HomePage'
import TasksPage from './pages/TasksPage'
import ApiPage from './pages/ApiPage'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />} >
      <Route index element={<HomePage />} />
      <Route path="tasks" element={<TasksPage/>}/>
      <Route path="api-data" element={<ApiPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
