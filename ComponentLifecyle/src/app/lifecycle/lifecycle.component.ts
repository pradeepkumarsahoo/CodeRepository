import {   
  Component,   
  OnInit,   
  OnChanges,   
  DoCheck,   
  AfterContentInit,   
  AfterContentChecked,   
  AfterViewInit,   
  AfterViewChecked,   
  OnDestroy }   
  from '@angular/core';  

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})


export class LifecycleComponent implements   
                     OnInit  
                    ,OnChanges   
                    ,DoCheck  
                    ,AfterContentInit  
                    ,AfterContentChecked  
                    ,AfterViewInit  
                    ,AfterViewChecked  
                    ,OnDestroy  
                    {  
  
  name: string ='';  
  
  constructor() {  
    alert('Constructor Called');  
   }  
  
  ngOnInit() {  
    alert('ngOnInit Called');  
  }  
  
  ngOnChanges(){  
    alert('ngOnChanges Called');  
  }  
  
  ngDoCheck(){  
    alert('ngOnDoCheck Called');  
  }  
  
  ngAfterContentInit(){  
    alert('ngAfterContentInit Called');  
  }  
  
  ngAfterContentChecked(){  
    alert('ngAfterContentChecked Called');  
  }  
  
  ngAfterViewInit(){  
    alert('ngAfterViewInit Called');  
  }  
  
  ngAfterViewChecked(){  
    alert('ngAfterViewChecked Called');  
  }  
  
  ngOnDestroy(){  
    alert('ngOnDestroy Called');  
  }  
}  
