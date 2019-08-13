import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private configUrl = 'http://127.0.0.1:8000/patients/';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.configUrl);
  }
  get(id) {
    return this.http.get(this.configUrl + id + '/');
  }
  create(resource) {
    return this.http.post(this.configUrl, resource);
  }
  update(id, resource) {
    return this.http.put(this.configUrl + id + '/', resource);
  }
  delete(id) {
    return this.http.delete(this.configUrl + id + '/');
  }
}
