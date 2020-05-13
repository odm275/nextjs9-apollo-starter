import Layout from '../components/Layout';
import gql from 'graphql-tag'
import {useQuery} from '@apollo/react-hooks';
import { withApollo } from '../lib/apollo';

const ALL_USERS = gql `
{
  allUsers{
    data{
      _id
      username
      email
    }
  }
}
`;

const Home = () => {
  const { loading, error, data } = useQuery(ALL_USERS);
  if(loading) return 'Loading ...'
  console.log('error', data);
  console.log('data', data);

  return (
    <Layout>
     {data.allUsers.data.map(user => (
       <div>
       <p>
        username: {user.username}
       </p>
       <p>
         email: {user.email}
       </p>
       </div>

     ))}
    </Layout>
  );
};

export default withApollo({ssr:true})(Home);
