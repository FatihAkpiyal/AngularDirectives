import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appExample]',
  standalone: true
})
export class ExampleDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef : ViewContainerRef
  ) { }
  
  @Input() set appExample(value: boolean){
    if(value){
      this.viewContainerRef.createEmbeddedView(this.templateRef)
    }
    else{
      this.viewContainerRef.clear();
    }
  }
}
