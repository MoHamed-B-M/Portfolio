const config = {
  title: "MOHAMED BEN MOHAMED | IT Student & Developer",
  description: {
    long: "MOHAMED BEN MOHAMED is an IT student and developer in his third year of MDW at ISET Sidi Bouzid, Tunisia. He works across front-end, back-end and Android development, enjoys mechanics and electricity, and collaborates with Enactus Tunisia and Tunivision.",
    short:
      "IT student and developer studying MDW at ISET Sidi Bouzid, working across front-end, back-end and Android.",
  },
  keywords: [
    "Mohamed Ben Mohamed",
    "IT Student",
    "Developer",
    "Front-end",
    "Back-end",
    "Android",
    "ISET Sidi Bouzid",
    "MDW",
    "Enactus Tunisia",
    "Tunivision",
    "React",
    "Laravel",
    "Flutter",
    "Portfolio",
  ],
  author: "MOHAMED BEN MOHAMED",
  email: "benmohamed715@gmail.com",
  secondaryEmail: "mouhammedbenmed@gmail.com",
  site: "https://github.com/MoHamed-B-M",

  // for github stars button
  githubUsername: "MoHamed-B-M",
  githubRepo: "Portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  get whatsappUrl() {
    return `https://wa.me/${this.social.whatsapp.replace(/\D/g, "")}`;
  },
  social: {
    twitter: "",
    linkedin: "https://www.linkedin.com/in/hama-ben-hama-bba490441/",
    instagram: "",
    facebook: "",
    github: "https://github.com/MoHamed-B-M",
    whatsapp: "+216 53070909",
  },
};
export { config };
