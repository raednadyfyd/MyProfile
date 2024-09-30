import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services = [
    {
      icon: 'icon-bulb',
      title: 'Innovative Ideas',
      description: 'Separated they live in Bookmarksgrove right at the coast of the Semantics',
      colorClass: 'color-1'
    },
    {
      icon: 'icon-data',
      title: 'Software',
      description: 'Separated they live in Bookmarksgrove right at the coast of the Semantics',
      colorClass: 'color-2'
    },
    {
      icon: 'icon-phone3',
      title: 'Application',
      description: 'Separated they live in Bookmarksgrove right at the coast of the Semantics',
      colorClass: 'color-3'
    },
    {
      icon: 'icon-layers2',
      title: 'Graphic Design',
      description: 'Separated they live in Bookmarksgrove right at the coast of the Semantics',
      colorClass: 'color-4'
    },
    {
      icon: 'icon-data',
      title: 'Software',
      description: 'Separated they live in Bookmarksgrove right at the coast of the Semantics',
      colorClass: 'color-5'
    },
    {
      icon: 'icon-phone3',
      title: 'Application',
      description: 'Separated they live in Bookmarksgrove right at the coast of the Semantics',
      colorClass: 'color-6'
    }
  ];
}
