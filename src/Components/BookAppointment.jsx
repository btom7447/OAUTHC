import React from "react";
import BookingForm from "./BookingForm";

const BookAppointment = () => {
    return (
      <div className="book-appointment" id="BookAppointment">
            <div className="book-appointment-caption">
                <h3>Book Appointment</h3>
                <p>
                    Ready to schedule your visit? <br />
                    Book an appointment at our teaching hospital is easy and convenient. 
                    Simply give us a call or use our online booking system. We look forward to 
                    providing you with exceptional care during your visit. 
                </p>
                <p>
                    Your booking is confirmed after <span>Payment</span>; please be patient, as <br /> 
                    <span>Confirmation Process</span> takes <span className="red-bold">24-48 hours</span>
                </p>
            </div>
            <BookingForm />
        </div>
    )
};

export default BookAppointment;