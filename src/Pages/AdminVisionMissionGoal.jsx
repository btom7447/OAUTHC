import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from 'react-toastify';

const BASE_URL = 'https://live-api.oauthc.gov.ng/v0.1/api';

const AdminVisionMissionGoal = () => {
    const [values, setValues] = useState("");
    const [mission, setMission] = useState(""); 
    const [goals, setGoals] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchVisionMissionGoalData = async () => {
            try {
                const response = await fetch(`${BASE_URL}/home/oauth-values`);
                const result = await response.json();

                // Check if response is successful and data is available
                if (result.success && result.data) {
                    const { values, mission, goals } = result.data;
                    setValues(values || "");
                    setMission(mission || ""); 
                    setGoals(goals || "");
                } else {
                    throw new Error(result.message || 'Failed to retrieve data');
                }
            } catch (error) {
                console.error("Error fetching vision, mission, and goal data:", error);
                toast.error("Failed to load vision mission goal data");
            }
        };

        fetchVisionMissionGoalData();
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

            const response = await fetch(`${BASE_URL}/admin/update/oauth-values/1`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    values,
                    mission,
                    goals
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
                <h2>Edit "Vision, Mission, Goal"</h2>
            </div>
            <form onSubmit={handleSubmit} className="test-image-form details-page-form">
                <div className="details-inputs">
                    <label htmlFor="vision">
                        Vision:
                        <textarea
                            id="vision"
                            value={values}
                            onChange={(e) => setValues(e.target.value)}
                            required
                            rows="10" 
                        ></textarea>
                    </label>
                    <label htmlFor="mission">
                        Mission:
                        <textarea
                            id="mission"
                            value={mission}
                            onChange={(e) => setMission(e.target.value)}
                            required
                            rows="10" 
                        ></textarea>
                    </label>
                    <label htmlFor="goal">
                        Goal:
                        <textarea
                            id="goal"
                            value={goals}
                            onChange={(e) => setGoals(e.target.value)}
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

export default AdminVisionMissionGoal;