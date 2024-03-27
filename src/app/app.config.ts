import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { SupabaseBlogRepositoryImpl } from './core/adapters/supabase-blog-repo-impl';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),SupabaseBlogRepositoryImpl]
};
