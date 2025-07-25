---
supertitle: Codespec
title: Prototyping with Claude Code to increase design speed by 62%
permalink: projects/codespec/
project_url: https://www.codespec.org/
tagline: I used Claude to collaboratively design an interactive prototype that demonstrates how instructors could use GenAI to author programming practice problems.
stack: [HTML, CSS, JavaScript, CodeMirror]
tools: [Claude Code, HTML, CSS, JavaScript]
roles: [UX Designer, Prototype Developer, AI Collaborator]
duration: July 2025 (6 hours)
order: 2
featured: true
cover_image: /assets/images/codespec/codespec-cover-new.png
thumbnail_image: /assets/images/codespec/codespec-cover-new.png
logo_image: /assets/images/codespec/codespec-cover-new.png
hero_image: /assets/images/codespec/codespec-cover-new.png
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
<div class="responsive-margin-bottom" id="codespec-prototype">
  <div class="prototype-container" style="position: relative;">
    <!-- Dark background to prevent white flash -->
    <div style="position: absolute; top: 0; left: 0; right: 0; height: 600px; background: #171e32; border-radius: 8px; z-index: 1;"></div>
    <iframe src="https://www.nathanmagyar.com/codespec-gen-ai-problems/" width="100%" height="600" frameborder="0" style="border-radius: 8px; position: relative; z-index: 2;"></iframe>
  </div>
  <p class="text--small text--gray mt-1">
    <em>Note: This is a functional prototype built with HTML, CSS, and JavaScript to demonstrate the user interface and flow.</em>
  </p>
</div>

<div class="nhm-wrapper responsive-margin-bottom">
  <p class="align--center p--lg mw-680 mx-auto">
    Codespec is an online programming practice environment where learners of all levels can solve each problem 5 ways.
  </p>
</div>

<div class="nhm-card--horizontal image-last--mobile responsive-margin-bottom">
  <div href="{{ project.url }}" class="nhm-card__image-wrapper">
    <img src="/assets/images/codespec-time.svg" class="mxh-300 nhm-card__image" alt="" />
  </div>
  <div>
    <h2>The Problem</h2>
    <p class="p--lg">
      The current authoring interface allowed for fine-grained control over all aspects of a practice problem. But, creating each problem by hand took up to 20 minutes—way too long!
    </p>
  </div>
</div>

<div class="nhm-card--horizontal image-last--mobile responsive-margin-bottom">
  <div href="{{ project.url }}" class="nhm-card__image-wrapper">
    <img src="/assets/images/codespec/codespec-challenge.svg" class="mxh-300 nhm-card__image" alt="" />
  </div>
  <div>
    <h2>The Goal</h2>
    <p class="p--lg">I wanted to explore: how might Codespec enhance the content creation workflow with GenAI while continuing to leverage instructor expertise for pedagogical quality?</p>
  </div>
</div>

<div class="nhm-card--horizontal image-last--mobile responsive-margin-bottom">
  <div href="{{ project.url }}" class="nhm-card__image-wrapper">
    <img src="/assets/images/codespec/codespec-claude-reveal.png" class="nhm-card__image" alt="" />
  </div>
  <div>
    <h2>The Impact</h2>
    <p class="p--lg">
      In just 6 hours, I used Claude Code to go from a concept to a polished prototype that looked and felt like the production website.</p>
    <p class="p--lg">
      Instead of spending 16+ hours creating a design system and component library in Figma, making pixel-perfect adjustments and responsive behavior improvements in design mode, and wiring screens together for the prototype, I used prompt engineering techniques to achieve the user journey and interaction patterns I envisioned.
    </p>
  </div>
</div>

<h2 class="align--center responsive-margin-bottom">How I Made It Happen</h2>

<div class="responsive-margin-bottom">
  <h2>Define Personas</h2>
  <p class="p--lg">
    I started by defining my target users: computer science educators and researchers struggling to generate
    high-quality practice problems due to limited time or knowledge.
  </p>
  <p class="p--lg">
    Despite differences in programming experience, both personas are open to using new tools and would like to maximize output while minimizing time investment.
  </p>
  <img src="/assets/images/codespec/codespec-personas.png" class="w-100" alt="" />
</div>

<div class="nhm-card--horizontal image-last--mobile responsive-margin-bottom">
  <div href="{{ project.url }}" class="nhm-card__image-wrapper">
    <img src="/assets/images/codespec-human-in-the-loop.svg" class="mxh-300 nhm-card__image" alt="" />
  </div>
  <div>
    <h2>Human-in-the-loop Planning</h2>
    <p class="p--lg">
      Before prototyping, I considered which attributes of programming problems instructors might want instant control over to ensure high quality output.
    </p>
    <p class="p--lg">
      I also identified aspects that AI could take a first pass at before handing them back to a human to review
    </p>
  </div>
</div>

<div class="mb-3">
  <div>
    <h2>User Journey Mapping</h2>
    <p class="p--lg">
      Then, I determined the order for collecting, generating, and reviewing the above attributes.
      The workflow needed to balance AI efficiency with human oversight at each step:
    </p>
  </div>
</div>

<div class="responsive-margin-bottom">
  <div class="bg-gray--light align--center">
    <img src="/assets/images/codespec-loop.svg" class="mt-2 w-100" alt="" />
  </div>
</div>

<div class="nhm-card--horizontal image-last--mobile responsive-margin-bottom">
  <div href="{{ project.url }}" class="nhm-card__image-wrapper">
    <img src="/assets/images/codespec/codespec-sketches.png" class="nhm-card__image" alt="" />
  </div>
  <div>
    <h2>Wireframe Sketching</h2>
    <p class="p--lg">
      With this flow in mind, I sketched out each screen. I imagined a linear wizard-like experience, where
      each step focused on a few key pieces about the problem.
    </p>
    <p class="p--lg">
      I wanted the interface to feel approachable and clean, so authors could focus on the content rather than trying understand how to use the system.
    </p>
  </div>
</div>

<div class="nhm-card--horizontal mb-3 image-last--mobile">
  <div href="{{ project.url }}" class="nhm-card__image-wrapper">
    <img src="/assets/images/codespec-claude-chat.svg" class="mxh-300 nhm-card__image" alt="" />
  </div>
  <div>
    <h2>Iterative Protoyping with Claude Code</h2>
    <p class="p--lg">
      I collaborated with Claude in small, specific, example-rich steps to bring the design to life.
    </p>
    <p class="p--lg">I stated my end goal up front, but emphasized the importance of working incrementally:</p>
  </div>
</div>

<div class="nhm-wrapper responsive-margin-bottom">
  <p class="p--lg">
    "Using HTML, CSS, and JavaScript, I want to prototype a wizard flow
    for authoring programming practice problems with GenAI. The interface should look and feel like Codespec's
    production website (https://www.codespec.org). Let's create the prototype step by step.
  </p>
  <p class="p--lg">
    Start by retrieving Codespec's stylesheet and JavaScript files, and saving them to a folder on my computer. Link to them from an index.html file in the same folder. You can create boilerplate HTML structure (head, body, main) but nothing else yet."
  </p>
</div>

<div class="nhm-card--horizontal responsive-margin-bottom image-last--mobile">
  <div href="{{ project.url }}" class="nhm-card__image-wrapper">
    <img src="/assets/images/codespec/codespec-claude-debug.svg" class="nhm-card__image" alt="" />
  </div>
  <div>
    <h2>Debugging Claude's Output</h2>
    <p class="p--lg">
      Most of Claude's output was readily usable, but as I tested it I found a few things that needed adjustment.
    </p>
    <p class="p--lg">
      For example, Claude gave all links href values of "#"" by default, which created unexpected behavior when you clicked on them. I needed to find a way to "deactivate" elements I didn't need to be clickable in the prototype.
    </p>
  </div>
</div>

<div class="nhm-card--horizontal responsive-margin-bottom image-last--mobile">
  <div href="{{ project.url }}" class="nhm-card__image-wrapper mw-100p">
    <div class="prototype-container" style="position: relative;">
      <!-- Dark background to prevent white flash -->
      <div style="position: absolute; top: 0; left: 0; right: 0; height: 600; background: #171e32; border-radius: 8px; z-index: 1;"></div>
      <iframe src="https://www.nathanmagyar.com/codespec-gen-ai-problems/loading.html" width="100%" height="600" frameborder="0" style="border-radius: 8px; position: relative; z-index: 2;"></iframe>
    </div>
  </div>
  <div>
    <h2>Communicating System Status</h2>
    <p class="p--lg">
      As the steps of the authoring flow came together, I wanted to signal to the user when Codespec and ChatGPT were "thinking" (e.g., creating the instructions, solution, tests, etc).
    </p>
    <p class="p--lg">
      I did so visually and verbally, by animating the Codespec logo and displaying brief, clear text about what was happening.
    </p>
  </div>
</div>

<div class="nhm-card--horizontal responsive-margin-bottom image-last--mobile">
  <div href="{{ project.url }}" class="nhm-card__image-wrapper mw-100p">
    <div class="prototype-container" style="position: relative;">
      <!-- Dark background to prevent white flash -->
      <div style="position: absolute; top: 0; left: 0; right: 0; height: 250; background: #171e32; border-radius: 8px; z-index: 1;"></div>
      <iframe src="https://www.nathanmagyar.com/codespec-gen-ai-problems/pulse.html" width="100%" height="250" frameborder="0" style="border-radius: 8px; position: relative; z-index: 2;"></iframe>
    </div>
  </div>
  <div>
    <h2>Signaling Interactivity</h2>
    <p class="p--lg">
      Since this prototype was for demonstration purposes only (not usability testing), I wanted to help users
      navigate its limited functionality. I understand that portfolio reviewers have a limited amount of time, so it was important to help them experience the demo as quickly and easily as possible.
    </p>
    <p class="p--lg">
      I asked Claude to apply a gentle "pulsing" box shadow to a specific set of inputs and buttons that facilitated the interaction flow.
    </p>
  </div>
</div>

<h2 class="align--center">The Result</h2>
<div class="responsive-margin-bottom" id="codespec-prototype">
  <div class="prototype-container" style="position: relative;">
    <!-- Dark background to prevent white flash -->
    <div style="position: absolute; top: 0; left: 0; right: 0; height: 600px; background: #171e32; border-radius: 8px; z-index: 1;"></div>
    <iframe src="https://www.nathanmagyar.com/codespec-gen-ai-problems/" width="100%" height="600" frameborder="0" style="border-radius: 8px; position: relative; z-index: 2;"></iframe>
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
    I was able to assemble a hyper-realistic prototype 62% faster because I provided Claude with HTML, CSS, and JavaScript directly from Codespec's production website. After establishing a strong foundational design system with Claude, I worked effectively in small, incremental steps to bring the experience I imagined to life.
  </p>
</div>