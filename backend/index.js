import express from 'express';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { connection } from './db.js';
import { typeDefs as userTypeDefs } from './schemas/userSchema.js';
import { typeDefs as bookTypeDefs } from './schemas/bookSchema.js';
import  bookResolvers  from './resolvers/bookResolvers.js';
import  userResolvers  from './resolvers/userResolvers.js';

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

const server = new ApolloServer({
    typeDefs: [userTypeDefs, bookTypeDefs],
    resolvers: [userResolvers, bookResolvers],
    context: ({req}) => ({req})
})

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  
  console.log(`Server connected at ${url}`);

app.listen(PORT, async () => {
  try {
    await connection
    console.log(`Server connected at ${PORT}`);
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
  }
});
