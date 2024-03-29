import { Injectable, Get, Param, HttpService } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { gzip, ungzip } from 'node-gzip';


@Injectable()
export class TapGameService {
  apiUrl = {
    authSignin: "http://tapdefendersgameserver-game01.us-west-2.elasticbeanstalk.com/Player/AuthSignin",
    playGame: "http://tapdefendersgameserver-game01.us-west-2.elasticbeanstalk.com/Player/PlayGame",
    update: "http://tapdefendersgameserver-game01.us-west-2.elasticbeanstalk.com/Player/Update",
    prestige: "http://tapdefendersgameserver-game01.us-west-2.elasticbeanstalk.com/Player/prestige"
  }

  headersRequest = {
    'PlayerCode': 'MM9E6K', // afaik this one is not needed
    'BundleVersion': '362',
    'Device': 'iOS',
    'Version': 'TAPDEFENDERS158',
    'X-Unity-Version': '2018.4.0f1',
    'Cookie': 'AWSELB=D9C50F3D04FD94B469877A5C2D5283BF9F24CD75A414ADBB214FDB9E801E2CEAE4D7F4E2F3A62487E85C66ED57362F3BA4C87787A380F51CAAC18F07A0ACBDDAA148E41344',
    'User-Agent': 'tapdefenders/3480 CFNetwork/1121.2.2 Darwin/19.3.0',
    'Accept-Language': 'zh-tw',
    'Content-Type': 'application/slentity',
    'Accept-Encoding': 'gzip, deflate',
    'Token': ''
  };

  constructor(private httpService: HttpService) { }

  async AuthSignin() {
    const user = { "AuthID": "G:10603358125", "AuthType": "SocialAPI", "DeviceType": "iOS" };

    //"H4sIAAAAAAAAE6tWciwtyfB0UbJScrcyNDAzMDY2tTA0MlXSAUuEVBakAqWC85MzE3McAzyBwi6pZZnJqVCJTP9gpVoAGQ6hhEQAAAA="
    const data = await this.gzip(user);
    const res = await this.httpService.post(this.apiUrl.authSignin, data, { headers: this.headersRequest }).toPromise();

    return res.data;
  }


  async playGame(result) {
    this.headersRequest.Token = result.token;
    const zz = 'H4sIAAAAAAAAEz3NsQ6CMBSF4Xe5MyVcvJTKZiRREzdRE7dbWpGBkrRlMMZ3tyyO58tJ/g+0HPlmfRhnBw1iBmd2w8KDhQYeL3FkFyGD/wMwr3KVZD8vLvp3ku6e5oEne4ns4wp+sYna66lNi+uyMFIasXnqUhDRVqjKoNCy1toikuwJ1myIu763IXTjlOJEBam8QomkFJXy+wNzNcViqwAAAA==';
    const res = await this.httpService.post(this.apiUrl.playGame, zz, { headers: this.headersRequest }).toPromise();
    
    return res.data;
  }

  async update(result) {
    this.headersRequest.Token = result.token;

    const data = await this.gzip(result.data);
    const res = await this.httpService.post(this.apiUrl.update, data, { headers: this.headersRequest }).toPromise();
    
    return res.data;
  }

  async prestige(result) {
    this.headersRequest.Token = result.token;

    const data = await this.gzip(result.data);
    const res = await this.httpService.post(this.apiUrl.prestige, data, { headers: this.headersRequest }).toPromise();
    
    return res.data;
  }


  



  gzip(data: any): Promise<string> {
    const zlib = require("zlib");

    return new Promise((resolve) => {
      zlib.gzip(JSON.stringify(data), (err, buffer) => {
        if (!err) {
          console.log(buffer.toString('base64'));
          resolve(buffer.toString('base64'))
        }
        else {
          console.log(err);
          resolve('')
        }
      });

    })

  }

}