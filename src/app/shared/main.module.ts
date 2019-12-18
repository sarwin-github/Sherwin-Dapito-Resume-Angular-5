import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { AboutExperienceComponent } from '../about-experience/about-experience.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { SkillsComponent } from '../skills/skills.component';

import { AboutComponent as HomeAbout } from '../home/about/about.component';
import { PortfolioComponent as HomePortfolio} from '../home/portfolio/portfolio.component';
import { SkillsComponent as HomeSkills } from '../home/skills/skills.component';

import { ChartModule } from 'primeng/chart';
import { FooterComponent } from '../home/footer/footer.component';
import { ContactComponent } from '../home/contact/contact.component';
import { ParticlesModule } from 'angular-particle';
import { PhotographyModalComponent } from '../portfolio/modal/photography-modal/photography-modal.component';
import { TravelModalComponent } from '../portfolio/modal/travel-modal/travel-modal.component';
import { MinervaAppModalComponent } from '../portfolio/modal/minerva-app-modal/minerva-app-modal.component';
import { BrandToolModalComponent } from '../portfolio/modal/brand-tool-modal/brand-tool-modal.component';
import { FitnessModalComponent } from '../portfolio/modal/fitness-modal/fitness-modal.component';
import { DentistryModalComponent } from '../portfolio/modal/dentistry-modal/dentistry-modal.component';
import { RestaurantModalComponent } from '../portfolio/modal/restaurant-modal/restaurant-modal.component';
import { WeatzeneModalComponent } from '../portfolio/modal/weatzene-modal/weatzene-modal.component';


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
    FormsModule, 
    ReactiveFormsModule,
    CommonModule,
    ParticlesModule,
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
    TravelModalComponent,
    MinervaAppModalComponent,
    BrandToolModalComponent,
    FitnessModalComponent,
    DentistryModalComponent,
    PhotographyModalComponent,
    RestaurantModalComponent,
    WeatzeneModalComponent,
    SkillsComponent,
    FooterComponent,
    ContactComponent
  ]
})

export class MainModule { }