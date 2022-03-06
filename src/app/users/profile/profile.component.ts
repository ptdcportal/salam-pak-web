import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../../auth/authentication.service';
import { ThrowStmt } from '@angular/compiler';
// import defaultImage from '../../../assets/images/account/profile.png';
import defaultImage from '../../../assets/images/account/defaultProfileImage.png';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  userProfile: FormGroup;
  userData: any = [];
  cnicMask = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/];
  profilePath = '';

  imgPath: any;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toastr: ToastrService,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.setFeilds();
    this.getUserImage();
  }

  getUserImage() {
    // debugger;
    this.userService.getProfile(localStorage.getItem('userId')).subscribe((res: any) => {
      localStorage.setItem('userData', JSON.stringify(res));
      this.imgPath = res.thumbnails[0];
      if (this.imgPath) {
        document.getElementById('dp').setAttribute('style', 'background-image: url(' + this.imgPath + ')');
      } else {
        document.getElementById('dp').setAttribute('style', 'background-image: url(' + defaultImage + ')');
      }
    });
    // console.log(localStorage.getItem('userData'));
    // debugger;
  }

  imgClick() {
    document.getElementById('upload-file').click();
  }
  addImg(fileInput: any) {
    const fileReaded = fileInput.target.files[0];
  }
  updateProfile() {
    // api
    this.userService.updateProfile(localStorage.getItem('userId'), this.userProfile.value).subscribe(
      (res) => {
        // console.log('updatedProfile', res);
        this.getUserImage();
        // debugger;
        this.toastr.success('Success', res.message);
      },
      (err) => {
        // console.log('err', err.error);
        this.toastr.error('profile not updated', 'Error');
      }
    );
  }

  setFeilds() {
    const date = new Date(this.userData.profile.dob);
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);

    const dob = date.getFullYear() + '-' + month + '-' + day;

    this.userProfile.get('firstName').setValue(this.userData.profile.firstName);
    this.userProfile.get('middleName').setValue(this.userData.profile.middleName);
    this.userProfile.get('lastName').setValue(this.userData.profile.lastName);
    this.userProfile.get('mobile').setValue(this.userData.profile.mobile);
    this.userProfile.get('nic').setValue(this.userData.profile.nic);
    this.userProfile.get('dob').setValue(dob);
    this.userProfile.get('emergencyMobile').setValue(this.userData.profile.emergencyMobile);
    this.userProfile.get('gender').setValue(this.userData.profile.gender);
    this.userProfile.get('street').setValue(this.userData?.address?.street);
    this.userProfile.get('area').setValue(this.userData?.address?.area);
    this.userProfile.get('city').setValue(this.userData?.address?.city);
    this.userProfile.get('state').setValue(this.userData?.address?.state);
    this.userProfile.get('zipCode').setValue(this.userData?.address?.zipCode);
    this.userProfile.get('country').setValue(this.userData?.address?.country);
  }

  private initializeForm() {
    this.userProfile = this.formBuilder.group({
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobile: ['', Validators.required],
      emergencyMobile: [''],
      gender: ['male'],
      // nic: ['', Validators.maxLength(13)],
      nic: ['', Validators.required],
      dob: [''],
      street: [''],
      area: [''],
      city: [''],
      state: [''],
      zipCode: [''],
      country: [''],
    });
  }

  onSelectFile(event: any) {
    const formData = new FormData();

    formData.append(`photo`, event.target.files[0]);

    // this.convertToBase64(formData);

    this.userService.changeProfilePhoto(localStorage.getItem('userId'), formData).subscribe(
      (res: any) => {
        // console.log(res);
        this.imgPath = res.photo;
        this.toastr.success('Profile picture updated!');
        document.getElementById('dp').setAttribute('style', 'background-image: url(' + this.imgPath + ')');
      },
      (err) => {
        this.toastr.error('error while updating profile picture');
      }
    );
    // };
  }

  convertToBase64(dataURI: any) {
    // debugger;
    // var byteString = dataURI.split(',');
    // var dataToSend = byteString[1];
    // console.log(dataToSend);
    // let data = { photo: dataToSend };
  }

  // getUser(){
  //   this.
  // }
}
