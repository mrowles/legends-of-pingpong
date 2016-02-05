import {Component}         from 'angular2/core';
import {AddPlayerComponent} from './components/addPlayer/addPlayer.component'

@Component({
    selector: 'my-app',
    templateUrl: '/app/app.html',
    directives: [AddPlayerComponent]
})

export class AppComponent { }
