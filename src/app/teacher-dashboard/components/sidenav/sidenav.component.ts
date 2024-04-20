import { NgClass } from '@angular/common';
import { Component, Input,inject } from '@angular/core';
import {Router, RouterModule} from "@angular/router"
import { Store } from '@ngrx/store';
import { adduser } from '../../../store/user/user.actions';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterModule, NgClass],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {

  @Input() currentPath!: string;

  userName: any;
  store = inject(Store)

  constructor(private route : Router) {
    
  }

  ngOnInit(){
  }

  logoutHandler() {
    localStorage.removeItem('myUser');
    this.route.navigateByUrl('/')
  }


}
