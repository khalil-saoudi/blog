import { Component } from '@angular/core';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    var config = {
      apiKey: "AIzaSyCLowMy1Oc9TjkyQnJElQUBrQLrDfQjNT8",
      authDomain: "blog-d2f16.firebaseapp.com",
      databaseURL: "https://blog-d2f16.firebaseio.com",
      projectId: "blog-d2f16",
      storageBucket: "",
      messagingSenderId: "723224041616"
    };
    firebase.initializeApp(config);
  }
}
