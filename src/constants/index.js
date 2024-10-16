import project1 from "../../public/assets/projects/chatapp.jpg";
import project2 from "../../public/assets/projects/Movieflix2.jpg";
import project3 from "../../public/assets/projects/Portfolio.png";
export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications.I have worked with a variety of technologies, including React, Node.js, express and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I enjoy solving complex problems to deliver high-quality solutions.`;

export const PROJECTS = [
  {
    title: "Chat App",
    image: project1,
    description:
      "A real-time chat application using Node.js with Socket.io, achieving latency under 50ms for seamless communication between clients and server with user authentication",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB","Express", "Socket.io"],
  },
  {
    title: "Movieflix Web App",
    image: project2,
    description:"MovieFlix is a cutting-edge movie website that has user authentication and Utilizes the full potential of API capabilities.",
    technologies: ["HTML", "CSS","javascript", "Node.js", "MongoDB","Express"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap","Tailwind"],
  }
];

export const CONTACT = {
  address: "Silchar (788010), Assam",
  phoneNo: "+91 8708850465 ",
  email: "vishalvis3333@gmail.com",
};
