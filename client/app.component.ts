import {Component}         from 'angular2/core';
import {AddPlayerComponent} from 'client/components/addPlayer/addPlayer.component';

@Component({
    selector: 'lopp-app',
    templateUrl: './client/app.html',
    directives: [AddPlayerComponent]
})

export class AppComponent { }
