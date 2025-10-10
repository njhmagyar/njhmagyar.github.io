---
supertitle: Twirlmate
title: 'Multi-step flow streamlining'
permalink: projects/twirlmate/
project_url: https://www.twirlmate.com/
tagline: 'I redesigned a mobile registration experience, transforming a disjointed onboarding flow into a seamless customer journey; achieving a usability score of 89 (well above the industry average of 67) and reducing average time between sign up and checkout from 8 to 5 minutes.'
overview: Twirlmate is a webapp where parents and coaches register their athletes for baton twirling competitions. I redesigned the mobile registration experience, transforming a disjointed onboarding flow into a seamless customer journey; achieving a usability score of 89 (well above the industry average of 67) and reducing average time between sign up and checkout from 8 to 5 minutes.
where: Twirlmate / 2025
role: As founder and product owner, I leveraged my unique technical-design background to identify and solve a critical user experience bottleneck while ensuring development feasibility.
order: 1
featured: true
cover_image: /assets/images/twirlmate/twirlmate-cover-4-mobile-2.svg
cover_video: /assets/videos/twirlmate-1.mp4
read_more: []
published: true
---

<img src="/assets/images/twirlmate/twirlmate-welcome-login.svg" class="w-100 rounded responsive-margin-bottom" alt="" />
<div class="responsive-margin-bottom">
  <h2 data-sidebar>Context</h2>
  <ul class="nhm-card-grid three-columns">
    <li class="nhm-card-grid__item nhm-card align--center">
      <span class="h2">7</span><br>
      contests / year
    </li>
    <li class="nhm-card-grid__item nhm-card align--center">
      <span class="h2">700</span><br>
      users / year
    </li>
    <li class="nhm-card-grid__item nhm-card align--center">
      <span class="h2">$82K</span><br>
      revenue / year
    </li>
  </ul>
  <p>
    As a World Silver Medalist and 13-year competitor, I lived through the frustrating reality of baton twirling contest registration and participation. The process was a multistep gauntlet that involved a number of fragmented tools and experiences:</p>
  <ol>
    <li><p>Hunt for opportunities by scrolling through dozens of Facebook group posts, hoping to catch registration announcements</p></li>
    <li><p>Navigate inconsistent registration processes (some contests used Google Forms, others required mailing PDFs), each with different requirements and formats</p></li>
    <li><p>Piece together payment by calculating fees manually, then tracking down contest directors on Venmo or PayPal, often waiting days or weeks for confirmation</p></li>
  </ol>
  <p>This fragmented experience meant parents spent hours on the registration process, directors struggled to manage payments and communicate with attendees, and our community missed out on opportunities due to poor communication or experience design.</p>
  <p>I built Twirlmate to solve a problem I knew intimately: bringing contest discovery, registration, payment, and communication into one consistent, modern platform designed specifically for our sport's unique needs.</p>
  <img src="/assets/images/twirlmate/twirlmate-context.svg" class="w-100 rounded" alt="" />

</div>

<div class="responsive-margin-bottom">
  <div>
    <h2 data-sidebar>The Problem</h2>
    <img src="/assets/images/twirlmate/twirlmate-problem.svg" class="w-100 rounded" alt="" />
    <p>
      During Twirlmate's first year, I provided all customer support, giving me direct insight into user pain points. The data revealed a critical gap in our user experience:
    </p>
    <ul>
      <li>
        <p class="my-0"><strong>8% of individual attendees</strong> (5 out of 60 on average) contacted me confused about next steps after account creation</p>
      </li>
      <li>
        <p class="my-0"><strong>50% of team registrants</strong> (3 out of 6) needed help connecting their accounts to team registration</p>
      </li>
      <li>
        <p class="my-0"><strong>Some users gave up entirely,</strong> requiring me to spend an hour completing their registration manually</p>
      </li>
    </ul>
    <p>
      The core issue: Users successfully created accounts but couldn't find their way to contest registration, leaving them stuck and frustrated.
    </p>
  </div>
</div>

<div class="responsive-margin-bottom">
  <h2 data-sidebar>The Impact</h2>
  <ul>
    <li><p class="my-0"><strong>Customers:</strong> frustration with the system and contest director</p></li>
    <li><p class="my-0"><strong>Directors:</strong> fewer attendees and less revenue</p></li>
    <li><p class="my-0"><strong>My business:</strong> increased customer support effort</p></li>
  </ul>
  <p><strong>How did we get here?</strong></p>
  <p>The original design assumed a two-step user journey:</p>
  <ol>
    <li>
      <p class="my-0">Users discover Twirlmate → create accounts and teams</p>
    </li>
    <li>
      <p class="my-0">Later, they return to register for specific contests</p>
    </li>
  </ol>
  <p>
    But user behavior revealed a completely different reality:
  </p>
  <p>
    Contest announcements drove signups, not platform awareness. Users arrived with one goal: register for a specific contest they'd just heard about. Account creation wasn't a deliberate platform onboarding. It was an unexpected obstacle blocking their path to registration.
  </p>
  <p>
    The mismatch was clear: I designed for users who wanted to "join a platform," but attracted users who wanted to "register for this contest, right now."
  </p>
</div>

<div class="responsive-margin-bottom">
  <h2 data-sidebar>Principles</h2>
  <div class="nhm-image-wrapper" style="background-image: url('/assets/images/twirlmate/twirlmate-bg.svg'); background-size: cover; background-position: center; background-repeat: no-repeat;">
    <img src="/assets/images/twirlmate/twirlmate-progressive-disclosure.gif" class="mxh-300 rounded--mobile border--mobile" alt="" />
  </div>
  <p><strong>Meet Users Where They Are</strong> - Since attendees expect to enter athlete information during registration, I integrated account creation directly into the registration flow rather than treating it as a separate step.</p>
  <p><strong>Enable Seamless Editing</strong> - Users needed to modify athlete and team details without losing their registration progress, so I built inline editing capabilities that kept them in flow.</p>
  <p><strong>Reveal Complexity Gradually</strong> - While the new flow handles more functionality, I used progressive disclosure to show only what users need at each step, maintaining a clean interface.</p>
  <p>
    <strong>The key insight: Don't interrupt the user's primary task.</strong>
  </p>
  <p>This led me to explore three approaches, each getting closer to seamless task completion.</p>
</div>

<div class="responsive-margin-bottom">
  <h2 data-sidebar>Ideation</h2>
  <div class="nhm-image-wrapper">
    <img src="/assets/images/twirlmate/twirlmate-main-problem-fix.svg" class="w-100" alt="" />
  </div>
  <p><strong>Option 1: Post-Setup Redirection</strong> - After account creation, redirect users to find their contest again on the event list page.</p>
  <ul>
    <li><p class="my-0">Strength: Lowest technical lift (just involves adding a link to an existing page).</p></li>
    <li><p class="my-0">Weakness: Users lose context and have to re-navigate to where they started.</p></li>
  </ul>
  <p><strong>Option 2: Context Preservation</strong> - Use technical parameters to remember which contest users were registering for and redirect them after account setup.</p>
  <ul>
    <li><p class="my-0">Strength: Eliminates 4 clicks otherwise required to navigate back to the contest registration page.</p></li>
    <li><p class="my-0">Weakness: Still breaks the user's mental flow and might not return them to their exact progress point.</p></li>
  </ul>
  <p><strong>Option 3: Contextual Account Creation</strong> - Embed account setup directly within the registration process.</p>
  <ul>
    <li><p class="my-0">Strength: Maintains user context and keeps them focused on their primary goal.</p></li>
    <li><p class="my-0">Weakness: Highest technical lift; significant rearchitecting of registration experience.</p></li>
  </ul>
</div>

<div class="responsive-margin-bottom">
  <h2 data-sidebar>Challenges</h2>
  <div class="nhm-image-wrapper py-5" style="background-image: url('/assets/images/twirlmate/twirlmate-bg-2.svg'); background-size: cover; background-position: center;">
    {% include baton-button.html %}
  </div>
  <p>Contest registration is typically seen as a tedious chore involving complex data entry in a specific sequence. Users needed to stay engaged while providing detailed information about athletes, events, and teams—all while feeling confident they were making the right choices.</p>
  <h3>My Design Approach</h3>
  <p><strong>Build Momentum, Not Barriers</strong></p>
  <ul>
    <li><p class="my-0">Used descriptive, progress-focused headings like "Tell us about [Athlete Name]" instead of generic "Step 2" labels</p></li>
    <li><p class="my-0">Added contextual help that appeared only when relevant (like explaining the difference between groups and teams)</p></li>
    <li><p class="my-0">Included a spinning baton icon and custom twirling-themed illustrations to inject moments of delight into what's usually a mundane process</p></li>
  </ul>
  <p><strong>Maintain Confidence Throughout</strong></p>
  <ul>
    <li><p class="my-0">Provided clear progress indicators so users always knew where they stood in the flow</p></li>
    <li><p class="my-0">Built in four confirmation touchpoints to catch and correct mistakes: cart review, pre-payment confirmation, post-payment summary, and email receipt</p></li>
    <li><p class="my-0">Included clear instructions for making corrections after payment, reducing anxiety about "getting it wrong"</p></li>
  </ul>
  <p><strong>Keep It Simple</strong></p>
  <ul>
    <li><p class="my-0">Focus on one action at a time</p></li>
    <li><p class="my-0">Reveal information progressively (e.g., showing team setup options only after they selected team events)</p></li>
  </ul>
</div>

<div class="responsive-margin-bottom">
  <h2 data-sidebar>The Result</h2>
  <img src="/assets/images/twirlmate/twirlmate-cover-4-mobile-2.svg" class="w-100 rounded" alt="" />
  <p class="">By eliminating the gap between account creation and registration, I transformed a frustrating user experience into a streamlined process:</p>
  <ul>
    <li><p class="my-0"><strong>Usability improved 33%:</strong> SUS score increased from 67 to 89</p></li>
    <li><p class="my-0"><strong>Time to completion dropped 62%:</strong> Average registration time fell from 8 to 3 minutes</p></li>
  </ul>
  <p>To validate the broader business impact, I would track:</p>
  <ul>
    <li><p class="my-0">Registration completion rates and drop-off points</p></li>
    <li><p class="my-0">Revenue per registration session</p></li>
    <li><p class="my-0">Customer lifetime value and repeat usage</p></li>
    <li><p class="my-0">Support ticket volume and resolution time</p></li>
  </ul>
</div>

<div class="responsive-margin-bottom">
  <h2 data-sidebar>What I Learned</h2>
  <p>
    When users have a clear goal (register for this contest), any obstacle that doesn't directly serve that goal creates friction. The solution wasn't just better UI—it was aligning the system architecture with user intent.
  </p>
  <p>
    This project reinforced that the best UX solutions often require rethinking fundamental assumptions about user journeys, not just polishing interfaces. Users don't care about our internal system logic—they care about accomplishing their goals efficiently.
  </p>
</div>

<div class="align--center responsive-margin-bottom">
  <h2>Want to see more?</h2>
  <a class="nhm-btn--blue" href="https://www.twirlmate.com/" target="_blank">
    View the Live Site
  </a>
</div>





