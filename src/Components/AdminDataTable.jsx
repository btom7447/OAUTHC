import React from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ClipLoader } from "react-spinners";

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
};

const AdminDataTable = ({ data, basePath, entityType, currentPage, itemsPerPage, setData }) => {
    if (!data || data.length === 0) {
        return (
            <div className="loading-spinner loading">
                <ClipLoader color="#005046" size={100} />
            </div>
        );
    }

    // Sort data alphabetically by name
    const sortedData = [...data].sort((a, b) => a.name.localeCompare(b.name));

    const handleDelete = async (id) => {
        const token = localStorage.getItem('bearer_token');
        
        if (!token) {
            console.error('No token found. Please log in.');
            return;
        }
    
        if (!entityType) {
            console.error('Entity type is not defined.');
            return; 
        }
    
        // Show loading toast
        const toastId = toast.loading('Deleting item...', { autoClose: false });

        try {
            const response = await fetch(`https://oauthc.iccflifeskills.com.ng/v0.1/api/admin/${entityType}/delete/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
    
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Failed to delete the item: ${errorText}`);
            }
    
            setData(id); // This should be a function to update the state in the parent component

            // Show success toast
            toast.update(toastId, { render: 'Item deleted successfully', type: 'success', isLoading: false, autoClose: 3000 });
    
            // Refresh the page after toast
            setTimeout(() => {
                window.location.reload();
            }, 3000); 
    
        } catch (error) {
            console.error("Error deleting the item:", error);
            
            // Show error toast
            toast.update(toastId, { render: `Error deleting item: ${error.message}`, type: 'error', isLoading: false, autoClose: 5000 });
        }
    };
    

    return (
        <table className="data-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Date Created</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {sortedData.map((item, index) => (
                    <tr key={item.id}>
                        <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                        <td>
                            <Link to={`${basePath}/${item.id}`}>
                                {item.name}
                            </Link>
                        </td>
                        <td>{formatDate(item.dateCreated)}</td>
                        <td>
                            <Link to={`${basePath}/${item.id}`}>
                                <button>
                                    {/* Edit button */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                        <path d="M4.15499 14.64C3.69749 14.64 3.26999 14.4825 2.96249 14.19C2.57249 13.8225 2.38499 13.2675 2.45249 12.6675L2.72999 10.2375C2.78249 9.78004 3.05999 9.17254 3.38249 8.84254L9.53999 2.32504C11.0775 0.697537 12.6825 0.652537 14.31 2.19004C15.9375 3.72754 15.9825 5.33254 14.445 6.96004L8.28749 13.4775C7.97249 13.815 7.38749 14.13 6.92999 14.205L4.51499 14.6175C4.38749 14.625 4.27499 14.64 4.15499 14.64ZM11.9475 2.18254C11.37 2.18254 10.8675 2.54254 10.3575 3.08254L4.19999 9.60754C4.04999 9.76504 3.87749 10.14 3.84749 10.3575L3.56999 12.7875C3.53999 13.035 3.59999 13.2375 3.73499 13.365C3.86999 13.4925 4.07249 13.5375 4.31999 13.5L6.73499 13.0875C6.95249 13.05 7.31249 12.855 7.46249 12.6975L13.62 6.18004C14.55 5.19004 14.8875 4.27504 13.53 3.00004C12.93 2.42254 12.4125 2.18254 11.9475 2.18254Z" fill="black"/>
                                        <path d="M13.0048 8.21263C12.9898 8.21263 12.9673 8.21263 12.9523 8.21263C10.6123 7.98013 8.72984 6.20263 8.36984 3.87763C8.32484 3.57013 8.53484 3.28513 8.84234 3.23263C9.14984 3.18763 9.43484 3.39763 9.48734 3.70513C9.77234 5.52013 11.2423 6.91513 13.0723 7.09513C13.3798 7.12513 13.6048 7.40263 13.5748 7.71013C13.5373 7.99513 13.2898 8.21263 13.0048 8.21263Z" fill="black"/>
                                        <path d="M15.75 17.0625H2.25C1.9425 17.0625 1.6875 16.8075 1.6875 16.5C1.6875 16.1925 1.9425 15.9375 2.25 15.9375H15.75C16.0575 15.9375 16.3125 16.1925 16.3125 16.5C16.3125 16.8075 16.0575 17.0625 15.75 17.0625Z" fill="black"/>
                                    </svg>
                                </button>
                            </Link>
                            <button onClick={() => handleDelete(item.id)}>
                                {/* Delete button */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path d="M15.7501 5.04748C15.7351 5.04748 15.7126 5.04748 15.6901 5.04748C11.7226 4.64998 7.76262 4.49998 3.84012 4.89748L2.31012 5.04748C1.99512 5.07748 1.71762 4.85248 1.68762 4.53748C1.65762 4.22248 1.88262 3.95248 2.19012 3.92248L3.72012 3.77248C7.71012 3.36748 11.7526 3.52498 15.8026 3.92248C16.1101 3.95248 16.3351 4.22998 16.3051 4.53748C16.2826 4.82998 16.0351 5.04748 15.7501 5.04748Z" fill="#D34A4A"/>
                                    <path d="M6.37458 4.29C6.34458 4.29 6.31458 4.29 6.27708 4.2825C5.97708 4.23 5.76708 3.9375 5.81958 3.6375L5.98458 2.655C6.10458 1.935 6.26958 0.9375 8.01708 0.9375H9.98208C11.7371 0.9375 11.9021 1.9725 12.0146 2.6625L12.1796 3.6375C12.2321 3.945 12.0221 4.2375 11.7221 4.2825C11.4146 4.335 11.1221 4.125 11.0771 3.825L10.9121 2.85C10.8071 2.1975 10.7846 2.07 9.98958 2.07H8.02458C7.22958 2.07 7.21458 2.175 7.10208 2.8425L6.92958 3.8175C6.88458 4.095 6.64458 4.29 6.37458 4.29Z" fill="#D34A4A"/>
                                    <path d="M11.4074 17.0626H6.59242C3.97492 17.0626 3.86992 15.6151 3.78742 14.4451L3.29992 6.89256C3.27742 6.58506 3.51742 6.31506 3.82492 6.29256C4.13992 6.27756 4.40242 6.51006 4.42492 6.81756L4.91242 14.3701C4.99492 15.5101 5.02492 15.9376 6.59242 15.9376H11.4074C12.9824 15.9376 13.0124 15.5101 13.0874 14.3701L13.5749 6.81756C13.5974 6.51006 13.8674 6.27756 14.1749 6.29256C14.4824 6.31506 14.7224 6.57756 14.6999 6.89256L14.2124 14.4451C14.1299 15.6151 14.0249 17.0626 11.4074 17.0626Z" fill="#D34A4A"/>
                                </svg>
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default AdminDataTable;
