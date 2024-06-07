import { gql } from "@apollo/client";

export const BOOK_CARD_FRAGMENT = gql`
  query GetAuthor($Id: ID) {
    author (
        Id: $Id
    ) {
        id
        name
        age
    }
}
`;