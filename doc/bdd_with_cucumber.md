# Behavior-Driven Development with Cucumber

## Chapter 1 Focusing on Value

This book is about the practices and skills that get a team collaborating every day to build the right software in small slices, a set of practices known as behavior-driven development, or BDD.

Once teams learn how to explore changes in system behavior with examples in a series of conversations and to capture those examples in expressive language, automating those examples turns out to be relatively easy.

*This is a BDD book that uses Cucumber rather than a Cucumber book that mentions BDD*.

We first determine who needs to be involved and how they need to work together, and then we consider what processes and tools would support and amplify those interactions.
Starting with a process or a tool easily leads to suboptimal results.
So, before focusing on Cucumber, a tool, it makes sense for us to explore and understand the interactions Cucumber is designed to support.

BDD uses examples rather than abstract specifications to explore the future behavior of a system.

### When Scrum Isn't Enough

Of course, all this back-end work needs testing.
But until developers finally start exposing the back-end code via user-facing functionality, testers struggle to test it.
Testers find themselves underused in early sprints and overwhelmed in later sprints.

Some Scrum teams learn how to write user stories to capture small, but complete, slices of functionality.
However, unless product owners, developers, and testers fundamentally change how they collaborate with each other, they still end up with a mini-waterfall in each sprint.

The first step in breaking out of mini- (or full-scale) waterfalls is to find a meaningful, but small, increment of value to begin with.
Then, BDD can help teams grow a system example by example, planning, building, and testing every day.

### Finding a High-Value Feature to Start With

### Before you start with Cucumber

To come up with good examples and to build features example by example, getting feedback along the way, the work must be organized in slices that deliver value.
If you don't have good functional slices - if you're building components or doing technical tasks - you'll end up with scenarios that look more like developer-facing unit tests than like examples of valuable system behavior from a user's perspective.

#### Finding the First MMF

An MMF is a good place to start.
MMF stands for *minimum marketable feature*.
It's a small slice (minimum) of new functionality (feature) with enough of an impact to be worth getting in front of real users (marketable).

We want to build the minimum amount of feature to have the desired business impact and no more.

To get at the first MMF or two from a big idea, we recommend a technique we call feature mining:

#### Slicing an MMF into User Stories

Even if your first MMF is truly minimal, it's almost certainly more than a few days of work.
It might even be more than a sprint’s worth of work.

## Chapter 2 Exploring with Examples

We set the stage for conversations around examples by finding valuable slices of functionality on which to focus in the form of MMFs and user stories.

### BDD Is a Cooperative Game

Software development, especially Agile software development, is a similar game.
*Software development is a finite, goal-seeking, cooperative, group game*.

BDD is an Agile subdiscipline of the game of software development.
The emphasis in BDD is particularly placed on helping the team cooperate, innovate, and communicate during the game, all with the intention of achieving the goal of creating valuable working software more quickly and effectively.

#### BDD Is a Whole Team Thing

BDD is a whole-team practice.
It's a way of structuring the collaboration required to build the right software.
As such, it involves all the roles on the team.

Early in adopting BDD, collaboration tends to occur as a whole team.
This allows the team to build a common language for their domain.
Later, smaller groups can leverage that language to collaborate, and the work they produce will be comprehensible to the rest of the team.

Because we see so much value in the whole team participating in the collaboration in BDD, we rarely teach public BDD classes.
If only some team members understand how to work in this way, the team is unlikely to experience the benefits.
We've seen cases where just the testers or just the developers get excited about a tool like Cucumber and just end up doing test automation, the least valuable part of BDD, in isolation.

#### Allow Time and Space to Learn

Feature mining gives us a way to focus on the high-value work and avoid the low-value work, thereby making the deadline less scary and buying some extra capacity for improvement.

#### Flesh Out the Happy Path First

It's often easy to come up with a bunch of examples right away, but we recommend talking all the way through at least one core example before getting deep in variations.
By talking through a "happy path" example, a common case where things work as they should, the team gets a shared understanding of what the user story is about.
What does it look like when the user is able to do what they want to do?

#### Use Real Examples

Good examples put you in the user's shoes, building empathy for what the user is trying to do and helping you think more accurately about how they'll do it.

#### Example Mapping Gives the Discussion Structure

Our favorite way to add some light structure to this kind of discussion is with Matt Wynne's [Example Mapping](https://cucumber.io/docs/bdd/example-mapping/) technique.
In Example Mapping, the group builds a tree: the story has rules that are illustrated by examples.
Assumptions and questions are captured on the side so the core discussion about examples doesn't get blocked by side conversations.

#### Optimizing for Discovery

There is no such thing as "requirements"; there are only unvalidated assumptions.
The goal of delivering MMFs is to validate our assumptions as soon as possible, in case they turn out to be false and we need to change direction.
Agile development assumes that the specific destination is unknown, so we need to iterate our way there.
Software development is inherently a discovery process.

### Addressing Some Concerns

#### Treat Resistance as a Resource

When someone resists your proposed change, ask yourself, "What do they know that I don’t know?"

One pleasant surprise with this approach to resistance is how often the person putting up the biggest resistance becomes the biggest supporter of the change once you listen to them and incorporate what they know.

### Playing the BDD Game

#### Opening

Generating new ideas is maximized and all critique is deliberately set aside.
It's about getting as many ideas out in the open as possible and avoiding critical thinking and skepticism.

The opening stage in BDD involves brainstorming examples that help the team understand the business domain.
These examples are focused on the customer experience and are as close as possible to the reality of the business domain.
The goal is to generate a variety of examples that help the team understand the business domain and the customer need they are trying to address.

#### Exploring

#### Closing

The closing stage is where a game converges on conclusions, decisions, and action.
It's finally the time to bring in critical thinking and rigor, evaluating which ideas are the most promising to pursue and worth an investment of time and energy.

## Chapter 3 Formalizing Examples into Scenarios

We prefer to separate the discovery step of BDD from the formalization and automation steps.

Formalizing examples is convergent.
The team takes a single example and converges on a single precise set of words to describe it.

### Moving from Examples to Scenarios

Cucumber does introduce overhead with the feature files, but that overhead is worth it when you use the tool for the purposes for which it was intended.
It's first and foremost a collaboration tool.

#### Feature Files as Collaboration Points

As we begin formalizing examples, BDD begins to look more like testing.

##### Mapping Your Current Testing Activities

If you're like many Agile teams, you have decent coverage of Quadrant 3, some activity in Quadrant 4, occasional Quadrant 1, and nothing in Quadrant 2.

##### How Will Adopting BDD Affect Your Testing?

By adopting BDD, you will fill in more of Quadrant 2, allowing testers to do more interesting tests in Quadrant 3 and perhaps dedicate more time to Quadrant 4.
In the process, you'll be investing in creating a foundation and motivation for the adoption of developer-facing TDD to fill in Quadrant 1.

##### Growing Quadrant 2 Collaboration Capabilities

A feature file is a Quadrant 2 collaboration point; a springboard for conversation and discovery.
The Quadrant 2 test automation that comes later is a nice side effect of growing these feature files as a species of "living documentation".

##### The Perils of Misusing Cucumber

Some teams make the mistake of using Cucumber exclusively as a Quadrant 1 developer-facing tool.
This leads to unnecessary technical overhead, brittle and slow test scenarios, and eventually unmaintainable feature files.
The value is simply not there when treating Cucumber as a developer-facing tool.

##### Describing Features

However, Cucumber features aren't user stories; Cucumber features are living documentation of a set of behaviors in the system.
A single feature may grow and change over the course of many user stories.

##### Using MMFs with BDD Can Keep You From Generating an Excess of Examples

##### Collaborating for Understanding

The work of a software development team isn't creating software, it's solving people's problems with software.
Thus, understanding the problem and how to best solve it is a critical part of the work.

#### BDD Is Iterative, Not Linear

The reality is that teams using BDD refine and improve their feature files over time as they explore and learn.

At any point, a team may switch from one step to another.
They might be formalizing a scenario in their feature file and realize they need to jump back into exploration because they've uncovered a case they hadn't thought about, and need to talk about examples to drive better understanding.
The same thing can happen when automating scenarios.
While automating one scenario, new scenarios might present themselves or further exploration of examples might need to happen.

#### Finding the Meaningful Variations

Testers are particularly good at identifying possible variations, but you need the product owner perspective to evaluate whether a particular example is relevant and valuable.
In exploratory testing, it's great when testers consider variations no one else has thought of.
However, because feature files function as living documentation of the behavior of the system, we don't want to clutter that documentation with unlikely edge cases.

#### Gherkin: A Language for Expressive Scenarios

Cucumber's language for describing features is called Gherkin, and Gherkin is a pidgin language for describing the behavior of a software system in a way both humans and their computers can understand.

##### Feature Title and Description

##### Scenarios and Given-When-Then

The core of the Gherkin language is the *scenario*, a concrete example of a feature in action.
Scenarios begin with the `Scenario` keyword followed by a title and are specified as a sequence of steps that each start with the keyword `Given`, `When`, `Then`, `And`, or `But`.
