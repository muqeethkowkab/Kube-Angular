import { Component, OnInit } from '@angular/core';
import {K8sService} from '../services/k8s.service';
import {Pod, Container } from '../models/k8s.model';
import * as _ from 'lodash';

@Component({
  selector: 'app-pods',
  templateUrl: './pods.component.html',
  styleUrls: ['./pods.component.css']
})
export class PodsComponent implements OnInit {

  pods: Pod[] = [];

  constructor(public k8sService: K8sService) { }

  ngOnInit() {
    this.pods = [];
    this.k8sService.getPods().subscribe(
      (data: any) => {
          ///////////////// Below are processing of the HTTP response data //////////////
           console.log(data);
          _.forEach( data.items, item => {
             //  console.log(item.metadata);
              let cArray: Container[] = [];
              _.forEach( item.spec.containers ,
                         c => {  cArray.push( new Container( { name: c.name,  image: c.image } ))  });
              // console.log( cArray);
              let tmpPod = {
                  name: item.metadata.name,
                  createdAt: new Date(item.metadata.creationTimestamp),
                  phase: item.status.phase,
                  containers: cArray,
                  nodeName: item.spec.nodeName
              };
              this.pods.push( tmpPod );

          } );
      }
 );

  }

}
