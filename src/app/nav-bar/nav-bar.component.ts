import { Component } from '@angular/core';
import { Menu } from '../models/menu.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  baseUrl = '../../assets/Images/nav-bar/';

  navbarBkgImg = this.baseUrl + 'nav-bar-bkg.png';
  cgvLogoImg = this.baseUrl + 'cgv-logo.png';
  kenhCineImg = this.baseUrl + 'kenhcine.gif';
  muaVeNgayImg = this.baseUrl + 'mua-ve-ngay.png';
  navbarBorderImg = this.baseUrl + 'nav-bar-border.png';

  lstMenu: Menu[][] = [
    [
      { item: 'Phim', link: '#' },
      { item: 'Phim đang chiếu', link: '#' },
      { item: 'Phim sắp chiếu', link: '#' }
    ],
    [
      { item: 'Rạp CGV', link: '#' },
      { item: 'Tất cả loại rạp', link: '#' },
      { item: 'Rạp đặc biệt', link: '#' },
      { item: 'Rạp 3D', link: '#' },
    ],
    [
      { item: 'Thành viên', link: '#' },
      { item: 'Tài khoản CGV', link: '#' },
      { item: 'Quyền lợi', link: '#' },
    ],
    [
      { item: 'Cultureplex', link: '#' },
      { item: 'Quầy Online', link: '#' },
      { item: 'Thuê Rạp & Vé Nhóm', link: '#' },
      { item: 'E-CGV', link: '#' },
      { item: 'Thẻ Quà Tặng', link: '#' },
      { item: 'CGV Rules', link: '#' },
    ]
  ];
}
