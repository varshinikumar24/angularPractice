import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server2',
  templateUrl: './server2.component.html',
  styleUrls: ['./server2.component.css']
})
export class Server2Component implements OnInit {
  serverDisabled = true;
  serverCreationStatus= "No server is created ";
  serverInput="test";
  constructor() {
setTimeout(() => {
  this.serverDisabled =false;
}, 2000);
   }

  ngOnInit(): void {
  }

  getServerCreationstatus(){
    this.serverCreationStatus="Server is created !!! ";
  }

  onUpdate(event: Event){
      this.serverInput =(<HTMLInputElement>event.target).value;
  }


}
