import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss'],
})
export class BookmarkComponent implements OnInit {
  @Input() interaction: { quoteId: number; isNoted: boolean };

  @Output() clickBookmark = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onBookmark() {
    let { quoteId, isNoted } = this.interaction;
    this.interaction.isNoted = !isNoted;

    this.clickBookmark.emit({
      quoteId,
      isNoted,
    });
  }
}
