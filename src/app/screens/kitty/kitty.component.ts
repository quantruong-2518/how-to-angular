import { Component, OnInit } from '@angular/core';

import { IKitty, KittyColors } from './kitty.type';

@Component({
  selector: 'app-kitty',
  templateUrl: './kitty.component.html',
  styleUrls: ['./kitty.component.scss'],
})
export class KittyComponent implements OnInit {
  kittiesList: IKitty[] = [
    {
      cover:
        'https://i.pinimg.com/736x/10/61/c8/1061c85ea0dfd3a6655b4b3b6e71ade9.jpg',
      name: 'James',
    },
    {
      cover: 'https://i.ytimg.com/vi/ZKBlMWI6nO4/maxresdefault.jpg',
      name: 'Cris',
      color: KittyColors.White,
    },
    {
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZhPiuzL5eHPCcntvzsehw23mJIqQvv-1IgQ&usqp=CAU',
      name: 'Hames',
    },
    {
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK1IvW1CG14RgpK1sVeNf5SHGGI9QDr3rN8Q&usqp=CAU',
      name: 'Paul',
    },
    {
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8NHkftVaOnmv-jjyINEdX2Zp1gvzzj-a-TQ&usqp=CAU',
      name: 'Shame',
      color: KittyColors.White,
    },
    {
      cover: 'https://data.whicdn.com/images/318879955/original.jpg',
      name: 'Tom',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
