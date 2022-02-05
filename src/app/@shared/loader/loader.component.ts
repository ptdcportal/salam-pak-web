import { Component, OnInit, Input } from '@angular/core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  @Input() isLoading = false;
  @Input() message: string | undefined;
  faSpinner = faSpinner;

  constructor() {}

  ngOnInit() {}
}
