import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { InterestComponent } from './interest/interest.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
const routes: Routes = [{path:"about",component:AboutComponent},
                        {path:"experience",component:ExperienceComponent},
                        {path:"education",component:EducationComponent},
                        {path:"interest",component:InterestComponent},
                        {path:"projects",component:ProjectsComponent},
                        {path:"skills",component:SkillsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
