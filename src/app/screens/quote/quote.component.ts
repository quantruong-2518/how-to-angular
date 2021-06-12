import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catQuotes, dogQuotes } from './quote.mock';

enum QuoteTab {
  DOG = 0,
  CAT = 1,
}

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],
})
export class QuoteComponent implements OnInit {
  tabIndex = QuoteTab.DOG;

  dogQuotes = dogQuotes;
  catQuotes = catQuotes;

  constructor(private _activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const animal = this._activatedRoute.snapshot.paramMap.get('animal');

    switch (animal) {
      case 'cat':
        this.tabIndex = QuoteTab.CAT;
        break;
        
      default:
        this.tabIndex = QuoteTab.DOG;
        break;
    }
  }

  clickBookmark(value: { quoteId: number; isNoted: true }) {
    console.log('emitted value-------------', value);
  }
}
