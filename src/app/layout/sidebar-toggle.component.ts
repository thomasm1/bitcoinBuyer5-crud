import { Component,  Output, EventEmitter, OnInit, HostListener } from '@angular/core';
import { SidebarService } from './sidebar.service'; 

@Component({
  selector: 'tm-sidebar-toggle',
  template: `
    <h4>
   CONSOLE <br />CALCULATIONS
    </h4>
  `,
  styleUrls: [
    './sidebar-toggle.component.css'
  ]
})
export class SidebarToggleComponent implements OnInit {

  constructor(
    private sidebarService: SidebarService
  ) { }
    
  @HostListener('click')
  click() {
    this.sidebarService.toggle();
  }

  ngOnInit() {
  }

}
