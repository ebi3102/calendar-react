import { useState } from "react";
import CalendarDays from "./calendar-days";
import './calendar.css'

const Calendar = () => {
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];
    const [currentDay, setCurrentDay] = useState(new Date());
    const [startDay, setStartDay] = useState(false);

    let changeCurrentDay = (day) => {
        console.log(day)
        setCurrentDay(new Date(day.year, day.month, day.number));
        console.log(day)
        // if(!startDay)
        //     setStartDay(day.date)

    }



    return (
        <div className="calendar">
            <div className="calendar-head">
                <h2>{months[currentDay.getMonth()]} {currentDay.getFullYear()}</h2>
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