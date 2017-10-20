import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from "RxJS/Rx";
import 'rxjs/add/operator/map';
import {Jsonp} from '@angular/http';

@Injectable()
export class VkService {

  constructor( private jsonp:Jsonp) { }
  //make jsonp reguest to to api using token
  getUserDetail(token): Observable<any>{
      const url = "https://api.vk.com/method/friends.get?order=random&count=5&fields=nickname,photo_100&callback=JSONP_CALLBACK&v=5.52&access_token=" + token; //we add callbacl=JSONP_CALLBACk for angular
      return this.jsonp.get(url).map(
        res =>{
          const user = res.json();
          return user;
        }
      )
    }

    checkStorage(id){ //check local storage
    let a = localStorage.getItem(id);
    if(a){
      return true;
    }else{
        return false
    }
  }
}
