import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsApiHeader = {
   'X-BingApis-SDK': 'true',
   'X-RapidAPI-Key': process.env.REACT_APP_CRYPTOS_NEWS_API_KEY,
   'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoNewsApiHeader });

export const cryptoNewsApi = createApi({
   reducerPath: 'cryptoNewsApi',
   baseQuery: fetchBaseQuery({ baseUrl }),
   endpoints: (builder) => ({
      getCryptoNews: builder.query({
         query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
      })
   })
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;



// const options = {
//    method: 'GET',
//    url: 'https://bing-news-search1.p.rapidapi.com/news',
//    params: { safeSearch: 'Off', textFormat: 'Raw' },
//    headers: {
//       'X-BingApis-SDK': 'true',
//       'X-RapidAPI-Key': 'b606ff8e97msh2109d8eee0152bdp16295bjsnba9257904132',
//       'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
//    }
// };