import { Component, OnInit } from '@angular/core';
import { first, pipe } from 'rxjs';
import { UserInterface } from 'src/app/interfaces/user.interface';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.scss']
})
export class ListContainerComponent implements OnInit {

  users: UserInterface[] = []

  constructor(
    public listService: ListService
  ){}

    ngOnInit(): void {
      this.listService.getAll().pipe(
        first()
      ).subscribe((res) => {
        this.users = res
      })
    }

}
