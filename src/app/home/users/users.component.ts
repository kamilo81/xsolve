import { Component, OnInit, ViewChild  } from '@angular/core';
import { DataService } from '../../shared/data.service'
import { DatatableComponent } from '@swimlane/ngx-datatable/src/components/datatable.component'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit  {
  users;
  query:string;
  count:number;
  limit:number = 5;
  newLimit:number;
  temp = [];
  error:string;
  @ViewChild('table')
  table: DatatableComponent;
  limits=[
    1,5,10,20,50,100
  ];

  constructor(private ds: DataService) { }

  ngOnInit() {
    this.ds.getData('users').then((data) => {
      this.users = data;
      this.temp = this.users;
    }, err=> {
      this.error = err;
    });
    this.newLimit = JSON.parse(localStorage.getItem('limit'));
    if(this.newLimit) {
      this.limit = this.newLimit;
    }
  }
  updateFilter(event) {
    const val = event.target.value;
    let temp = this.filter(this.temp, val);
    this.count = temp.length;
    this.users = temp;
    this.table.offset = 0;
  }
  filter(toFilter, query) {
    let isSearch = (data:any): boolean => {
      let isAll = false;
      if(typeof data === 'object' ){
        for (let z in data) {
          if(isAll = isSearch(data[z]) ){
            break;
          }
        }
      } else {
        if(typeof query === 'number'){
          isAll = data === query;
        } else {
          isAll = data.toString().match( new RegExp(query, 'i') );
        }
      }
      return isAll;
    };
    return toFilter.filter(isSearch);

  }
  changeLimit() {
    this.table.limit = this.limit;
    window.dispatchEvent(new Event('resize'));
    localStorage.setItem('limit', JSON.stringify(this.limit))
  }
  toggleExpandRow(row) {
    this.table.rowDetail.toggleExpandRow(row);
  }
  onResize() {
    this.table.recalculate();
  }
}


