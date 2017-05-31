import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { DataService } from './data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from 'angularfire2'
import { firebaseConfig } from './../environments/firebase.config'

@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }


// ||||||||||||||||||                        ===========>                           ||||||||||||||||||||     
//                  |                         Output data                           |                  |  
//                  |                                                               |                  |    
//                  |           | String Interpolation ( {{ data }} )    |          |                  |
//                  |           | Property Binding ( [property]="data" ) |          |                  |
//                  |                                                               |                  |  
// Typescript Code  |                        <===========                           | Template (HTML)  |
// (Business Logic) |                  React to (User) Events                       |                  |    
//                  |                                                               |                  |
//                  |          |Event Binding ( (event)="expression" )  |           |                  |
//                  |                                                               |                  |
//                  |                                                               |                  |      
// |||||||||||||||||| Combination of both: Two-way-binding ( [(ngModel)]="data" )   ||||||||||||||||||||                           


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Use Augury extension for Chrome for debugging AngularJS


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// LifeCycle of Angular 4
// constructor
// ngOnChanges
// ngOnInit
// ngDoCheck
//   ngAfterContentInit
//   ngAfterContentChecked
//   ngAfterViewInit
//   ngAfterViewChecked
// ngOnDestroy


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// How to pass value between parent and child components
// https://kipalog.com/posts/Angular2-comunication--Component-interaction----Tuong-giac-giua-cac-components-trong-Angular2
// - @Input
// - @Input + getter/setter
// - ngOnchanges
// - @Output + EventEmitter
// - Local variable
// - @ViewChild  https://embed.plnkr.co/W15xez8iP7O67SMfXFrL/


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// https://daynhauhoc.com/t/angular2-comunication-component-interaction-tuong-giac-giua-cac-components-trong-angular2/41981
// Component Interaction


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// ng-content
// https://toddmotto.com/transclusion-in-angular-2-with-ng-content


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// @ViewChild vs @ContentChild
// http://stackoverflow.com/questions/34326745/whats-the-difference-between-viewchild-and-contentchild

// Shadow DOM - is an internal DOM of your component that is defined by you (as a creator of the component) and hidden from an end-user. 
// For example:
// @Component({
//   selector: 'some-component',
//   template: `
//     <h1>I am Shadow DOM!</h1>
//     <h2>Nice to meet you :)</h2>
//     <ng-content></ng-content>
//   `;
// })
// class SomeComponent { /* ... */ }
// Light DOM - is a DOM that an end-user of your component supply into your component. For example:
// @Component({
//   selector: 'another-component',
//   directives: [SomeComponent],
//   template: `
//     <some-component>
//       <h1>Hi! I am Light DOM!</h1>
//       <h2>So happy to see you!</h2>
//     </some-component>
//   `
// })
// class AnotherComponent { /* ... */ }
// So, the answer to your question is pretty simple:

// The difference between @ViewChildren and @ContentChildren is that @ViewChildren look for elements in Shadow DOM while @ContentChildren 
// look for them in Light DOM.



// @HostBinding vs @HostListener
// http://stackoverflow.com/questions/37965647/hostbinding-and-hostlistener-what-do-they-do-and-what-are-they-for
// @HostBinding - Binding properties for element (host). Ex: attr.required, class.valid, style.backgroudColor
// @HostListener - Listening events emitted from element (host)


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// ngSwitch
// <div [ngSwitch]="value">
//     <p *ngSwitchCase="5">Value is 5</p>
//     <p *ngSwitchCase="10">Value is 10</p>
//     <p *ngSwitchCase="100">Value is 100</p>
//     <p *ngSwitchDefault>Value is Default</p>
// </div>


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// TemplateRef and ViewContainerRef
// http://stackoverflow.com/questions/36266453/how-to-use-templateref
// https://plnkr.co/edit/UIyFaG6VyHeeGlCKM76L?p=preview


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Services and Dependency Injection
// Inject Service to other Service + Inject Service to Component
// https://techmaster.vn/posts/34243/bat-dau-voi-angular-2-tung-buoc-mot-2-refactoring-thanh-services


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Promise vs Observable in ES6
// https://freetuts.net/tim-hieu-promise-trong-javascript-es6-620.html    
// http://stackoverflow.com/questions/37364973/angular-promise-vs-observable


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Observable and Subject
// https://viblo.asia/kopitop/posts/gGJ59Yqa5X2

// var subject = new Rx.Subject();

// subject.subscribe(v => {
  // console.log('observerA: ' + v);
// });
// subject.subscribe({
//   next: (v) => console.log('observerB: ' + v)
// });

// subject.next(1);
// subject.next(1);
// subject.next(2);
// subject.next(3);
// subject.next(4);
// subject.next(5);

// let observable = new Rx.Observable( function subscribe(observer) {
// let observable = new Rx.Observable.create((observer: Observer<number>) => {
//   observer.next(1);
//   observer.next(2);
//   observer.next(3);
//   observer.next(4);
//   setTimeout(() => {observer.next(5); },1000);
// });

// observable.subscribe(data => {console.log(data);})
// observable.subscribe(data => {console.log('second' + data);})

// Subject ưu việt hơn Observable ở điểm nó đồng thời push data đến nhiều Observer.
