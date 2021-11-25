import { initializeApp } from "firebase/app";

// import { getAuth } from "firebase/auth";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyCdP7Z-Arjj6_bdpXqvgnROVAJaIltw_TM",
  authDomain: "crwn-clothing-db-3a34a.firebaseapp.com",
  projectId: "crwn-clothing-db-3a34a",
  storageBucket: "crwn-clothing-db-3a34a.appspot.com",
  messagingSenderId: "141592753160",
  appId: "1:141592753160:web:3d4c980524ed05f0054dbd",
};

const app = initializeApp(config);

export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore();

export const signInWithGoogle = () => {
  return signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // The signed-in user info.
      // const user = result.user;
      // console.log("token, user :>> ", token, user);
    })
    .catch((error) => {
      // Handle Errors here.
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // The email of the user's account used.
      // const email = error.email;
      // The AuthCredential type that was used.
      // const credential = GoogleAuthProvider.credentialFromError(error);
      // console.log(
      //   "errorCode, errorMessage, email, credential :>> ",
      //   errorCode,
      //   errorMessage,
      //   email,
      //   credential
      // );
    });
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const docRef = doc(db, `users/${userAuth.uid}`);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    // console.log("Document data:", docSnap.data());
  } else {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      // Add a new document in collection "cities"
      await setDoc(doc(db, "users", userAuth.uid), {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      // console.log("error creating user :>> ", error);
    }
  }

  return docSnap;
};
