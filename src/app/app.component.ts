import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from './home/home.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private activatedRoute: ActivatedRoute, private recipeService: HomeService) {}
}
