import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <h1 [class]="titleAttr1">My First App</h1>
    <h1 [class.text-underline]="titleAttr2">My First App</h1>
    <h1 [ngClass]="titleAttrs">My First App</h1>
    <ul>
      <li *ngFor="let arr of myArr">{{ arr }}</li>
    </ul>
    <div *ngIf="boolVal; then tmpl1 else tmpl2"></div>
    <ng-template #tmpl1>Truth</ng-template>
    <ng-template #tmpl2>False</ng-template>
    
    <img src="{{ angularLogo }}" width="200">
    <img [src]="angularLogo" width="200">
    <img bind-src="angularLogo" width="200">

    <button [disabled]="btnStatus">My Button</button>

    <button (click)="myEvent($event)">My Button</button>

    <h2 [style.color]="titleStyle ? 'green' : 'yellow'">Style Binding</h2>

    <h2 [ngStyle]="titleStyles">Style Binding</h2>

    <input type="text" [(ngModel)]="nameModel">
    <p>{{ nameModel }}</p>

    <app-my-new-component>
      <div class="app-my-new-component-title">
        Title
      </div>
      <div class="app-my-new-component-content">
        Content
      </div>
    </app-my-new-component>
    <!--<div app-my-new-component></div>-->
    <!--<div class="app-my-new-component"></div>-->

    <input type="text" #passValue><button (click)="passLocalVar(passValue)">Pass Local Variable</button>
  `,
  // styleUrls: ['./app.component.css']
  styles: [`
    h1 {
      font-size: 30px;
    }
    .red-color {
      color: red;
    }
    .text-underline {
      text-decoration: underline;
    }
    .background-color {
      background-color: green;
    }
    .border-radius {
      border-radius: 20px;
    }
  `],
  encapsulation: ViewEncapsulation.Emulated
  // None: style in head tag, no `_ngcontent-*`
  // Emulated (default): style in head have `_ngcontent-*`
  // Native: style in <app-component></app-component>
})
export class AppComponent {
  myArr = ["first", "second", "three", "four", "five"];
  boolVal = true;
  angularLogo = 'https://cdn-images-1.medium.com/max/800/1*juPyda3wq9uz_SNFRLuANg@2x.png';
  btnStatus = true;
  titleAttr1 = "red-color";
  titleAttr2 = true;
  titleAttrs = {
    'background-color': true,
    'border-radius': true
  }
  titleStyle = true;
  titleStyles = {
    'color': 'orange',
    'text-decoration': 'underline'
  }
  nameModel = '';

  myEvent(event) {
    console.log(event);
  }

  passLocalVar(val: HTMLInputElement) {
    alert(val.value);
  }
}
