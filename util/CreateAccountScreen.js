import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAccount } from '../util/mock';
import EmailForm from '../util/EmailForm';

const CreateAccount = ({ navigation }) => {
  return (
    <EmailForm
      buttonText="Sign up"
      onSubmit={createAccount}
      onAuthentication={() => navigation.navigate('Home')}
    >
      <Button
        title="Back to log in"
        onPress={() => navigation.navigate('Login')}
      />
    </EmailForm>
  );
};

export default CreateAccount;
