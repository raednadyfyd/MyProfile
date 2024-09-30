import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills = [
    { name: 'Photoshop', percentage: 75, colorClass: 'color-1', animateEffect: 'fadeInLeft' },
    { name: 'jQuery', percentage: 60, colorClass: 'color-2', animateEffect: 'fadeInRight' },
    { name: 'HTML5', percentage: 85, colorClass: 'color-3', animateEffect: 'fadeInLeft' },
    { name: 'CSS3', percentage: 90, colorClass: 'color-4', animateEffect: 'fadeInRight' },
    { name: 'WordPress', percentage: 70, colorClass: 'color-5', animateEffect: 'fadeInLeft' },
    { name: 'SEO', percentage: 80, colorClass: 'color-6', animateEffect: 'fadeInRight' }
  ];
}
