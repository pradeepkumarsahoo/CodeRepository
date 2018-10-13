
import { Directive, OnInit, ElementRef , HostListener} from '@angular/core'; 

@Directive({
  selector: '[appCreditvalidate]'
})
export class CreditvalidateDirective {

  constructor(private eleRef: ElementRef) { }  
  @HostListener('blur') blur(eventData: Event) {  
    //alert('My Directive credit card validate');
    this.eleRef.nativeElement.style.color="Green";  
      let val: string = "";  
      val = this.eleRef.nativeElement.value;  
      if (val.length > 0) {  

       
        val = val.match(new RegExp('.{1,4}', 'g')).join('-');  
       }  
      this.eleRef.nativeElement.value = val;  
  }  

}
