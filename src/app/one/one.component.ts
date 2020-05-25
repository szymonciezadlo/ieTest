import {Component, OnInit} from '@angular/core';
import {DataService} from '../model/services/data.service';
import {ModelExample} from '../model/modelExample';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  public presentations: Array<ModelExample> = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getPresentations().subscribe((data: Array<ModelExample>) => {
      this.presentations = data;
    });
  }

}
