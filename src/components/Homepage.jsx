import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';

const { Title } = Typography;

const Homepage = () => {
  return (
    <>
      <Title level={2} className="heading">Global Crypto Stats</Title>
      <Row gutter={[32, 32]}>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={4} /></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={4} /></Col>
        <Col span={12}><Statistic title="Total Market Cap:" value={4} /></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={4} /></Col>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={4} /></Col>
        <Col span={12}><Statistic title="Total Markets" value={4} /></Col>
      </Row>
    </>
  )
}

export default Homepage