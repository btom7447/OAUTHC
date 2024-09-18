import React, { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';

const AdminAppCancel = ({ isOpen, onClose, onCancel, appointmentId }) => {
  const [message, setMessage] = useState("");

  // Handle the cancel button click
  const handleCancel = async () => {
    // Start a loading toast notification
    const loadingToastId = toast.loading("Cancelling appointment...", {
      autoClose: false,
      toastId: 'loading-toast'
    });

    const raw = JSON.stringify({
      id: appointmentId,
      status: "cancelled",
      message: message
    });

    const requestOptions = {
      method: "POST",
      body: raw,
      headers: { "Content-Type": "application/json" },
      redirect: "follow"
    };

    try {
      const response = await fetch(
        "https://live-api.oauthc.gov.ng/v0.1/api/admin/appointment/cancel",
        requestOptions
      );
      const result = await response.json();

      if (response.ok) {
        // Update the loading toast to success
        toast.update(loadingToastId, {
          render: 'Appointment cancelled successfully!',
          type: 'success',
          autoClose: 2500,
          isLoading: false
        });

        onCancel();  // Proceed with the original success logic
        console.log(result);
      } else {
        throw new Error(result.message || 'Cancellation failed');
      }
    } catch (error) {
      // Update the loading toast to an error message
      toast.update(loadingToastId, {
        render: `Error: ${error.message}`,
        type: 'error',
        autoClose: 5000,
        isLoading: false
      });
      console.error("Error:", error);
    } finally {
      // Ensure that the loading toast is dismissed once complete
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
          <h2>Cancel Appointment</h2>
          <div className="action-modal-content">
            <textarea
              placeholder="Cancellation message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="action-modal-buttons">
            <button onClick={handleCancel} className="cancel">
              Cancel
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

export default AdminAppCancel;