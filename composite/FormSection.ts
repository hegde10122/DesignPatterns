// FormSection.ts
import { FormComponent } from "./FormComponent";

export class FormSection implements FormComponent {
  private components: FormComponent[] = [];

  constructor(private title: string) {}

  addComponent(component: FormComponent): void {
    this.components.push(component);
  }

  render(): void {
    console.log(`== Section: ${this.title} ==`);
    this.components.forEach((component) => component.render());
  }
}
