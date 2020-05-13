import { withApollo } from '../lib/apollo';
import { GET_USER_BY_USER_NAME } from '../lib/queries/getUserByUserName';
import { useQuery, useApolloClient } from '@apollo/react-hooks';
const User = (props) => {
  const { loading, error, data } = useQuery(GET_USER_BY_USER_NAME, {
    variables: {username: "pwii"}
  })
  if(loading) return 'Loading ...'
  console.log('data user', data)
  if(data){
    const { username, email } = data.findUsersByUsername;
    return(<>
      <div>username: {username}</div>
      <div>email {email}</div>
    </>)
  }

}

export default withApollo({ssr:true})(User);