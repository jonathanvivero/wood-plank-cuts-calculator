import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-default-side-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './default-side-bar.component.html',
  styleUrl: './default-side-bar.component.sass'
})
export class DefaultSideBarComponent {

}
