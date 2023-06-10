import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';
import { Router} from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isLoggedIn = false;
  form: any = {};
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService,private router:Router, private userService : UserService) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit() {
    this.authService.login(this.form).subscribe(
      data => {

        console.log(data.id)
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.userService.setUserId(data.id)
        this.redirectUser(data.roles,data.email);
    
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        console.log("erreur : "+err);
      }
    );
  }
  

  redirectUser(role:any,idd:string){
    console.log(role);
    if(role =="ROLE_CLIENT"){
      this.authService.checkIfAlreagyLoggedIn(idd).subscribe(
        data=>{
          console.log(data);
           if(data ==1){
            console.log("HERE1");
            this.router.navigateByUrl("/home").then(()=>{
             
            })
            }else if(data ==0){
              console.log("HERE2");
              this.router.navigateByUrl("/changepass").then(()=>{
               
              })
              }
            },
          error => {
            console.log("erreur"); // Affiche le corps de la réponse d'erreur
            
          })}
    else if(role =="ROLE_AGENT"){
      console.log("AGEENT");
      this.router.navigateByUrl('/homeagent').then(()=>{
      })
    }
    else if(role =="ROLE_ADMIN"){
      console.log("CLIEEEENT");
      this.router.navigateByUrl('/homeadmin').then(()=>{

      })
    }
   
  }
}
