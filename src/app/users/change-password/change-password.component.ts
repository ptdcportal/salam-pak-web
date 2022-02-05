import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private toastr: ToastrService) {
    this.initializeForm();
  }

  ngOnInit(): void {}

  get doPasswordsMatch(): boolean {
    return this.newPassword === this.confirmNewPassword;
  }
  resetPassword() {
    // console.log('oldPass', this.oldPassword);
    // console.log('newPass', this.newPassword);

    this.userService.resetPassword(localStorage.getItem('userId'), this.changePasswordForm.value).subscribe(
      (res: any) => {
        this.toastr.success('Success', 'Your password has been changed!');
      },
      (err) => {
        console.log('Error changing password: ', err);
        this.toastr.error('Passwords Do not match', 'Error');
      }
    );
  }
  get confirmNewPassword(): AbstractControl {
    return this.changePasswordForm.get('confirmNewPassword').value;
  }
  get newPassword(): AbstractControl {
    return this.changePasswordForm.get('newPassword').value;
  }
  private initializeForm() {
    this.changePasswordForm = this.formBuilder.group({
      oldPassword: [null, Validators.required],
      newPassword: [null, Validators.required],
      confirmNewPassword: ['', Validators.required],
    });
  }
}
