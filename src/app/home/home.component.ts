import {Component, OnInit} from '@angular/core';
import {Course} from "../model/course";
import {interval, noop, Observable, of, timer} from 'rxjs';
import {catchError, delayWhen, map, retryWhen, shareReplay, tap} from 'rxjs/operators';
import { createHttpObservable } from '../common/util';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  beginnerCourses$: Observable<Course[]>;
  advanceedCourses$: Observable<Course[]>;

    constructor() {
    }

    ngOnInit() {

    const http$ = createHttpObservable('/api/courses');

    const courses$ = http$.pipe(
      map(res => res['payload']),
      shareReplay()
    );

      this.beginnerCourses$ = courses$.pipe(
        map(courses => {
        return courses.filter(course => course.category === 'BEGINNER');
      }));

      this.advanceedCourses$ = courses$.pipe(
        map(courses => {
        return courses.filter(course => course.category === 'ADVANCED');
      }));
    }

}
