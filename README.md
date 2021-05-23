# Swasthya-AI-Placement-React-Server
React Frontend for Blog System, Swasthya AI Placement Assignment

This server talks to the <a href="https://github.com/Rajrahane/Swasthya-AI-Placement-GraphQL-Server">GraphQL Server</a> to fetch data<br>
Consists of :
<ol>
<li> /users Endpoint: <ul>
  <li>/users/register : New User(name,email,phone)</li>
  <li>/users/search : Search User by ID</li>
  <li>/users/:userID : User(userID)'s Profile</li>
  </ul></li>
  <li>/blogs Endpoint:<ul>
  <li>/blogs/register : New Blog(name)</li>    
  <li>/blogs/search : Search Blog by ID</li>
  <li>/blogs/:blogID : Blog Profile. Displays Blog Info- total comments, unique users, all comments</li>
</ol><br>
    
Steps to install and run:
1. git clone repo.git
2. run npm install
3. make sure the graphql endpoint is set correctly in /src/index.js
4. run npm start
5. visit site on localhost:3000
 <br>
    Features
    <ul>
      <li>Uses <a href="https://www.apollographql.com/docs/react/">ApolloClient</a> to connect to GraphQL Server</li>
      <li>Uses <a href="https://reactrouter.com/web/guides/quick-start">React Router</a> for creating Routes Hierarchy</li>
      <li>Uses <a href="https://react-bootstrap.github.io/">React Bootstrap</a> for Bootstrapping </li>
    </ul>
