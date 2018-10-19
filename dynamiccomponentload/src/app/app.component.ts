import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  ComponentFactory
} from '@angular/core';
import { MessageComponent } from './message/message.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  componentRef: any;
  @ViewChild('messagecontainer', { read: ViewContainerRef }) entry: ViewContainerRef;
  constructor(private resolver: ComponentFactoryResolver) { }
  createComponent(message) {
      this.entry.clear();
      const factory = this.resolver.resolveComponentFactory(MessageComponent);
      this.componentRef = this.entry.createComponent(factory);
      this.componentRef.instance.message = message;
  }
  destroyComponent() {
      this.componentRef.destroy();
  }
}