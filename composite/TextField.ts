import { FormComponent } from "./FormComponent";

export class TextField implements FormComponent {
  constructor(private label: string, private value: string = "") {}

  render(): void {
    console.log(`TextField: ${this.label} = ${this.value}`);
  }
}