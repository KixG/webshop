import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCVPmYAXtt2Qts3NsHv5EhqFny_EyVIgsI",
    authDomain: "udemy-webshop-db.firebaseapp.com",
    projectId: "udemy-webshop-db",
    storageBucket: "udemy-webshop-db.appspot.com",
    messagingSenderId: "369411157823",
    appId: "1:369411157823:web:0f30e4a5c2e2dead9cad8a",
    measurementId: "G-9TX2LG054V"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (err) {
            console.error('Error creating user', err.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () =>auth.signInWithPopup(provider);

export default firebase;