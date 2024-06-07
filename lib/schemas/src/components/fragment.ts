import { gql } from "@apollo/client";

export const BOOK_CARD_FRAGMENT = gql`
  query GetBooks {
    books {
      ...BookCard
    }
  }
  fragment BookCard on Book {
    id
    title
    author {
      id
      name
    }
  }
`;