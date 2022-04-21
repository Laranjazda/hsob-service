import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hsob-service';
  photosData = [
    {
      url:"https://img.r7.com/images/terra-lua-nasa-apollo-espaco-15102019155839083?dimensions=771x420&no_crop=true",
      description:"space"
    },
    {
      url:"https://s2.glbimg.com/PAVkUCT6bZjtZjeRy3pcJJAmOkY=/780x440/e.glbimg.com/og/ed/f/original/2019/12/01/xg_2.jpg",
      description:"galinha"
    }
  ]
}
