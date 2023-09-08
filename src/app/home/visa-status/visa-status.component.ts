import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgxSmartModalService, NgxSmartModalComponent } from 'ngx-smart-modal';
@Component({
  selector: 'app-visa-status',
  templateUrl: './visa-status.component.html',
  styleUrls: ['./visa-status.component.scss'],
})
export class VisaStatusComponent implements OnInit {
  visas: Array<any> = [];
  visaForm: FormGroup;
  countryInfo: any = {
    name: '',
    status: false,
  };
  submitted = false;
  visaStatus = '';
  online: any;
  isOnArrival: any;
  selectedCountry: any;
  constructor(
    private homeService: HomeService,
    private formBuilder: FormBuilder,
    public ngxSmartModalService: NgxSmartModalService
  ) {
    this.getVisaStatus();
    this.initalizeVisaForm();
  }
  getVisaStatus() {
    this.homeService.getVisaList().then((visa) => {
      this.visas = visa;
      // debugger;
    });
  }
  checkAvailability() {
    this.submitted = true;
    this.visas.filter((_visa: any) => {
      if (_visa.name === this.countryInfo.name) {
        this.isOnArrival = _visa.onArrival;
        this.selectedCountry = _visa.name;
        this.online = _visa.online;
      }
    });
    this.ngxSmartModalService.getModal('myCustomModal').open();
  }
  setCountry(event: any) {
    this.countryInfo.name = event.target.value;
    this.submitted = false;
  }
  ngOnInit(): void {}
  private initalizeVisaForm() {
    this.visaForm = this.formBuilder.group({
      name: [],
    });
  }
}
