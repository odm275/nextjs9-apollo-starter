import { useContext } from "react";
import { withApollo } from '../lib/apollo';
import { GET_USER_BY_USER_NAME } from '../lib/queries/getUserByUserName';
import { useQuery, useApolloClient } from '@apollo/react-hooks';
import { AuthContext } from '../components/Context/AuthContext';
import Layout from '../components/Layout';

const User = () => {
  const _username = useContext(AuthContext).username;
  console.log('tboomest', useContext(AuthContext))
  if(! _username) return null;
  const { loading, error, data } = useQuery(GET_USER_BY_USER_NAME, {
    variables: { username: _username }
  })
  if(error) console.log(error);
  if(loading) return 'Loading ...';
  if(data){
    console.log('data', data)
    const { username, email } = data.findUsersByUsername;
    return (
      <Layout>
        <div>username: {username}</div>
        <div>email {email}</div>
      </Layout>
    )
  }
}


export default withApollo({ssr:true})(User);