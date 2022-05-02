import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  message!:any;
  
  constructor(private data: DataService) {
    
  }

  public bookList: Book[] = [
    {
      name: 'Hayatın Anlamı',
      author: 'Arthur Shopenhauer',
      publisher: 'SAY',
      shelf: '14/2/4',
      number: 1,
    },
    {
      name: 'Homo Deus',
      author: 'Yuval Noah Harari',
      publisher: 'BKM',
      shelf: '5/3/11',
      number: 4,
    },
    {
      name: 'Prag Mezarlığı',
      author: 'Umberto Eco',
      publisher: 'DK',
      shelf: '7/2/6',
      number: 1,
    },
  ];

  AddBook(newBook:Book) {
    this.bookList.push({
      name: newBook.name,
      author: newBook.author,
      publisher: newBook.publisher,
      shelf: newBook.shelf,
      number: newBook.number,
    });
  }

  ngOnInit(): void {
    this.data.currentMessage.subscribe((message) => (this.message = message));
  }

  
}
