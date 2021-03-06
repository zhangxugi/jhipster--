import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsetrsSharedModule } from 'app/shared';
import {
    DriverComponent,
    DriverDetailComponent,
    DriverUpdateComponent,
    DriverDeletePopupComponent,
    DriverDeleteDialogComponent,
    driverRoute,
    driverPopupRoute
} from './';
import {ScoresLevelPipe} from "app/entities/Pipe/scores-level.pipe";

const ENTITY_STATES = [...driverRoute, ...driverPopupRoute];

@NgModule({
    imports: [JhipsetrsSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [DriverComponent, DriverDetailComponent, DriverUpdateComponent, DriverDeleteDialogComponent, DriverDeletePopupComponent,ScoresLevelPipe],
    entryComponents: [DriverComponent, DriverUpdateComponent, DriverDeleteDialogComponent, DriverDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsetrsDriverModule {}
