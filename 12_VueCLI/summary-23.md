### Summary

## Yang di pelajari - GraphQL Query

    1. Set up Apollo using Vue add
    2. Query using apolloquery tag
    3. Query with param

### Essay

    Using Apollo we integrated our vue app with Graphql , to query we can use the apolloquery tag
    <ApolloQuery> then add the :query="gql => gql`(query syntax)`" to get the data . then we can use the parameters to query. for example
        query MyQuery($id: Int!) {
            messages(where: { id: { _eq: $id } }) {
              Todo
            }
          }
