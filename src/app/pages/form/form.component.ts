import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{

  form!: FormGroup;
  
  constructor(public dialogRef: MatDialogRef<FormComponent>,
    @Inject(Mat))

  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.createForm();
  }
  private createForm(): void{
    this.form = this.formBuilder.group({
      name: [null],
      descriere: [null],
      cantitate: [null]
    });
  }
  
}

