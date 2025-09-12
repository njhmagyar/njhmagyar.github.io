---
supertitle: Codespec
title: Optimizing a GenAI user experience
permalink: projects/codespec/
project_url: https://www.codespec.org/
tagline: I employed informal interviewing, user-centered design thinking, AI-powered prototyping, and usability testing to transform a confusing content authoring flow into a guided collaboration experience between computer science instructors and GenAI.
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
published: false
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
    <img src="/assets/images/codespec/codespec-new-problem--before.png" class="nhm-card__image rounded" alt="" />
  </div>
  <div>
    <h2>The Problem(s)</h2>
    <p class="p--lg mt-0">
      Codespec offers instructors a way to create problems with the help of generative AI, but the process was confusing to them. Key issues included:
    </p>
    <p class="p--lg mt-0">
      A. Lack of context in the problem creation flow: "What step am I on?"
    </p>
    <p class="p--lg mt-0">
      B. Mismatch between which content the user needed to provide vs GenAI: "Can't I just provide a theme and have GenAI create the title/instructions?"
    </p>
    <p class="p--lg mt-0">
      C. Non-linear/unclear steps in the workflow: "Where do I go next?"
    </p>
  </div>
</div>

<div class="nhm-card--horizontal image-last--mobile responsive-margin-bottom">
  <div href="{{ project.url }}" class="nhm-card__image-wrapper">
    <img src="/assets/images/codespec/codespec-challenge.svg" class="mxh-300 nhm-card__image" alt="" />
  </div>
  <div>
    <h2>The Goals</h2>
    <p class="p--lg mt-0">
      I transformed these painpoints into "how might we" questions:
    </p>
    <p class="p--lg mt-0">
      A. How might we convey the whole problem author process to instructors, and tell them where they're at as they progress?
    </p>
    <p class="p--lg mt-0">
      B. How might we reduce content authoring burden on instructors without sacrificing pedagogical quality?
    </p>
    <p class="p--lg mt-0">
      C. How might we connect each step of the authoring flow more seamlessly?
    </p>
  </div>
</div>

<div class="nhm-card--horizontal image-last--mobile responsive-margin-bottom">
  <div class="nhm-card__image-wrapper">
    <img src="/assets/images/codespec/codespec-claude-reveal.png" class="nhm-card__image" alt="" />
  </div>
  <div>
    <h2>The Impact</h2>
    <p class="p--lg">
      I redesigned the process of creating problems with GenAI for greater intuitiveness and more iterative collaboration with the artificial intelligence model.
    </p>
    <p class="p--lg">
      And the real kicker? It only took me 6 hours to go from a concept to a polished prototype that looked and felt like the production website
      because I used Claude Code.</p>
    <p class="p--lg">
      Instead of spending 16+ hours deep in the trenches of Figma, as I've done for other similar projects, I used prompt engineering techniques to achieve the user journey and interaction patterns I envisioned.
    </p>
  </div>
</div>

<div class="nhm-wrapper responsive-margin-bottom align--center">
<h2>Before</h2>
<img src="/assets/images/codespec/codespec-genai-before.png" class="d-block w-100 rounded" alt="" />
</div>

<div class="nhm-wrapper responsive-margin-bottom align--center">
<h2>After</h2>
<img src="/assets/images/codespec/codespec-genai-after.png" class="d-block w-100 rounded" alt="" />
</div>

<h2 class="align--center responsive-margin-bottom">How I Made It Happen</h2>

<div class="nhm-card--horizontal image-last--mobile responsive-margin-bottom">
  <div class="nhm-card__image-wrapper">
    <img src="/assets/images/construction.svg" class="mxh-300 nhm-card__image" alt="" />
  </div>
  <div>
    <h2>Collect and Synthesize V1 Feedback</h2>
    <p class="p--lg">
      In order to improve upon the first version of the workflow, I had to understand its strengths and weaknesses. So I interviewed a researcher who had used it, asking non-leading, open-ended questions.
    </p> 
    <p class="p--lg">
      I also clicked through the workflow myself with mindset of a user who was brand new to the platform.
    </p>  
  </div>
</div>

<div class="responsive-margin-bottom">
  <h2>Define Personas</h2>
  <p class="p--lg">
    Armed with a list of painpoints, I drafted personas in which to ground my design.
  </p>
  <p class="p--lg">
    Despite differences in programming knowledge, both user types are open to leveraging GenAI tools and would like to maximize output while minimizing time investment.
  </p>
  <img src="/assets/images/codespec/codespec-personas.png" class="w-100" alt="" />
</div>

<div class="nhm-card--horizontal image-last--mobile responsive-margin-bottom">
  <div href="{{ project.url }}" class="nhm-card__image-wrapper">
    <img src="/assets/images/codespec-human-in-the-loop.svg" class="mxh-300 nhm-card__image" alt="" />
  </div>
  <div>
    <h2>Define Responsibilities</h2>
    <p class="p--lg">
      The researcher I first interviewed was dissatisfied with the GenAI authoring experience. They wanted a more collaborative flow where they provided basic context (e.g., difficulty, theme, programming concepts) and GenAI took a pass at the rest.
    </p>
    <p class="p--lg">
      I responded by breaking the parts of a problem down into separate pieces, and determining which were more appropriate for users to specify vs GenAI.
    </p>
  </div>
</div>

<div class="mb-3">
  <div>
    <h2>Keep the Human-in-the-Loop</h2>
    <p class="p--lg">
      While the researcher wanted GenAI to take a first pass at writing the problem, they still wanted to retain control throughout the process to ensure pedagogical quality.
    </p>
    <p class="p--lg">
      So I mapped a user journey that reflected a prompt-generate-review cycle, keeping the author in the driver's seat at all times.
    </p>
  </div>
</div>

<div class="responsive-margin-bottom">
  <div class="bg-gray--light align--center rounded">
    <img src="/assets/images/codespec-loop.svg" class="w-100" alt="" />
  </div>
</div>

<div class="nhm-card--horizontal image-last--mobile responsive-margin-bottom">
  <div href="{{ project.url }}" class="nhm-card__image-wrapper">
    <img src="/assets/images/codespec/codespec-sketches.png" class="nhm-card__image" alt="" />
  </div>
  <div>
    <h2>Sketch Wireframes</h2>
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
    <h2>Prototype with Claude Code</h2>
    <p class="p--lg">
      To bring the design to life, I collaborated with Claude in small, specific, example-rich steps.
    </p>
    <p class="p--lg">I stated my end goal up front, but emphasized the importance of working incrementally:</p>
  </div>
</div>

<div class="responsive-margin-bottom">
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
    <h2>Debug Claude's Output</h2>
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
    <h2>Communicate System Status</h2>
    <p class="p--lg">
      As the steps of the authoring flow came together, I wanted to signal to the user when Codespec and ChatGPT were "thinking" (e.g., creating the instructions, solution, tests, etc).
    </p>
    <p class="p--lg">
      I did so visually and verbally, by animating the Codespec logo and displaying brief, clear text about what was happening.
    </p>
  </div>
</div>

<div class="nhm-card--horizontal responsive-margin-bottom image-last--mobile">
  <div href="{{ project.url }}" class="nhm-card__image-wrapper">
    <img src="/assets/images/codespec/codespec-new-problem--before-after.png" class="nhm-card__image" alt="" />
  </div>
  <div>
    <h2>Validate the Redesign</h2>
    <p class="p--lg">
      Once the prototype was complete, I went back to the researcher I first interviewed and asked them to click through it. Along the way I prompted them to share their first impressions of each step.
    </p>
    <p class="p--lg">
      Qualitative feedback indicated the redesign met the primary goals of:
    </p>
    <p class="p--lg mt-0">
      A. more clearly showing instructors where they're at in the overall creation flow
    </p>
    <p class="p--lg mt-0">
      B. balancing efficiency and quality control in the GenAI-powered authoring process
    </p>
    <p class="p--lg mt-0">
      C. more clearly guiding instructors to the appropriate next step
    </p>
  </div>
</div>

<h2 class="align--center">The Result</h2>
<p class="p--lg">
  Using informal interviewing, user-centered design thinking, AI-powered prototyping, and usability testing, I transformed a confusing content authoring flow into a guided collaboration experience between computer science instructors and GenAI.
</p>
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
