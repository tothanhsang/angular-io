import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddTutorial } from './../../shared/actions/tutorial.actions';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
  }

  addTutorial(name: any, url: any) {
    this.store.dispatch(new AddTutorial({name: name, url: url}))
  }

}
