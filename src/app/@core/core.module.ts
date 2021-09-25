import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NbAuthJWTToken, NbAuthModule, NbDummyAuthStrategy, NbPasswordAuthStrategy} from '@nebular/auth';
import { NbSecurityModule, NbRoleProvider } from '@nebular/security';
import { of as observableOf } from 'rxjs';

import { throwIfAlreadyLoaded } from './module-import-guard';
import {UserService} from './utils/user.service';
import {User, UserData} from './data/user';
import {MockDataModule} from './mock/mock-data.module';
import {SheetData} from './data/sheet';
import {SheetService} from './utils/sheet.service';
import {environment} from '../../environments/environment';
import {ReleaseData} from './data/release';
import {ReleaseMockService} from './mock/release.service';
import {AuthGuard} from './utils/auth-guard.service';
import {SheetMockService} from './mock/sheet.service';

const DATA_SERVICES = [
  { provide: UserData, useClass: UserService },
  { provide: SheetData, useClass: SheetService },
  { provide: ReleaseData, useClass: ReleaseMockService },
];

const GUARDS = [
  AuthGuard,
];

export class NbSimpleRoleProvider extends NbRoleProvider {
  getRole() {
    // here you could provide any role based on any auth flow
    return observableOf('guest');
  }
}

export const NB_CORE_PROVIDERS = [
  ...MockDataModule.forRoot().providers,
  ...DATA_SERVICES,
  ...GUARDS,
  ...NbAuthModule.forRoot({
    strategies: [
      NbPasswordAuthStrategy.setup({
        name: 'email',
        token: {
          class: NbAuthJWTToken,
        },
        baseEndpoint: environment.apiUrl,
        login: {
          endpoint: '/api/auth/login',
          method: 'post',
        },
        register: {
          endpoint: '/api/auth/register',
          method: 'post',
        },
        logout: {
          endpoint: '',
        },
      }),
    ],
    forms: {
      login: {
        redirectDelay: 500,
        strategy: 'email',
        rememberMe: true,
        showMessages: {
          success: true,
          error: true,
        },
        register: {
          redirectDelay: 500,
          strategy: 'email',
          showMessages: {
            success: true,
            error: true,
          },
          terms: true,
        },
        socialLinks: '',
      },
    },
  }).providers,

  NbSecurityModule.forRoot({
    accessControl: {
      guest: {
        view: '*',
      },
      user: {
        parent: 'guest',
        create: '*',
        edit: '*',
        remove: '*',
      },
    },
  }).providers,

  {
    provide: NbRoleProvider, useClass: NbSimpleRoleProvider,
  },
];

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    NbAuthModule,
  ],
  declarations: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        ...NB_CORE_PROVIDERS,
      ],
    };
  }
}
