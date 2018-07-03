import axios from "axios";

const resolvers = {
  Query: {
    allPeople: async () => {
      const people = await axios.get("https://swapi.co/api/people/");
      return (people as any).data.results;
    }
  }
};

export default resolvers;
