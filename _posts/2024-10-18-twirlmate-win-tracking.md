---
title:  "Discovery and Requirements for Win Tracking"
category: twirlmate
roles: [UX Research, UX Design]
project: Twirlmate
image: /assets/images/twirlmate/win-tracking/cover.png
description: "See how I surveyed target users to design a new feature 
that addresses a longstanding pain point."
---
{% assign project = site.projects | where: 'name', page.project | first %}
**Project:** <a href="{{ project.url }}" class="text--link">{{ project.name }}</a>

**My Role:** UX Researcher, UX Designer

**Methods and Tools:** Survey Design, Data Analysis, Prototyping

## The Problem
{:.mt-3}

Ever since the sport of baton twirling began in the 1960s, competitive organizations have defined various skill levels in which athletes compete (e.g., beginner, intermediate, advanced). When an athlete achieves a certain number of wins at a given level, they must start competing at the next level up until they reach the highest one.

To this day, the process of tracking wins relies on the honor system. Parents and coaches are responsible for tracking their own athletes' wins and entering them for competition at the appropriate level.

Many people take issue with this approach because, unfortunately, not everyone is honest about their wins.

Discontent with the honor system, combined with Twirlmate's role as an event registration and management platform, puts Twirlmate in a prime position to address the need for automated, fair win tracking in the sport.

## The Process
{:.mt-3}

### Design a survey
{:.mt-3}

Because there are many organizations in the sport and each of them define which wins "count" differently, I knew there was no way I could immediately jump into designs. I had an initial idea for a solution, but I needed to gather more information from the community first. So I put together a survey with the following goals in mind:

- **Explain** my initial idea for win tracking and solicit feedback

- **Understand** community members' current win tracking processes

- **Gauge** community member sentiment towards the idea of a public win tracking system

Here's the set of questions I used for the survey. I sent it to 78 email newsletter subscribers and collected responses for one week:

![Survey Screenshot](/assets/images/twirlmate/win-tracking/survey.png "Survey"){:.w-100.rounded.mt-3.mb-3}

When drafting the questions and response options, I kept the following survey design principles in mind:

- **Keep it short:** fewer questions mean higher completion rates. I knew respondents would only have a few minutes max to spend on this since I would be sending it to newsletter subscribers via email. There was also no monitary incentive to participate, which meant the odds of people doing it were lower to begin with.

- **Clarify options:** if a response option can be interpreted in multiple ways, it's better to define it with examples so people understand what you mean.

- **Provide alternatives:** I knew my response options might not cover all scenarios, so I included "other" and free response choices for people to utilize in those cases.

### Analyze responses
{:.mt-3}

I received 39 responses, on which I performed quantitative analysis.

Interestingly, there was an even split between respondents who used digital versus analog systems for tracking wins:

![Survey Screenshot](/assets/images/twirlmate/win-tracking/current-win-tracking-system.png "Survey"){:.w-100.rounded.my-1}

There was a wide range in the type of information people collected as a part of their win tracking effort. But the most common data points included the disicpline, contest date, level, placement, and contest name:

![Survey Screenshot](/assets/images/twirlmate/win-tracking/win-tracking-details.png "Survey"){:.w-100.rounded.my-1}

Finally, the majority of respondents were in favor of athletes' wins being partially or fully visible to others:

![Survey Screenshot](/assets/images/twirlmate/win-tracking/visibility-preferences.png "Survey"){:.w-100.rounded.my-1}

Reasons in favor of public wins included:

- "Having everything public keeps people honest."

- "As stated in the NBTA rule book we are on the honor system. If a contestant is counting wins correctly and honestly then they have nothing to hide."

- "I’m in between yes and no. I think there should be some access to the public, especially contest directors, to verify accuracy, but also believe athletes deserve some privacy when it comes to their competitive history."

Those against it said:

- "I am saying private because, as you may know, some people get crazy. They may think they saw some thing they didn’t and they may be talking about it when they shouldn’t be, etc."

- "It has always been private in my history."


### Synthesize Findings
{:.mt-3}

I then drew the following conclusions from the analysis:

- **People aren't afraid of technology:** The even split between digital and analog win tracking systems, showed that many community members are already using modern tools to track wins, which bodes well for a Twirlmate-supported solution.

- **Details Matter:** People track a variety of metadata points about their athletes' competitive wins and history. The ideal win tracking system would accomodate as many of these characteristics as possible, with particular emphasis given to the most common ones.

- **Transparency is desirable:** 71% of respondents preferred a semi-public or fully-public system, arguing the transparency would keep everyone more honest.

## The Solution
{:.mt-3}

I carried forward my research findings into a first round of designs, which consisted of two pages. The first page was a fully public "athlete profile" that displayed only the individual's wins:

![Survey Screenshot](/assets/images/twirlmate/win-tracking/public-athlete-profile.png "Survey"){:.w-100.rounded.mt-2.mb-1}

The second page was private, only visible to the account holder who manages a given athlete. It displayed a complete history of the athlete's competitive performances/results:

![Survey Screenshot](/assets/images/twirlmate/win-tracking/private-athlete-history.png "Survey"){:.w-100.rounded.mt-2.mb-1}


## Next Steps
{:.mt-3}

To continue validating and refining the designs, I plan to conduct usability tests with parents, coaches, and athletes.

## Lessons Learned
{:.mt-3}

### The Power of Visuals
{:.mt-3}

My survey didn't include any images of my initial idea for the feature. The advantage of this was that respondents weren't biased by my input. The downside though was that they may have had a harder time understanding what I was talking about. In the future it might be better to include a reference image so respondents can provide more high quality, relevant feedback.
{:.mb-5}