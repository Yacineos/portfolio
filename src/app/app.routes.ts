import { Routes } from '@angular/router';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { ProjectsViewComponent } from './views/projects-view/projects-view.component';
import { BlogComponent } from './views/blog/blog.component';
import { ContactComponent } from './views/contact/contact.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./views/home-view/home-view.component').then(m => m.HomeViewComponent)
    },
    {
        path: 'projects',
        loadComponent: () => import('./views/projects-view/projects-view.component').then(m => m.ProjectsViewComponent)

    },
    {
        path: 'contact',
        loadComponent: () => import('./views/contact/contact.component').then(m => m.ContactComponent)
    },
    {
        path: 'blog',
        loadComponent: () => import('./views/blog/blog.component').then(m => m.BlogComponent)
    },
    {
        path: 'auth',
        loadComponent: () => import('./views/auth/auth.component').then(m => m.AuthComponent)
    },
    {
        path:'**',
        component: PageNotFoundComponent
    }
];
