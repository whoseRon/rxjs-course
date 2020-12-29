import { Component, OnInit } from '@angular/core';
import { concat, noop, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { createHttpObservable } from '../common/util';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const source1$ = of(1, 2, 3);
    const source2$ = of(4, 5, 6);

    const concated$ = concat(source1$, source2$);
    concated$.subscribe(x => console.log(x));
  }

}
