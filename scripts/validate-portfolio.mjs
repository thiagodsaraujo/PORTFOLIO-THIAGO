import { existsSync, readFileSync } from 'node:fs';
import assert from 'node:assert/strict';

const index = readFileSync('index.html', 'utf8');

const mustInclude = (value, label, source = index) => {
  assert.ok(source.includes(value), `${label} is missing`);
};

const position = value => {
  const found = index.indexOf(value);
  assert.notEqual(found, -1, `${value} was not found`);
  return found;
};

mustInclude('<meta name="description"', 'meta description');
mustInclude('<link rel="canonical" href="https://ojuara.com/">', 'canonical URL');
mustInclude('<meta property="og:title"', 'Open Graph title');
mustInclude('<script type="application/ld+json">', 'JSON-LD schema');
mustInclude('"@type": "ProfilePage"', 'ProfilePage schema');
mustInclude('"@type": "Person"', 'Person schema');
mustInclude('https://www.linkedin.com/in/thiago-araujo-5870a321a/', 'LinkedIn link');
mustInclude('https://github.com/thiagodsaraujo', 'GitHub link');
mustInclude('https://docs.google.com/document/d/1IVtspfgg2N0ScPjMIXoXsT14JO2tNTa8pbcwagPlOk4/edit?usp=sharing', 'Resume document link');
mustInclude('mailto:thiagodsaraujo@gmail.com', 'email mailto link');
mustInclude('thiagodsaraujo@gmail.com', 'visible email');
mustInclude('class="copy-email-btn"', 'copy email button');

assert.ok(
  position('id="tech-stack"') < position('id="resume"') &&
    position('id="resume"') < position('id="projects"'),
  'sections should be ordered as capabilities, experience, projects'
);

mustInclude('class="capabilities-grid"', 'capabilities layout');
mustInclude('Backend & distributed systems', 'backend capability copy');
mustInclude('Vibecoding, LLM Orchestration & RAG/Chatbots', 'ai capability copy');
mustInclude('Product Development & launch', 'product capability copy');

mustInclude('class="resume-content"', 'classic resume layout');
mustInclude('class="timeline"', 'classic timeline layout');
mustInclude('class="timeline-marker"', 'classic timeline marker');
mustInclude('Education', 'education resume column');
mustInclude('Certifications', 'certifications resume column');

mustInclude('Projects', 'case study heading');
mustInclude('Problem', 'project problem label');
mustInclude('Role', 'project role label');
mustInclude('Outcome', 'project outcome label');
mustInclude('href="/projects/ecommerce-platform.html"', 'ecommerce project detail link');
mustInclude('href="/projects/role-junino.html"', 'role junino project detail link');
mustInclude('href="/projects/rag-chatbot.html"', 'rag chatbot project detail link');

for (const file of [
  'public/projects/ecommerce-platform.html',
  'public/projects/role-junino.html',
  'public/projects/rag-chatbot.html',
  'public/robots.txt',
  'public/sitemap.xml',
  'public/llms.txt'
]) {
  assert.ok(existsSync(file), `${file} should exist`);
}

const robots = readFileSync('public/robots.txt', 'utf8');
mustInclude('Sitemap: https://ojuara.com/sitemap.xml', 'robots sitemap directive', robots);

const sitemap = readFileSync('public/sitemap.xml', 'utf8');
mustInclude('https://ojuara.com/projects/ecommerce-platform.html', 'ecommerce sitemap URL', sitemap);
mustInclude('https://ojuara.com/projects/role-junino.html', 'role junino sitemap URL', sitemap);
mustInclude('https://ojuara.com/projects/rag-chatbot.html', 'rag chatbot sitemap URL', sitemap);

const llms = readFileSync('public/llms.txt', 'utf8');
mustInclude('Thiago Araujo', 'llms identity', llms);
mustInclude('backend engineer', 'llms role', llms);
mustInclude('thiagodsaraujo@gmail.com', 'llms email', llms);
mustInclude('https://www.linkedin.com/in/thiago-araujo-5870a321a/', 'llms LinkedIn link', llms);
mustInclude('https://github.com/thiagodsaraujo', 'llms GitHub link', llms);
mustInclude('https://docs.google.com/document/d/1IVtspfgg2N0ScPjMIXoXsT14JO2tNTa8pbcwagPlOk4/edit?usp=sharing', 'llms resume document link', llms);
