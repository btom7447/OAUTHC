import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";

const BASE_URL = 'https://live-api.oauthc.gov.ng/v0.1/api/home/oauth-values';

const VisionMissionGoal = () => {
  const [values, setValues] = useState("");
    const [mission, setMission] = useState(""); 
    const [goals, setGoals] = useState("");
    const [loading, setLoading] = useState(false);


  useEffect(() => {
    const fetchVisionMissionGoalData = async () => {
      try {
        const response = await fetch(BASE_URL);
        const result = await response.json();

        if (result.success && result.data) {
          // Setting values from the API response
          setValues(result.data.values || "");
          setMission(result.data.mission || "");

          // Splitting goals into an array by pipe (|) symbol
          const goalsArray = result.data.goals ? result.data.goals.split(" | ") : [];
          setGoals(goalsArray);
        } else {
          throw new Error(result.message || 'Failed to retrieve data');
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

      fetchVisionMissionGoalData();
    }, []);

    if (loading) {
      return <div className="loading-spinner loading">
                <ClipLoader color="#005046" size={100} />
              </div>;
    }

    return (
      <div className="vision-mission-goal">
        {/* OUR VISION */}
        <div className="vision-mission-goal-box">
          <h5>Our Vision</h5>
          <div>
            <p>{values}</p>
          </div>
        </div>
        {/* OUR MISSION */}
        <div className="vision-mission-goal-box">
          <h5>Our Mission</h5>
          <div>
            <p>{mission}</p>
          </div>
        </div>
        {/* OUR GOAL */}
        <div className="vision-mission-goal-box goals">
          <h5>Our Goals</h5>
          <div>
            <p>{goals}</p>
          </div>
        </div>
      </div>
    );
};

export default VisionMissionGoal;
