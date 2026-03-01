import images from "../Images";

const achievementData = [
  {
    id: 1,
    title: "Won Student Innovation Award In The National Level Hackathon, Pune!",
    date: "22 to 23 Feb, 2025",
    images: [
      images.profile, // Replace these with your actual hackathon images from Images.jsx
      images.poster, 
      images.model3
    ], 
    shortDesc: "Secured the top innovation award at a national hackathon by providing the best solution to the given problem statement.",
    fullDesc: "Our team competed in the Innovate You Hackathon 2.0 in Pune. Over 48 hours, we developed a full-stack solution that tackled the core problem statement, ultimately winning the Student Innovation Award. This experience tested our rapid prototyping, teamwork, and technical problem-solving skills under extreme time constraints.",
  },
  {
    id: 2,
    title: "5,000+ YouTube Subscribers Milestone",
    date: "February 2026",
    images: [
      images.homescape1, // Add multiple images here too!
      images.homescape2
    ],
    shortDesc: "Successfully grew 'MantroJaap', a channel dedicated to Hindu spirituality, to over 5,000 subscribers.",
    fullDesc: "Over the past four years, I built and managed 'MantroJaap' from the ground up. I handled everything from content creation and video editing to designing logos, creating banners, and optimizing SEO keywords for video ranking. Hitting the 5,000 subscriber mark represents consistent dedication and a deep understanding of digital audience engagement.",
  },
  {
    id: 3,
    title: "Student Performance Analytics Portal",
    date: "February 2026",
    images: [
      images.homescape4
    ],
    shortDesc: "Developed a robust analytics portal using advanced predictive models.",
    fullDesc: "As part of my BCA Data Science and Artificial Intelligence degree, I created the 'Student Performance Analytics Portal'. This major academic project required integrating complex SPSS models to run predictive analytics on performance data, demonstrating a strong grasp of data structures and full-stack implementation.",
  }
];

export default achievementData;