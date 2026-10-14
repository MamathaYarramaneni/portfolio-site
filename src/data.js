export const profile = {
  name: "Mamatha Yarramaneni",
  role: "Full Stack Software Engineer",
  tagline:
    "Tenacious, quick-witted engineer crafting elegant, AI-powered products that scale. I obsess over customers, iterate with agility, and never stop improving.",
  about:
    "I'm a full-stack software engineer with experience across scalable backends, cloud infrastructure, and polished React front ends. I currently build audience-intelligence tooling at Resonate Networks, including AI-driven search and automated reporting. I hold a Master's in Computer Science from the University at Buffalo, and I enjoy turning slow, manual workflows into fast, reliable systems.",
  github: "https://github.com/MamathaYarramaneni",
  linkedin: "https://linkedin.com/in/mamatha-y/",
};

export const skillGroups = [
  {
    title: "Languages",
    items: ["Java", "TypeScript", "JavaScript", "Python", "C++", "SQL"],
  },
  {
    title: "Backend & Architecture",
    items: [
      "Spring Boot",
      "Node.js",
      "Express.js",
      "Apache Tomcat",
      "Kafka",
      "Distributed Systems",
      "Big Data",
    ],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "NoSQL", "Redis", "OpenSearch"],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "AWS",
      "GCP",
      "Docker",
      "Kubernetes",
      "DevOps",
      "Splunk",
      "Linux",
      "Unix",
      "Git",
    ],
  },
  {
    title: "AI / GenAI",
    items: [
      "NLP",
      "RAG",
      "LangChain",
      "BERT",
      "Embeddings & Vector Search",
      "PyTorch",
      "TensorFlow",
      "Hugging Face",
    ],
  },
  {
    title: "Frontend",
    items: [
      "React.js",
      "Angular",
      "Ember.js",
      "Redux",
      "HTML5",
      "Tailwind CSS",
    ],
  },
];

export const experience = [
  {
    company: "Resonate Networks",
    place: "Reston, VA, US",
    title: "Full Stack Software Engineer",
    period: "May 2024 - Jan 2025",
    stack: ["TypeScript", "Java", "Spring Boot", "AWS"],
    points: [
      "Built a PowerPoint export feature with Apache POI in Spring Boot, automating reporting workflows and improving customer efficiency by 75%.",
      "Designed an AI Audience Builder using AWS OpenSearch, Titan embeddings, and Spring AI cosine-similarity search, improving customer satisfaction by 60%.",
      "Integrated OpenAI GPT-4o for text summarization, improving summarization efficiency by 40%.",
      "Re-engineered key features to run asynchronously, scaling user capacity by 500%; load-tested APIs and identified breakpoints at 10,000 requests per second.",
    ],
  },
  {
    company: "Ultimate Tool & Safety",
    place: "Arlington, TX, US",
    title: "Full Stack Software Engineer",
    period: "Jul 2023 - Feb 2024",
    stack: ["React", "Node.js", "PostgreSQL", "AWS"],
    points: [
      "Designed and shipped an end-to-end multi-tenant application: React and Redux front end, Node.js back end, PostgreSQL, Nginx, and AWS hosting with load balancing.",
      "Added JWT authorization middleware (43% fewer unauthorized access attempts) and AWS CloudWatch monitoring (60% less downtime).",
      "Built PostgreSQL audit logging with TypeORM and automated Twilio email alerts, cutting customer effort by 80% and lifting engagement by 40%.",
    ],
  },
  {
    company: "Navis",
    place: "Chennai, Tamil Nadu, India",
    title: "Software Engineer, Full Stack",
    period: "Jan 2021 - Aug 2022",
    stack: ["Java", "Spring Boot", "Angular", "Docker"],
    points: [
      "Delivered full-stack features with Angular and Spring Boot, reducing code defects by 30% and reaching 90% test coverage with Mocha, Chai, and Jest.",
      "Optimized CI/CD with Jenkins and Kubernetes auto-deployment, reducing failures by 30% and cutting deployment time from hours to minutes.",
      "Integrated Navis BWM with N4 through REST and SOAP APIs and Groovy scripts, sustaining 10,000+ API calls between microservices.",
    ],
  },
];

export const projects = [
  {
    title: "Clickbait Spoiling",
    period: "Feb 2023 – Apr 2023 · University at Buffalo",
    desc: "Led a project combining information retrieval, neural networks, and BERT to reach 73.8% accuracy in spoiler classification and an 82% F1 score for generating clickbait summaries.",
    tags: ["Python", "PyTorch", "NLP", "BERT", "LLM"],
    live: "",
    repo: "",
  },
  {
    title: "Top Hashtag Stream Analyzer",
    period: "Dec 2020 – Jan 2021 · SASTRA University",
    desc: "Hadoop MapReduce pipeline on Google Cloud Dataproc that extracts the top 10 trending hashtags from the Twitter streaming API, automated with a cron job to cut setup time by 46%.",
    tags: ["Hadoop", "Java", "GCP"],
    live: "",
    repo: "",
  },
  {
    title: "SocketLink",
    period: "Sep 2022 – Nov 2022 · University at Buffalo",
    desc: "C++ chat application built with a team of 3 using object-oriented design patterns, with secure messaging, centralized routing, and offline buffering in a single-server, multi-client TCP/IP network.",
    tags: ["C++", "Sockets", "OOP", "Data Structures"],
    live: "",
    repo: "",
  },
  {
    title: "Health Hub Pro",
    period: "Oct 2022 – Nov 2022 · University at Buffalo",
    desc: "Full-stack hospital database system on the MERN stack, tuned with indexing, triggers, and stored procedures for a 75% performance gain.",
    tags: ["React", "Node.js", "MongoDB", "AWS"],
    live: "",
    repo: "",
  },
  {
    title: "CKD Predictor",
    period: "Dec 2020 – Feb 2021 · SASTRA University",
    desc: "Diagnostic model for chronic kidney disease prediction using Bagging and Random Subspace ensemble methods.",
    tags: ["Python", "Machine Learning", "Ensemble Methods"],
    live: "",
    repo: "",
  },
  {
    title: "HomeyServices",
    period: "Feb 2020 – Apr 2020 · SASTRA University",
    desc: "Team-built Android home services application using Android Studio and Firebase.",
    tags: ["Android", "Firebase", "Java"],
    live: "",
    repo: "",
  },
  {
    title: "Heart Disease Prediction",
    period: "Feb 2020 – Mar 2020 · SASTRA University",
    desc: "Heart disease prediction with data mining and classification techniques, run on Google Cloud Platform services including VM instances and Cloud Monitoring.",
    tags: ["Data Mining", "Classification", "GCP"],
    live: "",
    repo: "",
  },
];

export const education = [
  {
    school: "University at Buffalo, SUNY",
    degree: "Master's in Computer Science & Engineering (Software Engineering)",
    detail:
      "GPA 3.9/4.0 · Speaker at a Git workshop for 150+ students · Graduate Teaching Assistant",
    period: "Graduated Jan 2024",
  },
  {
    school: "SASTRA University",
    degree: "B.Tech, Computer Science & Engineering",
    detail: "GPA 8.85/10 · Dean's Merit Scholarship",
    period: "Graduated 2021",
  },
];
