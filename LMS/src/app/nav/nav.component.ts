import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  message!: any;
  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.message = message);
  }
}
