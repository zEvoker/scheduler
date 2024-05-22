import { useEffect, useState } from 'react'
import './App.css'
import Calendar from './components/Calendar'
import Tasks from './components/Tasks'
import Login from './components/Login'
import { startOfToday } from 'date-fns'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from './firebase'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { db } from "./firebase";
import { doc, onSnapshot } from "firebase/firestore";

function App() {
  const [selectedDay, setselectedDay] = useState(startOfToday());
  const [user, setUser] = useState(null);
  const [allTasks, setAllTasks] = useState([]);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
        setUser(user);
    });
    return () => {
        unsub();
    };
  }, []);
  useEffect(() => {
    if (user && user.uid) {
        const unsub = onSnapshot(doc(db, "users", user.uid), (doc) => {
            if (doc.exists()) {
                setAllTasks(doc.data().tasks || []);
            }
        });
        return () => {
            unsub();
        };
    }
  }, [user]);


  return (
      user?
      <>
      <div className="relative my-5 p-1.5 text-white flex rounded-xl bg-gray w-[1200px] min-h-[650px] lg:min-h-screen lg:flex-col lg:rounded-none">
        <Calendar selectedDay={selectedDay} setselectedDay={setselectedDay} allTasks={allTasks}/>
        <Tasks selectedDay={selectedDay} user={user} allTasks={allTasks}/>
      </div>
      <FontAwesomeIcon className='absolute cursor-pointer top-2 right-2 text-zy' icon={faArrowRightFromBracket} onClick={()=>signOut(auth)}/>
      </>
      :
      <Login user={user} setUser={setUser}/>
  )
}

export default App
