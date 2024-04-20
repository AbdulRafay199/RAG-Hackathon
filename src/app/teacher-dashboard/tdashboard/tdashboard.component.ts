import { AfterViewInit, Component, OnInit, ViewChild, inject } from '@angular/core';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { ActivatedRoute, Route, RouterModule } from '@angular/router';
import { Router,NavigationEnd  } from '@angular/router';
import { filter } from 'rxjs';

import AOS from "aos";
import { NgClass } from '@angular/common';
import { SidenavComponent } from "../components/sidenav/sidenav.component";
import { DrawerService } from '../../services/drawer-service.service';
import { CurrentPathService } from '../../services/current-path.service';
import { adduser } from '../../store/user/user.actions';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-tdashboard',
    standalone: true,
    templateUrl: './tdashboard.component.html',
    styleUrl: './tdashboard.component.css',
    imports: [RouterModule, MatSidenavModule, NgClass, SidenavComponent]
})
export class TdashboardComponent implements OnInit{

  @ViewChild('drawer') public drawer!: MatDrawer;
  store = inject(Store)

  currentPath: string = "";
  isDashboardRoute: boolean = false;
  userName: any;

  constructor(private routeService: CurrentPathService,private drawerService: DrawerService, private route : Router) {
    
  }

  ngAfterViewInit(): void {
    // console.log("tdashboard: ",this.drawer)
    this.drawerService.setDrawer(this.drawer);
  }

  ngOnInit(){
    
    AOS.init();
  }

  logoutHandler() {
    localStorage.removeItem('myUser');
    this.route.navigateByUrl('/')
  }

}
