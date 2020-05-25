import { Component, OnInit } from '@angular/core';
import { DataService } from '../model/services/data.service';
import { Example } from '../model/example';

@Component({
  selector: 'app-two-component',
  templateUrl: './two-component.component.html',
  styleUrls: ['./two-component.component.css']
})
export class TwoComponentComponent implements OnInit {

  constructor(private dataService: DataService) { }
  visibleB = false;
  exmapleData: Example[] = [];

  ngOnInit(): void {
    this.exmapleData = this.dataService.getExamples();

  }
  setVisibleB() {
    this.visibleB = !this.visibleB;
  }
}
