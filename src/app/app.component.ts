import { Component } from '@angular/core';
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, UserCredential, User } from "firebase/auth";

const provider = new GoogleAuthProvider();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'buy-and-sell-site';
  auth = getAuth();
  user: User | undefined;
  
  signInClicked(): void {
    signInWithPopup(this.auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (credential) {
          const token = credential.accessToken;
          // The signed-in user info.
          this.user = result.user;
          // IdP data available using getAdditionalUserInfo(result)
          // ...
        }
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  signOutClicked(): void {
    signOut(this.auth).then(() => {
      this.user = undefined;
    }).catch((error) => {
      // An error happened.
    });
  }
}
