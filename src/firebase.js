import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyDlU4NRqHdea4477RdifBMr86Fm3ZgIzMM',
  authDomain: 'twitter-clone-react-fe2e1.firebaseapp.com',
  projectId: 'twitter-clone-react-fe2e1',
  storageBucket: 'twitter-clone-react-fe2e1.appspot.com',
  messagingSenderId: '382447491917',
  appId: '1:382447491917:web:56f83c6f6357b51495f504',
  measurementId: 'G-1ECL0XQVJD',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
