import { Component } from "@angular/core";
import { Router} from "@angular/router";
import { User } from "./../interfaces/user";
import { UserType } from './../interfaces/userType';
import { StartPageService } from './start-page-service';
@Component( {
    selector: "start",
    templateUrl: 'app/start-page/start-page.component.html',
    styleUrls: ['app/start-page/start-page.style.css'],
    providers: [StartPageService]
})

export class StartPageComponent {
    
    constructor(private startPageService: StartPageService, private router: Router) {
        this.option = Object.keys(this.userTypes).filter(Number)
    }
    
    loginUserName: string;
    loginPassword: string;
    confirmPassword: string;
    formLogin: boolean = true;
    loginMessage: string;
    registerMessage: string;
    registerUser: User = {
        Id : 0,
        FirstName : "",
        LastName : "",
        UserName : "",
        Email : "",
        Password: "",
        UserType: UserType.Tenant
    };
    option: any;
    userTypes = UserType;
    
    LoginForm() {
        this.formLogin = true;
    }

    RegisterForm() {
        this.formLogin = false;
    }

    GoToHome(user: User) {
        localStorage.setItem('id_token', user.Id.toString());
        if(user.UserType == UserType.Tenant)
            this.router.navigate(['tenantHome']);
        else 
            this.router.navigate(['adminHome']);
    }

    Login() {
        
        this.startPageService.Login(this.loginUserName, this.loginPassword).then(user => {
            if(user == null) {
            this.loginMessage = "Invalid username or password.Try Again!";
        } else {
            this.loginMessage = "";
            this.GoToHome(user);
        }
        console.log(user);
        }).catch(er => {
            console.log(er);
        })
        
    }

    Register() {
        if(this.registerUser.Password == this.confirmPassword) {   
            this.startPageService.Register(this.registerUser).then(u => {
                this.GoToHome(u);
                this.registerMessage = "";
            }).catch(er => {
                console.log(er);
            })
            
        } else {
            this.registerMessage = "Passwords do not coincide!"
        }
        
    }
}