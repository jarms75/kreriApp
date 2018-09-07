// Global state (used for theming)
import { ServerProvider } from '../providers/server/server'; 


// Provider
import { SlidingDrawer } from '../components/sliding-drawer/sliding-drawer';
import { Autosize } from '../components/autosize/autosize';

// Modules
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 

export const MODULES = [
  HttpClientModule,
  HttpModule,
  
];

export const PROVIDERS = [
  ServerProvider,
   
];

export const DIRECTIVES = [
  SlidingDrawer,
  Autosize,
];
