// Firebase SDK Modules Import (v10+ Web SDK - Realtime Database)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
    getDatabase, 
    ref, 
    set, 
    get, 
    update, 
    remove, 
    onValue, 
    child,
    query, 
    orderByChild,
    equalTo 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// 🔥 તમારી ઓરિજિનલ Firebase Keys અને Realtime Database URL સાથેનો ફાઇનલ કોડ
const firebaseConfig = {
    apiKey: "AIzaSyAFekL3dLq-v1NETC0PQ7zpnX7StutZs8",
    authDomain: "office-leave-app.firebaseapp.com",
    databaseURL: "https://office-leave-app-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "office-leave-app",
    storageBucket: "office-leave-app.appspot.com",
    messagingSenderId: "609769671596",
    appId: "1:609769671596:web:6a855afe57bf73b7240809"
};

// Initialize Firebase & Realtime Database
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// આ ફંકશન્સ અને રેફરન્સને ગ્લોબલી એક્સપોર્ટ કરો જેથી બધા HTML પેજીસમાં વાપરી શકાય
export { 
    db, 
    ref, 
    set, 
    get, 
    update, 
    remove, 
    onValue, 
    child,
    query, 
    orderByChild,
    equalTo 
};