---
supertitle: Codespec
title: Prototyping an AI-Enhanced Problem Creation Flow with Claude Code
permalink: projects/codespec/
project_url: https://www.codespec.org/
tagline: I used Claude to collaboratively design and build an interactive prototype demonstrating how AI could streamline programming problem creation workflows.
stack: [HTML, CSS, JavaScript, CodeMirror]
tools: [Claude Code, HTML, CSS, JavaScript]
roles: [UX Designer, Prototype Developer, AI Collaborator]
duration: July 2025
order: 2
featured: true
cover_image: /assets/images/codespec-cover.svg
thumbnail_image: /assets/images/codespec-cover.svg
logo_image: /assets/images/codespec-cover.svg
hero_image: /assets/images/codespec-hero.png
screenshots: [
  /assets/images/codespec-hero.png,
  /assets/images/codespec/screenshots/homepage.png,
  /assets/images/codespec/screenshots/console.png,
  /assets/images/codespec/screenshots/problem-bank.png,
  /assets/images/codespec/screenshots/problem-preview.png,
  /assets/images/codespec/screenshots/unit-test-feedback.png,
  /assets/images/codespec/screenshots/workbook-list.png,
  /assets/images/codespec/screenshots/workbook-console.png,
  /assets/images/codespec/screenshots/survey-console.png,
]
read_more: []
prototype_id: "codespec-prototype"
published: true
---
<div class="nhm-card--horizontal image-last--mobile responsive-margin-bottom">
  <div href="{{ project.url }}" class="nhm-card__image-wrapper">
    <img src="/assets/images/codespec-challenge.svg" class="mxh-300 nhm-card__image" alt="" />
  </div>
  <div>
    <h2>The Challenge</h2>
    <p class="p--lg">I wanted to demonstrate how AI could enhance educational content creation workflows.</p>
    <p class="p--lg">The goal: show how instructors could use AI to rapidly generate programming practice problems while maintaining pedagogical quality and control.</p>
  </div>
</div>

<div class="nhm-card--horizontal image-last--mobile responsive-margin-bottom">
  <div href="{{ project.url }}" class="nhm-card__image-wrapper">
    <img src="/assets/images/codespec-interface.svg" class="mxh-300 nhm-card__image" alt="" />
  </div>
  <div>
    <h2>The Context</h2>
    <p class="p--lg">
      I had previously built <a href="https://www.codespec.org">Codespec</a>, a Python programming practice environment that offers learners 5 ways to solve each problem (pseudocode, code blocks, fill-in-the-blank, etc.).
    </p>
  </div>
</div>

<div class="nhm-card--horizontal image-last--mobile responsive-margin-bottom">
  <div href="{{ project.url }}" class="nhm-card__image-wrapper">
    <img src="/assets/images/codespec-time.svg" class="mxh-300 nhm-card__image" alt="" />
  </div>
  <div>
    <h2>The Time Problem</h2>
    <p class="p--lg">Creating problems manually was time-consuming, so I wanted to prototype an AI-enhanced workflow.</p>
  </div>
</div>

<div class="nhm-card--horizontal image-last--mobile responsive-margin-bottom">
  <div href="{{ project.url }}" class="nhm-card__image-wrapper">
    <img src="/assets/images/codespec-human-in-the-loop.svg" class="mxh-300 nhm-card__image" alt="" />
  </div>
  <div>
    <h2>Preparing to Prototype</h2>
    <p class="p--lg">
      Before prototyping, I considered which attributes of programming problems instructors might want instant control over to ensure high quality output.
    </p>
    <p class="p--lg">
      I also identified aspects that AI could take a first pass at before handing them back to a human to review
    </p>
  </div>
</div>

<div class="responsive-margin-bottom">
  <p class="p--lg">
    The workflow needed to balance AI efficiency with human oversight at each step:
  </p>
  <div class="bg-gray--light align--center">
    <img src="/assets/images/codespec-loop.svg" class="mt-2 w-100" alt="" />
  </div>
</div>

<div class="nhm-card--horizontal responsive-margin-bottom image-last--mobile">
  <div href="{{ project.url }}" class="nhm-card__image-wrapper">
    <img src="/assets/images/codespec-claude-chat.svg" class="mxh-300 nhm-card__image" alt="" />
  </div>
  <div>
    <h2>Collaborative Design with Claude Code</h2>
    <p class="p--lg">
      I used <a href="https://claude.ai/code" target="_blank">Claude Code</a> as my coding partner to rapidly prototype the interface. This meta-experience was fascinating: using AI to design workflows <em>for</em> AI.
    </p>
    <p class="p--lg">Through iterative conversation, we built a 5-step wizard that simulates how instructors would collaborate with AI to create programming problems.
    </p>
  </div>
</div>

<div class="responsive-margin-bottom" id="codespec-prototype">
  <h2 class="align--center">The Final Prototype</h2>
  <div class="prototype-container" style="position: relative;">
    <!-- Dark background to prevent white flash -->
    <div style="position: absolute; top: 0; left: 0; right: 0; height: 600px; background: #171e32; border-radius: 8px; z-index: 1;"></div>
    <iframe src="/assets/codespec-prototype/index.html" width="100%" height="600" frameborder="0" style="border-radius: 8px; position: relative; z-index: 2;"></iframe>
  </div>
  <p class="text--small text--gray mt-1">
    <em>Note: This is a functional prototype built with HTML, CSS, and JavaScript to demonstrate the user interface and flow.</em>
  </p>
</div>

<div class="responsive-margin-bottom align--center--700-and-up">
  <h2>Key Takeaway</h2>
  <p class="p--lg">
    GenAI thrives on specificity and examples.
  </p>
  <p class="p--lg">
    I was able to assemble a hyper-realistic prototype in 4 hours because I provided Claude with HTML, CSS, and JavaScript directly from Codespec's production website. After establishing a strong foundational design system with Claude, it was relatively easy to work in small, incremental changes to bring the experience I imagined to life.
  </p>
  <img src="/assets/images/construction.svg" class="mt-2 mxh-300" alt="" />
</div>