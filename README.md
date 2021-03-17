# Install movie-test-api

GraphQl API for gastromatic movie test

## Setup Without Docker

Have a mongodb running at the usual `localhost:27017`. Then:

```
npm ci
npm run start
```

Test running server by accessing `http://localhost:3000/`

## Setup with Docker

Docker and docker-compose need to be installed. To start the services run

```
docker-compose build
docker-compose up
```

Test running server by accessing `http://localhost:3000/`

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# Introduction

Welcome Gastronauts, I present to you the online movie library API built using Node.js, express, mongoDB and graphQL!

Disclaimer: This was my first ever GraphQL / mongoDB application. And honestly I was blown away with graphQL, its really cool and I will be using this going forward for my next applications. It was much easier to start working with then I initally anticipated but that is also thanks to the boilerplate code provided. I think graphQL provides alot of benifits over REST but I do still have alot to learn about it.

# Libraries, frameworks and tools used

[apollo server](https://www.apollographql.com/docs/apollo-server/)
[graphQL](https://graphql.org/)
[express](https://expressjs.com/)
[mongo DB](https://www.mongodb.com/)

# What was built and how

Thanks to the boilerplate, I could easily get up and running with creating my queries. I build the queries alongside the front end.
I started off with the queries, then mutations and finally added the subscriptions.

# Areas for improvement

I could probably write a small book under this section, but to keep it simple I will just go over the main issues / areas for improvement.

1. Unit testing, there are currently no tests included in the code.

2. Typescript typing - there are some sections where the any type was used to bypass a typescript error. This is a big no no and defeats the purpose of typescript. Return types and other typing information is also missing in some instances.

3. Server should be restared automatically after a change has been saved.

4. Some of my queries can definately be imporved / more in line with what graphQL specifies.

There is plenty more, but this should suffice as an MVP!

# Conclusion

GraphQL is awesome.

Thanks for taking the time to review, I look forward to your feedback.
