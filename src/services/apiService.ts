import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Character, Death, Episode, Quote } from '../types';

export const apiService = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.API_URL }),
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

export const { useGetCharactersQuery, useGetRandomCharacterQuery, useGetCharacterByNameQuery, useGetRandomDeathQuery, useGetDeathsQuery, useGetRandomEpisodeQuery, useGetEpisodesQuery, useGetRandomQuoteQuery, useGetQuotesQuery } = apiService;