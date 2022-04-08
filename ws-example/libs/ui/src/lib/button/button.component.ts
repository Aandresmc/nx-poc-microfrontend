import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ws-example-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  ngOnInit(): void {
    console.log('im button ngOninit');
  }
}
