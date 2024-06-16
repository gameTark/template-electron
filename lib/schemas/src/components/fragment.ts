import { gql } from "@apollo/client";

export const BOOK_CARD_FRAGMENT = gql`
query GetBooks {
  books {
    title
  }
}
`;

export const FILE_GET_FRAGMENT = gql`
query GetFile($file: String) {
  file (path: $file) {
    name
    path
  }
}
`