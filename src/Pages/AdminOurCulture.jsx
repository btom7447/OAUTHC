import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from 'react-toastify';

const BASE_URL = 'https://live-api.oauthc.gov.ng/v0.1/api';

const AdminOurCulture = () => {
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [text, setText] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchWelcomeData = async () => {
            try {
                const response = await fetch(`${BASE_URL}/home/culture`);
                const data = await response.json();

                // Set the states with fetched data
                setTitle(data.title);
                setSubtitle(data.subtitle);
                setText(data.text);
            } catch (error) {
                console.error("Error fetching welcome data:", error);
                toast.error("Failed to load welcome section data");
            }
        };

        fetchWelcomeData();
    }, []);

    // Handle form submit (to update the welcome section)
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

            // Create FormData to handle image uploads
            const formData = new FormData();
            formData.append('title', title);
            formData.append('subtitle', subtitle);
            formData.append('text', text);

            const response = await fetch(`${BASE_URL}/admin/update/culture/1`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                body: formData,
            });

            if (!response.ok) {
                const result = await response.json();
                throw new Error(result.message || 'Failed to update welcome section');
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
                <h2>Edit "Our Culture"</h2>
            </div>
            <form onSubmit={handleSubmit} className="test-image-form details-page-form">
                <div className="details-inputs">
                    <label>
                        Title:
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Subtitle
                        <input
                            type="text"
                            id="subtitle"
                            value={subtitle}
                            onChange={(e) => setSubtitle(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Text
                        <textarea
                            id="text"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            required
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

export default AdminOurCulture;