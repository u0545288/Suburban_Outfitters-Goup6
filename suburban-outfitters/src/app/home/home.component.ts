import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public user: any;
  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.dataService.sendGetRequest().subscribe((data: any[])=>{
      console.log(data);
      this.user = data;
    })
  }

}
