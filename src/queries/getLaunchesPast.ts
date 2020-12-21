import { gql } from 'apollo-boost';

export const GET_LAUNCHES = gql`
  {
    launchesPast(limit: 3) {
      id
      mission_id
      mission_name
      launch_date_local
      links {
        article_link
        flickr_images
      }
      rocket {
        rocket {
          id
          name
          type
          company
          country
        }
      }
    }
  }
`;