import { Component, OnInit } from '@angular/core';
import { AdminLayoutService } from 'app/layouts/admin-layout/admin-layout.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css'],
  providers: [AdminLayoutService]
})
export class TableListComponent implements OnInit {

  constructor(private adminLayoutService: AdminLayoutService) { }

  ngOnInit() {
    this.get();
  }
  get () {
    this.adminLayoutService.get().subscribe(
      response => this.onGetSuccess(response),
      response => this.onGetError(response));
  }
  protected onGetSuccess(response:any){
   console.log(response);
  }
  protected onGetError(response:any){
    console.log(response);
  }
}
