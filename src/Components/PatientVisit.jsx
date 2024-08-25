import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { useUser } from '../Components/UserContext';

const PatientVisit = () => {
    const { patientVisit } = useUser();
    const [view, setView] = useState('monthly');

    const handleToggle = (event) => {
        setView(event.target.value);
    };

    const chartData = {
        series: [
            {
                name: 'Patient Visits',
                data: view === 'monthly' 
                    ? patientVisit.monthly.map(data => data.visits)
                    : patientVisit.yearly.map(data => data.visits),
            },
        ],
        options: {
            chart: {
                type: 'line',
                height: 350,
                zoom: { enabled: false },
            },
            xaxis: {
                categories: view === 'monthly' 
                    ? patientVisit.monthly.map(data => data.month)
                    : patientVisit.yearly.map(data => data.year),
            },
            stroke: {
                curve: 'smooth',
                width: 1, 
            },
            dataLabels: { enabled: false },
            markers: { size: 3 },
            tooltip: {
                enabled: true,
            },
        },
    };

    return (
        <div className="patient-visit">
            <div className="header-container">
                <h4>Patient Visits</h4>
                <div className="dropdown-container">
                    <p>Sort by</p>
                    <select value={view} onChange={handleToggle}>
                        <option value="monthly">Monthly</option>
                        <option value="yearly">Yearly</option>
                    </select>
                    {/* The "options" prop is passed to the Chart component, not here */}
                </div>
            </div>
            <Chart
                options={chartData.options}
                series={chartData.series}
                type="line"
                height={350}
            />
        </div>
    );
};

export default PatientVisit;
