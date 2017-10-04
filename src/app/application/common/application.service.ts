import { Injectable } from '@angular/core';
import { Application } from './application';
import { Applicant } from './applicant';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import { AuthHttp } from 'angular2-jwt';
import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';

const applicationUrl = `${environment.backend_url}/api/projects/applications`;
const applicantUrl = `${environment.backend_url}/api/projects`

@Injectable()
export class ApplicationService {

    constructor(private authHttp: AuthHttp,
                private http: Http
                ){
    
    }

    getApplication(id: number): void {
        //not implemented in back end
    }
    
    getApplicationsByProject(projectId: number): void {
        //not implemented in back end
    }
    
    getApplicationsByUser(userId: number, status: string): void {
    
       /*if(status) {
            return this.http
                .get(`${applicationUrl}?userId=${userId}&status=${status}`)
                .map(res => res.json())
                .catch(this.handleError);
       }
       else {
            return this.http
                .get(`${applicationUrl}?userId=${userId}`)
                .map(res => res.json())
                .catch(this.handleError);
       }*/
        
    } 
    
    public getApplicants(projectId: number): Observable<Applicant[]> {
        const url = `${applicantUrl}/${projectId}/applicants`;
        return this.http
                   .get(url)                  
                   .map(res => res.json())
                   .catch(this.handleError);
                   
         //.map( res => { return res.json() as Applicant[]; })
      }
    
    createApplication(application: Application): Observable<Application> {        
        
        return this.authHttp
            .post(applicationUrl, application)
            .map(res => res.json())
            .catch(this.handleError);
        
    }
    
    updateApplication(application: Application): Observable<Application> {
    
        return this.authHttp
            .put(applicationUrl, application)
            .map(res => res.json())
            .catch(this.handleError);
    
    }
    
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
    
    

}