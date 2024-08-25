import React, { useState } from "react";
import { researchEthicsData } from "./ResearchApplicationRules";

const ResearchEthicsForm = () => {
  const [formCompleted, setFormCompleted] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all the radio buttons are filled
    let isCompleted = true;
    researchEthicsData.forEach((ruleSet) => {
      ruleSet.checklist.forEach((checklistItem) => {
        const radios = document.getElementsByName(checklistItem.name);
        const selectedRadio = Array.from(radios).find(radio => radio.checked);
        if (!selectedRadio) {
          isCompleted = false;
        }
      });
    });

    setFormCompleted(isCompleted);
    if (isCompleted) {
      // Proceed with form submission
      console.log("Form submitted!");
    } else {
      // Show "form not completed" message
      console.log("Form not completed");
    }
  };

  const handleChange = () => {
    if (!formCompleted) {
      setFormCompleted(true);
    }
  };

  return (
    <div className="research-form">
        <form onSubmit={handleSubmit}>
            <div className="name-email-inputs">
                <input 
                type="text" 
                name="researcher-name" 
                placeholder="Enter Name"
                onChange={handleChange}
                />
                <input 
                type="email" 
                name="researcher-email" 
                placeholder="Enter Email"
                onChange={handleChange}
                />
            </div>
            {researchEthicsData.map((ruleSet, index) => (
            <div key={index} className="research-checklists">
                <h6>{ruleSet.checklistTitle}</h6>
                <ol>
                {ruleSet.checklist.map((checklistItem, itemIndex) => (
                    <li key={itemIndex}>
                        <label htmlFor={checklistItem.name}>
                            <div className="input-options">
                                <span>{checklistItem.text}</span>
                                <input 
                                    type="radio" 
                                    name={checklistItem.name} 
                                    id={`${checklistItem.name}-yes`} 
                                    value="Yes"
                                    onChange={handleChange}
                                />
                                <label htmlFor={`${checklistItem.name}-yes`}>Yes</label>
                                <input 
                                    type="radio" 
                                    name={checklistItem.name} 
                                    id={`${checklistItem.name}-no`} 
                                    value="No" 
                                    onChange={handleChange}
                                />
                                <label htmlFor={`${checklistItem.name}-no`}>No</label>
                                <input 
                                    type="radio" 
                                    name={checklistItem.name} 
                                    id={`${checklistItem.name}-na`} 
                                    value="Not Applicable" 
                                    onChange={handleChange}
                                />
                                <label htmlFor={`${checklistItem.name}-na`}>Not Applicable</label>
                            </div>
                        </label>
                    </li>
                ))}
                </ol>
            </div>
            ))}

            <div className="research-submit-button">
                <button type="submit">Submit</button>
                <p style={{ color: formCompleted ? 'transparent' : 'red' }}>
                    Form not completed!
                </p>
            </div>
            <h5>N.B</h5>
            <p className="notification">
                Only the first twenty applications received will be considered 
                while others will be carried over to the next month.
            </p>
        </form>
    </div>
  );
};

export default ResearchEthicsForm;