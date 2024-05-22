import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { eachDayOfInterval, endOfMonth, endOfWeek, format, isToday, startOfMonth, startOfToday, isSameMonth, isEqual, add, parse, startOfWeek } from "date-fns";
import { useEffect, useState } from 'react';

const Calendar = ({ selectedDay, setselectedDay, allTasks }) => {
    let today = startOfToday();
    const [curMonth, setcurMonth] = useState(format(today, 'MMM-yyyy'))
    const [monthTasks, setMonthTasks] = useState(allTasks.filter(event => {const eventDate=event.date.toDate(); return format(today,'yyyy-MM') === format(eventDate,'yyyy-MM') }))
    const [input, setinput] = useState("")
    const firstDayCurMonth = parse(curMonth, 'MMM-yyyy', new Date());
    let days = eachDayOfInterval({ start: startOfWeek(firstDayCurMonth), end: endOfWeek(endOfMonth(firstDayCurMonth)) });

    useEffect(() => {
        setMonthTasks(allTasks.filter(event => {
            const eventDate = event.date.toDate();
            return format(eventDate, 'yyyy-MM') === format(curMonth, 'yyyy-MM');
        }));
    }, [curMonth, allTasks]);

    const nextMonth = () => {
        const firstDayNextMonth = add(firstDayCurMonth, { months: 1 });
        setcurMonth(format(firstDayNextMonth, 'MMM-yyyy'));
    }

    const prevMonth = () => {
        const firstDayNextMonth = add(firstDayCurMonth, { months: -1 });
        setcurMonth(format(firstDayNextMonth, 'MMM-yyyy'));
    }

    const hasTasks = (day) => {
        const formattedDay = format(day, 'yyyy-MM-dd');
        return monthTasks.some(event => format(event.date.toDate(), 'yyyy-MM-dd') === formattedDay);
    };

    const handleGo = () => {
        const isValidFormat = /^\d{2}\/\d{4}$/.test(input);
        if (isValidFormat) {
            const [month, year] = input.split('/');
            const newDate = new Date(`${year}-${month}-01`);
            setcurMonth(format(newDate, 'MMM-yyyy'));
        } else {
            console.error("Invalid input format. Please enter in the format 'mm/yyyy'.");
        }
    }

    return (
        <>
            <div className="w-1/2 m-5 relative flex flex-col flex-wrap justify-between text-zy rounded-md bg-white 
            after:absolute after:top-1/2 after:left-full after:w-3 after:h-[97%] after:rounded-l-none after:rounded-r-md after:bg-paper after:-translate-y-1/2
            before:absolute before:top-1/2 before:w-3 before:h-[94%] before:left-[calc(100%+12px)] before:rounded-l-none before:rounded-r-md before:-translate-y-1/2 before:bg-[rgb(153,153,153)]
            lg:w-full lg:h-full lg:py-5 lg:px-0 lg:before:top-[calc(100%+12px)] lg:before:left-1/2 lg:before:w-[94%] lg:before:h-3 lg:before:rounded-b-md lg:before:rounded-t-none lg:before:-translate-x-1/2
            lg:after:top-full lg:after:left-1/2 lg:after:w-[97%] lg:after:h-3 lg:after:rounded-b-md lg:after:rounded-t-none lg:after:-translate-x-1/2">
                <div className="w-full h-14 mt-5 flex items-center justify-between py-0 px-48 text-xl font-medium capitalize">
                    <FontAwesomeIcon className="cursor-pointer hover:text-black" onClick={prevMonth} icon={faAngleLeft} />
                    <div className="flex items-center justify-center">
                        <span>{format(firstDayCurMonth, 'MMMM yyyy')}</span>
                    </div>
                    <FontAwesomeIcon className="cursor-pointer hover:text-black" onClick={nextMonth} icon={faAngleRight} />
                </div>
                <div className="w-full h-10 flex items-center justify-between py-0 px-5 capitalize font-medium">
                    {daylabels.map((label, idx) => (
                        <div className="w-[14.28%] h-full flex items-center justify-center">{label}</div>
                    ))}
                </div>
                <div className="w-full flex flex-wrap justify-between py-0 px-5 text-base font-medium mb-5">
                    {days.map((day, idx) => (
                        <div key={day.toString()} onClick={() => setselectedDay(day)}
                            className={`w-[14.28%] h-[80px] flex items-center justify-center cursor-pointer border border-solid
                        ${isSameMonth(day, firstDayCurMonth) ? ' text-violet-300 hover:text-white hover:bg-violet-300' : 'text-[#b3b3b3] opacity-60'}
                        ${day < today ? 'text-violet-200' : ''}
                        ${isToday(day) ? 'text-3xl' : ''}
                        ${hasTasks(day) ? 'relative after:absolute after:bottom-[10%] after:left-1/2 after:w-3/4 after:h-1 after:rounded-3xl after:-translate-x-1/2 after:bg-violet-300 hover:after:bg-white' : ''}
                        ${isEqual(day, selectedDay) ? 'bg-violet-300 text-2xl text-white relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:shadow-[0_0_10px_2px_white]' : ''}`} >
                            <time dateTime={format(day, 'yyyy-MM-dd')}>
                                {format(day, 'd')}
                            </time>
                        </div>
                    ))}
                </div>
                <div className="w-full h-12 flex items-center justify-between gap-1 py-0 px-5 mb-5 text-violet-300">
                    <div className="flex items-center rounded-md overflow-hidden border-solid border border-violet-300">
                        <input type="text" onChange={(e) => setinput(e.target.value)} onKeyDown={(e) => {if(e.key==='Enter') handleGo()}} value={input} placeholder="mm/yyyy" className="w-full h-8 outline-none border-none rounded-md px-2" />
                        <button onClick={handleGo} className="py-1 px-3 border-r-0 border-t-0 border-b-0 border-l border-solid border-violet-300 bg-transparent cursor-pointer text-violet-300 hover:text-white hover:bg-violet-300">go</button>
                    </div>
                    <button onClick={() => { setselectedDay(today); setcurMonth(format(today, 'MMM-yyyy')); }} className="py-1 px-3 border border-solid border-violet-300 rounded-md bg-transparent cursor-pointer text-violet-300 hover:text-white hover:bg-violet-300">today</button>
                </div>
            </div >
        </>
    )
}

let daylabels = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

export default Calendar;