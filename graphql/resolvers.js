const Min = {
    name: "minnie",
    age: 26,
    gender: "idk"
};

const resolvers = {
    Query: {
        person: () => Min
    }
};

export default resolvers;