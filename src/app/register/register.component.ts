import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientdataService } from '../clientdata.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  client= {
    name:'',
    lastname:'',
    email:'',
    adress:'',
    password:''

  }

  registerclient(){
    this.data.register(this.client).subscribe(
      res=>{
        this.router.navigate(['/login']);
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
