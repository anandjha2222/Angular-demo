import { Component } from '@angular/core';
import { freeApiService } from "./services/freeapi.service";
import { Comments } from "./classes/comments";
import { Posts } from "./classes/posts";
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';
  constructor(private _freeApiService: freeApiService){}

  // lstcmments:Comments[];

  // lstPosts: Posts[];

  objPost: Posts;
  //secretKey = "7061737323313233";
  secretKey = CryptoJS.enc.Utf8.parse('7061737323313233');
  iv = CryptoJS.enc.Utf8.parse('7061737323313233');

  ngOnInit(){

    // this._freeApiService.getComments().subscribe(
    //   data=>{
    //     this.lstcmments = data;
    //   }
    // )

    // this._freeApiService.getCommentsbyParam().subscribe(
    //   data=>{
    //     this.lstPosts = data;
    //   }
    // )


      var opost = new Posts();
      // opost.username = "Aman";
      console.log("Aman")
      //const key = CryptoJS.enc.Utf8.parse('7061737323313233');
      opost.username = CryptoJS.AES.encrypt("Aman", this.secretKey, {keySize: 16,iv: this.iv, mode: CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7}).toString();

        console.log(opost.username);
//console.log(CryptoJS.AES.decrypt(opost.username, this.secretKey.trim()).toString(CryptoJS.enc.Utf8));
      opost.password = "2222";

      this._freeApiService.post(opost).subscribe(
        data=>{
          this.objPost = data;
        }
      )
  }
}
