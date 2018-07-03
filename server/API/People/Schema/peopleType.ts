const PeopleTypeDef = `
  type People {
    name: String!
    birth_year: String!
    eye_color: String!
    films: [String!]
    gender: String
    height: String!
    homeworld: String!
    mass: String!
    skin_color: String!
    species: [String!]
    starships: [String!]
    url: String!
    vehicles: [String!]
  }
`;

export default PeopleTypeDef;
