import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Character, Death, Episode, Quote } from '@/types';
import { HYDRATE } from 'next-redux-wrapper';

export const api = createApi({
  reducerPath: 'apiService',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
  },
  endpoints: (builder) => ({
    getCharacters: builder.query<Character[], void>({
      query: () => 'characters',
    }),
    getRandomCharacter: builder.query<Character, void>({
      query: () => 'characters/random',
    }),
    getCharacterByName: builder.query<Character[], string>({
      query: (name) => `characters?name=${name}`,
    }),
    getDeaths: builder.query<Death[], void>({
      query: () => 'deaths',
    }),
    getRandomDeath: builder.query<Death, void>({
      query: () => 'deaths/random',
    }),
    getEpisodes: builder.query<Episode[], void>({
      query: () => 'episodes',
    }),
    getRandomEpisode: builder.query<Episode, void>({
      query: () => 'episodes/random',
    }),
    getQuotes: builder.query<Quote[], void>({
      query: () => 'quotes',
    }),
    getRandomQuote: builder.query<Quote, void>({
      query: () => 'quotes/random',
    }),
  }),
});

export type Api = typeof api
export const apiService: Api = api

export const { useGetCharactersQuery, useGetRandomCharacterQuery, useGetCharacterByNameQuery, useGetRandomDeathQuery, useGetDeathsQuery, useGetRandomEpisodeQuery, useGetEpisodesQuery, useGetRandomQuoteQuery, useGetQuotesQuery, util: { getRunningQueriesThunk }, } = apiService;