import { useState } from "react";
import CalendarDays from "./calendar-days";
import './calendar.css'

const Calendar = () => {
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];
    const [currentDay, setCurrentDay] = useState(new Date());
    const [startDay, setStartDay] = useState(false);
    const [endDay, setEndDay] = useState(false);

    let changeCurrentDay = (day) => {
        if(endDay)
            return
        setCurrentDay(new Date(day.year, day.month, day.number));
        if(!startDay){
            setStartDay(new Date(day.year, day.month, day.number));
        }else if(!endDay){
            setEndDay(new Date(day.year, day.month, day.number));
        }
    }

    let startDate = (startDay)? `${startDay.getDate()} ${months[startDay.getMonth()]} ${startDay.getFullYear()}`: ''
    let endDate = (endDay)? `${endDay.getDate()} ${months[endDay.getMonth()]} ${endDay.getFullYear()}`:''


    return (
        <div className="calendar">
            <div className="calendar-head">
                <h2>{months[currentDay.getMonth()]} {currentDay.getFullYear()}</h2>
                <h5>{startDate}</h5>
                <h5>{endDate}</h5>
            </div>
            <div className="calendar-body">
                <div className="table-header">
                    {
                        weekdays.map((weekday) => {
                            return <div key={weekday} className="weekday"><p>{weekday}</p></div>
                        })
                    }
                </div>
                <CalendarDays day={currentDay} changeCurrentDay={changeCurrentDay} />
            </div>
        </div>
    );
}

export default Calendar;