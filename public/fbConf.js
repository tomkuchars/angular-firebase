var config = {
    apiKey: "AIzaSyAGYPSL78ZVJ-ymcOU02ulhlsGutHirk9Q",
    authDomain: "fir-test-a7f69.firebaseapp.com",
    databaseURL: "https://fir-test-a7f69.firebaseio.com",
    storageBucket: "fir-test-a7f69.appspot.com",
    messagingSenderId: "352609761026"
};

firebase.initializeApp(config);

var ref = firebase.database().ref();