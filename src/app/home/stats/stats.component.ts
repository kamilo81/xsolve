import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/data.service'

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})

export class StatsComponent implements OnInit {

  barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: false
  };

  barChartLabels:string[];
  barChartType:string = 'bar';
  barChartLegend:boolean = false;

  users;
  posts;

  barChartData:any[];

  constructor(private ds: DataService) {

  }


  ngOnInit() {
    this.ds.getStats().subscribe(data=>{
      let _barChartLabels=[];
      let _users = {};
      let _barChartData=[];

      this.users = data[0];
      this.posts = data[1];

      for (let i in this.users) {
        _barChartLabels.push(
          this.users[i].name
        );
        _users[this.users[i].id] = 0;
      }
      for (let i in this.posts) {
        _users[this.posts[i].userId]++

      }
      for (let i in _users) {
        _barChartData.push(
          _users[i]
        )
      }
      this.barChartData = [
        {data: _barChartData, label: 'Posts'}
      ];
      this.barChartLabels = _barChartLabels;
    })
  }

}
