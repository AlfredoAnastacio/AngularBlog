import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable()
export class UserService {

  constructor(
    public _http: HttpClient
  ){

  }

  test() {
    return "Hola mundo dedse un servicio!!";
  }
}


