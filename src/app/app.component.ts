import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'stepper';
  form: FormGroup;
  steps: FormArray;

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      steps: this.fb.array([])
    });

    this.steps = this.form.get('steps') as FormArray;
    this.addStep();
  }

  addStep() {
    this.steps.push(
      this.fb.group({})
    );
  }

  removeStep(idx: number) {
    this.steps.removeAt(idx);
  }
}
