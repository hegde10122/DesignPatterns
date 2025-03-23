import { FormComponent } from "./FormComponent";

export class DropdownField implements FormComponent {
  constructor(private label: string, private options: string[], private selected?: string) {}

  render(): void {
    console.log(`DropdownField: ${this.label} = ${this.selected ?? "Not selected"}`);
  }
}
