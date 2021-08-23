import firebase from 'firebase';
import {
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
} from 'react-native-dotenv';
console.log('LAP API', API_KEY);
// console.log('authDomain', AUTH_DOMAIN )
// console.log('databaseURL', DATABASE_URL )
// console.log('projectId', PROJECT_ID )
// console.log('storageBucket', STORAGE_BUCKET )
// console.log('messagingSenderId', MESSAGING_SENDER_ID )
console.log('appId', APP_ID )

// var firebaseConfig = {
//   apiKey: API_KEY,
//   authDomain: AUTH_DOMAIN,
//   databaseURL: DATABASE_URL,
//   projectId: PROJECT_ID,
//   storageBucket: STORAGE_BUCKET,
//   messagingSenderId: MESSAGING_SENDER_ID,
//   appId: APP_ID,
// };

var firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: "https://chat-f2bd4-default-rtdb.firebaseio.com",
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID
};

export default firebase.initializeApp(firebaseConfig);
