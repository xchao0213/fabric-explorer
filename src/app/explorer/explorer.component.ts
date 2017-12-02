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
    this.chainServer.getChannels().subscribe((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    });

    // this.chainServer.getBlockById('mychannel','1').subscribe((res) => {
    //   console.log(res);
    // }, (err) => {
    //   console.log(err);
    // });

    // this.chainServer.getBlockByHash('mychannel','64d3a2d99ca6cd4058bc57eae68608e1a99c3ebe9f29fe335854d7a6cf586ec3').subscribe((res) => {
    //   console.log(res);
    // }, (err) => {
    //   console.log(err);
    // });

    this.chainServer.getChainCodes('mychannel').subscribe((res) => {
      console.log(res)
    },(err) => {
      console.log(err)
    })
  }

  onClick() {
    console.log('onClick')
  }

 

}
