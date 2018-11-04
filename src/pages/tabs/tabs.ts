import { Component } from '@angular/core';

import { ProfilePage } from '../Profile/Profile';
import { FriendsPage } from '../Friends/Friends';
import { OpenPage } from '../Open/Open';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = OpenPage;
  tab2Root = ProfilePage;
  tab3Root = FriendsPage;

  constructor() {

  }
}
