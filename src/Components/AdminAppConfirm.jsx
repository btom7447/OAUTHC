import React, { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';

const AdminAppConfirm = ({ isOpen, onClose, onConfirm, appointmentId }) => {
  const [appointmentDate, setAppointmentDate] = useState("");
  const [message, setMessage] = useState("");

  const handleConfirm = async () => {
    const loadingToastId = toast.loading("Confirming appointment...", {
      autoClose: false,
      toastId: 'loading-toast'
    });
  
    const raw = JSON.stringify({
      id: appointmentId,
      status: "confirmed",
      message: message,
      appointment_date: appointmentDate
    });
  
    const requestOptions = {
      method: "POST",
      body: raw,
      headers: { "Content-Type": "application/json" },
      redirect: "follow"
    };
  
    try {
      const response = await fetch(
        "https://live-api.oauthc.gov.ng/v0.1/api/admin/appointment/approve",
        requestOptions
      );
      const result = await response.json();
  
      if (!response.ok) {
        if (response.status === 400) {
          throw new Error('Invalid input provided');
        }
        throw new Error(result.message || 'Confirmation failed');
      }
  
      toast.update(loadingToastId, {
        render: 'Appointment confirmed successfully!',
        type: 'success',
        autoClose: 2500,
        isLoading: false
      });
  
      onConfirm();
    } catch (error) {
      toast.update(loadingToastId, {
        render: `Error: ${error.message}`,
        type: 'error',
        autoClose: 5000,
        isLoading: false
      });
    } finally {
      toast.dismiss('loading-toast');
    }
  };
  

  // Do not render the modal if it's not open
  if (!isOpen) return null;

  return (
    <>
      <ToastContainer />
      <div className="action-modal">
        <div className="modal-content">
          <h2>Confirm Appointment</h2>
          <div className="action-modal-content">
            <input
              type="date"
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
            />
            <textarea
              placeholder="Confirmation message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="action-modal-buttons">
            <button onClick={handleConfirm} className="confirm">
              Confirm
            </button>
            <button onClick={onClose} className="close">
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminAppConfirm;