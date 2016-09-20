# Cucumber.js

## Why Cucumber?

### Automated Acceptance Tests

Instead of a business stakeholder passing requirements to the development team without much opportunity for feedback,
the developer and stakeholder collaborate to write automated tests that express the outcome that the stakeholder wants.
We call them acceptance tests because they express the outcome that the software needs to do in order for the
stakeholder to find *acceptable*.
The test fails at the time of writing, because no code has been written yet, but it captures what the stakeholder cares
about and gives everyone a clear signal as to what it will take to be *done*.

### Behaviour-Driven Development

BDD builds upon TDD by formalizing the good habits of the best TDD practitioners.
As BDD practitioners, we take care to write the acceptance tests as *examples* that anyone on the team can read.
As we do so, we make a deliberate effort to develop a shared, *ubiquitous language* for talking about the system.

With a conscious effort by the team, a ubiquitous language can emerge that is used and understood by everyone involved
in the project.

Cucumber helps facilitate the discovery and use of a ubiquitous language within the team by giving the two sides of the
linguistic divide a place where they can meet.
Cucumber tests interact directly with the developer's code, but they're written in a medium and language that business
stakeholders can understand.

What makes Cucumber stand out from the crowd of other tools is that is has been designed specifically to ensure the
acceptance tests can easily be read and written by anyone on the team.
This reveals the true value of acceptance tests as a communication and collaboration tool.
The easy readability of Cucumber acceptance tests draws business stakeholders into the process, helping you explore and
understand their requirements.

### How Cucumber Works

When you run Cucumber, it reads in your specifications from plain language text files called *features*, examines them
for *scenarios* to test, and runs the scenarios against your system.
Each scenario is a list of *steps* for Cucumber to work through.
So that Cucumber can understand these feature files, they must follow some basic syntax rules.
The name for this set of rules is *Gherkin*.

Along with the features, you give Cucumber a set of *step definitions*, which map the business readable language of each
step into code to carry out whatever action is being described by the step.
In a mature test suite, the step definition itself will probably just be one or two lines of code that delegate to a
library of *support code*, specific to the domain of your application, that knows how to carry out common tasks on the
system.
Sometimes that may involve using an *automation library*, like the browser automation library Selenium, to interact with
the system itself.

### Creating Step Definitions

## Cucumber.js

Cucumber is a tool for running automated tests written in plain language.

Cucumber.js is the JavaScript implementation of Cucumber and runs on both Node.js and modern Web browsers.

### Install

```
sudo npm install -g cucumber
```

### Usage

### Features

Features are written with Gherkin syntax

Gherkin is the language Cucumber understands.
It is a Business Readable, Domain Specific Language that lets you describe software's behaviour without detailing how
that behaviour is implemented.

What makes Cucumber stand out from the crowd of other testing tools is that it has been designed specifically to ensure
the acceptance tests can easily be read and written by anyone on the team.
This reveals the true value of acceptance tests: as a communication and collaboration tool.

Cucumber is a command-line tool.
When you run it, it reads in your specifications from plain language text files called *features*, examines them for
*scenarios* to test, and runs the scenarios against your system.
Each scenario is a list of *steps* for Cucumber to work through.
So that Cucumber can understand these feature files, they must follow some basic syntax rules.
The name for this set of rules is *Gherkin*.

Along with the features, you give Cucumber a set of *step definitions*, which map the business-readable language of each
step into Ruby code to carry out whatever action is being described by the step.

Each Cucumber test is called a *scenario*, and each scenario contains *steps* that tell Cucumber what to do.
