import {Component, Input, OnInit, Output} from '@angular/core';
import {EventEmitter} from 'events';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todoItem: string;
  @Output() onChange = new EventEmitter();




  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  buttonHasBeenClick(){
    this.onChange.emit();
  }

}
