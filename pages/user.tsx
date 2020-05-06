import { withApollo } from '../lib/apollo';
import { GET_USER_BY_USER_NAME } from '../lib/queries/getUserByUserName';
import { useQuery, useApolloClient } from '@apollo/react-hooks';
const User = (props) => {
  console.log('props in user page', props)
  const { loading, error, data } = useQuery(GET_USER_BY_USER_NAME, {
    variables: {username: "pwii"}
  })
  console.log('data',data);
  return(
  <>
    <div>username:</div>
    <div></div>
  </>
  )
}

export default withApollo({ssr:true})(User);