import { Routes } from '@angular/router';




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
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import { PrestataireComponent } from './prestataire/prestataire.component';
import { PrestataireOffresComponent } from './prestataire-offres/prestataire-offres.component';
import { PrestataireProfilComponent } from './prestataire-profil/prestataire-profil.component';
import { ClientCreationEvenementComponent } from './client-creation-evenement/client-creation-evenement.component';
import { ClientConsultationEvenementComponent } from './client-consultation-evenement/client-consultation-evenement.component';
import { LoginComponent } from './login/login.component';
import { PrestataireEditOffreComponent } from './prestataire-edit-offre/prestataire-edit-offre.component';
import { HomeComponent } from './home/home.component';

export const ComponentsRoutes: Routes = [
	{
		path: '',
		children: [
			
			{
				path: 'card',
				component: CardsComponent,
				data: {
					title: 'Cards',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Cards' }
					]
				}
			},
			{
				path: 'alert',
				component: NgbdAlertBasicComponent,
				data: {
					title: 'Alert',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Alert' }
					]
				}
			},
			{
				path: 'carousel',
				component: NgbdCarouselBasicComponent,
				data: {
					title: 'Carousel',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Carousel' }
					]
				}
			},
			{
				path: 'datepicker',
				component: NgbdDatepickerBasicComponent,
				data: {
					title: 'Datepicker',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Datepicker' }
					]
				}
			},
			{
				path: 'dropdown',
				component: NgbdDropdownBasicComponent,
				data: {
					title: 'Dropdown',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Dropdown' }
					]
				}
			},
			{
				path: 'modal',
				component: NgbdModalBasicComponent,
				data: {
					title: 'Modal',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Modal' }
					]
				}
			},
			{
				path: 'poptool',
				component: NgbdPopTooltipComponent,
				data: {
					title: 'Popover & Tooltip',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Popover & Tooltip' }
					]
				}
			},
			{
				path: 'rating',
				component: NgbdratingBasicComponent,
				data: {
					title: 'Rating',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Rating' }
					]
				}
			},
			
			
			{
				path: 'buttons',
				component: ButtonsComponent,
				data: {
					title: 'Button',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Button' }
					]
				}
			},
			{
				path: 'toast',
				component: ToastComponent,
				data: {
					title: '',
				}
			},
			{
				path: 'admin',
				component: AdminComponent,
				data: {
					title: '',
				}
			},
			{
				path: 'client',
				component: ClientComponent,
				data: {
					title: '',
				}
			},
			{
				path: 'client',
				component: ClientComponent,
				data: {
					title: '',
				}
			},
			{
				path: 'creationEvenement',
				component: ClientCreationEvenementComponent,
				data: {
					title: '',
				}
			},
			{
				path: 'consultationEvenement',
				component: ClientConsultationEvenementComponent,
				data: {
					title: '',
				}
			},
			{
				path: 'prestataire',
				component: PrestataireComponent,
				data: {
					title: '',
				}
			},
			{
				path: 'prestataire-offres',
				component: PrestataireOffresComponent,
				data: {
					title: '',
				}
			},
			{
				path: 'prestataire-profil',
				component: PrestataireProfilComponent,
				data: {
					title: '',
				}
			},
			{
				path: 'prestataire-edit-offre',
				component: PrestataireEditOffreComponent,
				data: {
					title: '',
				}
			},
			{
				path: 'login',
				component: LoginComponent,
				data: {
					title: '',
				}
			},
			{
				path: 'home',
				component: HomeComponent,
				data: {
					title: '',
				}
			}
		]
	}
];
