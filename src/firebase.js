import firebase from 'firebase/app'
import 'firebase/firestore' 

const firebaseConfig = {
  apiKey: "AIzaSyDRdkYycry6NAfqFSbBpSWLB4vC7kKX3_A",
  authDomain: "crud-react-udemy-7b982.firebaseapp.com",
  projectId: "crud-react-udemy-7b982",
  storageBucket: "crud-react-udemy-7b982.appspot.com",
  messagingSenderId: "141218380432",
  appId: "1:141218380432:web:19447021ddd8f3a6ab3615"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export {firebase}