import {Component}         from 'angular2/core';
import {AddPlayerComponent} from '../client/components/addPlayer/addPlayer.component';
import {SelectPlayersComponent} from '../client/components/selectPlayers/selectPlayers.component';

@Component({
    selector: 'lopp-app',
    templateUrl: './client/app.html',
    directives: [AddPlayerComponent, SelectPlayersComponent]
})

export class AppComponent { }
