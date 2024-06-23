"use client"

import React from 'react';
import { FullCalendar } from 'primereact/fullcalendar';

const CalendarCmpt = () => {

//   const handleDateSelect = (selectInfo) => {
//     let title = prompt('Event Title:');
//     let calendarApi = selectInfo.view.calendar;

//     calendarApi.unselect(); // clear date selection

//     if (title) {
//       calendarApi.addEvent({
//         title,
//         start: selectInfo.startStr,
//         end: selectInfo.endStr,
//         allDay: selectInfo.allDay
//       });
//     }
//   };

//   const handleEventClick = (clickInfo) => {
//     if (window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
//       clickInfo.event.remove();
//     }
//   };

  return (
    <div className="container mt-5">
      <h2>Agenda du mois</h2>
        {/* <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={true}
          initialEvents={events} // alternatively, use the `events` setting to fetch from a feed
          select={handleDateSelect}
          eventClick={handleEventClick}
        /> */}
    </div>
  );
};

export default CalendarCmpt;
