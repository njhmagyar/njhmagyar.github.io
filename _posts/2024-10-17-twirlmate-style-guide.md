---
title:  "The Making of Twirlmate's Brand and Style Guide"
category: twirlmate
roles: [UX Design, Branding, Graphic Design]
project: Twirlmate
image: /assets/images/twirlmate-style-guide.png
description: "My process for defining Twirlmate's brand identity and design system"
---
{% assign project = site.projects | where: 'name', page.project | first %}
**Project:** <a href="{{ project.url }}" class="text--link">{{ project.name }}</a>

**My Role:** UX Designer, Graphic Designer, Branding

**Methods and Tools:** Comparative Analysis, Figma

## The Problem
{:.mt-3}

I recently noticed Twirlmate's visual consistency was in need of a tune-up.

For a long time I'd been designing and building the application without the aid of an 
official brand/style guide. When I first started the project, I carefully selected Twirlmate's
color palette, logo, typography, and iconography, and implemented custom styles for all UI
components to create the exact look and feel I was going for.

But like many applications that grow to a certain size and age, eventually its appearance
began to subtly shift underneath itself. A few things stood out immediately:

- Three primary button styles

- Too many similar tints and shades, particularly gray tones

![Three primary buttons](/assets/images/twirlmate/style-guide/primary-buttons.png "3 Primary Buttons"){:.w-100.rounded.mt-3}

## The Process
{:.mt-3}

Here's what I did to address these discrepancies.

### Style Audit
{:.mt-3}

Before jumping to solutions, I first took stock of the application's current state.

I conducted an audit of all buttons and color variables, and noted any discrepancies, conflicts, and redundancies.

![Audit of primary, secondary, and tertiary buttons](/assets/images/twirlmate/style-guide/button-audit.png "Button Audit"){:.w-100.rounded.my-3}

![Audit of gray color variables](/assets/images/twirlmate/style-guide/color-audit.png "Gray Color Audit"){:.w-100.rounded.my-3}


### Style Consolidation
{:.mt-3}

I then reduced the current set of styles by defining which primary button
would reign supreme, the context in which red buttons should be used,
and which tints and shades were going to stay or go.

![Don't use two solid color buttons together](/assets/images/twirlmate/style-guide/button-dos-and-donts-1.png){:.w-100.rounded.my-3}

![Don't use red for positive actions](/assets/images/twirlmate/style-guide/button-dos-and-donts-2.png){:.w-100.rounded.my-3}

### Comparative Analysis
{:.mt-3}

To prepare for the final brand and style guide deliverable, I researched
the guides of companies whose visual aesthetic I admire, such as Atlassian
and [Slack]((https://relayto.com/relayto/slack-brand-book-1lu8n5oo62jhc/ZNhQTNig1)). Their resources provided me with inspiration for my own guide's structure
and content.

![Slack brand book](/assets/images/twirlmate/style-guide/slack-brand-book.png){:.w-100.mt-3}

## The Solution
{:.mt-3}

The final result was the first draft of what will continue to serve as a 
living document for Twirlmate's brand and style. Created in Figma, the guide
comprises atomically-designed base components and component sets. It also
defines reusable typeface and color styles, and describes the overall tone
of Twirlmate's voice.

![Twirlmate style guide](/assets/images/twirlmate/style-guide/style-guide-overview.png){:.w-100.mt-3}

## Next Steps
{:.mt-3}

Moving forward, as the need for additional components arises during the design process,
I'll start by adding them to the guide before applying them to a mock-up.

## Lessons Learned
{:.mt-3}

1) Big things are achieved with small steps

At the outset of this task, I was a bit overwhelmed by the prospect of defining
every single component's styles in the guide. I dealt with this by taking an incremental
approach, deciding that a first draft doesn't have to be exhaustive but instead can be
something that grows over time. "Chunking" work like this will be a useful strategy
to remember when faced with large tasks in the future.

2) Move slower right now to acclerate later

As I was building out the guide, I noticed how long it was taking me to thoroughly
define each components' states (e.g., default, hover, focused, error, disabled, etc).
Part of me worried about the time I was losing that I could have been spending on 
other tasks that have greater outward-facing value, such as building a new feature. But I
ultimately felt that the up front investment would yield great returns in the future, as
I'd be able to design new features more quickly and easily. And if anyone else ever comes
along to work on the project with me, they'll already have everything they need to get up and running.
{:.mb-5}



