import React, {Component} from 'react'
import "@fullcalendar/core/main.css";  
import "@fullcalendar/daygrid/main.css";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

export default class EventCalendar extends Component {

    render(){
        return (
            <FullCalendar default View = "dayGridMonth" plugins = {[dayGridPlugin]}
            />
        )
    }


}

