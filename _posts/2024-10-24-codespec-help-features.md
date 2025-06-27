---
permalink: pretty
title:  "Iterating to Reduce Frustration and Maximize Learning"
is_case_study: true
category: codespec
roles: [UX Research, UX Design]
project: Codespec
image: /assets/images/codespec/help-options/cover.png
description: "How I revised Codespec's help features based on learner and instructor feedback."
---
{% assign project = site.projects | where: 'name', page.project | first %}
**Project:** <a href="{{ project.url }}" class="text--link">{{ project.name }}</a>

**My Role:** UX Researcher, UX Designer

**Methods and Tools:** Prototyping

## The Problem
{:.mt-3}

Codespec offers 5 different ways to solve each programming challenge, 3 of which are block-based: plain English blocks (pseudocode), regular code blocks (Parsons), and fill-in-the-blank code blocks (Faded Parsons).

Unlike fix-code and write-code problem types, where the learner uses an open-ended IDE to create their solution, block-based problem types present a unique opportunity to help learners get unstuck. Because learners are working towards a pre-defined solution, Codespec can help them fix blocks that are in the wrong order or indentation.

But, how helpful should Codespec be? 

For example, if a block is both incorrectly ordered and incorrectly indented, should both errors be corrected in one hint request? Or should they be separate?

## The First Iteration: Choices, Choices, Choices
{:.mt-3}

My co-founder and I originally thought that Codespec should provide the bare minimum amount of assistance when learners requested it. This decision was based on early-stage feedback from learners who said,

_"I didn't want to use the help features because I wanted to prove I could do it on my own."_

_"I was afraid that if I used the help features then I wouldn't learn as much."_

Learners had a strong desire to independently solve the problem and learn as much as possible. 

We were also curious which forms of help learners sought most often. So to support these goals, the original help menu offered 7 separate options:

![V1 Help Options](/assets/images/codespec/help-options/all-forms-of-help.png "V1 Help Options"){:.w-100.my-3.rounded}

- **Show Pseudocode:** A toggle for showing/hiding plain English descriptions of each code block

- **Add Missing Block:** Identified a block that should be in the solution but was not. The block was only added to the solution in the upper right corner by default, so the learner still had to figure out the correct order and indentation for it.

- **Pair and Compare:** If the problem included distractor (decoy) blocks, Codespec paired them with their correct counterparts for the learner to reflect on and eliminate.

- **Provide Correct Indentation:** Codespec slid the block left or right, so it ended in the correct spot.

- **Provide Correct Order:** Codespec slid the block up or down, but made no guarantees about whether it was in the correct indentation or not.

- **Provide Correct Text:** For incorrectly populated fill-in-the-blank blocks, Codespec cleared any existing text and added the expected content.

- **Remove Incorrect Block:** Codespec took any distractor blocks the learner placed on the solution side and put them back on the left side.

Each option's availability depended on the state of the solution. For example, if the solution had all the right blocks but some were not in the right order, then "add missing block" and "remove missing block" were disabled but "provide correct order" was available.

## Additional Learner Feedback
{:.mt-3}

Further usability testing with a larger number of learners ultimately led us in a different direction:

_"What does 'pair and compare' mean?"_

Despite watching a video tutorial that explained platform-specific terminology prior to the usability test (e.g., "pair and compare"), not all learners understood each help option.

_"It's a little annoying to have to click so many times to fix one block."_

Other learners expressed frustration at having to take several steps before a block finally had the correct order, indentation, and text. They expressed a preference for a hint feature that would take care of anything that was wrong with a block in one fell swoop.

_"Why are there so many options?"_

Finally, some learners were surprised by how many choices they had when it came to fixing their block-based solution. In some cases, they were unsure of which one to choose first.

## The Second Iteration: Keep It Simple
{:.mt-3}

Based on learners' reactions to the original help options, my co-founder and I decided to reduce the number of choices down to two:

![V2 Help Options](/assets/images/codespec/help-options/two-options.png "V2 Help Options"){:.w-100.my-3.rounded}

- **Show Pseudocode:** This would continue to show/hide plain English description of each block.

- **Provide Hint:** Rather than putting the responsibility on the learner to choose the form of help, Codespec would identify the first block that's incorrect in any way and fix all of its errors in one request. But to prevent learners from abusing this feature, they would only be allowed to request 3 hints.

## Next Steps
{:.mt-3}

We are currently in the process of collecting feedback on this updated approach. Some questions I'd like to ask learners include:

- What do you expect "Provide Hint" to do when you click it?

- After you requested a hint, were you able to follow what Codespec provided?

- What do you think about the limit placed on the number of hints you can request?

## Lessons Learned
{:.mt-3}

### Keep learners focused on learning
One of the biggest challenges with any educational technology is helping the learner stay more engaged with whatever it is they're learning, and less encumbered by the system they're using. The original set of help options were too great in number and too unfamiliar to learners. The revised set, we hope, does a better job of getting them unstuck and moving them onto their next task.
{:.mb-3}

