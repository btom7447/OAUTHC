import React from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ClipLoader } from "react-spinners";

const AdminRoleTable = ({ data,  entityType, currentPage, itemsPerPage, setData }) => {

    const BASE_URL = 'https://live-api.oauthc.gov.ng/v0.1/api/admin';

    const userRole = JSON.parse(localStorage.getItem('userData'))?.role || '';

    if (!data || data.length === 0) {
        return (
            <div className="loading-spinner loading">
                <ClipLoader color="#005046" size={100} />
            </div>
        );
    }

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
        const toastId = toast.loading('Deleting Admin ...', { autoClose: false });

        try {
            const response = await fetch(`${BASE_URL}/delete-admin/${id}`, {
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

            // Remove the deleted item from the state
            setData((prevData) => prevData.filter((item) => item.id !== id));

            // Show success toast
            toast.update(toastId, { render: 'Item deleted successfully', type: 'success', isLoading: false, autoClose: 3000 });

        } catch (error) {
            console.error("Error deleting the item:", error);
            // Show error toast
            toast.update(toastId, { render: `Error deleting item: ${error.message}`, type: 'error', isLoading: false, autoClose: 5000 });
        }
    };

    return (
        <>
            <table className="data-table">
                <thead>
                <tr>
                        <th>ID</th>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        {userRole === 'super-admin' && <th>Actions</th>} 
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map((item, index) => (
                        <tr key={item.id}>
                            <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                            <td><img src={item.image} alt={item.name} /></td>
                            <td>
                                {item.name}
                            </td>
                            <td className="admin-table-email">{item.email}</td>
                            <td>{item.role}</td>
                            {userRole === 'super-admin' && (
                                <td id="adminDeleteBtn">
                                    <button onClick={() => handleDelete(item.id)}>
                                        {/* Delete button */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path d="M15.7501 5.04748C15.7351 5.04748 15.7126 5.04748 15.6901 5.04748C11.7226 4.64998 7.76262 4.49998 3.84012 4.89748L2.31012 5.04748C1.99512 5.07748 1.71762 4.85248 1.68762 4.53748C1.65762 4.22248 1.88262 3.95248 2.19012 3.92248L3.72012 3.77248C7.71012 3.36748 11.7526 3.52498 15.8026 3.92248C16.1101 3.95248 16.3351 4.22998 16.3051 4.53748C16.2826 4.82998 16.0351 5.04748 15.7501 5.04748Z" fill="#D34A4A"/>
                                            <path d="M6.37458 4.29C6.34458 4.29 6.31458 4.29 6.27708 4.2825C5.97708 4.23 5.76708 3.9375 5.81958 3.6375L5.98458 2.655C6.10458 1.935 6.26958 0.9375 8.01708 0.9375H9.98208C11.7371 0.9375 11.9021 1.9725 12.0146 2.6625L12.1796 3.6375C12.2321 3.945 12.0221 4.2375 11.7221 4.2825C11.4146 4.335 11.1221 4.125 11.0771 3.825L10.9121 2.85C10.8071 2.1975 10.7846 2.07 9.98958 2.07H8.02458C7.22958 2.07 7.21458 2.175 7.10208 2.8425L6.92958 3.8175C6.88458 4.095 6.64458 4.29 6.37458 4.29Z" fill="#D34A4A"/>
                                            <path d="M11.4074 17.0626H6.59242C3.97492 17.0626 3.86992 15.6151 3.78742 14.4451L3.29992 6.89256C3.27742 6.58506 3.51742 6.31506 3.82492 6.29256C4.13992 6.27756 4.40242 6.51006 4.42492 6.81756L4.91242 14.3701C4.99492 15.5101 5.02492 15.9376 6.59242 15.9376H11.4074C12.9824 15.9376 13.0124 15.5101 13.0874 14.3701L13.5749 6.81756C13.5974 6.51006 13.8674 6.27756 14.1749 6.29256C14.4824 6.31506 14.7224 6.57756 14.6999 6.89256L14.2124 14.4451C14.1299 15.6151 14.0249 17.0626 11.4074 17.0626Z" fill="#D34A4A"/>
                                        </svg>
                                    </button>
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
            <ToastContainer />
        </>
    );
};

export default AdminRoleTable;