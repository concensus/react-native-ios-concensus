import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyC78LL4Dxp0fmhN38Cysm3elVaxlvxU7F8',
    authDomain: 'concensus-blockchain.firebaseapp.com',
    databaseURL: 'https://concensus-blockchain.firebaseio.com',
    projectId: 'concensus-blockchain',
    storageBucket: 'concensus-blockchain.appspot.com',
    messagingSenderId: '972382290175',
};
firebase.initializeApp(firebaseConfig);

function isEmpty(obj) {
    return obj.constructor === Object && Object.keys(obj).length === 0;
}

function newComment(id, object) {
    let discussionRef = firebase.database().ref(`polls/${id}/discussions`);
    discussionRef.push({
        author: object.author || 'Anonymous',
        body: object.body || '',
    });
}

function updateUserVote(userID, option) {
    let userRef = firebase.database().ref(`users/${userID}`);
    userRef.set({
        option,
    });
}

function getUserVote(userID) {
    return firebase
        .database()
        .ref(`users/${userID}`)
        .once('value');
}

export { firebase, isEmpty, newComment, updateUserVote, getUserVote };
