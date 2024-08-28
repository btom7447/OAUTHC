import React from "react";
import { Link } from "react-router-dom";

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
};

const formatTitleForURL = (title) => {
    return title.toLowerCase().replace(/\s+/g, '-');
};

const AdminDataTable = ({ data, basePath, entityType }) => {
    if (!data || data.length === 0) {
        return <div>No items available</div>;
    }

    // Sort data alphabetically by title
    const sortedData = [...data].sort((a, b) => a.title.localeCompare(b.title));

    return (
        <table className="data-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Date Created</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {sortedData.map((item, index) => (
                    <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>
                            <Link to={`${basePath}/${formatTitleForURL(item.title)}`}>
                                {item.title}
                            </Link>
                        </td>
                        <td>{item.status}</td>
                        <td>{formatDate(item.dateCreated)}</td>
                        <td>
                            <Link to={`${basePath}/${formatTitleForURL(item.title)}`}>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                        <path d="M0 19.4763H22V21.0477H0V19.4763ZM18.3857 6.11914C19.0143 5.49057 19.0143 4.54771 18.3857 3.91914L15.5571 1.09057C14.9286 0.461998 13.9857 0.461998 13.3571 1.09057L1.57143 12.8763V17.9049H6.6L18.3857 6.11914ZM14.4571 2.19057L17.2857 5.01914L14.9286 7.37628L12.1 4.54771L14.4571 2.19057ZM3.14286 16.3334V13.5049L11 5.64771L13.8286 8.47628L5.97143 16.3334H3.14286Z" fill="black"/>
                                    </svg>
                                </button>
                            </Link>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="26" viewBox="0 0 22 26" fill="none">
                                    <path d="M7.33301 9.16675H9.16634V20.1667H7.33301V9.16675ZM12.833 9.16675H14.6663V20.1667H12.833V9.16675Z" fill="#D34A4A"/>
                                    <path d="M0 3.66667V5.5H1.83333V23.8333C1.83333 24.3196 2.02649 24.7859 2.3703 25.1297C2.71412 25.4735 3.18044 25.6667 3.66667 25.6667H18.3333C18.8196 25.6667 19.2859 25.4735 19.6297 25.1297C19.9735 24.7859 20.1667 24.3196 20.1667 23.8333V5.5H22V3.66667H0ZM3.66667 23.8333V5.5H18.3333V23.8333H3.66667ZM7.33333 0H14.6667V1.83333H7.33333V0Z" fill="#D34A4A"/>
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
