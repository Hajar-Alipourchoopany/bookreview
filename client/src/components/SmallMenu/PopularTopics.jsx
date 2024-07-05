import React, { useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { AppContext } from '../../context';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const PopularTopics = () => {
    const { chartData } = useContext(AppContext);

    const options = {
        responsive: true,
        plugins: {
        legend: {
        position: 'top',
            },
            title: {
            display: true,
            text: 'Top 10 Books by Edition Count',
            },
        },
    };

    return (
        <section className="popular-topics">
            <h2>Popular Topics</h2>
            <p>Analysis of Reader Preferences by Topic</p>
            <p>"We analyzed how readers reacted to each topic."</p>
            <h3>Top 10 Books by Edition Count</h3>
            <Bar data={chartData} options={options} />
            <p>Novel</p>
            <p>"The main reasons why readers reacted positively to novels are as follows..."</p>
            <p>Self-help</p>
            <p>"The main reasons why readers reacted positively to self-help books are as follows..."</p>
            <p>The topics that received the most positive reactions from readers are as follows:</p>
        </section>
    );
}

export default PopularTopics;


