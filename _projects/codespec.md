---
supertitle: Codespec
title: Using GenAI to create programming practice problems
permalink: projects/codespec/
project_url: https://www.codespec.org/
tagline: I designed, prompt-engineered, and built an interface for computer science instructors to create programming problems with the help of Chat GPT.
stack: [Python/Django, JavaScript/Vue, HTML, SCSS]
tools: [Figma, Python/Django, JavaScript/Vue, HTML, SCSS]
roles: [Solo UX Designer, Prompt Engineer, Solo Developer]
duration: June - July 2024
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
published: true
---
<div class="nhm-card--horizontal image-last--mobile responsive-margin-bottom">
  <div href="{{ project.url }}" class="nhm-card__image-wrapper">
    <img src="/assets/images/codespec-falling.svg" class="mxh-300 nhm-card__image" alt="" />
  </div>
  <div>
    <h2>The Original Problem</h2>
    <p class="p--lg">For novices, learning to program can be a frustrating and discouraging experience.</p>
    <p class="p--lg">It requires mastery of many concepts: logic, syntax, data types, and more—all of which learners have to apply simultaneously.</p>
  </div>
</div>

<div class="nhm-card--horizontal image-last--mobile responsive-margin-bottom">
  <div href="{{ project.url }}" class="nhm-card__image-wrapper">
    <img src="/assets/images/codespec-interface.svg" class="mxh-300 nhm-card__image" alt="" />
  </div>
  <div>
  `<h2>The Original Solution</h2>
    <p class="p--lg">
      That's why I partnered with an academic researcher to design and build <a href="https://www.codespsec.com">Codespec</a>, 
      a Python programming practice environment that offers learners 5 ways to solve each problem (e.g., plain English, code blocks, writing code from scratch, etc).
    </p>
  </div>
</div>

<div class="nhm-card--horizontal image-last--mobile responsive-margin-bottom">
  <div href="{{ project.url }}" class="nhm-card__image-wrapper">
    <img src="/assets/images/codespec-time.svg" class="mxh-300 nhm-card__image" alt="" />
  </div>
  <div>
    <h2>The Need for GenAI</h2>
    <p class="p--lg">
      Using the original interface, it took me 15 minutes on average to create a single problem. Yikes, that's a long time!
    </p>
    <p class="p--lg">
      Fortunately, large language models have been found to create high quality educational questions for online learning at scale (Bulathwela, Muse, and Yilmaz <a href="https://www.tandfonline.com/doi/full/10.1080/0144929X.2024.2394886#" target="_blank">2023</a>; Wang et al. Citation <a href="https://www.tandfonline.com/doi/full/10.1080/0144929X.2024.2394886#" target="_blank">2022</a>).
    </p>
  </div>
</div>

<div class="nhm-card--horizontal responsive-margin-bottom image-last--mobile">
  <div href="{{ project.url }}" class="nhm-card__image-wrapper">
    <img src="/assets/images/codespec-human-in-the-loop.svg" class="mxh-300 nhm-card__image" alt="" />
  </div>
  <div>
    <h2>The Human-in-the-Loop</h2>
    <p class="p--lg">
      However, in keeping with the <a href="https://cloud.google.com/discover/human-in-the-loop" target="_blank">human-in-the-loop</a> approach, I viewed GenAI as an <em>enhancement</em> of human expertise, not a <em>replacement</em>.
    </p>
    <p class="p--lg">I wanted instructors to guide and evaluate the content as Chat GPT created it.
    </p>
    <p class="p--lg">So I made a list of data points that would be human- vs AI-generated.</p>
  </div>
</div>

<div class="responsive-margin-bottom">
  <p class="p--lg">
    I also thought about how instructors would remain involved in reviewing/modifying the output:
  </p>
  <div class="bg-gray--light align--center">
    <img src="/assets/images/codespec-loop.svg" class="mt-2 w-100" alt="" />
  </div>
</div>

<div class="nhm-card--horizontal image-last--mobile responsive-margin-bottom">
  <div href="{{ project.url }}" class="nhm-card__image-wrapper">
    <img src="/assets/images/codespec-authoring-choice.png" class="nhm-card__image rounded" alt="" />
  </div>
  <div>
    <h2>The AI-Enhanced Experience</h2>
    <p class="p--lg">
      Next, I considered how this new flow would exist within the broader context of the app.
    </p>
    <p class="p--lg">
      I opted to give instructors the choice: use the original flow for maximum control, or leverage generative AI.
    </p>
  </div>
</div>

<div class="responsive-margin-bottom">
  <h2>Interactive Prototype</h2>
  <p class="p--lg">
    Below is an interactive prototype of the AI-enhanced problem creation flow. This demonstrates how instructors would navigate through the system to create programming problems with GenAI assistance.
  </p>
  <div class="prototype-container bg-gray--light p-2 rounded" style="position: relative;">
    <!-- Dark background to prevent white flash -->
    <div style="position: absolute; top: 2rem; left: 2rem; right: 2rem; height: 600px; background: #171e32; border-radius: 8px; z-index: 1;"></div>
    <iframe src="/assets/codespec-prototype/index.html" width="100%" height="600" frameborder="0" style="border-radius: 8px; position: relative; z-index: 2;"></iframe>
  </div>
  <p class="text--small text--gray mt-1">
    <em>Note: This is a functional prototype built with HTML, CSS, and JavaScript to demonstrate the user interface and flow.</em>
  </p>
</div>

<div class="nhm-card--horizontal image-last--mobile responsive-margin-bottom">
  <div href="{{ project.url }}" class="nhm-card__image-wrapper">
    <img src="/assets/images/construction.svg" class="mxh-300 nhm-card__image" alt="" />
  </div>
  <div>
    <h2>The One-Shot Prompt</h2>
    <p class="p--lg">
      For the prompt itself, I provided Chat GPT with detailed instructions for the task at hand, as well as an example of the desired output.
    </p>
  </div>
</div>

<div class="nhm-card--horizontal image-last--mobile responsive-margin-bottom">
  <div href="{{ project.url }}" class="nhm-card__image-wrapper">
    <img src="/assets/images/construction.svg" class="mxh-300 nhm-card__image" alt="" />
  </div>
  <div>
    <h2>The Implementation</h2>
    <p class="p--lg">
      I used HTML forms to collect instructor parameters and integrated Chat GPT's API into the backend.
    </p>
    <p class="p--lg">
      Then, I parsed the result, validated it, and saved it to the database for future retrieval/modification.
    </p>
  </div>
</div>

<div class="nhm-card--horizontal image-last--mobile responsive-margin-bottom">
  <div href="{{ project.url }}" class="nhm-card__image-wrapper">
    <img src="/assets/images/construction.svg" class="mxh-300 nhm-card__image" alt="" />
  </div>
  <div>
    <h2>The Result</h2>
    <p class="p--lg">
      Ultimately, using Chat GPT reduced problem authoring time from 15 minutes to 30 seconds!
    </p>
  </div>
</div>

<div class="nhm-card--horizontal image-last--mobile responsive-margin-bottom">
  <div href="{{ project.url }}" class="nhm-card__image-wrapper">
    <img src="/assets/images/construction.svg" class="mxh-300 nhm-card__image" alt="" />
  </div>
  <div>
    <h2>Next Steps</h2>
    <p class="p--lg">
      In future iterations, I'd like to optimize the user experience and final output by changing the input provided by authors versus Chat GPT.
    </p>
    <p class="p--lg">
      It would also be useful to allow authors to evaluate Chat GPT's performance, so I can track user satisfaction and content quality.
    </p>
    <p class="p--lg">
      Finally, I would like to add content guard rails to the prompt, to prevent inappropriate or harmful material.
    </p>
  </div>
</div>

<div class="responsive-margin-bottom align--center--700-and-up">
  <h2>Key Takeaway</h2>
  <p class="p--lg">
    Prioritizing human-in-the-loop experiences in the design process is the best way to balance traditional user-centered design with modern tools.
  </p>
  <img src="/assets/images/construction.svg" class="mt-2 mxh-300" alt="" />
</div>