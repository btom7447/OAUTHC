import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from 'react-toastify';

const BASE_URL = 'https://live-api.oauthc.gov.ng/v0.1/api';

const AdminWhoWeAre = () => {
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [text, setText] = useState("");
    const [image, setImage] = useState(""); 
    const [newImage, setNewImage] = useState(null); 
    const [loading, setLoading] = useState(false);

    // Fetching data to populate the form
    useEffect(() => {
        const fetchWhoWeAreData = async () => {
            try {
                const response = await fetch(`${BASE_URL}/home/who-we-are`);
                const result = await response.json();

                if (result.success && result.data) {
                    // Set the state with fetched data
                    setTitle(result.data.title || "");
                    setSubtitle(result.data.subtitle || "");
                    setText(result.data.text || "");
                    setImage(result.data.image || ""); // Assuming image URL is returned
                } else {
                    throw new Error(result.message || "Failed to retrieve data");
                }
            } catch (error) {
                console.error("Error fetching who-we-are data:", error);
                toast.error("Failed to load 'Who We Are' section data");
            }
        };

        fetchWhoWeAreData();
    }, []);

    // Handle form submission (to update the 'Who We Are' section)
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const loadingToastId = toast.loading("Updating section...", {
            autoClose: false,
            toastId: 'loading-toast',
        });

        try {
            const token = localStorage.getItem('bearer_token');
            if (!token) {
                throw new Error('No token found. Please log in.');
            }

            // Creating FormData to handle image uploads
            const formData = new FormData();
            formData.append('title', title);
            formData.append('subtitle', subtitle);
            formData.append('text', text);
            if (newImage instanceof File) {
                formData.append('image', newImage);
            }

            const response = await fetch(`${BASE_URL}/admin/update/who-we-are/1`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                body: formData,
            });

            if (!response.ok) {
                const result = await response.json();
                throw new Error(result.message || 'Failed to update section');
            }

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
                <h2>Edit "Who We Are"</h2>
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
                        Subtitle:
                        <input
                            type="text"
                            id="subtitle"
                            value={subtitle}
                            onChange={(e) => setSubtitle(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Text:
                        <textarea
                            id="text"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            required
                        ></textarea>
                    </label>
                    <label>
                        Image:
                        <input
                            type="file"
                            id="image"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                        <div>
                            {imagePreviewUrl && (
                                <div sections-image-preview>
                                    <p>{newImage ? "Preview of new image:" : "Current Image:"}</p>
                                    <img src={imagePreviewUrl} alt="Who We Are" style={{ width: '200px', height: '220px', objectFit: 'cover' }} />
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

export default AdminWhoWeAre;
