import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
import { Observable } from 'rxjs/Observable';
import { Observer } from "rxjs/Observer";

@Component({
  selector: 'app-my-new-component',
  // selector: '[app-my-new-component]', => <div app-my-new-component></div>
  // selector: '.app-my-new-component', => <div class="app-my-new-component"></div>
  templateUrl: './my-new-component.component.html',
  styleUrls: ['./my-new-component.component.css'],
  animations: [
    trigger('myAwesomeAnimation', [
      state('small', style({
        transform: 'scale(1)'
      })),
      state('large', style({
        transform: 'scale(1.2)'
      })), 

      transition('small => large', animate('300ms ease-in'))
    ])
  ]
})
export class MyNewComponentComponent implements OnInit {

  constructor(private dataService: DataService) { }

  someProperty: string = "";

  state: string = "small";

  ngOnInit() {
    console.log(this.dataService.cars);
    this.someProperty = this.dataService.myData();

    // Observable
    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first');
      }, 2000);
      setTimeout(() => {
        observer.next('second');
      }, 4000);
      setTimeout(() => {
        observer.complete();
      }, 5000);
      setTimeout(() => {
        observer.next('third');
      }, 5000);
      setTimeout(() => {
        observer.error('done');
      }, 5000);
    });
    myObservable.subscribe(
      (result: string) => { console.log(result); },
      (error: string) => { console.log(error); },
      () => { console.log('completed'); }
    );
  }

  animateMe() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }

}
