# Student Tracker Website

A professional website for the Student Tracker Android app - an innovative educational platform designed to empower schools, teachers, parents, and students.

## 🎯 About Student Tracker

**Slogan:** "Enhancing Learner Performance"

Student Tracker is a comprehensive Android application that helps schools manage attendance, grades, communication, and more. It bridges the gap between educators, parents, and students with real-time notifications and accessible educational resources.

### Key Features
- **Attendance Tracking** - Real-time monitoring with automated notifications
- **Online Tutorials** - Multimedia-rich learning resources available anytime
- **Homework Management** - Time-based assignments with deadline tracking
- **Test Marks & Results** - Comprehensive grade tracking and analytics
- **Resource Center** - Centralized educational materials hub
- **Discussion Forum** - Interactive student-teacher collaboration
- **Notifications** - Timely alerts for updates and announcements
- **Financial Module** - Online payments and fee management
- **Library Management** - Digital library system
- **Bullying Alerts** - Safety features for school wellbeing
- **Visitor Registry** - School security management
- **Principal Reports** - Administrative reporting tools

### Our Clients
- Meredale Primary
- Hlaneki Primary School
- Giyani High School

## 🚀 Deployment

### Automatic Deployment (GitHub Actions)
The website automatically deploys to GitHub Pages whenever you push to the main branch. No additional setup needed!

**Live URL:** https://tebolicious.github.io/student-tracker-website

### Manual Deployment

#### Option 1: Using the Deploy Script
```bash
./deploy.sh
```

This script will:
1. Check git status
2. Pull latest changes
3. Stage and commit your changes
4. Push to the main branch
5. Trigger GitHub Pages deployment

#### Option 2: Manual Git Commands
```bash
# Stage changes
git add .

# Commit changes
git commit -m "Update Student Tracker website"

# Push to main branch
git push origin main
```

## 📋 GitHub Pages Configuration

The website is configured to deploy automatically using GitHub Actions.

### Workflow File
- Location: `.github/workflows/deploy.yml`
- Trigger: Push to main branch
- Action: Deploys using `peaceiris/actions-gh-pages`

### Repository Settings
To ensure GitHub Pages deployment works:

1. Go to your repository settings
2. Navigate to **Pages** section
3. Ensure **Source** is set to `Deploy from a branch`
4. Select `gh-pages` branch as the source (auto-created by the action)
5. Save settings

## 📁 Project Structure

```
student-tracker-website/
├── index.html              # Main HTML file
├── styles.css              # Stylesheet with purple theme
├── script.js               # JavaScript for interactivity
├── deploy.sh               # Deployment script
├── README.md               # This file
└── .github/
    └── workflows/
        └── deploy.yml      # GitHub Actions workflow
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients and animations
- **JavaScript** - Client-side interactivity
- **Font Awesome** - Icon library
- **GitHub Pages** - Hosting platform
- **GitHub Actions** - CI/CD automation

## 🎨 Design Features

- **Color Scheme:** Purple gradient (#6B4C9A primary)
- **Responsive Design:** Mobile, tablet, and desktop optimized
- **Smooth Animations:** Fade-in effects and floating animations
- **Accessibility:** Semantic HTML and proper contrast ratios
- **Performance:** Optimized images and efficient CSS

## 📝 Customization

### Update Contact Information
Edit the footer in `index.html`:
```html
<li><a href="mailto:your-email@example.com">your-email@example.com</a></li>
<li><a href="#">+27 (0) XX XXX XXXX</a></li>
```

### Change Logo
Replace the logo URL in `index.html`:
```html
<img src="your-logo-url.png" alt="Student Tracker Logo" class="logo">
```

### Modify Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #6B4C9A;
    --primary-dark: #5A3F7D;
    --primary-light: #8B6BB9;
    /* ... other variables ... */
}
```

## 🔄 Update Workflow

1. Make changes to HTML, CSS, or JavaScript files
2. Test locally by opening `index.html` in a browser
3. Run `./deploy.sh` to deploy
4. Changes will be live in 1-5 minutes

## 📊 Monitoring Deployments

### GitHub Actions
View deployment progress and logs:
1. Go to your repository on GitHub
2. Click on **Actions** tab
3. Select **Deploy to GitHub Pages** workflow
4. View the latest run status and logs

### Live Site
- Check your site at: https://tebolicious.github.io/student-tracker-website
- Clear browser cache if changes don't appear immediately (Ctrl+Shift+Delete)

## 🐛 Troubleshooting

### Site not updating after deployment?
- Wait 1-5 minutes for GitHub Pages to process
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Check GitHub Actions for any failed runs

### Deploy script not executable?
```bash
chmod +x deploy.sh
```

### Cannot push changes?
```bash
git pull origin main
# Resolve any conflicts
git push origin main
```

## 📞 Support

For issues or questions about the Student Tracker app, contact:
- Email: info@studenttracker.co.za
- Website: [Add your website URL]

## 📄 License

This project is licensed under the MIT License - see LICENSE file for details.

## ✨ Version History

### v1.0.0 (Nov 26, 2025)
- Initial website launch
- Complete feature showcase
- Objectives and benefits documented
- Client testimonials
- Automated GitHub Pages deployment

---

**Last Updated:** November 26, 2025  
**Deployed to:** https://tebolicious.github.io/student-tracker-website
Student Tracker App Website 
