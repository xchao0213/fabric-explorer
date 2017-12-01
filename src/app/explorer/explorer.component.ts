import { Component, OnInit } from '@angular/core';

import { ChainService } from '../services/chain.service'

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.css'],
  providers: [ChainService]
})
export class ExplorerComponent implements OnInit {

  constructor(private chainServer: ChainService) { }

  ngOnInit() {
    this.chainServer.getChannels();
  }

  onClick() {
    console.log('onClick')
  }

}
