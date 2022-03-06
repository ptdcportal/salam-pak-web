import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { FormGroup, FormBuilder, Validators, Form } from '@angular/forms';
import { NgxSmartModalService, NgxSmartModalComponent } from 'ngx-smart-modal';
import { AuthenticationService, CredentialsService } from '@app/auth';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { SocialAuthService } from 'angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.scss'],
})
export class AuthModalComponent implements OnInit {
  loginForm!: FormGroup;
  signupForm: FormGroup;
  forgotPasswordForm: FormGroup;

  isLoading = false;
  isLoginModal = true;
  isSignupModal = false;
  isResetPasswordModal = false;

  show: boolean = false;
  menuHidden = true;
  isEnglish = true;
  isUrdu = false;
  isGerman = false;

  socialUser: SocialUser;
  addClassFixedNav: boolean = false;

  constructor(
    private homeService: HomeService,
    private formBuilder: FormBuilder,
    public ngxSmartModalService: NgxSmartModalService,
    private authenticationService: AuthenticationService,
    private credentialsService: CredentialsService,
    private toastr: ToastrService,
    private translate: TranslateService,
    private authService: SocialAuthService
  ) {
    this.createForm();
    this.initializeSignup();
    this.createForgotPasswordForm();
    translate.addLangs(['en', 'ur', 'de']);
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    this.ngxSmartModalService.get('authModal').onCloseFinished.subscribe((res: any) => {
      // console.log('res: ', res);
    });
  }

  private createForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      remember: true,
    });
  }

  createForgotPasswordForm() {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', Validators.required],
    });
  }

  private initializeSignup() {
    this.signupForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      gender: ['male'],
      dob: ['', Validators.required],
      type: ['customer'],
      // terms: ['', Validators.required],
    });
  }

  setSession(res: any) {
    return {
      userId: res.id,
      email: res.email,
      fName: res.profile.firstName,
      token: res.token,
      userType: res.type,
      userGender: res.profile.gender,
      userData: JSON.stringify(res),
    };
  }

  login() {
    this.authenticationService.login(this.loginForm.value).subscribe(
      (res) => {
        if (res) {
          this.ngxSmartModalService.getModal('authModal').close();
          // this.ngxSmartModalService.removeModal('authModal');
          // this.ngxSmartModalService.removeModal('createPlanModal');
          // this.ngxSmartModalService.removeModal('carouselModal');
          // this.ngxSmartModalService.removeModal('feedbackModal');
          const user = this.setSession(res.data);
          this.credentialsService.setCredentials(user, true);
          this.toastr.success('Success', `Welcome ${localStorage.getItem('fName')}!`);
          this.credentialsService.changeStatus('loggedIn');
          // this.ngxSmartModalService.closeAll();
          // console.log('Modal Stack: ', this.ngxSmartModalService.getOpenedModals());
        }
      },
      (err) => {
        // console.log('login error', err.error);
        this.ngxSmartModalService.getModal('authModal').close();
        this.toastr.error('Invalid E-mail or Password', 'Error');
      }
    );
    // this.ngxSmartModalService.removeModal('authModal');
    // console.log('login');
  }
  signUp() {
    this.authenticationService.signUp(this.signupForm.value).subscribe(
      (res) => {
        this.ngxSmartModalService.getModal('authModal').close();
        const user = this.setSession(res);
        this.credentialsService.setCredentials(user, true);
        // this.ngxSmartModalService.getModal('myModal').close();
        this.toastr.success('Logged In', `Welcome, ${localStorage.getItem('fName')}!`);
      },
      (err) => {
        this.toastr.error('Couldn`t create user', err.error.error.message || 'Error');
        // console.log('signup error', err);
      }
    );
  }

  forgorPassword() {
    this.authenticationService.forgotPassword(this.forgotPasswordForm.value).subscribe(
      (res) => {
        // console.log(res)
        this.ngxSmartModalService.getModal('authModal').close();
        this.toastr.success('Please Check your email');
      },
      (err) => {
        //  console.log(err)
        this.ngxSmartModalService.getModal('authModal').close();
        this.toastr.error(err.error.error.message || 'Error');
      }
    );
  }

  openModal(modal: string): void {
    if (modal === 'signIn') {
      this.isLoginModal = true;
      this.isSignupModal = false;
      this.isResetPasswordModal = false;
    } else if (modal === 'signUp') {
      this.isLoginModal = false;
      this.isSignupModal = true;
      this.isResetPasswordModal = false;
    } else {
      this.isLoginModal = false;
      this.isSignupModal = false;
      this.isResetPasswordModal = true;
    }
  }

  toggleSidebar = () => {
    this.show = !this.show;
  };

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }
}
