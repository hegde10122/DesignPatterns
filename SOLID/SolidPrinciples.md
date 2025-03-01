The SOLID principles are a set of guidelines for designing software that is easy to manage and extend.
They are:

1. Single Responsibility Principle (SRP):

A class should have only one reason to change, meaning it should have only one responsibility or job.

2. Open/Closed Principle (OCP):

Software entities (classes, functions, modules, or methods) should be open for extension but closed for modification.This allows you to add new functionality without changing existing code.

3. Liskov Substitution Principle (LSP):

Subtypes must be substitutable for their base types without altering the correctness of the program. Essentially, derived classes should extend the behaviour of a base class without changing its expected
behaviour.

4. Interface Segregation Principle (ISP):

A class should not be forced to implement the interfaces it doesn't use. This means creating smaller,
more specific interfaces, rather than a large,genral one.

5. Dependency Inversion Principle (DIP):

High-level modules should not depend on low-level modules; both should depend on abstractions (e.g., interfaces). Additionally, abstractions should not depend on details, but details should depend on abstractions.

These principles help in designing systems that are more flexible, easier to maintain, and scalable.

Let us understand each of the above principles in depth.

Refer to these files in the above order from one to five

1. SRP: --- [SRP](https://github.com/hegde10122/DesignPatterns/blob/master/SOLID/ledger.ts)

2. OCP: --- [OCP](https://github.com/hegde10122/DesignPatterns/blob/master/SOLID/mobilephone.ts)

The explanations for each concept are included as comments in the respective files, itself. Please go through
them to understand each concept.
