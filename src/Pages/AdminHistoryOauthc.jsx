import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from 'react-toastify';

const BASE_URL = 'https://live-api.oauthc.gov.ng/v0.1/api';

const AdminHistoryOauthc = () => {
    const [title, setTitle] = useState("");
    const [text, setText] = useState(""); // Single string for text
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchWelcomeData = async () => {
            try {
                const response = await fetch(`${BASE_URL}/home/about`);
                const result = await response.json();

                // Check if response is successful and data is available
                if (result.success && result.data) {
                    const { title, text } = result.data;
                    setTitle(title || ""); // Default to empty string if null
                    setText(text || ""); // Default to empty string if null
                } else {
                    throw new Error(result.message || 'Failed to retrieve data');
                }
            } catch (error) {
                console.error("Error fetching history data:", error);
                toast.error("Failed to load history data");
            }
        };

        fetchWelcomeData();
    }, []);

    // Handle form submit (to update the section)
    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        // Toast for loading
        const loadingToastId = toast.loading("Updating section...", {
            autoClose: false,
            toastId: 'loading-toast'
        });

        try {
            const token = localStorage.getItem('bearer_token');
            if (!token) {
                throw new Error('No token found. Please log in.');
            }

            const response = await fetch(`${BASE_URL}/admin/update/about/1`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title,
                    text
                }),
            });

            if (!response.ok) {
                const result = await response.json();
                throw new Error(result.message || 'Failed to update section');
            }

            // Update success toast
            toast.update(loadingToastId, {
                render: "Section updated successfully!",
                type: "success",
                isLoading: false,
                autoClose: 2500,
            });

        } catch (error) {
            toast.update(loadingToastId, {
                render: `Error: ${error.message}`,
                type: "error",
                isLoading: false,
                autoClose: 5000,
            });
        } finally {
            setLoading(false);
            toast.dismiss('loading-toast');
        }
    };

    return (
        <div className="admin-sections-edit">
            <ToastContainer />
            <div className="pages-caption">
                <h1>Sections</h1>
            </div>
            <div className="admin-pages-caption">
                <h2>Edit "Brief History of OAUTHC"</h2>
            </div>
            <form onSubmit={handleSubmit} className="test-image-form details-page-form">
                <div className="details-inputs">
                    <label htmlFor="title">
                        Title:
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </label>
                    <label htmlFor="text">
                        Text:
                        <textarea
                            id="text"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            required
                            rows="10" // Adjust rows for more space
                        ></textarea>
                    </label>
                    <button type="submit" disabled={loading}>
                        {loading ? 'Updating ...' : 'Update Section'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AdminHistoryOauthc;