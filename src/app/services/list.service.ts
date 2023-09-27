import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInterface } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(
    public http: HttpClient,
  ) { }

  getAll() {
    return this.http.get<UserInterface[]>('../assets/data/list.json');
  }
}
