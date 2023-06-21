import { Component, OnInit, Input } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { HttpClient } from '@angular/common/http';
import { Shell } from '@app/shell/shell.service';
import { ActivatedRoute, Router } from '@angular/router';
import { last } from 'rxjs/operators';
import { NgxSmartModalService, NgxSmartModalComponent } from 'ngx-smart-modal';
@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss'],
})
export class WeatherWidgetComponent implements OnInit {
  @Input() locationName: any;
  temp: any;
  currencyData: any = [];
  split: any = 'Islamabad';
  ammount: any;
  disableSelect: any = true;
  convertedPriceToPKR: any;
  currencies: any = [];
  selectedCountry: any = '';
  constructor(
    private homeService: HomeService,
    private httpClient: HttpClient,
    private shellService: Shell,
    private route: ActivatedRoute,
    private router: Router,
    public ngxSmartModalService: NgxSmartModalService
  ) {}

  ngOnInit(): void {
    // this.getWeather();
    this.getCurrencyInfo();
    var url = window.location.href;

    var url = url.slice(url.lastIndexOf('/') + 1);

    if (url.length > 0) {
      this.split = url;
    }

    this.getWeather(this.split);
  }
  getCurrencyInfo() {
    this.shellService.getCurrenciesInfo().then((res) => {
      this.currencyData = res; //(1,4) ...slice(1, 10)
      // console.log('currenccyyyy', res);
      this.currencies = res.slice(1, 10);

      this.ammount = 1;
      this.selectedCountry = 'United States Dollar';
      var res = this.currencyData.filter((item: any) => {
        return item.name.currencyName == this.selectedCountry;
      });
      this.convertedPriceToPKR = (this.ammount * res[0].rate).toFixed(2);
      this.disableSelect = false;
    });
  }
  getWeather(split: any) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Islamabad&units=metric&appid=f1fbd5c5dfb2ea550ad1a7e39f7716ac`
    )
      .then((res) => res.json())
      .then((data: any) => {
        this.temp = `${data.main.temp}`;
      });
  }

  setCountry(e: any) {
    var res = this.currencyData.filter((item: any) => {
      return item.name.currencyName == e.target.value;
    });
    this.selectedCountry = e.target.value;

    this.convertedPriceToPKR = (this.ammount * res[0].rate).toFixed(2);
  }

  modelChanged(value: any) {
    if (value !== null) {
      this.disableSelect = false;
    } else {
      this.disableSelect = true;
    }
    this.ammount = value;

    if (this.selectedCountry.length > 0) {
      var res = this.currencyData.filter((i: any) => {
        return i.name.currencyName == this.selectedCountry;
      });

      this.convertedPriceToPKR = (this.ammount * res[0].rate).toFixed(2);
    }
  }

  openCurrencyModal() {
    this.ngxSmartModalService.getModal('myCurrencyModal').open();
  }
}
