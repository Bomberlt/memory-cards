import {
  createApi,
  fetchBaseQuery
} from "@reduxjs/toolkit/query/react";
export const cardsApi = createApi({
  reducerPath: "cardsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://deckofcardsapi.com/api/"
  }),
  tagTypes: ['Deck', 'Cards'],
  endpoints: (builder) => ({
    newDeck: builder.query({
      query: () => "deck/new/shuffle/?deck_count=1"
    }),
    cards: builder.query({
      query: (deckId) => `deck/${deckId}/draw/?count=12`
    }),
    shuffleDeck: builder.query({
      query: (deckId) => `deck/${deckId}/shuffle`
    }),
  })
});

export const { useNewDeckQuery, useCardsQuery, useShuffleDeckQuery } = cardsApi;