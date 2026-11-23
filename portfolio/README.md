# Aman Kumar — Developer Portfolio

A polished, responsive single-page portfolio built with **React 18**, **Vite 5**, and plain CSS. No UI library dependencies. Deployable as a static site behind Nginx on an Ubuntu EC2 instance.

---

## Personalisation

All content you need to change lives in four files:

| File | What to edit |
|------|-------------|
| `src/data/config.js` | Name, role, bio, email, social links, resume path, contact endpoint |
| `src/data/projects.js` | Project cards and case-study content |
| `src/data/skills.js` | Technologies grid — remove any you don't use |
| `src/data/experience.js` | Work history, education, independent projects |

Every field that needs real content is marked with a `[PLACEHOLDER]` comment in the file. The UI also shows amber `[PLACEHOLDER]` badges wherever content is missing so you can spot gaps instantly.

### Adding a resume

1. Place your PDF at `public/assets/resume.pdf`.
2. In `src/data/config.js`, set `resumeFile: '/assets/resume.pdf'`.
3. The "Download Resume" button appears automatically.

### Enabling the contact form

The form is visually present but submission is disabled until you configure an endpoint.

1. Create a free form backend at [Formspree](https://formspree.io) or similar.
2. In `src/data/config.js`, set `contactEndpoint: 'https://formspree.io/f/YOUR_ID'`.

Until this is set, the form shows a clear notice and directs visitors to the email link.

### Adding real articles (Writing section)

The Writing section is hidden by default. To enable it, add entries to `src/data/writing.js`:

```js
export const articles = [
  {
    id: 1,
    title: 'Your Article Title',
    excerpt: 'A short excerpt.',
    publicationDate: '2024-06-15',
    readingTimeMinutes: 5,
    url: 'https://yourblog.com/article-slug',
  },
];
```

### Creating a new case study

1. Add a project object to `src/data/projects.js` with a unique `slug`.
2. Fill in all the case-study fields (`problem`, `myRole`, `architecture`, `screenshots`, etc.).
3. The route `/projects/your-slug` is generated automatically via React Router.

---

## Local development

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:5173`.

---

## Production build

```bash
npm run build
```

Vite outputs a production-ready bundle to `dist/`. The bundle includes:

- `dist/index.html` — entry point
- `dist/assets/` — hashed CSS, JS, and copied public assets

---

## Deploy to Ubuntu EC2 with Nginx

### 1. EC2 security-group rules

| Type | Protocol | Port | Source | Purpose |
|------|----------|------|--------|---------|
| Inbound | TCP | 22 | Your IP | SSH access |
| Inbound | TCP | 80 | 0.0.0.0/0, ::/0 | HTTP |
| Inbound | TCP | 443 | 0.0.0.0/0, ::/0 | HTTPS (after cert setup) |

### 2. Install Nginx on the instance

```bash
sudo apt update && sudo apt install -y nginx
```

### 3. Upload the build

From your local machine, copy the contents of `dist/` to the server:

```bash
scp -r dist/* ubuntu@YOUR_EC2_IP:/var/www/html/
```

Or use `rsync` for incremental uploads:

```bash
rsync -avz --delete dist/ ubuntu@YOUR_EC2_IP:/var/www/html/
```

### 4. Configure Nginx

```bash
# Copy the config file
scp nginx.conf ubuntu@YOUR_EC2_IP:~/portfolio.conf
ssh ubuntu@YOUR_EC2_IP

# On the server:
sudo cp ~/portfolio.conf /etc/nginx/sites-available/portfolio
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default   # remove default site
sudo nginx -t                                  # test config
sudo systemctl reload nginx
```

The `try_files $uri $uri/ /index.html;` directive in `nginx.conf` is what makes React Router URLs (e.g. `/projects/project-one`) work when opened directly or on browser refresh.

### 5. HTTPS with Let's Encrypt (recommended)

HTTPS requires a registered domain pointing at your EC2 instance.

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

Certbot modifies your Nginx config automatically and sets up auto-renewal.  
Without a domain, visitors can still access the site over HTTP on port 80 using the EC2 public IP, but browsers will warn about the missing certificate.

---

## Project structure

```
portfolio/
├── public/
│   └── assets/
│       ├── icons/        favicon.svg
│       └── images/       project screenshots, og-preview.png
├── src/
│   ├── components/       Nav, Hero, About, Skills, Projects, ProjectCard,
│   │                     OpenSource, Writing, Experience, Contact, Footer,
│   │                     CaseStudy, SkillIcons
│   ├── data/             config.js, projects.js, skills.js,
│   │                     experience.js, writing.js
│   ├── pages/            Home.jsx, CaseStudyPage.jsx, NotFound.jsx
│   ├── styles/           global.css
│   ├── App.jsx
│   └── main.jsx
├── nginx.conf
├── vite.config.js
└── package.json
```

---

## What still needs your real content

The following items are marked as placeholders and must be replaced before the site is ready to publish:

- **Name, bio, email, social links** — `src/data/config.js`
- **Resume PDF** — place in `public/assets/` and update `resumeFile`
- **Project titles, descriptions, screenshots, URLs** — `src/data/projects.js`
- **Case-study details** — problem, role, architecture, results for each project
- **Experience entries** — real company names, roles, dates, responsibilities — `src/data/experience.js`
- **About section text** — the "What I do", "Interests", and personal-touch blocks inside `src/components/About.jsx`
- **Open source contributions** — real repo names and PR links in `src/components/OpenSource.jsx`
- **Contact endpoint** — `contactEndpoint` in `src/data/config.js`
- **OG preview image** — place `og-preview.png` at `public/assets/images/og-preview.png`
- **Domain** — replace `yourdomain.com` in `nginx.conf` and `index.html` og:url meta tag
