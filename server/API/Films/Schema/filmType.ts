const FilmTypeDef = `
  type Film {
    characters: [String!]
    director: String!
    episode_id: Int!
    opening_crawl: String!
    planets: [String!]
    producer: String!
    releaase_date: String!
    species: [String!]
    starships: [String!]
    title: String!
    url: String!
    vehicles: [String!]
  }
`;

export default FilmTypeDef;
