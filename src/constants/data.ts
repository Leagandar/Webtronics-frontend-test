import images from './images';

const headerLinks = [
  {
    title: 'About',
    id: '#about'
  },
  {
    title: 'Programs',
    id: '#programs'
  },
  {
    title: 'Steps',
    id: '#steps'
  },
  {
    title: 'Questions',
    id: '#questions'
  },
  {
    title: 'Get in touch',
    id: '#getInTouch'
  },
]

const mentors = {
  description: `Front-end engineers work closely with designers to make websites beautiful, 
  functional, and fast. This Career Path will teach you not only the necessary languages and
  technologies, but how to think like a front-end engineer, too.`,
  data: [
    {
      title: 'Wade Warren',
      description: 'Front-end engineers work closely with designers',
      avatar: images.mentor_1,
      id: 'mentor#1'
    },
    {
      title: 'Kristin Watson',
      description: 'Front-end engineers work closely with designers',
      avatar: images.mentor_2,
      id: 'mentor#2'
    },
    {
      title: 'Robert Fox',
      description: 'Front-end engineers work closely with designers',
      avatar: images.mentor_3,
      id: 'mentor#3'
    }
  ]
};

const technologies = [
  {
    title: 'Angular',
    image: images.angular,
    id: 'angular'
  },
  {
    title: 'React',
    image: images.react,
    id: 'react'
  },
  {
    title: 'Vue.js',
    image: images.vue,
    id: 'vue'
  },
  {
    title: 'JavaScript',
    image: images.js,
    id: 'javascript'
  },
]

const steps = [
  {
    index: '1',
    title: 'Introduction to Front-End',
    description: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ',
    id: 'Step#1'
  },
  {
    index: '2',
    title: 'Overview of Development',
    description: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ',
    id: 'Step#2'
  },
  {
    index: '3',
    title: 'Introduction to Front-End',
    description: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ',
    id: 'Step#3'
  },
  {
    index: '4',
    title: 'Overview of Development',
    description: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ',
    id: 'Step#4'
  },
  {
    index: '5',
    title: 'Introduction to Front-End',
    description: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ',
    id: 'Step#5'
  },
  {
    index: '6',
    title: 'Overview of Development',
    description: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ',
    id: 'Step#6'
  },
]

const questions = [
  {
    title: 'What is the price?',
    description: 'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.',
    id: 'question#1'
  },
  {
    title: 'What is the price?',
    description: 'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.',
    id: 'question#2'
  },
  {
    title: 'What is the price?',
    description: 'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.',
    id: 'question#3'
  },
  {
    title: 'What is the price?',
    description: 'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.',
    id: 'question#4'
  },
  {
    title: 'What is the price?',
    description: 'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.',
    id: 'question#5'
  }
]

const reviews = [
  {
    title: 'Best courses ever',
    description: 'Good course, up to this point, still ongoing. The only downside, why I gave 4,5 stars, because the "teacher" sometimes feel like, he is lost, and takes up quite a time, to correct himself, and check back etc.',
    id: 'review#1',
    avatar: images.reviewer_1,
    index: 0
  },
  {
    title: 'Amazing teaching',
    description: `The explanation is crazy it really doesn't have a structure to go from point A to point B. He starts to explain something then he change his mind and start with another thing an so on. If you try to learn pro active by doing the same thing with him all along you will get confused and start to loose interest.`,
    id: 'review#2',
    avatar: images.reviewer_2,
    index: 1
  },
  {
    title: 'Simple and easy',
    description: 'I am really enjoying the experience of learning a new skill I used to believe that web design was way too complicated for me to learn but so far in this course I have been keeping up and having fun.',
    id: 'review#3',
    avatar: images.reviewer_3,
    index: 2
  },
]

const socials = [
  {
    id: 'social#1',
    title: "facebook",
    icon: images.facebook,
    link: "facebook.com",
  },
  {
    id: 'social#4',
    title: "gitlab",
    icon: images.gitlab,
    link: "gitlab.com",
  },
  {
    id: 'social#2',
    title: "twitter",
    icon: images.twitter,
    link: "twitter.com",
  },
  {
    id: 'social#3',
    title: "linkedin",
    icon: images.linkedin,
    link: "linkedin.com",
  },
]

const footerLinks = [
  {
    title: 'About Us',
    id: '#about'
  },
  {
    title: 'Steps',
    id: '#steps'
  },
  {
    title: 'FAQs',
    id: '#questions'
  },
  {
    title: 'Review',
    id: '#review'
  },
  {
    title: 'Gallery',
    id: '#gallery'
  },
]


export type StepsData = typeof steps
export type ReviewsData = typeof reviews
export default { headerLinks, mentors, technologies, steps, questions, reviews, socials, footerLinks }