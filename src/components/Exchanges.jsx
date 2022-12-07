import React from 'react';
import millify from 'millify';
import { Collapse, Row, Col, Typography, Avatar } from 'antd';

import { useGetCryptosQuery } from '../services/cryptoApi';

const { Panel } = Collapse;
const { Text, Title } = Typography;

const Exchanges = () => {
  const { data, isLoading } = useGetCryptosQuery(20);

  const exchangeCoins = data?.data?.coins;

  console.log(exchangeCoins)

  if (isLoading) return 'loading...'

  return (
    <>
      <Title level={2} className="heading">Exchange Coins</Title>
      <Row style={{ padding: '12px', fontWeight: "bold" }}>
        <Col span={9} style={{ textAlign: 'center' }}>Exchanges</Col>
        <Col span={5} style={{ textAlign: 'center' }}>24h Trade Volumne</Col>
        <Col span={5} style={{ textAlign: 'center' }}>Markets</Col>
        <Col span={5} style={{ textAlign: 'center' }}>Change</Col>
      </Row>
      <Row>
        {exchangeCoins?.map(coin => (
          <Col span={24}>
            <Collapse accordion>
              <Panel showArrow={false} header={
                <Row>
                  <Col span={9}>
                    <Text><strong>{coin?.rank}.</strong></Text>
                    <Avatar className="exchange-image" src={coin?.iconUrl} />
                    <Text><strong>{coin?.name}</strong></Text>
                  </Col>
                  <Col span={5} style={{ textAlign: 'center' }}>{coin['24hVolume'] && millify(coin['24hVolume'])}</Col>
                  <Col span={5} style={{ textAlign: 'center' }}>${coin?.marketCap && millify(coin?.marketCap)}</Col>
                  <Col span={5} style={{ textAlign: 'center' }}>{coin?.change && millify(coin?.change)}%</Col>
                </Row>
              }>
                <a href={coin?.coinrankingUrl} target="_blank" rel='noreferrer'>{coin?.coinrankingUrl}</a>
              </Panel>
            </Collapse>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Exchanges