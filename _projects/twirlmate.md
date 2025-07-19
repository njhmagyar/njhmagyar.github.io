---
supertitle: Twirlmate
title: Enhancing mobile usability of a baton twirling contest registration app by 36%
permalink: projects/twirlmate/
project_url: https://www.twirlmate.com/
tagline: I used customer support data to identify where users were getting stuck. Then, I prototyped a solution and validated it with real parents and coaches.
stack: [Python/Django, JavaScript/Vue, HTML, SCSS]
roles: [Solo UX Designer, Solo UX Researcher]
tools: [Figma, Google Forms, Usability Testing]
duration: June - July 2025
order: 1
featured: true
cover_image: /assets/images/twirlmate-cover.svg
thumbnail_image: /assets/images/twirlmate-cover.svg
logo_image: /assets/images/twirlmate-cover.svg
hero_image: /assets/images/twirlmate/twirlmate-cover-4-mobile.png
screenshots: [
  /assets/images/twirlmate/prototype/prototype-1.png,
  /assets/images/twirlmate/prototype/prototype-2.png,
  /assets/images/twirlmate/prototype/prototype-3.png,
  /assets/images/twirlmate/prototype/prototype-4.png,
  /assets/images/twirlmate/prototype/prototype-5.png,
]
read_more: [Codespec,Michigan Online]
prototype_id: "twirlmate-prototype"
published: true
---
<div class="nhm-wrapper responsive-margin-bottom">
  <img class="d-block w-100" src="{{ page.hero_image }}" alt="">
</div>

<div class="nhm-wrapper responsive-margin-bottom">
  <p class="align--center p--lg mw-680 mx-auto">
    Twirlmate is a webapp where parents and 
    coaches register their athletes for baton twirling competitions.
  </p>
</div>

<div class="nhm-card--horizontal image-last--mobile responsive-margin-bottom">
  <div class="nhm-card__image-wrapper">
    <img src="/assets/images/twirlmate-old-flow.svg" class="mxh-300 nhm-card__image" alt="" />
  </div>
  <div>
    <h2>The Problem</h2>
    <p class="p--lg">On the mobile version of the site, the pages where account creation ended and contest registration began were far apart—4 clicks!</p>
    <p class="p--lg">This left users lost, confused, and frustrated halfway through
    the registration process.</p>
  </div>
</div>

<div class="nhm-card--horizontal image-last--mobile responsive-margin-bottom">
  <div class="nhm-card__image-wrapper">
    <img src="/assets/images/twirlmate/twirlmate-mobile-ta-da-new.png" class="mxh-500 w-auto nhm-card__image" alt="" />
  </div>
  <div>
    <h2>The Goals</h2>
    <p class="p--lg">To address these issues, I needed to:</p>
    <ol class="p--lg">
      <li><p class="p--lg">Redesign the account setup and registration flows to be more intuitive.</p></li>
      <li><p class="p--lg">Optimize information hierarchy and page layout for mobile users.</p></li>
    </ol>
  </div>
</div>

<div class="nhm-card--horizontal image-last--mobile responsive-margin-bottom">
  <div class="nhm-card__image-wrapper">
    <img src="/assets/images/twirlmate/twirlmate-impact.png" class="nhm-card__image" alt="" />
  </div>
  <div>
    <h2>The Impact</h2>
    <p class="p--lg">
      After redesigning the flow, I compared the old and new versions with 5 target users. During 30-minute usability tests, I collected quantitative feedback using the <a href="https://www.nngroup.com/articles/measuring-perceived-usability/">System Usability Scale</a>.
    </p>
    <p class="p--lg">
      The old version received a score of 65, slightly below the 68% industry average.
      However, the new version received a score of 89—a 36% improvement over the old version
      and an A+ rating according to <a href="https://usabilitygeek.com/how-to-use-the-system-usability-scale-sus-to-evaluate-the-usability-of-your-website/">Usability Geek</a>.
    </p>
    <p class="p--lg">
      Qualitative feedback also confirmed the new design was a hit:
    </p>
    <p class="text--bold">"Wow! That was so much easier [with the new design]. Absolutely perfect!"</p>
  </div>
</div>

<h2 class="align--center">What was the difference?</h2>
{% if page.screenshots %}
  <div class="nhm-wrapper responsive-margin-bottom">
    <div class="slideshow-container mb-2">
    
      {% for screenshot in page.screenshots %}
      <div class="mySlides fade">
        <img src="{{ screenshot }}" style="width:100%" class="rounded">
      </div>
      {% endfor %}
    
      <!-- Next and previous buttons -->
      <button class="prev" onclick="plusSlides(-1)"><i class="fa-solid fa-chevron-left"></i></button>
      <button class="next" onclick="plusSlides(1)"><i class="fa-solid fa-chevron-right"></i></button>
    </div>
    <div style="text-align:center" class="mb-5">
      {% for screenshot in page.screenshots %}
      <button class="dot" onclick="currentSlide({{ forloop.index }})" aria-label="Slide {{ forloop.index }}"></button>
      {% endfor %}
    </div>
  </div>
  {% endif %}

<h2 class="align--center responsive-margin-bottom">How I Made It Happen</h2>

<div class="nhm-card--horizontal image-last--mobile mb-3">
  <div class="nhm-card__image-wrapper">
    <img src="/assets/images/twirlmate/twirlmate-spacing.svg" class="mxh-300 nhm-card__image" alt="" />
  </div>
  <div>
    <h2>Set Up Design System</h2>
    <p class="p--lg">
      I started by creating Figma file, complete with variables and component
      styles for colors, typography, spacing, and basic form inputs.
    </p>
  </div>
</div>

<img class="w-100 d-block mb-1 border-1-gray-tag rounded box-shadow" src="/assets/images/twirlmate/twirlmate-color.png" alt="" />
<img class="w-100 d-block mb-1 border-1-gray-tag rounded box-shadow" src="/assets/images/twirlmate/twirlmate-typography.png" alt="" />
<img class="w-100 d-block border-1-gray-tag rounded box-shadow responsive-margin-bottom" src="/assets/images/twirlmate/twirlmate-inputs.png" alt="" />

<div class="nhm-card--horizontal image-last--mobile responsive-margin-bottom">
  <div class="nhm-card__image-wrapper">
      <img src="/assets/images/twirlmate/twirlmate-v1-prototype.png" class="mxh-300 nhm-card__image border-1-gray-tag rounded box-shadow" alt="" />
  </div>
  <div>
    <h2 class="mt-0">Replicate The Original Flow</h2>
    <p class="p--lg">
      To have full confidence in the redesign, I needed to test it against
      the original flow. So, I replicated the account and registration 
      process of the live site in Figma.
    </p>
    <p class="p--lg">
      I could have used Twirlmate's staging or production site, but I 
      chose to create a Figma prototype so usability test participants
      had a consistent experience between the original and new designs.
    </p>
  </div>
</div>

<div class="nhm-card--horizontal image-last--mobile responsive-margin-bottom">
  <div class="nhm-card__image-wrapper">
      <img src="/assets/images/twirlmate/twirlmate-v1-evaluation.svg" class="w-auto nhm-card__image" alt="" />
  </div>
  <div>
    <h2 class="mt-0">Identify Areas for Improvement</h2>
    <p class="p--lg">
      During this step, I also identified places where the responsive layout
      wasn't optimized for mobile users, or the general experience could be better:
    </p>
    <ul class="p--lg">
      <li>
        <p class="p--lg">Detail page headers were too tall, causing extra scrolling.</p>
      </li>
      <li>
        <p class="p--lg">Vertically-stacked tabs felt awkward.</p>
      </li>
      <li>
        <p class="p--lg">
          The confirmation page did nothing to summarize the user's purchase after it succeeded.
        </p>
      </li>
    </ul>
  </div>
</div>

<div class="responsive-margin-bottom align--center--700-and-up">
  <h2>Reduce Scrolling</h2>
  <p class="p--lg align--left">
    I experimented with different layouts and image ratios to find the right
    balance between visual interest, readability, and usability. The final result
    prioritized the event name while still showcasing the thumbnail image
    for brand recognition.
  </p>
  <img src="/assets/images/twirlmate/twirlmate-header-redesign.png" class="w-100" alt="" />
</div>

<div class="responsive-margin-bottom align--center--700-and-up">
  <h2>Add Helpful Confirmation Info</h2>
  <p class="p--lg align--left">
    During the checkout process, users have two opportunities to review their purchase. Still,
    the page they see upon successful payment felt like a natural place to summarize the information
    one more time—after all, how many times have any of us double- or triple-checked something
    only to find an issue after we thought we were done?
  </p>
  <img src="/assets/images/twirlmate/twirlmate-confirmation-page.png" class="w-100" alt="" />
</div>

<div class="responsive-margin-bottom align--center--700-and-up">
  <h2>Fix the Main Problem</h2>
  <p class="p--lg align--left">
    Finally, the most important issue: providing new users with smooth path between setting
    up their accounts and registering for a contest. I considered just linking to the event
    list page from the account homepage. But that would only eliminate one click from the process.
    Users would still have to find the contest on the event list page and navigate to the registration page.
  </p>
  <p class="p--lg align--left">
    The best solution was to keep the user on the contest page the entire time, from account
    set-up straight into registration. That way, there was no need for additional wayfinding support.
  </p>
  <img src="/assets/images/twirlmate/twirlmate-main-problem-fix.png" class="w-100" alt="" />
</div>

<div class="nhm-card--horizontal image-last--mobile responsive-margin-bottom">
  <div class="nhm-card__image-wrapper">
    <img src="/assets/images/twirlmate/twirlmate-research-design.png" class="nhm-card__image" alt="" />
  </div>
  <div>
    <h2 class="mt-0">Design the Study</h2>
    <p class="p--lg">
      After prototyping the original and redesign flows, I was ready to plan the testing.
    </p>
    <p class="p--lg">
      I wanted each participant to see both designs. But to avoid an ordering bias, I
      created two groups. Participants in group A would see the original version, followed by the new one; 
      participants in group B would see the new version, followed by the old one. To encourage honest feedback,
      participants would not know which group they were in or which version they were seeing.
    </p>
    <p class="p--lg">
      After each prototype, participants would rate it based on the System Usability Scale (10 questions proven
      to measure how user-friendly people find a digital product).
    </p>
    <p class="p--lg">
      As they completed the account setup and registration tasks, I planned to ask them non-leading, open-ended questions
      such as, "What is your first impression of this page?", "What are you thinking now?", "How does this
      match up with your expectations?". 
    </p>
  </div>
</div>

<div class="nhm-card--horizontal responsive-margin-bottom">
  <div class="nhm-card__image-wrapper">
    <img src="/assets/images/twirlmate/twirlmate-recruitment.png" class="nhm-card__image rounded" alt="" />
  </div>
  <div>
  `<h2 class="mt-0">Recruit Participants</h2>
    <p class="p--lg">
      My recruitment criteria were baton twirling parents or coaches
      who have been active in the sport this past year and preferably hadn't used Twirlmate before.
    </p>
    <p class="p--lg">
      I first reached out to a core group of beta testers who'd previously expressed interest in testing new features. 
      But once I didn't hear from them, I turned to the Facebook baton twirling community. After offering $15
      Amazon gift cards in exchange for a 30-minute session, I had 3 parents and 2 coaches lined up.
    </p>
  </div>
</div>


<div class="nhm-card--horizontal image-last--mobile responsive-margin-bottom">
  <div class="nhm-card__image-wrapper">
    <img src="/assets/images/twirlmate/twirlmate-notes.png" class="nhm-card__image" alt="" />
  </div>
  <div>
    <h2>Conduct Usability Tests</h2>
    <p class="p--lg">
      Without anything about the prototypes in between tests, I ran 5 30-minute usability sessions.
    </p> 
    <p class="p--lg">
      I captured positive and constructive user feedback with hand-written notes:
    </p>
    <p class="p--lg align--left mb-0">
      "It was a big jump to go from setting up my account to registering for the contest."
    </p>
    <p class="mt-0">- P1 [Original Design]</p>
    <p class="p--lg align--left mb-0">
      "That was 100% easier the second time. I could figure that out myself."
    </p>
    <p class="mt-0">- P1 [New Design]</p>
  </div>
</div>

<div class="nhm-card--horizontal image-last--mobile responsive-margin-bottom">
  <div class="nhm-card__image-wrapper">
    <img src="/assets/images/twirlmate/twirlmate-welcome-v1.png" class="nhm-card__image" alt="" />
  </div>
  <div>
    <h2>An Unexpected Finding</h2>
    <p class="p--lg">
      To my surprise, one user actually praised part of the original design:
    </p>
    <p class="p--lg">
      "I like the 'welcome' message. It feels warm and friendly. It's also reassuring to know I can change this information later if I make a mistake."
    </p> 
    <p class="p--lg">
      This was a good reminder not to abandon a previous design too quickly/entirely
      just because part of it isn't working perfectly.
    </p> 
  </div>
</div>

<div class="nhm-card--horizontal image-last--mobile responsive-margin-bottom">
  <div class="nhm-card__image-wrapper">
    <img src="/assets/images/twirlmate-a-b.svg" class="nhm-card__image" alt="" />
  </div>
  <div>
    <h2>Measuring Usability</h2>
    <p class="p--lg">
      Aftwards, I calculated each design's system usability scale score.
    </p>
    <p class="p--lg">
      The original version received a score of 65, slightly below the 68% industry average.
    </p>
    <p class="p--lg">
      But, the new version performed much better! It received a score of 89!
    </p>
  </div>
</div>

<div class="nhm-wrapper align--center--700-and-up responsive-margin-bottom">
  <h2>The Result</h2>
  <p class="p--lg">
    By leveraging user feedback and thoughtfully evaluating the current state of the app,
    I was able to increase the mobile usability of Twirlmate's account setup and registration
    process by 36%.
  </p>
  <img class="d-block w-100" src="{{ page.hero_image }}" alt="">
</div>

<div class="responsive-margin-bottom align--center--700-and-up">
  <h2>Want to see more?</h2>
  <a class="nhm-btn--blue" href="https://www.twirlmate.com/" target="_blank">
    View the Live Site
  </a>
</div>





