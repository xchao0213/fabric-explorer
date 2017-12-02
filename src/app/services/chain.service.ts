import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'

import { Config } from '../config'
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ChainService {
  private apiUrl: string;
  constructor(private http: HttpClient, private config: Config) {
    this.apiUrl = this.config.apiUrl;
  }

  getChannels(): Observable<any> {
    return this.http.get(this.apiUrl + '/fabric/1_0/channels')
  }

  getBlockById(channelName: string, id: string): Observable<any> {
    return this.http.get(this.apiUrl + '/fabric/1_0/channels/' + channelName + '/blocks', { params: new HttpParams().set('blockId', id) })
  }

  getBlockByHash(channelName: string, hash: string): Observable<any> {
    return this.http.get(this.apiUrl + '/fabric/1_0/channels/' + channelName + '/blocks', { params: new HttpParams().set('blockHash', btoa(this.htoa(hash))) })
  }

  getChainCodes(channelName: string): Observable<any> {
    return this.http.get(this.apiUrl + '/fabric/1_0/channels/' + channelName + '/chaincodes');
  }

  htoa(source)
  {
   var hex  = source.toString();
   var target = '';
   for (var n = 0; n < hex.length; n += 2) {
    target += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
   }
   return target;
  }

}
