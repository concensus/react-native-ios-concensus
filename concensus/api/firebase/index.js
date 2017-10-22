import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC78LL4Dxp0fmhN38Cysm3elVaxlvxU7F8",
  authDomain: "concensus-blockchain.firebaseapp.com",
  databaseURL: "https://concensus-blockchain.firebaseio.com",
  projectId: "concensus-blockchain",
  storageBucket: "concensus-blockchain.appspot.com",
  messagingSenderId: "972382290175"
};
firebase.initializeApp(firebaseConfig);

function isEmpty(obj){
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}

export {firebase, isEmpty};