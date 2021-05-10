import { Component, OnInit } from '@angular/core';
import { Store, Selector } from '@ngxs/store';
import { Tutorial } from './../../shared/models/tutorial.model';
import { TutorialState } from './../../shared/state/tutorial.state';
import { RemoveTutorial } from './../../shared/actions/tutorial.actions';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  tutorials$: Observable<Tutorial>;

  constructor(
    private store: Store
  ) { 
    this.tutorials$ = this.store.select(state => state.tutorials.tutorials);
  }

  ngOnInit(): void {
  }

  delTutorial(name: any) {
    this.store.dispatch(new RemoveTutorial(name));
  }

}
