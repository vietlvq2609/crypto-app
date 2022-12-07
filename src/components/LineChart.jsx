import React from 'react';
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';

import {
   CategoryScale,
   Chart,
   LinearScale,
   PointElement,
   LineElement,
   Title as ChartTiltle,
   Tooltip,
   Legend
} from 'chart.js';
Chart.register(
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   ChartTiltle,
   Tooltip,
   Legend
);


const { Title } = Typography;

const LineChart = ({ currentPrice, coinHistory, coinName, isCoinPriceHistoryLoading }) => {
   const coinPrice = [];
   const coinTimestamp = [];

   for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
      coinPrice.push(coinHistory?.data?.history[i].price);
   }

   for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
      coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
   }

   const data = {
      labels: coinTimestamp,
      datasets: [
         {
            label: 'Price In USD',
            data: coinPrice,
            fill: false,
            backgroundColor: '#0071bd',
            borderColor: '#0071bd',
         },
      ],
   };

   const options = {
      scales: {
         yAxes: [
            {
               ticks: {
                  beginAtZero: true,
               },
            },
         ],
      },
   };

   if (isCoinPriceHistoryLoading) return 'loading...';

   return (
      <>
         <Row className="chart-header">
            <Title level={2} className="chart-title">{coinName} Price Chart </Title>
            <Col className="price-container">
               <Title level={5} className="price-change">Change: {coinHistory?.data?.change}%</Title>
               <Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Title>
            </Col>
         </Row>
         <Line data={data} options={options} />
      </>
   )
}

export default LineChart