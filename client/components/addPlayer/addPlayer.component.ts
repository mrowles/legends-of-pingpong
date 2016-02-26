import {Component} from 'angular2/core'
import {NgForm} from 'angular2/common';
import {BaseRequestOptions, Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import {Player} from '../../model/player/player.model';
import 'rxjs/Rx';
import {Router} from 'angular2/router';
import {AppComponent} from '../../app.component';
import {RouterLink} from "angular2/router";
import {routerOnActivate} from "angular2/src/router/lifecycle_annotations_impl";

//export class AddDisplay {
//  constructor(private router: Router)
//}

@Component({
  selector: 'add-player-form',
  providers: [HTTP_PROVIDERS],
  templateUrl: '/client/components/addPlayer/addPlayer.html'
})



export class AddPlayerComponent {
  model = new Player(1, '', '');
  submitted = false;
  response = {};
  postResponse;
  http:Http;
  router:Router;

  constructor(http:Http, router: Router) {
    this.http = http;
    this.router = router;
  }


  onSubmit() {
    let json = JSON.stringify(this.model);
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');


    this.http.post('/api/player', json, {
      headers: headers
    }).map(res => res.status).subscribe(
      res => this.postResponse = res,
      () => console.log(),
      () => redirect(this.postResponse, this.router)
    );

  }

  get message() {
    return JSON.stringify(this.postResponse);
  }


}

function redirect(res, router) {
  if(res === 201){
    router.navigate(['Players']);
  }
}


/*

 this.http.post('/api/player', json, {
 headers: headers
 }).map(res => res.json()).subscribe(
 res => this.postResponse = res
 );
 console.log(this.postResponse);*/
