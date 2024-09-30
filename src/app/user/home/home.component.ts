import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  interval = 3000;
  slides = [
    {
      imageUrl: 'assets/images/raed.png',
      title: "Hi! I'm Raed",
      description: 'Made by Angular',
      buttonText: 'Download CV',
      buttonIcon: 'icon-download4',
      buttonLink: '#',
    },
    {
      imageUrl: 'assets/images/avatar.png',
      title: 'I am a full stack',
      description: '100% HTML5 Bootstrap templates made by colorlib.com',
      buttonText: 'View Portfolio',
      buttonIcon: 'icon-briefcase3',
      buttonLink: '#',  
    }
  ];
}