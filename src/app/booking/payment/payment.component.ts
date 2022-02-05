import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { EventService } from '../../services/event.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  @Input() user: any | undefined;
  @Input() bookingId: any | undefined;
  @Input() amount: any | undefined;
  @Output() onSuccess: EventEmitter<any> = new EventEmitter();
  tab = -1;
  paymentMethods: any;
  selectedOption: any;
  constructor(private readonly eventService: EventService) {
    this.getPaymentMethodData();
  }

  ngOnInit(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  getPaymentMethodData() {
    this.eventService.getPaymentMethods().subscribe((data: any) => {
      if (data && data.data[0]) {
        this.paymentMethods = [];
        data.data.forEach((item: any) => {
          this.paymentMethods = [...this.paymentMethods, ...item.payment_methods];
        });
      }
    });
  }

  selectOption = (obj: any, tabValue: number) => {
    this.tab = tabValue;
    this.selectedOption = obj;
  };

  format = (value: any, pattern: any) => {
    var i = 0,
      v = value.toString();
    return pattern.replace(/#/g, () => v[i++]);
  };

  placeBookingOrder = () => {
    let data = {
      api_key: '',
      order_ref_id: this.bookingId,
      amount: this.amount,
      gateway: {
        payment_type: this.selectedOption && this.selectedOption.payment_type,
        payment_method: this.selectedOption && this.selectedOption.payment_method,
      },
      customer: {
        name: this.user && this.user.name,
        phone_number: this.user && this.user.phoneNo,
        email: this.user && this.user.email,
        cnic: this.user && this.user.cnic && this.format(this.user.cnic, '#####-#######-#'),
      },
      return_url: `${environment.serverUrl}`,
      ipn_url: `${environment.serverUrl}/ipn/${this.bookingId}`,
    };
    this.eventService.placeBookMeOrder(data).subscribe((res: any) => {
      console.log('payment Data:', res);
      this.onSuccess.emit(res);
    });
  };
}
