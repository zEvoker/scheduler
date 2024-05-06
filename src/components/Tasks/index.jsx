import { faCircleDot, faCheck, faXmark, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import { useState } from "react";

const Tasks = ({ selectedDay }) => {
    const [events, setevents] = useState([])
    const [newevent, setnewevent] = useState({name:"",type:"",time:"",desc:"",status:false})
    const [activ, setactiv] = useState(false)
    const options = ["Task","Deadline","Occasion","Reminder","Other",];

    const handleAddEvent = () => {
        if(newevent.name=="") return;
        const id = events.length + 1;
        const newEvents = [...events, { id, ...newevent }];
        newEvents.sort((a, b) => {
            const timeA = new Date(`1970-01-01T${a.time}`);
            const timeB = new Date(`1970-01-01T${b.time}`);
            return timeA - timeB;
        });
        setevents(newEvents);
        setnewevent({name:"",type:"",time:"",desc:"",status:false});
        setactiv(false)
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
                    <div className="pointer-events-none flex items-center justify-start pl-5">
                        <FontAwesomeIcon icon={faCircleDot} />
                    </div>
                    <div className="pointer-events-none flex items-center">
                        <h3 className="font-normal text-base ml-5">{event.name}</h3>
                    </div>
                    <div className="flex items-center justify-center">
                        <span>{event.time}</span>
                    </div>
                    <div className="flex items-center justify-center">
                        <FontAwesomeIcon icon={faXmark} className="hover:text-black border border-solid border-white py-1 px-1.5" />
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
                    <button onClick={()=>{handleAddEvent();}} className="h-10 text-base font-medium outline-none text-white bg-violet-300 rounded-md cursor-pointer py-1 px-2 border border-solid border-violet-300 hover:text-violet-300 hover:bg-transparent">add event</button>
                </div>
            </div>}
            <button onClick={() => setactiv(true)} className="absolute bottom-7 right-7 w-10 h-10 rounded-full flex items-center justify-center text-base text-zy border-2 border-solid border-zy opacity-50 bg-transparent cursor-pointer hover:opacity-100"><FontAwesomeIcon icon={faPlus} /></button>
        </div>
    )
}

export default Tasks;