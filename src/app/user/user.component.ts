import { Component, OnInit } from '@angular/core';
import { VkService} from '../vk.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  data:Object;
  token:string;
  REG_EXP = /\#(?:access_token)\=([\S\s]*?)\&/; // reg_exp to check url for token

    constructor(private vkService:VkService,) { }

    ngOnInit() {
      if(this.REG_EXP.test(window.location.href)){//check url for token
    this.token = window.location.href.match(this.REG_EXP)[1];
    localStorage.setItem('token', this.token);

    this.vkService.getUserDetail(this.token).subscribe( //make call to api
          res =>{
            this.data = res['response'];
          }
        );
  }else if(this.vkService.checkStorage('token')){//check local storage for token
    this.token = localStorage.getItem('token');
    this.vkService.getUserDetail(this.token).subscribe( //make call to api
          res =>{
            this.data = res['response'];
          }
        );
    }
  }
    clear(){ //clear localStorage
      localStorage.clear();
      window.location.href = '/vk-test';
    }
    logIn(){ //redirect user to authorization page
      let redirect_uri =  'https://tenzeniga.github.io/vk-test/';
      window.location.href = 'https://oauth.vk.com/authorize?client_id=6226355&display=page&redirect_uri=' + redirect_uri + '&scope=friends&response_type=token&v=5.52';

    }
    showUser(item){ //open the friend's page on click
      window.location.href = 'https://vk.com/id' + item['id'];
    }
}
