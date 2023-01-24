import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)
Vue.config.productionTip = false

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnt9pBw4Di6nrLQfA8WswsNTpMFHOPys0",
  authDomain: "vue-firebase-auth-3c78b.firebaseapp.com",
  projectId: "vue-firebase-auth-3c78b",
  storageBucket: "vue-firebase-auth-3c78b.appspot.com",
  messagingSenderId: "155186169398",
  appId: "1:155186169398:web:8d15075b84e63eeba43a97",
  measurementId: "G-47XS6Y6WRQ"
};

require('./assets/scss/app.scss')

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const auth = firebase.auth().onAuthStateChanged((user) => {
  console.log('onAuthStateChanged');
  store.dispatch('fetchUser', user)

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
});


