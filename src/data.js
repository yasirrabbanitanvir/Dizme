
import img1 from './image/port1.jpg'
import partner1 from './image/1.png';
import partner2 from './image/2.png';
import partner3 from './image/3.png';
import partner4 from './image/4.png';
import partner5 from './image/5.png';

export const partnersData = [
  { name: "Partner 1", logo: partner1 },
  { name: "Partner 2", logo: partner2 },
  { name: "Partner 3", logo: partner3 },
  { name: "Partner 4", logo: partner4 },
  { name: "Partner 5", logo: partner5 }
];

export const navitem = [
    {name:"Home", link:"/"},
    {name:"About", link:"#about"},
    {name:"Portfolio", link:"#portfolio"},
    {name:"Services", link:"#services"},
    {name:"Blog", link:"#blog"},
    {name:"Contact", link:"#contact"},
];


export const portfolio = [
    {
        id:1,
        catagory:"React",
        img:img1,
        title:"My Amazing Works",
        link:"#",
    },
    {
        id:2,
        catagory:"Laravel",
        img:img1,
        title:"My Amazing Works",
        link:"#",
    },
    {
        id:3,
        catagory:"Wordpress",
        img:img1,
        title:"My Amazing Works",
        link:"#",
    },
]

export const testimonialsData = [
    {
      text: "Loved the template design, documentation, customizability, and the customer support from the Marketify team! I am a noob in programming with very little knowledge about coding but the Marketify team helped me to launch my resume website successfully. Much recommended!",
      name: "Nazmul Hossen",
      title: "Web Developer"
    },
    {
      text: "This is another testimonial that highlights great features of the service.",
      name: "John Doe",
      title: "Designer"
    },
    {
      text: "Excellent service and support throughout the project!",
      name: "Jane Smith",
      title: "Project Manager"
    }
  ];