import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home.component';
import { AboutComponent } from '../about/about.component';
import { AboutExperienceComponent } from '../about-experience/about-experience.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { SkillsComponent } from '../skills/skills.component';

import { AboutComponent as HomeAbout } from './about/about.component';
import { PortfolioComponent as HomePortfolio} from './portfolio/portfolio.component';
import { SkillsComponent as HomeSkills } from './skills/skills.component';

import { ChartModule } from 'primeng/chart';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';

const homeRoute: Routes = [
  	{ path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'experiences', component: AboutExperienceComponent },
    { path: 'contact-me', component: ContactUsComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'skills', component: SkillsComponent },
];

@NgModule({
  imports: [
    ChartModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
  	RouterModule.forRoot(homeRoute)
  ],
  exports: [RouterModule],
  declarations: [
    AboutComponent,
    AboutExperienceComponent,
    ContactUsComponent,
    HomeComponent,
    HomeAbout,
    HomePortfolio,
    HomeSkills,
    PortfolioComponent,
    SkillsComponent,
    FooterComponent,
    ContactComponent
  ]
})

export class HomeRoutingModule { }