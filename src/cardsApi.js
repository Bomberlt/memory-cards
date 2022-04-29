import {
  createApi,
  fetchBaseQuery
} from "@reduxjs/toolkit/query/react";
export const cardsApi = createApi({
  reducerPath: "cardsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://deckofcardsapi.com/api/"
  }),
  tagTypes: ["Deck", "Cards"],
  endpoints: (builder) => ({
    newDeck: builder.query({
      query: () => "deck/new/shuffle/?deck_count=1",
      providesTags: ["Deck"]
    }),
    cards: builder.query({
      query: (deckId) => `deck/${deckId}/draw/?count=12`,
      providesTags: ["Cards"]
    }),
  })
});

export const { useNewDeckQuery, useCardsQuery } = cardsApi;