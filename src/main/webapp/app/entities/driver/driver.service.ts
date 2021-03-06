import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IDriver } from 'app/shared/model/driver.model';

type EntityResponseType = HttpResponse<IDriver>;
type EntityArrayResponseType = HttpResponse<IDriver[]>;

@Injectable({ providedIn: 'root' })
export class DriverService {
    private resourceUrl = SERVER_API_URL + 'api/drivers';
    private resourceurl= SERVER_API_URL + 'api';
    constructor(private http: HttpClient) {}

    create(driver: IDriver): Observable<EntityResponseType> {
        return this.http.post<IDriver>(this.resourceUrl, driver, { observe: 'response' });
    }

    update(driver: IDriver): Observable<EntityResponseType> {
        return this.http.put<IDriver>(this.resourceUrl, driver, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<IDriver>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<IDriver[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
    vagues(dname:string){
        return this.http.get('api/findByNameLike/'+dname);
    }
}
