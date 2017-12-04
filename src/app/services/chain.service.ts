import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'

import { Config } from '../config'
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ChainService {
  private apiUrl: string;
  constructor(private http: HttpClient, private config: Config) {
    this.apiUrl = this.config.apiUrl + '/fabric/1_0';
  }

  //Install chaincode onto the named peers 

  //Query chaincode installed on a peer by ID
  getChainCodesOnPeer(id: string, peers: string): Observable<any> {
    return this.http.get(this.apiUrl + '/chaincodes/' + id, { params: new HttpParams().set('peers', peers) })
  }

  //Get the names of known channels from the primary peer
  getChannels(): Observable<any> {
    return this.http.get(this.apiUrl + '/channels')
  }

  //Get information about the named channel
  getChannel(channelName: string): Observable<any> {
    return this.http.get(this.apiUrl + '/channels/' + channelName);
  }

  //Request an update the named channel

  //Request creation of the named channel

  //Query a block on a channel by ID
  getBlockById(channelName: string, id: string): Observable<any> {
    return this.http.get(this.apiUrl + '/channels/' + channelName + '/blocks', { params: new HttpParams().set('blockId', id) })
  }

  //Query a block on a channel by Hash
  getBlockByHash(channelName: string, hash: string): Observable<any> {
    return this.http.get(this.apiUrl + '/channels/' + channelName + '/blocks', { params: new HttpParams().set('blockHash', btoa(this.htoa(hash))) })
  }

  //Query all chaincode instantiated on the channel
  getChainCodes(channelName: string): Observable<any> {
    return this.http.get(this.apiUrl + '/channels/' + channelName + '/chaincodes');
  }

  //Instantiate updated chaincode in the channel for the named peers

  //Instantiate new chaincode in the channel for the named peers

  //Query chaincode instantiated on a channel by ID
  getChainCode(channelName: string, id: string): Observable<any> {
    return this.http.get(this.apiUrl + '/channels/' + channelName + '/chaincodes/' + id);
  }

  //Query the channel's ledger

  //Join a Peer to the channel

  //Endorse and commit a transaction using configured peers

  //Query a transaction on a channel by ID
  getTransaction(channelName: string, transactionID: string): Observable<any> {
    return this.http.get(this.apiUrl + '/channels/' + channelName + '/transactions/' + transactionID);
  }
  

  htoa(source) {
    var hex = source.toString();
    var target = '';
    for (var n = 0; n < hex.length; n += 2) {
      target += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
    }
    return target;
  }

}
