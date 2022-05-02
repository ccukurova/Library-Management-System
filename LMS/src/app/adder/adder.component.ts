import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { Book } from '../models/book.model';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-adder',
  templateUrl: './adder.component.html',
  styleUrls: ['./adder.component.css'],
})
export class AdderComponent implements OnInit {

  message!:any;
  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message=>this.message=message)
  }
  

  newMessage(nameInput: any, authorInput: any,publisherInput: any,shelfInput: any,numberInput: any){
    let newBook: Book = {
      name: nameInput,
      author: authorInput,
      publisher: publisherInput,
      shelf: shelfInput,
      number: numberInput,
    };
    this.data.changeMessage(newBook);
  }
  
}
