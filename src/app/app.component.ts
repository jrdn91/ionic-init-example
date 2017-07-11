import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
  rootPage:any;
  jwtHelper: JwtHelper = new JwtHelper();
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.overlaysWebView(false);
      statusBar.hide();
      splashScreen.hide();
    });
  }
}

