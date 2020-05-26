import {Component, Input, OnInit} from '@angular/core';
import {Example} from "../../model/example";

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})

export class ChildComponentComponent implements OnInit {
  @Input() example : Example;
  constructor() { }

  ngOnInit(): void {
  }

}
