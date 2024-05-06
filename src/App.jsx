import { useState } from 'react'
import './App.css'
import Calendar from './components/Calendar'
import Tasks from './components/Tasks'
import { startOfToday } from 'date-fns'

function App() {
  const [selectedDay, setselectedDay] = useState(startOfToday());
  return (
    <>
      <div className="relative my-5 p-1.5 text-white flex rounded-xl bg-gray w-[1200px] min-h-[650px] lg:min-h-screen lg:flex-col lg:rounded-none">
        <Calendar selectedDay={selectedDay} setselectedDay={setselectedDay} />
        <Tasks selectedDay={selectedDay} />
      </div>
    </>
  )
}

export default App
