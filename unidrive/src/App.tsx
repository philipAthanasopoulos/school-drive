import React from 'react';
import { UploadSection } from './components/UploadSection';
import { UploadsList } from './components/UploadsList';
import './App.css';
import { LoginCard } from './components/LoginCard';
import { initializeApp } from "firebase/app";

function App() {

  const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
  }

  const app = initializeApp(firebaseConfig);
  const [loggedIn, setLoggedIn] = React.useState(false)

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='text-3xl font-bold'>UniDrive</h1>
        <div className="flex flex-row h-screen w-screen bg-gradient-to-b from-cyan-500 to-white justify-center">
          <div className='flex flex-row space-x-10 items-center'>
            {!loggedIn && <LoginCard app={app} setLoggedIn={setLoggedIn} />}
            {loggedIn && (
              <div className='flex flex-row space-x-10 items-center'>
                <UploadSection app={app} />
                <UploadsList app={app} />
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
