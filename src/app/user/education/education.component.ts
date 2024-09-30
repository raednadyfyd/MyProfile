import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
   
  educationData = [
    { id: 1, 
      isCollapsed: true, 
      buttonColor: 'gray',
      title: 'Master Degree Graphic Design',
      description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
   
     },
    { id: 2, 
      isCollapsed: true,
      buttonColor: 'gray',
      title: 'Bachelor Degree of Computer Science',
      description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    
     },
    { id: 3, 
      isCollapsed: true,
       buttonColor: 'gray',
      title: 'Diploma in Information Technology',
      description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    
     },
     {
     id: 4, 
      isCollapsed: true,
       buttonColor: 'gray',
       title: 'High School Secondary Education',
       description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
     }
  ];

  toggleCollapse(item: any) {
    item.isCollapsed = !item.isCollapsed;
    item.buttonColor = item.isCollapsed ? 'gray' : 'blue'; // Change color on toggle
  }
}