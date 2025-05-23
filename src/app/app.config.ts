import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideTranslations } from './core/config/traducao.config';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { authInterceptor } from './core/interceptors/auth.interceptor';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideTranslations(),
    provideAnimations(), 
    provideToastr({      
      timeOut: 5000,
      progressBar: true,
      closeButton: true,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    }),
  ]
};