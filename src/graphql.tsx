import { useQuery, gql } from '@apollo/client'

const ME = gql`
  query me { 
    user(login: "iteachonudemy") {
      name
      avatarUrl
    }
  }
`
const MeData = () => {
  const { loading, error, data } = useQuery(ME)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>
  return <p>{data.user.name}</p>
}

export default MeData