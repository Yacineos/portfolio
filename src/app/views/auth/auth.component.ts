import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthentificationService } from '../../shared/services/authentification.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent {
  
  constructor(private authService: AuthentificationService){

  }
  loginGit() {
    this.authService.thirdPartyLogin();
  }

}
