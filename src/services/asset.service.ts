
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AssetService {

    private publicUrl = '/'; // Path to your images folder

    constructor(private http: HttpClient) {}

    getImageFileNames(): Observable<any> {
        return this.http.get(`${this.publicUrl}`);
    }
}
