import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {ROUTER_PROVIDERS} from '@angular/router';
import {PlayerService} from './service/player.service';
import {MatchService} from './service/match.service';

bootstrap(AppComponent, [PlayerService, MatchService, ROUTER_PROVIDERS]);
