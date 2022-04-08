import { Component } from '@angular/core';
import { IData } from '@ws-example/data';

@Component({
  selector: 'ws-example-mfe1-entry',
  template: `<div class="remote-entry">
    iData: {{ data | json }}
    <h2>mfe1's Remote Entry Component</h2>
    <ws-example-button></ws-example-button>
  </div>`,
  styles: [
    `
      .remote-entry {
        background-color: #143055;
        color: white;
        padding: 5px;
      }
    `,
  ],
})
export class RemoteEntryComponent {
  data: IData = {
    name: 'name fake',
  };
}
