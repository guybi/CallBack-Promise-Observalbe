import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  val = '';

  setText = (text) =>  {  this.val = text;   }

  checkAuth = cb => {
    this.setText("Checking Auth");
    setTimeout(() => {
      cb(true);
    }, 2000);
  }

  fetchUser = cb => {
    this.setText("Fetch Auth");
    setTimeout(() => {
      cb({name: "Guy"});
    }, 2000);
  }

  checkConnection = cb => {
    setTimeout(() => {
      cb(true);
    }, 5000)
  }

  onCallBackClick = () => {
    this.checkAuth(auth => {
      if (auth) {
        this.fetchUser(user => {
          this.setText(user.name);
          this.checkConnection(checkConnection => {
            if (checkConnection) {
              this.setText("Log Out");
            }
          })
        })
      }
    });
  }

  // =================================================================

  checkAuthPromise = () => {
    return new Promise((resolve, error) => {
      this.setText("Check User...");
      setTimeout(() => {
        // error("Error")
        resolve(true);
      },2000)
    });
  }

  fetchUserPromise = () => {
    return new Promise((resolve, error) => {
      this.setText("Fetch User...");
      setTimeout(() => {
        resolve("Guy");
      }, 2000);
    });
  }

  onPromiseClick() {
    this.checkAuthPromise()
      .then(
        isAuth => {
          if (isAuth) {
            return this.fetchUserPromise();
          }
        }
        , error => {
          console.log(error);
          return;
        }).then(user => {
          this.setText(user);
      })
  }

}

