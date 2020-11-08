import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public todos: string[] = ['do homeword', 'Pat a dog', 'wash dishes'];

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  showAlert() {
    alert('showAlert() at parent');
  }
}
