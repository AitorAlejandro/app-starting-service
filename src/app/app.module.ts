import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DummyService } from './services/dummy.service';

const initAppFn = (dummyService: DummyService) => {
  return () => dummyService.sayHi();
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    DummyService,
    {
      provide: APP_INITIALIZER,
      useFactory: initAppFn,
      multi: true,
      deps: [DummyService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
