import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-puppy',
  templateUrl: './puppy.component.html',
  styleUrls: ['./puppy.component.scss'],
})
export class PuppyComponent implements OnInit {
  puppy = {
    name: 'Snoop',
  };
  constructor() {}

  ngOnInit(): void {}

  onModelChange(e: Event) {
    console.log('e', e);
  }
}
