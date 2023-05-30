import { ValidatorFn } from '@angular/forms';

export class DynamicFormField implements IDynamicFormField {
  controlName!: string;
  controlType!: string;
  inputType?: string;
  label?: string;
  validators?: ValidatorFn[];
  invalidMessage?: string;
}

interface IDynamicFormField {
  controlName: string;
  controlType: string;
  inputType?: string;
  label?: string;
  validators?: ValidatorFn[];
  invalidMessage?: string;
}
