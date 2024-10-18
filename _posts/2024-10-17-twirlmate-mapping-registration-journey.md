---
title:  "Mapping the Registration Journey"
category: twirlmate
roles: [UX Design, Product Management]
project: Twirlmate
image: /assets/images/twirlmate/registration-journey/cover.png
description: "Read about how I broke the competition registration process down into clear, user-centered steps."
---
{% assign project = site.projects | where: 'name', page.project | first %}
**Project:** <a href="{{ project.url }}" class="text--link">{{ project.name }}</a>

**My Role:** UX Designer, Product Manager

**Methods and Tools:** Journey Mapping, Figma

## The Problem
{:.mt-3}
When I set out to design an event registration system for the sport of competitive baton twirling, I thought to myself, “How hard could it be? All you need to collect are two general types of information: who is participating, and what are they participating in.” 

However, I quickly realized there is far more to this process. For starters, the registration journey begins way before a person is actually ready to fill out the entry form. Also, during the registration process there’s a lot of information to collect for a given participant that must be collected in a certain order. And when it comes to getting users all the way to the finish line of their purchase, there are several points at which they might get stuck or drop off.

To wrap my head around this ballooning complexity, I needed to map out the overarching journey people were going to take both as customers and users to register via Twirlmate. Here’s how I did it.

## The Process
{:.mt-3}

### Develop personas
{:.mt-2}
The first step was to clarify who’s journey this was going to be. Characteristics I considered included:

- Age

- Gender

- Tech savviness

- Baton twirling roles 

- Baton twirling experience

![Athlete](/assets/images/twirlmate/registration-journey/twirlmate-persona--noelle.png "New Parent"){:.w-100.rounded.mt-3.mb-1}

![Athlete](/assets/images/twirlmate/registration-journey/twirlmate-persona--annabel.png "Athlete"){:.w-100.rounded.mb-1}

![Athlete](/assets/images/twirlmate/registration-journey/twirlmate-persona--lisa.png "Experienced Professional"){:.w-100.rounded.mb-1}


To arrive at the above personas, I drew on my personal experience as a former competitor and current judge. Direct observation at baton contests tells me that the sport is heavily dominated by middle school and high school-aged girls, and most parents in attendance are moms. If someone is a coach in the sport, they most likely twirled themselves in their youth and now wear multiple hats as a parent, judge, and event organizer as well. Finally, because the sport still runs almost entirely on mail-in entries and pen/paper scoresheets, the average comfort level with technology is most likely very low.

### Define the customer journey
{:.mt-3}
Next, keeping all these people in mind, I brainstormed the major phases of the customer journey. I did so by reflecting on my own experience as a former athlete and observing others’ behavior in baton twirling Facebook groups.

The stages I identified included:

![Key Stages](/assets/images/twirlmate/registration-journey/key-stages.png "Key Stages"){:.w-100.rounded.my-3}

**1) Discover** – Customers start by finding out about an event, typically through word of mouth, organic web search, social media, or an email announcement.

**2) Gather**  – Next, customers need to evaluate whether or not to attend by more thoroughly reviewing the details of an event: location, date and time, what’s offered, any special rules or restrictions, etc.

**3) Register** – If they decide to register their athlete, they fill out a form and pay.

**4) Return** - Ideally customers will return to Twirlmate in the future and use it as a go-to source for information on upcoming events.

### Fill in the details
{:.mt-3}
The previous stages were a great starting point but they needed to be more specific, so I fleshed them out with a more detailed narrative of what the customer is thinking/feeling, what they're doing, and what might help them move to the next stage:

![Detailed Stages](/assets/images/twirlmate/registration-journey/detailed-stages.png "Detailed Stages"){:.w-100.rounded.my-3}

**1)	Discover** – User sees a Facebook post announcing a save-the-date for a contest happening near them later in the year. They mark the date in their family calendar. 

**2)	Gather** - A few months later, they see another Facebook post announcing registration is now open. They click the link to view the contest information and make a mental note to register before the deadline but don’t start the process yet.

**3)	Register** - Finally, they see another Facebook post reminding people that the deadline to register is tomorrow. They stop what they’re doing and return to Twirlmate to register.

**4) Return** - Having had a streamlined, intuitive, positive experience on Twirlmate the first time and seeing a variety of upcoming events listed, they come back to the site to see what other opportunities are offered near them. The customer sees a number of future events they want to register their athlete for, so they bookmark Twirlmate's event calendar to easily return to later.

### Map the registration UX journey
{:.mt-3}

After clarifying the overarching stages of a customer's journey with Twirlmate, I applied the same kind of step-wise thinking to the interactions they perform as users of the system during the registration flow.

I asked myself, "What actions must the user take, and in what order?" I came to realize there were two distinct interaction flows for the user to complete: account setup, where they enter all of their information in the system for future use/re-use; registration, where they enter 1+ contestants into a competition.

![Registration UX map](/assets/images/twirlmate/registration-journey/registration-ux-map.png "Registration UX map"){:.w-100.rounded.my-3}

#### Account setup

**i.	Account holder profile** – They provide information about themselves as the person who will be registering 1+ participants.
{:.pl-2}

**ii.	Athlete profile(s)** – They create profiles/subaccounts for each of their athletes.
{:.pl-2}

**iii.	Coach relationships** – They form connections with other Twirlmate users who coach their athletes. This is important for event organizers to know so they can avoid conflicts of interest when assigning judges to specific groups of athletes.
{:.pl-2}

**iv.	Duets, trios, and group memberships** – They form additional connections with other Twirlmate athletes/groups with whom they’ll be competing.
{:.pl-2}

#### Registration

**i.	Registration page navigation** – Depending on which page they entered Twirlmate through, users must navigate to the event’s registration page.
{:.pl-2}

**ii.	Participant selection** – Once there, they start the registration process by selecting from a list of athletes they can manage.
{:.pl-2}

**iii.	Discipline selection** – Next, they choose from the available disciplines and select their athlete’s age division/skill level for each.
{:.pl-2}

**iv.	Add to cart** – Having selected all of their participant’s disciplines, they add the entry to their cart and review the information for accuracy.
{:.pl-2}

**v.	Payment** – Assuming all is well, they pay the total amount of the entry.
{:.pl-2}

**vi.	Confirmation** – After payment succeeds, they receive an email confirmation of their purchase.
{:.pl-2}

### Identify points of friction

Next I reviewed the narrative for places where the user could get stuck or confused, and rephrased them into “How Might We” questions:

![Registration UX map with Points of Friction](/assets/images/twirlmate/registration-journey/registration-ux-map-friction.png "Registration UX map with Points of Friction"){:.w-100.rounded.my-3}

-	**Account Holder Profile:** Users might wonder if this is where they’re meant to enter their information or their athlete’s. How might we clarify we’re asking for the account holder’s information?

-	**Relationships:** Users might search for someone who doesn’t have a Twirlmate account yet. How might we help users connect with people outside of Twirlmate?

-	**Relationships:** If someone else creates a duet with the user’s athlete, they wouldn’t readily know it. How might we alert Twirlmate users when there’s new information relevant to their athlete?

-	**Participant Selection:** Users might not have all of their athletes created before they go to register. How might we help users create additional athletes during the registration process?

-	**Participant Selection:** Users might want to register more than one participant. How might we facilitate multi-participant registration?

-	**Discipline Selection:** Users might accidentally choose the wrong discipline, age division, or skill level. How might we reduce the likelihood of human error in the registration process?

-	**Add to Cart:** Users might want to add, edit, or remove an item from their entry. How might we help users easily modify their entry after it’s been added to their cart?

-	**Payment:** Users’ payment could fail for any number of reasons (declined card, insufficient funds, etc). How might we help people recover from failed payments?

### Reduce points of friction

Then I focused on the points that required new steps in the journey and added the following:

-	**Invitations:** during account setup, if users don’t find someone they’re looking for they can send them an email invitation to join Twirlmate.

-	**Participant Selection:** during registration, if users haven’t added all of their athletes ahead of time, they can create additional athlete, duet, and trio profiles in the moment.

-	**Multi-participant Registration:** if users are registering more than 1 person, they can repeat the participant/discipline selection steps and bundle all entries together before adding everything to their cart.

-	**Add to Cart:** if users want to modify something about their entry, they can easily link back to its editable version. They can also delete it entirely from the cart.

-	**Payment:** if the user’s payment fails, they receive an email explaining what happened and a link to try checking out again.


## The Solution
Putting it all together, the result is a comprehensive general depiction of the steps a Twirlmate user must take during the registration process. In reality there’s even more nuance to the sequence of events, as additional requirements come and go depending on the user’s role in the system. But this artifact provides a base from which all of those can extend.

![Registration UX map with Side Journeys to Reduce Fricion](/assets/images/twirlmate/registration-journey/registration-ux-map-w-side-journeys.png "Registration UX map with Side Journeys"){:.w-100.rounded.my-3}

## Next Steps
To carry this work forward, I continued thinking about other personas and how their journey would align with/deviate from what I had so far and ultimately used the artifact to guide the interface design process.

In the future I plan to periodically review, update, and refine the journey to reflect the customer experience.


## Lessons Learned

### Balance Linearity and Flexibility
While the registration process is largely linear, there turned out to be a handful of places where the user needed to pause for a side journey or return to a previous step. Therefore, it’s important to find the right balance between the simplicity afforded by a linear sequence and the flexibility of a more free-form experience.

### Expect the Unexpected
Users will inevitably do the things you don't expect. Therefore it’s important to put yourself in their shoes as much as possible to identify where they might have trouble and proactively provide measures to prevent or resolve those issues.

### When in Doubt, Write It Out
The most clarifying part of this process was constructing a specific user scenario/narrative. Digging into these details painted a clearer picture in my mind of who I was designing for and allowed me to better see things from their perspective, which led to questions and solutions I hadn’t previously considered.
{:.mb-5}


