import { Component } from '@angular/core';
declare var $: any // Declare Jquery

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EcommerceClient';
}

$(document).ready(() => {
  console.log("Jquery works!");
})

// CORS Policy test - Same-origin policy: Bu istek APIye hiç gitmedi, browser durdurdu
$.get("https://localhost:5001/api/products", (data: any) => {
  console.log(data);
})