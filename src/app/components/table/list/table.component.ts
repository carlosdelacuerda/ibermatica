import { AfterViewChecked, Component, Input, OnInit } from '@angular/core';
import { UserInterface } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewChecked {

  @Input() users: UserInterface[] = []
  showUsers:  UserInterface[] = []

  ngAfterViewChecked(): void {
    this.showUsers = this.users
  }

  filter(){
    const dem = <HTMLInputElement> document.getElementById("demandante");
    const isCheckedDem = dem.checked;
    const emp = <HTMLInputElement> document.getElementById("empleado");
    const isCheckedEmp = emp.checked;
    this.showUsers = [];
    this.users.forEach((e) => {
      if (isCheckedDem && e.tipo == "demandante") {
        this.showUsers.push(e)
      }
      if(isCheckedEmp && e.tipo == "empleado") {
        this.showUsers.push(e)
      }
    })
  }

  remove(id:number) {
    const oldList = this.showUsers;
    this.showUsers = [];
    oldList.forEach((user) => {
      if(user.id != id) {
        this.showUsers.push(user)
      }
    })
  }

}
