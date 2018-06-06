import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';



@Injectable()
export class K8sService {
  readonly serverURL: string = 'http://100.68.125.194:4200/api';
  readonly token: string = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJrdWJlLXN5c3RlbSIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VjcmV0Lm5hbWUiOiJkZWZhdWx0LXRva2VuLWI2dGdjIiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZXJ2aWNlLWFjY291bnQubmFtZSI6ImRlZmF1bHQiLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC51aWQiOiJmODE3YmNlOC00NGI4LTExZTgtODgwYi0wMDUwNTY5ZGI4MzIiLCJzdWIiOiJzeXN0ZW06c2VydmljZWFjY291bnQ6a3ViZS1zeXN0ZW06ZGVmYXVsdCJ9.dJqR6RE7LhXBVAETC_zC3FlLUcphbcTGsrxV15rN0fdeJVvp3m4eLvJU2TDHxe9l2e7Bf9EIeEKUdE_ItbpGC418nVE3gW7BFlHlpf7IYKOKxghOzlZXblAwRBQct1xrUbwql8IyykkZC2ORPdrMsdZFwv0W8EF2HBGComNvzRWNfp0qJkt2Y3Yp3Nu5Zje7FSyOKoJXyZuGuzod9Yv6DEQp9qm04g_4lPcsLX2QKhDv5HCoAQSL0TeL_8LxlQhYh49JunHllD0PKs2X2DbczwNk3d_qFGRLPoyndv54xukPc-DOg3bwslTZjkYu6I1JDzaIHXUWnwO7LiZvA_yPEQ';
  constructor(private http: HttpClient) { }

  getPods() {
    // curl $APISERVER/api/v1/ --header "Authorization: Bearer $TOKEN"
    let header = { headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.token ) };
    return this.http.get( this.serverURL + '/v1/pods' , header );
  }

}
