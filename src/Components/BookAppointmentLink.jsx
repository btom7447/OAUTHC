import { useHref, useNavigate } from 'react-router-dom';

const BookAppointmentLink = () => {
    const navigate = useNavigate();
    const href = useHref('/home');
  
    return () => {
      navigate(href);
      document.getElementById('bookAppointmentSection').scrollIntoView();
    };
  };
  

export default BookAppointmentLink;