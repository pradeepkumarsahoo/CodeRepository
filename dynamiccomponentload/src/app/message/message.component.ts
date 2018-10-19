

import { Component, Input } from '@angular/core';
@Component({
    selector: 'app-message',
    template: `<h2>{{message}}  123  </h2>
`
})
export class MessageComponent {
    @Input() message: string;
}