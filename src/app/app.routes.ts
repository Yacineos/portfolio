import { Routes } from '@angular/router';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { ProjectsViewComponent } from './views/projects-view/projects-view.component';
import { BlogComponent } from './views/blog/blog.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeViewComponent
    },
    {
        path: 'projects',
        component: ProjectsViewComponent
    },
    {
        path: 'blog',
        component: BlogComponent
    }
];
