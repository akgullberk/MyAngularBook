import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { ProductComponent } from './app/components/product/product.component';

bootstrapApplication(ProductComponent, appConfig)
  .catch((err) => console.error(err));
