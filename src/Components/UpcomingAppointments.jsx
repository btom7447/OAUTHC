import React from 'react';
import { useUser } from '../Components/UserContext';
import { Link } from 'react-router-dom';
import moment from 'moment';

const UpcomingAppointments = () => {
    const { appointments } = useUser();

    const today = moment().format('YYYY-MM-DD');
    const formattedToday = moment().format('MMMM Do, YYYY');

    const todaysAppointments = appointments.filter(appointment => 
        moment(appointment.date).isSame(today, 'day')
    );

    if (todaysAppointments.length === 0) {
        const mostRecentDate = appointments.reduce((latest, appointment) => 
            moment(appointment.date).isAfter(latest) ? appointment.date : latest, '1970-01-01'
        );
        todaysAppointments.push(...appointments.filter(appointment => 
            moment(appointment.date).isSame(mostRecentDate, 'day')
        ));
    }

    return (
        <div className="upcoming-appointments">
            <h4>Upcoming Appointments</h4>
            <div className="current-date">
                <h6>{formattedToday}</h6>
                <hr />
            </div>
            <div className="upcoming-appointment-box">
                {todaysAppointments.length > 0 ? (
                    <ul>
                        {todaysAppointments.map(appointment => (
                            <li key={appointment.time}>
                                <Link 
                                    to={`/admin/appointments/`} 
                                    className="appointment-link"
                                >
                                    <div className="appointment-item">
                                        <p>{appointment.time}</p>
                                        <h5>{appointment.patientName}</h5>
                                        <p>{appointment.patientType}</p>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className='no-appointments'>No appointments for today.</p>
                )}
            </div>
        </div>
    );
};

export default UpcomingAppointments;
