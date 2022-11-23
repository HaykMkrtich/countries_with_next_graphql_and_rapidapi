import { gql } from '@apollo/client';

export const COUNTRIES_QUERY = gql`
  query {
    countries {
      alpha2code
      name
      region {
        name
        ID
      }
    }
  }
`;
export const COUNTRY_QUERY = gql`
  query countryByAlpha2Code($alpha2code: ID!) {
    countryByAlpha2Code(alpha2code: $alpha2code) {
      name
      fifacode
      currencies {
        name
        symbolU
      }
    }
  }
`;
