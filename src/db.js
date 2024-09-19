
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const config = {
	apiKey: "AIzaSyCX9LFdBLCYg-FrtDnF01iFdMmcY7Qjt-k",
	authDomain: "vue-chat-221f8.firebaseapp.com",
	projectId: "vue-chat-221f8",
	storageBucket: "vue-chat-221f8.appspot.com",
	messagingSenderId: "727195269063",
	appId: "1:727195269063:web:b66e045c11fe602a5d0be2",
};


const app = initializeApp(config);

const db = getDatabase(app);

export default db;