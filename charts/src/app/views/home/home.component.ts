import { Component, OnInit } from "@angular/core";
import { UsersService } from "../../services/users.service"

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {

  userList : any[] = [];
  done : boolean = false; // flag to say data fetch is done

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'name';
  showYAxisLabel = true;
  yAxisLabel = 'age';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  
  constructor(public users: UsersService) {
    this.users.getUsers().subscribe(users => {
      users.forEach(element => {
        this.userList.push({"name" : element.name, "value": element.age});  // can take only x y values
      });
      this.done = true;
      console.log(this.userList);
    })
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnInit() {}


}
