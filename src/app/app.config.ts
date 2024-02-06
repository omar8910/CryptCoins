import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"cryptcoins-f99ce","appId":"1:312569139373:web:496dfe9f4bcb2791257624","storageBucket":"cryptcoins-f99ce.appspot.com","apiKey":"AIzaSyD_odvcO84jk8qGz6nvUJtwuKX7liyUeRE","authDomain":"cryptcoins-f99ce.firebaseapp.com","messagingSenderId":"312569139373","measurementId":"G-03LSSHV92S"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
