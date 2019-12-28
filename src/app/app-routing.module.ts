import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CopyrightComponent } from './copyright/copyright.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';



const routes: Routes = [
  {path: 'homepage', pathMatch: 'full', component: HomeComponent},
  {path: 'news', component: NewsComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'copyright', component: CopyrightComponent},
  {path: 'privacy', component: PrivacyComponent},
  {path: 'privacy', component: TermsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
