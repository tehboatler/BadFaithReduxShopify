import Rebase from 're-base';
import firebase from 'firebase/app';
import database from 'firebase/database';

var app = firebase.initializeApp({
    apiKey: 'AIzaSyABuS6xfLGWv72bAxI4wzDZsCnl3Vii7z8',
    authDomain: 'starsigned-5abfd.firebaseapp.com',
    databaseURL: 'https://starsigned-5abfd.firebaseio.com',
    projectId: 'starsigned-5abfd',
    storageBucket: 'starsigned-5abfd.appspot.com',
    messagingSenderId: '875276754412'
});

var db = firebase.database(app);
var base = Rebase.createClass(db);

export { base };