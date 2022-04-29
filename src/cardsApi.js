import {
  createApi,
  fetchBaseQuery
} from "@reduxjs/toolkit/query/react";
export const cardsApi = createApi({
  reducerPath: "cardsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://deckofcardsapi.com/api/"
  }),
  endpoints: (builder) => ({
    cards: builder.query({
      query: () => "deck/gdci59nruaie/draw/?count=4"
    }), // TODO: Endpoint to get new deck of cards
  })
});

export const { useCardsQuery } = cardsApi;