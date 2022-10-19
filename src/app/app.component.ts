import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements : any = [{type: 'server', name: 'Test-server-1', content: 'Just a test!'},{type: 'server', name: 'Test-server-2', content: 'Just a test!'}];
}
