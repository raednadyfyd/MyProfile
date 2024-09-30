import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  title = "Who Am I?";
  introduction = "Hi I'm Raed Nady. Senior dot net developer.";
  additionalInfo = "Expirence with +6 of years in dot net field";
  
  services = [
    { icon: 'icon-bulb', title: 'Graphic Design', colorClass: 'color-1', animationEffect: 'fadeInLeft' },
    { icon: 'icon-globe-outline', title: 'Web Design', colorClass: 'color-2', animationEffect: 'fadeInRight' },
    { icon: 'icon-data', title: 'Software', colorClass: 'color-3', animationEffect: 'fadeInTop' },
    { icon: 'icon-phone3', title: 'Application', colorClass: 'color-4', animationEffect: 'fadeInBottom' }
  ];

  hireMessage = "I am happy to know you that 300+ projects done successfully!";
}
