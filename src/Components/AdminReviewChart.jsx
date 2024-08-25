import React from "react";
import { useUser } from "../Components/UserContext";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";

// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement);

const AdminReviewChart = () => {
    const { patientReview } = useUser();

    // Extract data
    const { totalReviews, satisfactionLevels } = patientReview;
    const { excellent, good, poor } = satisfactionLevels;

    const data = {
        labels: ["Excellent", "Good", "Poor"],
        datasets: [
            {
                label: "Patient Satisfaction",
                data: [excellent, good, poor],
                backgroundColor: ["#4CAF50", "#3371EB", "#F44336"], 
                borderWidth: 1,
                borderRadius: 10,
                spacing: 5, 
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                position: 'right',
                labels: {
                    boxWidth: 20,
                    padding: 15,
                    usePointStyle: true,
                }
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed !== null) {
                            label += context.parsed + ' reviews';
                        }
                        return label;
                    }
                }
            },
            datalabels: {
                formatter: () => totalReviews,
                color: '#000',
                anchor: 'center',
                align: 'center',
                font: {
                    size: 20,
                    weight: 'bold'
                }
            }
        },
        responsive: true,
        cutout: '70%', 
        elements: {
            arc: {
                borderRadius: 10,
                spacing: 5,
            }
        },
        layout: {
            padding: {
                bottom: 20
            }
        }
    };

    return (
        <div className="review-chart">
            <h4>Patient Satisfaction</h4>
            <Doughnut data={data} options={options} />
            <h6><span>Total</span> {totalReviews}</h6>
        </div>
    );
};

export default AdminReviewChart;
