import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from 'react-toastify';

const BASE_URL = 'https://live-api.oauthc.gov.ng/v0.1/api';

const AdminOurValues = () => {
    const [excellence, setExcellence] = useState("");
    const [professionalism, setProfessionalism] = useState(""); 
    const [growth, setGrowth] = useState("");
    const [integrity, setIntegrity] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetOurValues = async () => {
            try {
                const response = await fetch(`${BASE_URL}/home/mission-goals`);
                const result = await response.json();

                // Check if response is successful and data is available
                if (result.success && result.data) {
                    const { excellence, professionalism, growth, integrity } = result.data;
                    setExcellence(excellence || "");
                    setProfessionalism(professionalism || ""); 
                    setGrowth(growth || "");
                    setIntegrity(integrity || "");
                } else {
                    throw new Error(result.message || 'Failed to retrieve data');
                }
            } catch (error) {
                console.error("Error fetching our values data:", error);
                toast.error("Failed to load our values data");
            }
        };

        fetOurValues();
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

            const response = await fetch(`${BASE_URL}/admin/update/mission-goals/1`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    excellence,
                    professionalism,
                    growth,
                    integrity
                }),
            });

            const result = await response.json(); // Handle server response
            if (!response.ok) {
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
                <h2>Edit "Our Values"</h2>
            </div>
            <form onSubmit={handleSubmit} className="test-image-form details-page-form">
                <div className="details-inputs">
                    <label htmlFor="excellence">
                        Excellence:
                        <textarea
                            id="excellence"
                            value={excellence}
                            onChange={(e) => setExcellence(e.target.value)}
                            required
                            rows="10" 
                        ></textarea>
                    </label>
                    <label htmlFor="professionalism">
                        Professionalism:
                        <textarea
                            id="professionalism"
                            value={professionalism}
                            onChange={(e) => setProfessionalism(e.target.value)}
                            required
                            rows="10" 
                        ></textarea>
                    </label>
                    <label htmlFor="growth">
                        Growth:
                        <textarea
                            id="growth"
                            value={growth}
                            onChange={(e) => setGrowth(e.target.value)}
                            required
                            rows="10" 
                        ></textarea>
                    </label>
                    <label htmlFor="integrity">
                        Integrity:
                        <textarea
                            id="integrity"
                            value={integrity}
                            onChange={(e) => setIntegrity(e.target.value)}
                            required
                            rows="10" 
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

export default AdminOurValues;