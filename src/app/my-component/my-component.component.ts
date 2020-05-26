import { Component, OnInit } from '@angular/core';
import {DataService} from "../model/services/data.service";
import {Example} from "../model/example";

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  constructor(private dataService: DataService) {}
  examples: Example[] = [];
  ngOnInit() {
    this.examples = this.dataService.getExamples();
  }
  buttonClicked = false;
  selectedExample: Example;
  isExampleSelected= false;
  setButtonClick() {
    this.buttonClicked = !this.buttonClicked;
  }
  selectExample(example: Example):void{
    this.selectedExample = example;
    this.isExampleSelected =!this.isExampleSelected;
  }

}
