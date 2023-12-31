import logo from './logo.svg';
import './App.css';
import {Amplify} from 'aws-amplify';
import {Authenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App() {
  return (
    <Authenticator>
      {({signOut,user}) =>(
        <main>
          <h1>Hello{user.username}</h1>
          <p>aaaa</p>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
    
  );
}

export default App;
