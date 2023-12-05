import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-hello-response-modal',
  templateUrl: './hello-response-modal.component.html',
  styleUrls: ['./hello-response-modal.component.css']
})
export class HelloResponseModalComponent {
  responseData: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.responseData = data;
  }
}
