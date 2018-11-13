import './vendor.ts';

import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { Ng2Webstorage } from 'ngx-webstorage';
import { JhiEventManager } from 'ng-jhipster';

import { AuthExpiredInterceptor } from './blocks/interceptor/auth-expired.interceptor';
import { ErrorHandlerInterceptor } from './blocks/interceptor/errorhandler.interceptor';
import { NotificationInterceptor } from './blocks/interceptor/notification.interceptor';
import { JhipsetrsSharedModule } from 'app/shared';
import { JhipsetrsCoreModule } from 'app/core';
import { JhipsetrsAppRoutingModule } from './app-routing.module';
import { JhipsetrsHomeModule } from './home/home.module';
import { JhipsetrsAccountModule } from './account/account.module';
import { JhipsetrsEntityModule } from './entities/entity.module';
import { StateStorageService } from 'app/core/auth/state-storage.service';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import * as moment from 'moment';
import { JhiMainComponent, NavbarComponent, FooterComponent, PageRibbonComponent, ActiveMenuDirective, ErrorComponent } from './layouts';
import {LayoutModule} from "@angular/cdk/layout";
import {JhipstersLoginModule} from "app/account/login/login.module";
import {ScoresLevelPipe} from "app/entities/Pipe/scores-level.pipe";
@NgModule({

    imports: [
        BrowserModule,
        JhipsetrsAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-' }),
        JhipsetrsSharedModule,
        JhipsetrsCoreModule,
        JhipsetrsHomeModule,
        JhipsetrsAccountModule,
        JhipsetrsEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
        JhipstersLoginModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,


    ],
    declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthExpiredInterceptor,
            multi: true,
            deps: [StateStorageService, Injector]
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorHandlerInterceptor,
            multi: true,
            deps: [JhiEventManager]
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: NotificationInterceptor,
            multi: true,
            deps: [Injector]
        }
    ],
    bootstrap: [JhiMainComponent]

})
export class JhipsetrsAppModule {
    constructor(private dpConfig: NgbDatepickerConfig) {
        this.dpConfig.minDate = { year: moment().year() - 100, month: 1, day: 1 };
    }
}
