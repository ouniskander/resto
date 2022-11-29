import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientdataService } from '../clientdata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  clientLogin = {
    email:'',
    password:''
  }

  token: any
  login(){
    this.data.login(this.clientLogin).subscribe(
      res=>{
        console.log(res);
        if(res!={}) {
        this.token = res;
        localStorage.setItem('tokenpizza' , this.token.mytoken );
        localStorage.setItem('role' , 'client' );
        this.router.navigate(['/']);
      }

      },
      err=>{
        console.log(err);

      }
    );

  }


  constructor(private data: ClientdataService, private router: Router) { }

  ngOnInit(): void {
  }

}
