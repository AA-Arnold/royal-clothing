import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAWlHI5okQR7DfFoNTxhUAinTUBf1N8grY",
    authDomain: "royal-clothing-e9122.firebaseapp.com",
    databaseURL: "https://royal-clothing-e9122.firebaseio.com",
    projectId: "royal-clothing-e9122",
    storageBucket: "royal-clothing-e9122.appspot.com",
    messagingSenderId: "887314279965",
    appId: "1:887314279965:web:d86cb339ac1ad66d4ee0f4",
    measurementId: "G-7JYFD3FYSV"
};

export const createUserProfileDocument = async (userAuth, AdditionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...AdditionalData
            })
        } catch (err) {
            console.log('error creating user', err.message)
        }
    }

    return userRef;
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase