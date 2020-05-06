import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import cookie from 'cookie';
import { withApollo } from '../lib/apollo';
import { GET_ALL_FILES } from '../lib/queries/getAllFiles';
import LoginForm from '../components/Forms/LoginForms';
const SignIn = (props) => {
  const [loginError, setLoginError] = useState(null);
  const [loginData, setLoginData] = useState(false);
  console.log('sing in page props', props)

  return (
    <div className="w-full max-w-xs">
      <LoginForm 
        setLoginError={setLoginError}
        setLoginData={setLoginData}
      />
      <p className="text-center text-gray-500 text-xs">
        &copy;2020 Acme Corp. All rights reserved.
      </p>
    </div>
  );
};



export default withApollo()(SignIn)
