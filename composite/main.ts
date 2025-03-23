import { TextField } from "./TextField";
import { CheckboxField } from "./CheckboxField";
import { DropdownField } from "./DropdownField";
import { FormSection } from "./FormSection";

function main() {

    // Create form fields
    const nameField = new TextField("Full Name");
    const emailField = new TextField("Email");
    const acceptTerms = new CheckboxField("Accept Terms", false);
    const departmentDropdown = new DropdownField("Department", ["CS", "Math", "Physics"], "CS");

    // Create sections
    const personalSection = new FormSection("Personal Details");
    personalSection.addComponent(nameField);
    personalSection.addComponent(emailField);

    const preferenceSection = new FormSection("Preferences");
    preferenceSection.addComponent(departmentDropdown);
    preferenceSection.addComponent(acceptTerms);

    // Main Form
    const mainForm = new FormSection("University Admission Form");
    mainForm.addComponent(personalSection);
    mainForm.addComponent(preferenceSection);

    // Render the form
    mainForm.render();

}

main();

