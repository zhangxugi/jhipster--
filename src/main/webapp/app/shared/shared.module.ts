import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import { JhipsetrsSharedLibsModule, JhipsetrsSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';
/*
import {NgZorroAntdModule, NZ_I18N, zh_CN} from "ng-zorro-antd";
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);
*/

@NgModule({
    imports: [JhipsetrsSharedLibsModule, JhipsetrsSharedCommonModule],
    declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    entryComponents: [JhiLoginModalComponent],
    exports: [JhipsetrsSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsetrsSharedModule {}
