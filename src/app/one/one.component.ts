import { Component, OnInit } from '@angular/core';
import { DataService } from '../model/services/data.service';
import { ModelExample } from '../model/modelExample';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  presentations: Array<ModelExample> = [];
  visibleA = false;
  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getPresentations().subscribe((data: Array<ModelExample>) => {
      this.presentations = data;
    });
  }
  public getExamplesData() {
    return this.getExamplesData;
  }
  setVisibleA() {
    this.visibleA = !this.visibleA;
  }
}
