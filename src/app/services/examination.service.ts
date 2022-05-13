import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExaminationService {
  private configUrl = environment.API_URL + '/examinations/';

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
