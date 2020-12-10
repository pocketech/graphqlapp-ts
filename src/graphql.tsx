import { useQuery, gql } from '@apollo/client'
import { useState } from 'react'


export const SEARCH_REPOSITORIES = gql`
  query searchRepositories($first: Int, $last: Int, $before: String, $after: String, $query: String!) {
    search(first: $first, last: $last, before: $before, after: $after, query: $query, type: REPOSITORY) {
      pageInfo {
        hasPreviousPage
        hasNextPage
        endCursor
        startCursor
      }
      repositoryCount
      edges {
        cursor
        node {
          __typename
          ... on Repository {
            id
            name
            url
            stargazers {
              totalCount
            }
            viewerHasStarred
          }
        }
      }
    }
  }
`

const ME = gql`
  query me { 
    user(login: "iteachonudemy") {
      name
      avatarUrl
    }
  }
`
export const MeData = () => {
  const { loading, error, data } = useQuery(ME)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>
  return <p>{data.user.name}</p>
}

const VARIABLES = {
  first: 5,
  last: null,
  before: null,
  after: null,
  query: "フロントエンドエンジニア"
}

export const RepoData = () => {
  const [searchInfo, setSearchInfo] = useState(VARIABLES)
  const { loading, error, data } = useQuery(SEARCH_REPOSITORIES, {
    variables: searchInfo
  })
  console.log(data)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>
  return <p>{data.search.pageInfo.endCursor}</p>
}
