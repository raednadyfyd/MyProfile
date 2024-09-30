import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {
 
  activeTab = 'graphic'; // Default active tab

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

}