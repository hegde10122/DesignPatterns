import { FormComponent } from "./FormComponent";

export class CheckboxField implements FormComponent {
  constructor(private label: string, private checked: boolean = false) {}

  render(): void {
    console.log(`CheckboxField: ${this.label} = ${this.checked}`);
  }
}