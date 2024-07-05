import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { getTopRatedBooks } from './Api'; 

const PopularTopics = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const topBooks = await getTopRatedBooks();
      if (Array.isArray(topBooks)) {
        const labels = topBooks.map(book => book.title); 

      
      const data = topBooks.map(book => book.ratings_average);

      setChartData({
        labels,
        datasets: [
          {
            label: 'Ratings Average',
            data,
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      });
    

  } else {
    console.error('Fetched data is not an array:', topBooks);
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
      <Bar
        data={chartData}
        options={{
          title: {
            display: true,
            text: 'Top 6 Books by Ratings Average',
            fontSize: 25,
          },
          legend: {
            display: true,
            position: 'right',
          },
        }}
      />
    </div>
  );
};

export default PopularTopics;
