
import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import axios from 'axios';

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:5000/api/data');
      setData(result.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.map((item) => item.date),
        datasets: [{
          label: 'Example Data',
          data: data.map((item) => item.value),
        }],
      },
    });
  }, [data]);

  return (
    <div>
      <h1>Dashboard</h1>
      <canvas id="myChart" width="400" height="200"></canvas>
    </div>
  );
};

export default Dashboard;
