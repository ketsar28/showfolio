/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ketsar Ali",
  title: "Hi all, I'm Ketsar",
  subTitle: emoji(
    "A passionate Full Stack Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Spring Boot and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1CGxb1TwWluzPHPLzfKIuSG2Ik5qn5uyF/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ketsar28",
  linkedin: "https://www.linkedin.com/in/ketsarali/",
  gmail: "muhammadketsar45@gmail.com",
  gitlab: "https://gitlab.com/",
  facebook: "https://www.facebook.com/",
  medium: "https://medium.com/@muhammadketsar2",
  stackoverflow: "https://stackoverflow.com/users/17524303/ketsar-ali",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "vuejs",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fas fa-file"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Al - Basyariah VCH",
      logo: require("./assets/images/albas.png"),
      subHeader: "Software Engineering",
      duration: "Juny 2020 - May 2023"
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Asia Cyber University",
      logo: require("./assets/images/unsia.png"),
      subHeader: "Bachelor of Computer Science",
      duration: "August 2023 - August 2027"
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Front-End Developer",
      company: "Indonesian Journalists Association",
      companylogo: require("./assets/images/pwilogo.jpeg"),
      date: "Jan 2022 – Mar 2022",
      desc: "I previously undertook an internship at the Indonesian Journalists Association, where I served as a frontend developer. During this period, I actively contributed to the organization's technological advancements, applying my skills to enhance the user interface and overall user experience. This experience allowed me to blend my technical proficiency with a keen understanding of the journalistic landscape, fostering a holistic approach to digital media development."
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "Software Engineer",
      company: "PT. Enigma Cipta Humanika",
      companylogo: require("./assets/images/enigma.png"),
      date: "Jun 2023 – Present",
      desc: "I have had the privilege of serving as a backend developer at PT Enigma Cipta Humanika, where I actively contributed to the company's technological ecosystem. My role involved crafting and optimizing backend solutions, ensuring seamless data management and system integration. This experience has honed my skills in designing efficient and reliable backend architecture, underscoring my commitment to fostering technological excellence."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Codepolitan",
      subtitle:
        "An online learning resource with the latest tutorials on programming and web development.",
      image: require("./assets/images/codepolitan.png"),
      imageAlt: "Codepolitan Logo",
      footerLink: [
        {
          name: "Certifications",
          url: "https://drive.google.com/drive/folders/1iI7TIofi1biftsGLXoYqoz3DITxpzjlg?usp=sharing"
        }
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Dicoding Indonesia",
      subtitle:
        "A learning platform that allows me to hone my programming skills with experienced instructors.",
      image: require("./assets/images/dicoding.png"),
      imageAlt: "Dicoding Logo",
      footerLink: [
        {
          name: "Certifications",
          url: "https://drive.google.com/drive/folders/1n8j1HL66GSr6AZueQWQPGenSXxTai6Wz?usp=sharing"
        }
      ]
    },

    {
      title: "Hackerrank",
      subtitle:
        " A platform that provides programming challenges to enhance coding skills.",
      image: require("./assets/images/hackerrank.png"),
      imageAlt: "Hackerrank Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1T4wRloyzFBG-VtOccQoy8jcU4U5jzPiK/view?usp=sharing"
        }
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    },
    {
      title: "Rakamin",
      subtitle:
        "A training institution that provides quality courses for the development of technical skills.",
      image: require("./assets/images/rakamin.png"),
      imageAlt: "Rakamin Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1drVeNFIYueAN58mMRTIoDyH1VzbymP8M/view?usp=sharing"
        }
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    },
    {
      title: "Sololearn",
      subtitle:
        "An online learning community that offers a variety of programming and technology courses.",
      image: require("./assets/images/sololearn.png"),
      imageAlt: "Sololearn Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1cfyy0Uh11hpJlhfwB38km7sT0rUAMFyU/view?usp=sharing"
        }
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    },
    {
      title: "Alibaba Cloud",
      subtitle:
        " A training institution that focuses on cloud computing and the latest technologies in the IT industry.",
      image: require("./assets/images/alibaba.png"),
      imageAlt: "Alibaba Cloud Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1Q9JyvO3W6utMK41NAnCUuBZNoFQxE_9d/view?usp=sharing"
        }
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    },
    {
      title: "DQLab",
      subtitle:
        "A data science learning platform that provides in-depth insights into data analysis and programming.",
      image: require("./assets/images/dqlab.png"),
      imageAlt: "DQLab Logo",
      footerLink: [
        {
          name: "Certifications",
          url: "https://drive.google.com/drive/folders/1U7o-hkEdNBx1QzKaZcb8erGxvCEpiCtW?usp=sharing"
        }
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    },
    {
      title: "Enigmacamp",
      subtitle:
        "A coding school that offers comprehensive learning programs to become a software developer.",
      image: require("./assets/images/enigma-circle.png"),
      imageAlt: "Enigma Logo",
      footerLink: [
        {
          name: "Certifications",
          url: "https://drive.google.com/drive/folders/1CX3-Gm6XACNE2XYQmFp1Fn3MR_5GSC0d?usp=sharing"
        }
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@muhammadketsar2/kenapa-pentingnya-mendapatkan-sertifikasi-di-bidang-it-sebagai-programmer-02680e372416",
      title: "Why Getting Certified in IT as a Programmer is Crucial",
      description:
        "This article explores the importance of IT certification for programmers, covering skill validation, career opportunities, increased productivity, support for ongoing professional development, customer trust, and more. Certification serves as the key to competence, customer confidence, and adaptation in the dynamic IT world."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+6285155343380",
  email_address: "muhammadketsar45@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
