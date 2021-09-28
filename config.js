import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
 apiKey: "AIzaSyACoaDebkmOm4hiWnrdCFz7Oc9H1zDF8J8",
 authDomain: "pro-c73-lets-ride-91fce.firebaseapp.com",
 projectId: "pro-c73-lets-ride-91fce",
 storageBucket: "pro-c73-lets-ride-91fce.appspot.com",
 messagingSenderId: "285018114866",
 appId: "1:285018114866:web:5a82f0ee4c44e6b28de52b"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

