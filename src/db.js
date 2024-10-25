import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
};

let database = null;
try {
	const app = initializeApp(firebaseConfig);
	database = getDatabase(app);
	console.log("Firebase initialized successfully");
  } catch (error) {
	console.error("Error initializing Firebase:", error);
  }


export default database;
