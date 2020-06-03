import { useContext } from "react";
import { withApollo } from '../lib/apollo';
import { GET_USER_BY_USER_NAME } from '../lib/queries/getUserByUserName';
import { useQuery, useApolloClient } from '@apollo/react-hooks';
import { AuthContext } from '../components/Context/AuthContext';
import Layout from '../components/Layout';

const User = () => {
  //@ts-ignore
  const _username: any = useContext(AuthContext).username;
  console.log('tboomest', _username);
  const { loading, error, data } = useQuery(GET_USER_BY_USER_NAME, {
    variables: { username: _username }
  })
  if(error) console.log(error);
  if(loading) return 'Loading ...';
  if(data){
    // const { username, email } = data.findUsersByUsername;
    // console.log('username', username)
    // console.log('email', email);

    return (
      <Layout>
        {/* <div>username: {username}</div>
        <div>email {email}</div> */}
      </Layout>
    )
  }
}


export default withApollo({ssr:true})(User);