import {
  describe,
  expect,
  it,
  inject,
  beforeEachProviders,
} from '@angular/core/testing';

import {
  TestComponentBuilder,
  ComponentFixture,
} from '@angular/compiler/testing';

import {AppComponent} from './app.component';
import {PlayerService} from './service/player.service';
import {MatchService} from './service/match.service';

describe('when loading the app component', () => {

  beforeEachProviders(() => [
    AppComponent,
    PlayerService,
    MatchService,
  ]);

  it('should initiate the component with a valid DOM',
    inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
      tcb.createAsync(AppComponent).then((fixture) => {

        fixture.detectChanges();

        expect(fixture.nativeElement).toHaveText('nothing');
      });
    }));
});
