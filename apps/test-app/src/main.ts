import { Lib1Module } from '@nxrepo/lib1';
import { Lib2Module } from '@nxrepo/common/lib2';
import { Lib3Module } from '@nxrepo/common-lib3';
import { Lib4Module } from '@nxrepo/lib4';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
