# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a Jekyll-based portfolio website showcasing UX design and development work. The site features project case studies, blog posts, illustrations, and resume sections. It's a static site that can be deployed to GitHub Pages or any static hosting service.

## Key Commands

### Development
- `bundle exec jekyll serve` - Start local development server
- `bundle exec jekyll build` - Build the site for production
- `bundle install` - Install Ruby gem dependencies

### Dependencies
- Ruby and Bundler are required
- Jekyll 4.3.4+ with plugins: jekyll-feed, jekyll-sitemap, jekyll-seo-tag

## Architecture

### Content Collections
The site uses Jekyll collections for structured content:
- `_projects/` - Portfolio project case studies (outputs to `/projects/`)
- `_posts/` - Blog posts (outputs to `/blog/`)
- `_illustration_sets/` - Grouped illustrations (outputs to `/illustration_sets/`)
- `_resumes/` - Different resume versions (outputs to `/resumes/`)
- `_resume_sections/` - Modular resume content sections

### Layout Structure
- `_layouts/default.html` - Base template with navigation and footer
- `_layouts/project.html` - Project case study layout
- `_layouts/post.html` - Blog post layout
- `_layouts/home.html` - Homepage layout

### Styling
- Sass files in `_sass/` with organized structure:
  - `01-utilities/` - Variables and mixins
  - `02-vendors/` - Third-party styles (normalize)
  - `03-base/` - Base elements and typography
  - `04-layout/` - Header, footer, main layout
  - `05-components/` - Reusable components (buttons, cards, etc.)
  - `06-pages/` - Page-specific styles
- Main stylesheet: `assets/css/styles.scss`

### JavaScript
- Minimal JavaScript in `assets/js/`:
  - `navigation.js` - Mobile navigation handling
  - `slideshow.js` - Image carousel functionality
  - `tabs.js` - Tab component functionality

### Assets
- Images stored in `assets/images/` with project-specific subdirectories
- Custom fonts in `assets/fonts/`
- PDFs for resume downloads in `assets/images/resumes/`

## Content Management

### Adding Projects
1. Create new `.md` file in `_projects/`
2. Add project images to `assets/images/[project-name]/`
3. Use front matter with required fields (title, hero image, etc.)

### Adding Blog Posts
1. Create new `.md` file in `_posts/` with date prefix: `YYYY-MM-DD-title.md`
2. Add post images to `assets/images/` or project subdirectories

### Navigation
- Main navigation configured in `_data/navigation.yml`
- Navigation component in `_includes/navigation.html`

## Site Configuration

Key settings in `_config.yml`:
- Site metadata (title, description, GitHub username)
- Collection configurations and default layouts
- Plugin configurations for SEO, feeds, and sitemaps

## Deployment

The site builds to `_site/` directory and can be served statically. The built files include processed Sass, optimized assets, and generated HTML from Markdown content.