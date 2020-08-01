let {
  graphql
} = require("@octokit/graphql");

graphql = graphql.defaults({
  headers: {
    authorization: `token 799c0d68d9bbe9a1b3a2ceec12d6a8fb115e6939`,
  },
});

const query = `{
  viewer {
    repositories(last: 100, orderBy: {field: CREATED_AT, direction: DESC}) {
      edges {
        node {
          id
          name
          url
          createdAt
        }
      }
    }
  }
}`;

let last10;

async function main() {
  try {
    const result = await graphql(query);
    last10 = result.viewer.repositories.edges
    return last10
  } catch (error) {
    console.log("Request failed:", error.request); // { query, variables: {}, headers: { authorization: 'token secret123' } }
    console.log(error.message); // `invalid cursor` does not appear to be a valid cursor.
    console.log(error.data); // { repository: { name: 'probot', ref: null } }
  }
}

main().then( res => console.log(res))

