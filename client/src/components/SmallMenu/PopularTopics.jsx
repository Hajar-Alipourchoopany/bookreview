import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { getBooksByEditionCount } from './Api'; 
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const PopularTopics = () => {
  const [chartData, setChartData] = useState({});
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const books = await getBooksByEditionCount();
        if (books && Array.isArray(books)) { 
          const topBooks = books.sort((a, b) => b.edition_count - a.edition_count).slice(0, 6);
          const labels = topBooks.map(book => book.title); 
          const data = topBooks.map(book => book.edition_count);

          setChartData({
            labels,
            datasets: [
              {
                label: 'Edition Count',
                data,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
              },
            ],
          });
        } else {
          throw new Error('Fetched data is not an array or is undefined');
        }
      } catch (error) {
        setError(error.message);
        setChartData({
          labels: [],
          datasets: [],
        });
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {error ? ( 
        <div className="error">{error}</div>
      ) : (
        <Bar
          data={chartData}
          options={{
            responsive: true,
            plugins: {
            title: {
              display: true,
              text: 'Top 6 Books by Ratings Average',
              fontSize: 25,
            },
            legend: {
              display: true,
              position: 'right',
            },
          },
          }}
        />
      )}
    </div>
  );
};

export default PopularTopics;



