import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// todos os imports que não tem ./ na pont inicial ou que começam 
//com @ são advindos do node_modules 

//Módulo principal - raíz
import { AppModule } from './app/app.module';
//Variáveis de ambiente 
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
