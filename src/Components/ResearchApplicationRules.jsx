import React from "react";

export const researchEthicsData = [
  {
    rulesTitle: "Application to the ethics and research committee for clearance of research involving human subjects, or patient records.", 
    rulesSubTitle: "All applications to the committee will only be considered if:", 
    rules: [
      "Response to this application is typed on one side of each sheet and all boxes are electronically ticked.", 
      "The form is completed in full with the information requested. Where a question is not applicable, it is important to make it clear and not leave it blank.", 
      "The application is signed by the applicant, applicant's supervisor (where appropriate), the Head of Department and the Head of Department/Unit where the research will be carried out.", 
      "Seventeen collated sets of application form and accompanying documents are attached.", 
      "The language used in the application is clear and simple to understand to lay members.", 
      "All abbreviations should first be written in full.", 
      "Three copies of research proposals are submitted."
    ],
    checklistTitle: "Please indicate if the following have been enclosed by ticking the relevant box:", 
    checklist: [
        {
            name: "Research Proposal",
            text: "Research Proposal/Dissertation (Three copies)", 
        }, 
        {
            name: "Application Form", 
            text: "Application Form (Seventeen copies only)", 
        }, 
        {
            name: "Informed Consent", 
            text: "Informed consent form", 
        }, 
        {
            name: "Subject Information", 
            text: "Subject information sheet",
        }, 
        {
            name: "Questionnaire Form", 
            text: "Questionnaire form", 
        }, 
        {
            name: "Proforma Form", 
            text: "Proforma form", 
        }, 
        {
            name: "Interview Form", 
            text: "Interview form", 
        }, 
        {
            name: "Adverstisement", 
            text: "Advertisement for research subjects", 
        }, 
        {
            name: "Medical", 
            text:"Medical/Dental Practitioners/Consultant information sheet/letter", 
        }, 
        {
            name: "Data Sheet", 
            text: "Data sheet for all drugs (one copy only)", 
        }, 
        {
            name: "Compensation Statement", 
            text: "Statement regading compensation arrangements (one copy only)", 
        }, 
        {
            name: "Clearance", 
            text: "Clearance for use of isotopes and/or radiation"
        }
    ]
  }
];

const ResearchApplicationRules = () => {
  return (
    <div className="research-application-rules">
      {researchEthicsData.map((ruleSet, index) => (
        <div key={index}>
          <h3>{ruleSet.rulesTitle}</h3>
          <h6>{ruleSet.rulesSubTitle}</h6>
          <ol>
            {ruleSet.rules.map((rule, index) => (
              <li key={index}>{rule}</li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
};

export default ResearchApplicationRules;