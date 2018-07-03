import axios from "axios";

const resolvers = {
  Query: {
    allFilms: async () => {
      const films = await axios.get("https://swapi.co/api/films/");
      return (films as any).data.results;
    }
  }
};

export default resolvers;
