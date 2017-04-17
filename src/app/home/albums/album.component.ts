import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { ActivatedRoute } from '@angular/router'
import {MdDialog, MdDialogRef} from '@angular/material';
@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  data;
  error;
  selected;
  constructor(
    private ds: DataService,
    private route: ActivatedRoute,
    public dialog: MdDialog
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.data = null;
      let id = params['id'];
      this.ds.getData('photos?albumId='+id).then(data=> {
        this.data = data;
      }, err=>{
        this.error = err;
      })
    });
  }

  showImage(url) {
    this.openDialog(url);
  }

  openDialog(url) {
    let dialogRef = this.dialog.open(Dialog);
    let instance = dialogRef.componentInstance;
    instance.url = url;
  }
}

@Component({
  selector: 'dialog-result-example-dialog',
  templateUrl: './dialog.html',
  styleUrls: ['./dialog.scss']
})
export class Dialog {
  url: string;
  load = false;
  constructor(public dialogRef: MdDialogRef<Dialog>) {}
  loaded(){
    this.load = true;
  }
}
