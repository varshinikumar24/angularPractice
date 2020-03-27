import { Component } from '@angular/core';
import { getLocaleDateFormat } from '@angular/common';

@Component({
selector: "app-server",
// selector:'[app-server]',
templateUrl: './server.component.html',
styles : [`
    .online{
      color:white;
    } `]
})
export class ServerComponent {
    Id = 24
    status = "online"
    logs=[];
    i=1;
    
    Constructor(){
      
      this.status= Math.random()>0.5 ? "online" : "offline" ;
      }
      onclickLog(){
        this.logs.push(this.i);
        this.i+1;
        
      }
      
    getStatus(){
      return this.status;
    }
    getColor(){
      return this.status=== "online" ? "green" : "red";
    }
  } 