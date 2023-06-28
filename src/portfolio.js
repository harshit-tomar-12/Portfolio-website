/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Harshit's Portfolio",
  description:
    "Innovative Solutions Crafted with Code and Creativity",
  og: {
    title: "Harshit Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Harshit tomar",
  logo_name: "",
  nickname: "",
  subTitle:
    "Innovative Solutions Crafted with Code and Creativity.",
  resumeLink:
    "https://drive.google.com/file/d/1V8KjHnu84EhfYWaWnV9sk8tx1bCp47zU/view?usp=sharing",
  portfolio_repository: "https://github.com/levi-1010-byte",
  githubProfile: "https://github.com/levi-1010-byte",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/levi-1010-byte",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/harshit-tomar-b57a9b233/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  
  {
    name: "Gmail",
    link: "mailto:workharshittomar@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  
 
  
];

const skills = {
  data: [
    {
      title: "Backend Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ I have experience in implementing authentication and authorization mechanisms, ensuring secure access and user management in backend systems.",
        "⚡ I have a solid understanding of backend technologies, including database management, API development, and server optimization techniques",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
       
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
       
      ],
    },
    {
      title: "Machine learing  & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing model for voice recogintion system which detects different voices from the noise input",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Developing Web app that is Based on Features Extraction from remote sensing , In this project I use Mask-RCNN model and COCO Dataset for Segmentation",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        
      ],
    },
    
  
  ],
};

// Education Page
// const competitiveSites = {
//   competitiveSites: [
//     {
//       siteName: "LeetCode",
//       iconifyClassname: "simple-icons:leetcode",
//       style: {
//         color: "#F79F1B",
//       },
//       profileLink: "https://leetcode.com/layman_brother/",
//     },
//     {
//       siteName: "HackerRank",
//       iconifyClassname: "simple-icons:hackerrank",
//       style: {
//         color: "#2EC866",
//       },
//       profileLink: "https://www.hackerrank.com/layman_brother",
//     },
//     {
//       siteName: "Codechef",
//       iconifyClassname: "simple-icons:codechef",
//       style: {
//         color: "#5B4638",
//       },
//       profileLink: "https://www.codechef.com/users/ashutosh_1919",
//     },
//     {
//       siteName: "Codeforces",
//       iconifyClassname: "simple-icons:codeforces",
//       style: {
//         color: "#1F8ACB",
//       },
//       profileLink: "http://codeforces.com/profile/layman_brother",
//     },
//     {
//       siteName: "Hackerearth",
//       iconifyClassname: "simple-icons:hackerearth",
//       style: {
//         color: "#323754",
//       },
//       profileLink: "https://www.hackerearth.com/@ashutosh391",
//     },
//     {
//       siteName: "Kaggle",
//       iconifyClassname: "simple-icons:kaggle",
//       style: {
//         color: "#20BEFF",
//       },
//       profileLink: "https://www.kaggle.com/laymanbrother",
//     },
//   ],
// };

const degrees = {
  degrees: [
    {
      title: "Galgotia's College of Engineering and Technology",
      subtitle: "B.Tech. in Computer Science  Engineering",
      logo_path: "Picture-removebg-preview.png",
      alt_name: "Galgotia College",
      duration: "2019 - 2023",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I have Successfully Completed My final year Project With a Research Paper Selected In IEEE Conference ",
      ],
      website_link: "https://galgotiacollege.edu/",
    },
   
  ],
};

// const certifications = {
//   certifications: [
//     {
//       title: "Machine Learning",
//       subtitle: "- Andrew Ng",
//       logo_path: "stanford_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
//       alt_name: "Stanford University",
//       color_code: "#8C151599",
//     },
//     {
//       title: "Deep Learning",
//       subtitle: "- Andrew Ng",
//       logo_path: "deeplearning_ai_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
//       alt_name: "deeplearning.ai",
//       color_code: "#00000099",
//     },
//     {
//       title: "ML on GCP",
//       subtitle: "- GCP Training",
//       logo_path: "google_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
//       alt_name: "Google",
//       color_code: "#0C9D5899",
//     },
//     {
//       title: "Data Science",
//       subtitle: "- Alex Aklson",
//       logo_path: "ibm_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
//       alt_name: "IBM",
//       color_code: "#1F70C199",
//     },
//     {
//       title: "Big Data",
//       subtitle: "- Kim Akers",
//       logo_path: "microsoft_logo.png",
//       certificate_link:
//         "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
//       alt_name: "Microsoft",
//       color_code: "#D83B0199",
//     },
//     {
//       title: "Advanced Data Science",
//       subtitle: "- Romeo Kienzler",
//       logo_path: "ibm_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
//       alt_name: "IBM",
//       color_code: "#1F70C199",
//     },
//     {
//       title: "Advanced ML on GCP",
//       subtitle: "- GCP Training",
//       logo_path: "google_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
//       alt_name: "Google",
//       color_code: "#0C9D5899",
//     },
//     {
//       title: "DL on Tensorflow",
//       subtitle: "- Laurence Moroney",
//       logo_path: "deeplearning_ai_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
//       alt_name: "deeplearning.ai",
//       color_code: "#00000099",
//     },
//     {
//       title: "Fullstack Development",
//       subtitle: "- Jogesh Muppala",
//       logo_path: "coursera_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
//       alt_name: "Coursera",
//       color_code: "#2A73CC",
//     },
//     {
//       title: "Kuberenetes on GCP",
//       subtitle: "- Qwiklabs",
//       logo_path: "gcp_logo.png",
//       certificate_link:
//         "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
//       alt_name: "GCP",
//       color_code: "#4285F499",
//     },
//     {
//       title: "Cryptography",
//       subtitle: "- Saurabh Mukhopadhyay",
//       logo_path: "nptel_logo.png",
//       certificate_link:
//         "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
//       alt_name: "NPTEL",
//       color_code: "#FFBB0099",
//     },
//     {
//       title: "Cloud Architecture",
//       subtitle: "- Qwiklabs",
//       logo_path: "gcp_logo.png",
//       certificate_link:
//         "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
//       alt_name: "GCP",
//       color_code: "#4285F499",
//     },
//   ],
// };

// Experience Page
// const experience = {
//   title: "Experience",
//   subtitle: "Work, Internship and Volunteership",
//   description:
//     "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
//   header_image_path: "experience.svg",
//   sections: [
//     {
//       title: "Work",
//       work: true,
//       experiences: [
//         {
//           title: "Associate AI Engineer",
//           company: "Legato Health Technology",
//           company_url: "https://legatohealthtech.com/",
//           logo_path: "legato_logo.png",
//           duration: "June 2020 - Aug 2021",
//           location: "Hyderabad, Telangana",
//           description:
//             "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
//           color: "#0879bf",
//         },
//         {
//           title: "Android and ML Developer",
//           company: "Muffito Incorporation",
//           company_url: "https://www.linkedin.com/company/muffito-inc/about/",
//           logo_path: "muffito_logo.png",
//           duration: "May 2018 - Oct 2018",
//           location: "Pune, Maharashtra",
//           description:
//             "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
//           color: "#9b1578",
//         },
//         {
//           title: "Android Developer",
//           company: "FreeCopy Pvt. Ltd.",
//           company_url: "https://www.linkedin.com/company/freecopy/about/",
//           logo_path: "freecopy_logo.png",
//           duration: "Nov 2017 - Dec 2017",
//           location: "Ahmedabad, Gujarat",
//           description:
//             "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
//           color: "#fc1f20",
//         },
//       ],
//     },
//     {
//       title: "Internships",
//       experiences: [
//         {
//           title: "Machine Learning Intern",
//           company: "TikTok Inc.",
//           company_url: "https://www.tiktok.com/en/",
//           logo_path: "tiktok_logo.png",
//           duration: "May 2022 - Aug 2022",
//           location: "San Francisco, USA",
//           description:
//             "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
//           color: "#000000",
//         },
//         {
//           title: "Data Science Research Intern",
//           company: "Delhivery Pvt. Ltd.",
//           company_url: "https://www.delhivery.com/",
//           logo_path: "delhivery_logo.png",
//           duration: "May 2019 - Sept 2019",
//           location: "Gurgaon, Haryana",
//           description:
//             "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
//           color: "#ee3c26",
//         },
//         {
//           title: "Data Science Intern",
//           company: "Intel Indexer LLC",
//           company_url:
//             "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
//           logo_path: "intel_logo.jpg",
//           duration: "Nov 2018 - Dec 2018",
//           location: "Work From Home",
//           description:
//             "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
//           color: "#0071C5",
//         },
//       ],
//     },
//     {
//       title: "Volunteerships",
//       experiences: [
//         {
//           title: "Google Explore ML Facilitator",
//           company: "Google",
//           company_url: "https://about.google/",
//           logo_path: "google_logo.png",
//           duration: "June 2019 - April 2020",
//           location: "Hyderabad, Telangana",
//           description:
//             "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
//           color: "#4285F4",
//         },
//         {
//           title: "Microsoft Student Partner",
//           company: "Microsoft",
//           company_url: "https://www.microsoft.com/",
//           logo_path: "microsoft_logo.png",
//           duration: "Aug 2019 - May 2020",
//           location: "Hyderabad, Telangana",
//           description:
//             "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
//           color: "#D83B01",
//         },
//         {
//           title: "Mozilla Campus Captain",
//           company: "Mozilla",
//           company_url: "https://www.mozilla.org/",
//           logo_path: "mozilla_logo.png",
//           duration: "Oct 2019 - May 2020",
//           location: "Kurnool, Andhra Pradesh",
//           description:
//             "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
//           color: "#000000",
//         },
//         {
//           title: "Developer Students Club Member",
//           company: "DSC IIITDM Kurnool",
//           company_url:
//             "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
//           logo_path: "dsc_logo.png",
//           duration: "Jan 2018 - May 2020",
//           location: "Kurnool, Andhra Pradesh",
//           description:
//             "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
//           color: "#0C9D58",
//         },
//         {
//           title: "Developer Program Member",
//           company: "Github",
//           company_url: "https://github.com/",
//           logo_path: "github_logo.png",
//           duration: "July 2019 - PRESENT",
//           location: "Work From Home",
//           description:
//             "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
//           color: "#181717",
//         },
//       ],
//     },
//   ],
// };

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Successfully completed projects that combine backend development expertise with the integration of machine learning models. Developed robust backend architectures utilizing frameworks such as Django, Flask, or Node.js to handle data processing, storage, and retrieval efficiently.",
  avatar_image_path: "projects_image.svg",
};

// const publicationsHeader = {
//   title: "Publications",
//   description:
//     "I have worked on and published a few research papers and publications of my own.",
//   avatar_image_path: "projects_image.svg",
// };

// const publications = {
//   data: [
//     {
//       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
//       name: "Artificial Intelligence Paper",
//       createdAt: "2020-03-06T16:26:54Z",
//       description: "Paper Written on Artificial Intelligence published in xyz ",
//       url:
//         "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
//     },
//     {
//       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
//       name: "Artificial Intelligence Paper",
//       createdAt: "2020-03-06T16:26:54Z",
//       description: "Paper Written on Artificial Intelligence published in xyz ",
//       url:
//         "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
//     },
//     {
//       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
//       name: "Artificial Intelligence Paper",
//       createdAt: "2020-03-06T16:26:54Z",
//       description: "Paper Written on Artificial Intelligence published in xyz ",
//       url:
//         "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
//     },
//     {
//       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
//       name: "Artificial Intelligence Paper",
//       createdAt: "2020-03-06T16:26:54Z",
//       description: "Paper Written on Artificial Intelligence published in xyz ",
//       url:
//         "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
//     },
//     {
//       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
//       name: "Artificial Intelligence Paper",
//       createdAt: "2020-03-06T16:26:54Z",
//       description: "Paper Written on Artificial Intelligence published in xyz ",
//       url:
//         "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
//     },
//   ],
// };

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "00158-3965138918-removebg-preview.png",
    description:
      "Hello! I'm a passionate fresher eager to contribute to projects in the fields of React,Express ,Node,ML, AI, and Opensource Development. I'm available on various social media platforms, and you can reach out to me for any inquiries or collaboration opportunities. I strive to provide prompt responses and ensure that I reply to all messages within 24 hours. Let's connect and discuss how we can work together to bring innovative solutions to life!",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
    locality: "Kanodar",
    country: "IN",
    region: "Gujarat",
    postalCode: "385520",
    streetAddress: "Ambavadi vas",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  // competitiveSites,
  degrees,
  // certifications,
  // experience,
  projectsHeader,
  // publicationsHeader,
  // publications,
  contactPageData,
};
