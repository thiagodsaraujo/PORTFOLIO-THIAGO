import { existsSync, readFileSync } from 'node:fs';
import assert from 'node:assert/strict';

const index = readFileSync('index.html', 'utf8');

const mustInclude = (value, label, source = index) => {
  assert.ok(source.includes(value), `${label} is missing`);
};

const mustNotInclude = (value, label, source = index) => {
  assert.ok(!source.includes(value), `${label} should not be present`);
};

const position = value => {
  const found = index.indexOf(value);
  assert.notEqual(found, -1, `${value} was not found`);
  return found;
};

mustInclude('<meta name="description"', 'meta description');
mustInclude('<link rel="canonical" href="https://ojuara.com/">', 'canonical URL');
mustInclude('<link rel="icon" type="image/svg+xml" href="/favicon.svg?v=3">', 'root SVG favicon');
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
mustInclude('<h1 class="hero-name">Thiago Araujo</h1>', 'short hero name');
mustInclude('Backend systems, applied AI, and products that ship.', 'short hero note');
mustNotInclude('<h1 class="hero-name">I\'m Thiago Araujo</h1>', 'old hero intro copy');
mustNotInclude('Backend engineering + AI-assisted execution leadership with Java, AWS, Docker, SQL, Kafka, and LLM orchestration.', 'old long hero note');
mustNotInclude('Backend, AI, and product execution from Brazil.', 'rejected Brazil hero note');
mustNotInclude('<span id="typed-role">Problem Solver</span>', 'old initial typed role');

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

mustInclude('Projects', 'project heading');
mustInclude('Problem', 'project problem label');
mustInclude('Role', 'project role label');
mustInclude('Outcome', 'project outcome label');
mustInclude('href="/projects/ecommerce-platform.html"', 'ecommerce project detail link');
mustInclude('href="/projects/role-junino.html"', 'role junino project detail link');
mustInclude('href="/projects/researchnova.html"', 'research nova project detail link');
mustInclude('href="/projects/rag-chatbot.html"', 'rag chatbot project detail link');

for (const file of [
  'public/projects/ecommerce-platform.html',
  'public/projects/role-junino.html',
  'public/projects/researchnova.html',
  'public/projects/rag-chatbot.html',
  'public/bio/index.html',
  'public/bio/bio.css',
  'public/bio/bio.js',
  'public/bio/bio-config.js',
  'public/bio/redirect.js',
  'public/bio/go/portfolio/index.html',
  'public/bio/go/linkedin/index.html',
  'public/bio/go/github/index.html',
  'public/bio/go/email/index.html',
  'public/bio/go/role-junino/index.html',
  'public/attached_assets/bio-profile-test.jpg',
  'public/attached_assets/researchnova-home-full.png',
  'public/favicon.svg',
  'public/robots.txt',
  'public/sitemap.xml',
  'public/llms.txt'
]) {
  assert.ok(existsSync(file), `${file} should exist`);
}

const robots = readFileSync('public/robots.txt', 'utf8');
mustInclude('Sitemap: https://ojuara.com/sitemap.xml', 'robots sitemap directive', robots);

const nginx = readFileSync('nginx.conf', 'utf8');
mustInclude('location = /bio', 'nginx bio route', nginx);
mustInclude('^/bio/go/(portfolio|linkedin|github|email|role-junino)$', 'nginx bio redirect routes', nginx);

const htaccess = readFileSync('.htaccess', 'utf8');
mustInclude('RewriteRule ^bio$ bio/index.html [L]', 'Apache bio route', htaccess);
mustInclude('RewriteRule ^bio/go/(portfolio|linkedin|github|email|role-junino)$ bio/go/$1/index.html [L]', 'Apache bio redirect routes', htaccess);

const sitemap = readFileSync('public/sitemap.xml', 'utf8');
mustInclude('https://ojuara.com/bio', 'bio sitemap URL', sitemap);
mustInclude('https://ojuara.com/projects/ecommerce-platform.html', 'ecommerce sitemap URL', sitemap);
mustInclude('https://ojuara.com/projects/role-junino.html', 'role junino sitemap URL', sitemap);
mustInclude('https://ojuara.com/projects/researchnova.html', 'research nova sitemap URL', sitemap);
mustInclude('https://ojuara.com/projects/rag-chatbot.html', 'rag chatbot sitemap URL', sitemap);

const llms = readFileSync('public/llms.txt', 'utf8');
mustInclude('Thiago Araujo', 'llms identity', llms);
mustInclude('backend engineer', 'llms role', llms);
mustInclude('thiagodsaraujo@gmail.com', 'llms email', llms);
mustInclude('https://www.linkedin.com/in/thiago-araujo-5870a321a/', 'llms LinkedIn link', llms);
mustInclude('https://github.com/thiagodsaraujo', 'llms GitHub link', llms);
mustInclude('https://docs.google.com/document/d/1IVtspfgg2N0ScPjMIXoXsT14JO2tNTa8pbcwagPlOk4/edit?usp=sharing', 'llms resume document link', llms);
mustInclude('https://ojuara.com/projects/researchnova.html', 'llms research nova link', llms);

const bio = readFileSync('public/bio/index.html', 'utf8');
mustInclude('<link rel="canonical" href="https://ojuara.com/bio">', 'bio canonical URL', bio);
mustInclude('thiago@ojuara:~/bio', 'bio console prompt', bio);
mustInclude('Thiago Araujo', 'bio identity', bio);
mustNotInclude('class="bio-subtitle"', 'removed static bio subtitle below name', bio);
mustInclude('id="bio-typed-focus"', 'bio typing target', bio);
mustInclude('class="bio-cursor"', 'bio typing cursor', bio);
mustNotInclude('$ open_links --primary portfolio', 'removed bio open links command', bio);
mustNotInclude('Portfolio first. LinkedIn, GitHub, email, and SaaS work one tap away.', 'removed bio route copy', bio);
mustInclude('/attached_assets/bio-profile-test.jpg', 'bio test photo asset', bio);
mustNotInclude('/attached_assets/1697888799623_1755215661613.jpg', 'old illustrated bio avatar', bio);
mustNotInclude('/attached_assets/bio-profile.jpeg', 'rejected bio real photo asset', bio);
mustInclude('href="/bio/go/portfolio"', 'bio portfolio CTA route', bio);
mustInclude('href="/bio/go/linkedin"', 'bio LinkedIn route', bio);
mustInclude('href="/bio/go/github"', 'bio GitHub route', bio);
mustInclude('href="/bio/go/email"', 'bio email route', bio);
mustInclude('href="/bio/go/role-junino"', 'bio Role Junino route', bio);
mustInclude('class="fas fa-fire"', 'bio Role Junino fire icon', bio);
mustNotInclude('/attached_assets/role-junino-button-logo.png', 'rejected bio Role Junino button logo asset', bio);
mustInclude('class="credential-line"', 'bio single credential line', bio);
mustInclude('class="credential-track"', 'bio credential single-line track', bio);
mustInclude('class="credential-row"', 'bio compact credential rows', bio);
mustNotInclude('<ul class="tech-chips"', 'removed stacked credential badges', bio);
mustInclude('Backend Developer', 'bio backend badge', bio);
mustInclude('AI Agents', 'bio AI agents badge', bio);
mustInclude('AWS Certified', 'bio AWS certified badge', bio);
mustInclude('Scalable APIs &amp; Intelligent Systems', 'bio scalable systems credential', bio);
mustNotInclude('<li>Java</li>', 'removed Java badge', bio);
mustNotInclude('<li>Docker</li>', 'removed Docker badge', bio);

const bioConfig = readFileSync('public/bio/bio-config.js', 'utf8');
mustInclude('GA_MEASUREMENT_ID', 'GA4 placeholder', bioConfig);
mustInclude('bio_link_clicked', 'bio click event name', bioConfig);
mustInclude('link_id', 'bio tracking link id property', bioConfig);
mustInclude('placement', 'bio tracking placement property', bioConfig);
mustInclude("destination_url: 'https://rolejunino.com/'", 'Role Junino production URL', bioConfig);

const bioScript = readFileSync('public/bio/bio.js', 'utf8');
mustInclude('setupBioTypingAnimation', 'bio typing animation setup', bioScript);
mustInclude('Backend systems', 'bio typing role backend systems', bioScript);
mustInclude('Product execution', 'bio typing role product execution', bioScript);
mustInclude('AI workflows', 'bio typing role AI workflows', bioScript);

const bioStyles = readFileSync('public/bio/bio.css', 'utf8');
mustInclude('--bio-content-gap', 'bio compact content gap variable', bioStyles);
mustInclude('max-height: calc(100svh - 16px)', 'bio viewport height guard', bioStyles);
mustInclude('@media (max-height: 760px)', 'bio short viewport compact mode', bioStyles);
mustInclude('height: 78px', 'bio compact mobile avatar', bioStyles);
mustInclude('flex-wrap: wrap', 'bio credentials wrap instead of clipping', bioStyles);

const script = readFileSync('script.js', 'utf8');
for (const role of [
  'Backend Engineer',
  'AI Builder',
  'Product Builder',
  'Kitesurfer',
  'CrossFitter'
]) {
  mustInclude(`'${role}'`, `${role} typing role`, script);
}
mustNotInclude("'Problem Solver'", 'old Problem Solver typing role', script);
mustNotInclude("'AI-Assisted Tech Lead'", 'old AI-Assisted Tech Lead typing role', script);
mustNotInclude("'LLM Workflow Architect'", 'old LLM Workflow Architect typing role', script);
