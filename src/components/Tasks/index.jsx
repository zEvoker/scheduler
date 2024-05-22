import { faCheck, faXmark, faPlus, faTrashAlt, faSquare, faClock, faBullseye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format, isToday, startOfToday } from "date-fns";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import cloc from '../../assets/clock.png'

const Tasks = ({ selectedDay,user,allTasks }) => {
    const [events, setevents] = useState([])
    const [newevent, setnewevent] = useState({name:"",type:"task",time:"",desc:"",status:false})
    const [activ, setactiv] = useState(false)
    const options = ["task","deadline","occasion","reminder","other",];

    useEffect(() => {
        setevents(allTasks.filter(event => {
            const eventDate = event.date.toDate();
            return format(selectedDay, 'yyyy-MM-dd') === format(eventDate, 'yyyy-MM-dd');
        }));
    }, [selectedDay,allTasks]);

    useEffect(() => {
        requestNotificationPermission();
        allTasks.forEach(event => {
            if(isToday(event.date.toDate())) scheduleNotification(event);
        });
    }, []);

    const requestNotificationPermission = async () => {
        try {
            const permission = await Notification.requestPermission();
            if (permission !== "granted") {
                throw new Error("Permission not granted for Notification");
            }
        } catch (error) {
            console.error("Error requesting notification permission", error);
        }
    };

    const scheduleNotification = (event) => {
        if(!event.time) return;
        const currentTime = new Date();
        const eventDate = new Date();
        const [hours, minutes] = event.time.split(':');
        eventDate.setHours(hours, minutes, 0, 0);
        const delay = eventDate - currentTime;
        if (delay > 0) {
            setTimeout(() => {
                showNotification(event);
            }, delay);
        }
    };
    
    const showNotification = (event) => {
        const notif = new Notification(`Reminder for ${event.name}`, {
            body: `${event.desc} at ${event.time}`,
            icon: cloc, 
        });
        notif.onclick = () => {
            window.focus();
        }
        // notif.onclose = () => {
        //     const updatedEvent = { ...event, status: !event.status };
        //     setevents(events.map(e => (e.name === event.name ? updatedEvent : e)));
        // }
    };
    

    const handleDel = async (event) => {
        try {
            event.status=false;
            await updateDoc(doc(db, "users", user.uid), {
                tasks: arrayRemove(event)
            });
        } catch (error) {
            console.error("Error deleting event:", error);
        }
    };
    

    const handleCheck = async (event) => {
        const updatedEvent = { ...event, status: !event.status };
        setevents(events.map(e => (e.name === event.name ? updatedEvent : e)));
    }

    const handleAddEvent = async () => {
        try {
            if (newevent.name === "") return; 
            if (selectedDay < startOfToday()) return;
            const event = { ...newevent, date: selectedDay }; 
            if(isToday(event.date)) scheduleNotification(event);
            await updateDoc(doc(db, "users", user.uid), {
                tasks: arrayUnion(event) 
            });
            setevents([...events, event]); 
            setnewevent({ name: "", type: "task", time: "", desc: "", status: false });
            setactiv(false); 
        } catch (error) {
            console.error("Error adding event:", error);
        }
    };
    

    return (
        <div className="relative w-1/2 py-5 px-5">
            <div className="w-full h-12 flex flex-wrap items-center justify-center py-0 px-10 mt-12 mb-5 capitalize">
                <div className="text-3xl font-medium ">
                    {format(selectedDay, 'EEEE')}
                </div>
            </div>
            <div className="absolute right-10 top-20 text-base font-normal text-zy">
                {format(selectedDay, 'do MMMM yyyy')}
            </div>
            <div className="w-full h-full overflow-x-hidden overflow-y-auto flex flex-col p-1">
                {events.length==0 ?
                <div className="w-full h-full flex justify-center text-2xl font-medium text-[#878787] py-40">
                    <h3>No Events</h3>
                </div>
                :
                events.map (event => (
                    <div key={event.id} className="relative w-full min-h-16 grid grid-cols-4 gap-1 py-0 text-white cursor-pointer bg-gradient-to-r from-taskbg even:from-transparent hover:from-violet-300">
                    <div className="flex items-center justify-start pl-5">
                        {event.status?
                        <FontAwesomeIcon icon={faTrashAlt} className="cursor-pointer hover:text-red-500" onClick={() => handleDel(event)}/>
                        :
                        <FontAwesomeIcon icon={event.type==="task"? faBullseye : faClock} />}
                    </div>
                    <div className="pointer-events-none flex items-center">
                        <h3 className="font-normal text-base ml-5">{event.name}</h3>
                    </div>
                    <div className="flex items-center justify-center">
                        <span>{event.time}</span>
                    </div>
                    <div className="flex items-center justify-center">
                        <FontAwesomeIcon icon={event.status ? faCheck : faSquare} onClick={()=> handleCheck(event)} className="hover:text-black border border-solid border-white py-1 px-1.5" />
                    </div>
                </div>
                ))}
            </div>
            {activ && <div className="absolute bottom-24 left-1/2 w-11/12 overflow-hidden rounded-md bg-white -translate-x-1/2 duration-500 active:max-h-80">
                <div className="w-full h-12 flex items-center justify-between py-0 px-5 text-gray border-b border-solid border-[#f5f5f5]">
                    <div className="text-xl font-medium">Add</div>
                    <div onClick={() => {setnewevent({name:"",type:"",time:"",desc:"",status:false});setactiv(false)}} className="text-2xl cursor-pointer hover:text-violet-300"><FontAwesomeIcon icon={faXmark} /></div>
                </div>
                <div className="w-full h-full flex flex-col gap-2 p-5">
                    <div className="w-full h-10 flex items-center justify-between gap-2">
                        <input type="text" placeholder="event name" value={newevent.name} onChange={(e)=> setnewevent({...newevent,name:e.target.value})} className="w-full h-full outline-none border-b border-solid border-b-[#f5f5f5] py-0 px-2 text-base font-normal text-gray focus:border-violet-300" />
                    </div>
                    <div className="w-full h-10 flex items-center justify-between gap-2">
                    <select value={newevent.type} onChange={(e) => setnewevent({...newevent, type: e.target.value})} className="w-full h-full outline-none border-b border-solid border-b-[#f5f5f5] py-0 px-2 text-base font-normal text-gray focus:border-violet-300">
                        {options.map((option, index) => {
                            return (
                                <option key={index}>
                                    {option}
                                </option>
                            );
                        })}
                    </select>
                        <input type="time" placeholder="alert time" value={newevent.time} onChange={(e) => setnewevent({...newevent, time: e.target.value})}  className="w-full h-full outline-none border-b border-solid border-b-[#f5f5f5] py-0 px-2 text-base font-normal text-gray focus:border-violet-300" />
                    </div>
                    <div className="w-full h-10 flex items-center justify-between gap-2">
                        <input type="text" placeholder="description" value={newevent.desc} onChange={(e) => setnewevent({...newevent, desc: e.target.value})}  className="w-full h-full outline-none border-b border-solid border-b-[#f5f5f5] py-0 px-2 text-base font-normal text-gray focus:border-violet-300" />
                    </div>
                </div>
                <div className="flex items-center justify-center p-5">
                    <button onClick={()=>{handleAddEvent();}} className="h-10 text-base font-medium outline-none text-white bg-violet-400 rounded-md cursor-pointer py-1 px-2 border border-solid border-violet-300 hover:text-violet-300 hover:bg-transparent">add event</button>
                </div>
            </div>}
            <button onClick={() => setactiv(true)} className="absolute bottom-7 right-7 w-10 h-10 rounded-full flex items-center justify-center text-base text-zy border-2 border-solid border-zy opacity-50 bg-transparent cursor-pointer hover:opacity-100"><FontAwesomeIcon icon={faPlus} /></button>
        </div>
    )
}

export default Tasks;