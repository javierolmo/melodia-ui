import { Component, OnInit } from '@angular/core';
import {Release, ReleaseData} from '../../../@core/data/release';
import {NbToastrService} from '@nebular/theme';

@Component({
  selector: 'ngx-changelog',
  templateUrl: './changelog.component.html',
  styleUrls: ['./changelog.component.scss'],
})
export class ChangelogComponent implements OnInit {

  releases: Release[] = [];

  constructor(private releaseService: ReleaseData, private toastrService: NbToastrService) { }

  ngOnInit(): void {
    this.releaseService.getReleases().subscribe(
      value => this.releases = value,
      error => this.toastrService.danger('Could not load changelog'));
  }

}
