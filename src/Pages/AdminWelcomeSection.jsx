import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from 'react-toastify';

const BASE_URL = 'https://live-api.oauthc.gov.ng/v0.1/api/admin';

const AdminWelcomeSection = () => {
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [text, setText] = useState("");
    const [image, setImage] = useState(""); // Store image URL as string
    const [newImage, setNewImage] = useState(null); // Store new image file
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchWelcomeData = async () => {
            try {
                const token = localStorage.getItem('bearer_token');
                if (!token) {
                    throw new Error('No token found. Please log in.');
                }

                const response = await fetch(`${BASE_URL}/all/welcome`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }

                const result = await response.json();

                // Check if data is available
                if (result.success && result.data) {
                    // Set the states with fetched data
                    setTitle(result.data.title);
                    setSubtitle(result.data.subtitle);
                    setText(result.data.text);
                    setImage(result.data.image); // Assuming image URL is returned
                } else {
                    throw new Error(result.message || 'Failed to retrieve welcome data');
                }
            } catch (error) {
                console.error("Error fetching welcome data:", error);
                toast.error(`Failed to load welcome section data: ${error.message}`);
            }
        };

        fetchWelcomeData();
    }, []);

    // Handle form submit (to update the welcome section)
    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        // Toast for loading
        const loadingToastId = toast.loading("Updating welcome section...", {
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
            if (newImage instanceof File) {
                formData.append('image', newImage); // Add new image only if it's a file
            }

            const response = await fetch(`${BASE_URL}/update/welcome/1`, {
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
                render: "Welcome section updated successfully!",
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

    // Handle image input change
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setNewImage(file); // Set the new image
    };

    // Create an image preview URL
    const imagePreviewUrl = newImage ? URL.createObjectURL(newImage) : image;

    return (
        <div className="admin-sections-edit">
            <ToastContainer />
            <div className="pages-caption">
                <h1>Sections</h1>
            </div>
            <div className="admin-pages-caption">
                <h2>Edit "Welcome Section"</h2>
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
                    <label>
                        Image
                        <input
                            type="file"
                            id="image"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                        <div>
                            {imagePreviewUrl && (
                                <div className="sections-image-preview">
                                    <p>{newImage ? "Preview of new image:" : "Current Image:"}</p>
                                    <img src={imagePreviewUrl} alt="Welcome Section" style={{ width: '500px', height: '200px', objectFit: 'cover' }} />
                                </div>
                            )}
                        </div>
                    </label>
                    <button type="submit" disabled={loading}>
                        {loading ? 'Updating ...' : 'Update Section'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AdminWelcomeSection;