import React, { useState, useEffect } from 'react';
import { usePagesData } from '../Components/DepartmentProvider'; // Corrected import

const AdminDepartmentSections = () => {
    const { departmentCenters } = usePagesData(); // Corrected hook name
    const [textAreaContent, setTextAreaContent] = useState('');

    useEffect(() => {
        // If departmentCenters has data, set the initial content of the textarea
        if (departmentCenters.length > 0) {
            setTextAreaContent(departmentCenters[0].pageCaption.join('\n\n'));
        }
    }, [departmentCenters]);

    const handleTextChange = (e) => {
        setTextAreaContent(e.target.value);
    };

    const handleSave = () => {
        // Split the textarea content into an array of paragraphs
        const updatedPageCaption = textAreaContent.split('\n\n').filter(paragraph => paragraph.trim() !== '');

        // Create updated sectionsData to match the format in pagesData
        const updatedSectionsData = departmentCenters.map(center => ({
            ...center,
            pageCaption: updatedPageCaption
        }));

        console.log("Saving data to database:", updatedSectionsData);
        // Example: await api.saveSections(updatedSectionsData);
    };

    return (
        <div className="edit-department-sections">
            <label>Page Caption </label>
                <textarea
                    value={textAreaContent}
                    onChange={handleTextChange}
                    placeholder="Departments & Centers Caption"
                    rows={10} // Adjust rows as needed
                />
            
            <button onClick={handleSave} className="save-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M24.2463 8.12876L19.8713 3.75376C19.7895 3.67267 19.6925 3.60851 19.5859 3.56496C19.4793 3.52142 19.3652 3.49935 19.25 3.50001H5.25C4.78587 3.50001 4.34075 3.68439 4.01256 4.01258C3.68437 4.34077 3.5 4.78589 3.5 5.25001V22.75C3.5 23.2141 3.68437 23.6593 4.01256 23.9875C4.34075 24.3156 4.78587 24.5 5.25 24.5H22.75C23.2141 24.5 23.6592 24.3156 23.9874 23.9875C24.3156 23.6593 24.5 23.2141 24.5 22.75V8.75001C24.5007 8.63486 24.4786 8.5207 24.4351 8.4141C24.3915 8.30749 24.3273 8.21052 24.2463 8.12876ZM10.5 5.25001H17.5V8.75001H10.5V5.25001ZM17.5 22.75H10.5V15.75H17.5V22.75ZM19.25 22.75V15.75C19.25 15.2859 19.0656 14.8408 18.7374 14.5126C18.4092 14.1844 17.9641 14 17.5 14H10.5C10.0359 14 9.59075 14.1844 9.26256 14.5126C8.93437 14.8408 8.75 15.2859 8.75 15.75V22.75H5.25V5.25001H8.75V8.75001C8.75 9.21414 8.93437 9.65926 9.26256 9.98745C9.59075 10.3156 10.0359 10.5 10.5 10.5H17.5C17.9641 10.5 18.4092 10.3156 18.7374 9.98745C19.0656 9.65926 19.25 9.21414 19.25 8.75001V5.60876L22.75 9.10876V22.75H19.25Z" fill="white"/>
                </svg>
                Save
            </button>
        </div>
    );
};

export default AdminDepartmentSections;
