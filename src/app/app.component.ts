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
  onClick = () => {
    this.checkAuth(auth => {
      if (auth) {
        this.fetchUser(user => {
          this.setText(user.name);
        })
      }
    });
  }
}

