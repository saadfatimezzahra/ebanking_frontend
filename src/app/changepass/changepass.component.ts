import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.component.html',
  styleUrls: ['./changepass.component.css']
})
export class ChangepassComponent  {
  oldPassword: string= '';
  newPassword: string= '';
  confirmPassword: string='';

  constructor(private http: HttpClient, private authService: AuthService,private router:Router) {}

  changePassword() {
    const request = {
      oldPassword: this.oldPassword,
      newPassword: this.newPassword,
      confPassword: this.confirmPassword
    };

    this.authService.changePassword(request).subscribe(
      () => {
        console.log('Une erreur est survenue lors de la modification du mot de passe');

      },
      error => {
        
        console.log('Le mot de passe a été modifié avec succès');      
        this.router.navigateByUrl('/register').then(()=>{
          window.location.reload();
        })
      }
    );
  }
}
