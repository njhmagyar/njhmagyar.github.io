---
title:  "Using Comparative Analysis to Inform Feature Design and Direction"
category: codespec
roles: [UX Research, UX Design]
project: Codespec
image: /assets/images/codespec/comparative-analysis/cover.png
description: "How I identified and evaluated competitors to guide Codespec's initial designs."
---
{% assign project = site.projects | where: 'name', page.project | first %}
**Project:** <a href="{{ project.url }}" class="text--link">{{ project.name }}</a>

**My Role:** UX Researcher, UX Designer

**Methods and Tools:** Comparative Analysis, Prototyping

## The Problem
{:.mt-3}
When the idea for a more flexible, supportive programming practice tool came about, my co-founder and I felt like we had a unique idea. While there were likely already many players in this space, none of them seemed to offer a wider range of ways to solve a programming challenge. 

However, this was just a gut feeling. Without more concrete knowledge of competitors' key features, strengths, and weaknesses, we risked designing a product that was either too similar to something that was already in the market or lacking in "standard" functionality.

So rather than design in a vacuum, I took a moment to perform a comparative analysis.

## The Process
{:.mt-3}

### Define Research Questions
{:.mt-3}
First, I clarified my objectives for the analysis and formed research questions to answer them:

1. Who are Codespec's top direct and indirect competitors?

2. Among competitors, what functionality do they have in common? What is considered standard?

3. What opportunities exist for Codespec to differentiate itself in the market?

4. What are competitors doing well or not so well?

### Identify Competitors
{:.mt-3}

Next, I scoured the internet for products that were either serving the same population of users with the same product (direct competitors) or were offering a product with some aspects of what we had in mind for Codespec (indirect competitors).

#### Direct Competitors

- **[Edabit](https://edabit.com/)** - A gamified programming practice platform that focuses on bite-sized challenges in C#, C++, Java, JavaScript, PHP, and Python.

- **[Codewars](https://www.codewars.com/)** - A highly social, mastery-focused programming practice platform where learners complete challenges called "kata" to level-up their skills in over 55 languages.

- **[LeetCode](https://leetcode.com/)** - A technical interview preparation tool with over 3500 problems in 14 languages.

#### Indirect Competitors

In reality there were many more indirect competitors than those listed here. I arrived at the following list by considering which competitors had the most relevance to Codespec.

- **[zyBooks](https://www.zybooks.com/)** - An interactive e-book platform for STEM courses offering rich digital learning content such as auto-graded exercises, simulations, and animations.

- **[Rhunestone Academy](https://landing.runestone.academy/)** - An open-source online textbook platform for math and computer science. E-books offer explanations, examples, and exercises for mastering STEM concepts.

- **[freeCodeCamp](https://www.freecodecamp.org/learn)** - A free curriculum for mastering full-stack development, data science and machine learning. Learners receive course completion certificates after successfully building real world projects that must pass unit tests.

- **[Khan Academy](https://www.khanacademy.org/)** - A free K-12 focused learning platform offering video-based courses on subjects ranging from math and economics to science and reading. Lessons are adaptive to student performance, and teachers have access to monitoring and management tools.

### Establish parameters and perform a UX audit
{:.mt-3}

Next, I determined the scope of the analysis. Codespec's most important user experience would be that of the problem solving interface, so I started there. 

I explored each competitor's programming interface to get a sense for the overall structure and experience. This led me to 4 general feature categories on which I would perform a more detailed analysis: the problem instructions/prompt area, problem solving methods, help options, and feedback.

To complete the deeper audit, I created a table of features and documented my findings with screenshots from each application.

Edabit's interface (below) turned out to be the simplest (fewest bells and whistles), which I viewed as a strength. Their UI is friendly to beginners and uses a clear set of tabs for organizing key parts of the page. On the downside, they don't offer block-based ways of solving problems, which would provide even more support for early learners.

![Edabit Screenshot with Feature Annotations](/assets/images/codespec/comparative-analysis/edabit-audit.png "Edabit Screenshot with Feature Annotations"){:.w-100.my-3}

Codewars' interface (below) felt the most social. Their UI is packed with metadata and features that connect programmers with other users so they can communicate with and learn from each other. What I liked about their interface is that almost nothing is hidden behind a tab or dropdown menu. However, the sophisticated featureset could be overwhelming to newcomers.

![Codewars Screenshot with Feature Annotations](/assets/images/codespec/comparative-analysis/codewars-audit.png "Codewars Screenshot with Feature Annotations"){:.w-100.my-3}

Leetcode's interface (below) was well-organized, highly polished, and flexible. It makes room for the most important sections of information, such as the instructions and IDE. And it allows users to reconfigure/personalize the space to meet their needs. However, the lack of block-based options means this product is less accessible to programmers who are just starting out.

![Leetcode Screenshot with Feature Annotations](/assets/images/codespec/comparative-analysis/leetcode-audit.png "Leetcode Screenshot with Feature Annotations"){:.w-100.my-3}

### Document findings and identify trends
{:.mt-3}

As I explored each competitor more thoroughly, I added their characteristics to a spreadsheet, which ultimately helped me glean insights and identify trends within each general category.

#### Instructions

Most competitors' instructions utilized rich text formatting and included code samples/additional notes. A horizontal layout was also the most common, with instructions on the left and the workspace on the right.

![Instructions Analysis](/assets/images/codespec/comparative-analysis/instructions.png "Instructions Analysis"){:.w-100.mb-1}

#### Problem Solving Methods

No competitors offered plain English (pseudocode) blocks or fill-in-the-blank blocks for solving a problem. And only one competitor offered a block-based approach at all. All competitors required learners to solve problems by writing code from scratch.

![Problem Solving Methods](/assets/images/codespec/comparative-analysis/problem-solving.png "Problem Solving Methods"){:.w-100.mb-1}

#### Help Options

Help options varied widely across competitors. Many competitors exposed peer solutions once learners submitted their own attempt. And several competitors gave more human-readable feedback instead of displaying more cryptic unit test results and error messages.

![Help Options](/assets/images/codespec/comparative-analysis/help.png "Help Options"){:.w-100.mb-1}

#### Feedback
{:.mt-3}

Given that most platforms didn't offer block-based ways of solving problems, block-based feedback was rarely applicable. However, all competitors displayed programmers' standard output (e.g. print statements) and communicated unit tests results in some way.

![Feedback](/assets/images/codespec/comparative-analysis/feedback.png "Feedback"){:.w-100.mb-1}

### Answer the research questions
{:.mt-3}

At the conclusion of the analysis, I was able to answer the original research questions.

1. **Who are Codespec's top direct and indirect competitors?** Direct competitors include programming practice and technical interview preparation tools. Indirector competitors range from computer science ebook platforms to subject-agnostic online course websites.

2. **Among competitors, what functionality do they have in common? What is considered standard?** Competitors all provide content-rich instructions, an IDE where programmers write code from scratch, and unit test feedback. It is also common to display the solutions of other users.

3. **What opportunities exist for Codespec to differentiate itself in the market?** Given that only one competitor offers both block-based and write-code ways of solving programming challenges, Codespec's strongest differentiator would be its variety of problem types. By offering plain English blocks, code blocks, fill-in-the-blank blocks, fix code, and write code options, Codespec would likely be the most accessible to beginners. It could also be the most effective at helping new programmers transition into writing code on their own. 

4. **What are competitors doing well or not so well?** Competitors offer advanced social features, such as comment threads, and help mechanisms, such as hints and human-readable error messages; with the latter being particularly helpful for maintaining learner motivation and progress. However, the heavy emphasis on writing code from scratch causes their products to skew towards programmers who already have a bit of experience under their belt, rather than anyone who is brand new to the discipline.

### Apply the findings
{:.mt-3}

Armed with new knowledge about how competitors provide problem instructions, problem solving options, help, and feedback, I designed Codespec's own problem solving interface.

![Codespec Prototype](/assets/images/codespec/comparative-analysis/codespec.png "Codespec Prototype"){:.w-100.mb-1}

## Next Steps
{:.mt-3}

To follow up on these findings, I could continue to delve more deeply into one of the general feature categories, such as help options, or explore other areas of their products. It will also be good to update this analysis occasionally as each competitor continues to evolve.

## Lessons Learned
{:.mt-3}

### Comparative analysis can be done at many scales

Identifying and evaluating competitors is a useful step in the design process, whether you're just starting out with a new product or you're looking to add a very specific feature. It can reveal both commonalities and opportunities for differentiation.

### Everybody benefits

Studying the competitive landscape is useful for design, development, and business purposes, as it can inform everything from color, typography and layout, to a feature's behavior, to how it's marketed to target users. This analysis was mostly for interface and feature research, but the approach could easily be adapted to answer other types of questions.
{:.mb-5}




