// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'mkazemiv', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: ['mkazemiv/mkazemiv.github.io'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Other Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'SplitSmart',
          description:
            `Efficient bill-splitting solution for Android that uses ML Kit's on-device OCR and feeds that data to ChatGPT for processing and accurately computing each person’s share of the bill.`,
          imageUrl:
            'https://raw.githubusercontent.com/mkazemiv/mkazemiv.github.io/12fbb708cb474e4e29ba3f86307cbc8865960882/splitsmartLogo.png',
          link: '',
        },
        {
          title: 'Sosha Salaat',
          description:
            `Developing a prayer companion app for Android; features include geolocation, customizable alarms and notifications, and daily quotes. Using Figma for wireframes, Asana for project management, GitHub/Sourcetree for version control, and Firebase as our database.`,
          imageUrl:
            'https://avatars.githubusercontent.com/u/128259165?s=200&v=4',
          link: '',
        },
        {
          title: 'Food Tracker',
          description:
            `I spearheaded the development of an Android app that uses Google Firebase’s Authentication and Realtime Database services. The app allows users to log their food intake and calories via vocal input, view progress toward a calorie goal, while boasting unique user registration and password validation.`,
          imageUrl:
            'https://raw.githubusercontent.com/jleung-14/Food-App/refs/heads/main/FoodTracker/app/src/main/res/mipmap-xxhdpi/ic_launcher_round.png',
          link: '',
        },
        {
          title: 'Scheduler',
          description:
            `Collaborated with a team of classmates to build an Apache web app that will be used by the university’s computer science department to manage course office hours.`,
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png',
        },
      ],
    },
  },
  seo: {
    title: `Mohammad Ali's Portfolio`,
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'mohammad-a-kazemi',
    gdev: 'mkazemiv',
    mslearn: 'mkazemiv',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: '',
  },
  resume: {
    fileUrl: // currently only allows viewing in new tab
      'https://drive.google.com/file/d/1Hfwkdq3_eOz1rV7lW4a1uwrz1erK_DFI/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'JavaScript',
    'Kotlin',
    'Java',
    'Jetpack Compose',
    'Git',
    'Node.js',
    'MongoDB',
    'HTML',
    'CSS',
    'Supabase',
    'Flask',
    'Figma',
    'Azure DevOps',
    'Firebase'
  ],
  experiences: [
    {
      company: 'Memorialized LLC',
      position: 'Full-Stack Developer',
      from: 'Auguest 2023',
      to: 'December 2023',
      companyLink: 'https://www.memorializedme.com/',
    }
  ],
  certifications: [
    {
      name: 'Azure AI Fundamentals (AI-900)',
      body: 'Microsoft Certified',
      year: 'April 2024',
      link: 'https://learn.microsoft.com/api/credentials/share/en-us/mkazemiv/1B87695F2128EA33?sharingId=583C4D7DE7D466C'
    }, {
      name: 'AWS Technical Essentials',
      body: 'AWS Training and Certification',
      year: 'August 2023',
      link: 'https://drive.google.com/file/d/1yyEIy1a4scmb0I5eusnJMixQba7FHUo3/view?usp=sharing'
    },
  ],
  educations: [
    {
      institution: 'University of Maryland, College Park',
      degree: 'B.S. in Computer Science, Minor in Technology Entrpreneurship & Corporate Innovation',
      // from: '2021',
      // to: '2023',
    },
    {
      institution: 'Montgomery College, Rockville',
      degree: 'A.A. in Computer Science and Technologies',
      // from: '2018',
      // to: '2021',
    },
  ],
  publications: [],
  blog: {},
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'night',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: true,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      // 'cupcake',
      // 'emerald',
      'synthwave',
      'retro',
      // 'valentine',
      // 'spooky',
      // 'garden',
      'forest',
      'aqua',
      // 'lofi',
      // 'pastel',
      // 'fantasy',
      // 'wireframe',
      // 'black',
      'luxury',
      // 'dracula',
      // 'cmyk',
      // 'autumn',
      // 'business',
      // 'acid',
      // 'lemonade',
      'night',
      'coffee',
      'winter',
      // 'dim',
      // 'nord',
      // 'sunset',
      // 'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and 🫶`,

  enablePWA: true,
};

export default CONFIG;
