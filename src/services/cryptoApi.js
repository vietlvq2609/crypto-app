import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeader = {
   'X-RapidAPI-Key': process.env.REACT_APP_CRYPTOS_API_KEY,
   'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeader });

export const cryptoApi = createApi({
   reducerPath: 'cryptoApi',
   baseQuery: fetchBaseQuery({ baseUrl }),
   endpoints: (builder) => ({
      getCryptos: builder.query({
         query: (count) => createRequest(`/coins?limit=${count}`)
      }),
      getCryptoDetails: builder.query({
         query: (coinId) => createRequest(`/coin/${coinId}`)
      }),
      getCoinPriceHistory: builder.query({
         query: ({ coinId, timeperiod }) => createRequest(`/coin/${coinId}/history?timeperiod=${timeperiod}`)
      }),
      getCryptoExchanges: builder.query({
         query: () => createRequest(`exchange/-zdvbieRdZ/coins`)
      }),
   })
});

export const {
   useGetCryptosQuery,
   useGetCryptoDetailsQuery,
   useGetCoinPriceHistoryQuery,
   useGetCryptoExchangesQuery
} = cryptoApi;