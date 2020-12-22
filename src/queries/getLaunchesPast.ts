import { gql } from 'apollo-boost';

export const GET_LAUNCHES = gql`
  query getLaunchesPast($offset: Int = 0, $limit: Int = 3) { 
    launchesPast(limit: $limit, offset: $offset) {
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