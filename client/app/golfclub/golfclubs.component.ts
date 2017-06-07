import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { GolfclubService } from '../services/golfclub.service';
import { ToastComponent } from '../shared/toast/toast.component';

@Component({
  selector: 'app-golfclubs',
  templateUrl: './golfclubs.component.html',
  styleUrls: ['./golfclubs.component.scss']
})
export class GolfclubsComponent implements OnInit {

  golfclub = {};
  golfclubs = [];
  isLoading = true;
  isEditing = false;

  addGolfclubForm: FormGroup;
  name = new FormControl('', Validators.required);
  address = new FormControl('', Validators.required);
  desc = new FormControl('', Validators.required);

  constructor(private golfclubService: GolfclubService,
              private formBuilder: FormBuilder,
              private http: Http,
              public toast: ToastComponent) { }

  ngOnInit() {
    this.getGolfclubs();
    this.addGolfclubForm = this.formBuilder.group({
      name: this.name,
      address: this.address,
      desc: this.desc
    });
  }

  getGolfclubs() {
    this.golfclubService.getGolfclubs().subscribe(
      data => this.golfclubs = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  addGolfclub() {
    this.golfclubService.addGolfclub(this.addGolfclubForm.value).subscribe(
      res => {
        const newGolfclub = res.json();
        this.golfclubs.push(newGolfclub);
        this.addGolfclubForm.reset();
        this.toast.setMessage('항목이 추가 되었습니다.', 'success');
      },
      error => console.log(error)
    );
  }

  enableEditing(golfclub) {
    this.isEditing = true;
    this.golfclub = golfclub;
  }

  cancelEditing() {
    this.isEditing = false;
    this.golfclub = {};
    this.toast.setMessage('편집이 취소되었습니다.', 'warning');
    // reload the glofclubs to reset the editing
    this.getGolfclubs();
  }

  editGolfclub(golfclub) {
    this.golfclubService.editGolfclub(golfclub).subscribe(
      res => {
        this.isEditing = false;
        this.golfclub = golfclub;
        this.toast.setMessage('수정 되었습니다.', 'success');
      },
      error => console.log(error)
    );
  }

  deleteGolfclub(golfclub) {
    if (window.confirm('삭제 하시겠습니까?')) {
      this.golfclubService.deleteGolfclub(golfclub).subscribe(
        res => {
          const pos = this.golfclubs.map(elem => { return elem._id; }).indexOf(golfclub._id);
          this.golfclubs.splice(pos, 1);
          this.toast.setMessage('삭제 되었습니다.', 'success');
        },
        error => console.log(error)
      );
    }
  }

}
