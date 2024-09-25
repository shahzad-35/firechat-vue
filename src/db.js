
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
	apiKey: "AIzaSyB8bC0F59ex3XbqNnQ6S_HwWR65w7YOlFc",
	authDomain: "vuefire-chat-8af17.firebaseapp.com",
	databaseURL: "https://vuefire-chat-8af17-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "vuefire-chat-8af17",
	storageBucket: "vuefire-chat-8af17.appspot.com",
	messagingSenderId: "901067599128",
	appId: "1:901067599128:web:65312016cb90aea9e9826d"
  };


const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and export it
const db = getDatabase(app);

export { db };