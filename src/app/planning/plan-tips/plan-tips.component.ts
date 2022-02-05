import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-plan-tips',
  templateUrl: './plan-tips.component.html',
  styleUrls: ['./plan-tips.component.scss'],
})
export class PlanTipsComponent implements OnInit {
  constructor(private readonly eventService: EventService, private toastr: ToastrService) {}

  ngOnInit(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    this.loadScript();
  }

  public loadScript() {
    let body = <HTMLDivElement>document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = '../../assets/js/where-to-go.js';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }
}
