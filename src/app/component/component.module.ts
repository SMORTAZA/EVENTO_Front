import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ComponentsRoutes } from './component.routing';



import { NgbdAlertBasicComponent } from './alert/alert.component';
import { NgbdCarouselBasicComponent } from './carousel/carousel.component';
import { NgbdDatepickerBasicComponent } from './datepicker/datepicker.component';
import { NgbdDropdownBasicComponent } from './dropdown-collapse/dropdown-collapse.component';
import { NgbdModalBasicComponent } from './modal/modal.component';
import { NgbdPopTooltipComponent } from './popover-tooltip/popover-tooltip.component';
import { NgbdratingBasicComponent } from './rating/rating.component';


import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './card/card.component';
import { ToastComponent } from './toast/toast.component';
import { ToastsContainer } from './toast/toast-container';
import { AdminComponent } from './admin/admin.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { ClientComponent } from './client/client.component';
import { PrestataireComponent } from './prestataire/prestataire.component';
import { PrestataireProfilComponent } from './prestataire-profil/prestataire-profil.component';
import { PrestataireOffresComponent } from './prestataire-offres/prestataire-offres.component';
import { ClientConsultationEvenementComponent } from './client-consultation-evenement/client-consultation-evenement.component';
import { ClientCreationEvenementComponent } from './client-creation-evenement/client-creation-evenement.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MatIconModule
  ],
  declarations: [
    
    
    
    NgbdAlertBasicComponent,
    NgbdCarouselBasicComponent,
    NgbdDatepickerBasicComponent,
    NgbdDropdownBasicComponent,
    NgbdModalBasicComponent,
    NgbdPopTooltipComponent,
    NgbdratingBasicComponent,
   
    
    ButtonsComponent,
    CardsComponent,
    ToastComponent,
    ToastsContainer,
    AdminComponent,
    UtilisateurComponent,
    ClientComponent,
    ClientConsultationEvenementComponent,
    ClientCreationEvenementComponent,
    PrestataireComponent,
    PrestataireProfilComponent,
    PrestataireOffresComponent
  ]
})
export class ComponentsModule {}
