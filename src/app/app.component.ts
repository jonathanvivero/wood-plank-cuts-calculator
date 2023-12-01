import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent implements OnInit{

  constructor( private router: Router,
    private _activatedRoute:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.router.navigate(['',{
      outlets: {
        primary: ['home'], 
        sidebar: ['default']
      }}]);
  }

  title = 'wpc-calc';
}
