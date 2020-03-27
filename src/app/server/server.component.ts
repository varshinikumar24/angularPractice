import { Component } from '@angular/core';

@Component({
selector: "app-server",
// selector:'[app-server]',
templateUrl: './server.component.html'
})
export class ServerComponent {
    Id = 24
    status = "online"

    getStatus(){
      return this.status;
    }
  } 