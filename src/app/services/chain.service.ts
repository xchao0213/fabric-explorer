import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Config } from '../config'


@Injectable()
export class ChainService {
  private url: string;
  constructor(private http: HttpClient, private config: Config) {
    this.url = this.config.apiUrl + '/fabric/1_0/channels';
  }

  getChannels(): void {
    this.http.get(this.url).subscribe((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    })
  }

}
