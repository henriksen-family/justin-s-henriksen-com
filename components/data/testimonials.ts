export interface Testimonial {
  id: string
  quote: string
  name: string
  title: string
  relationship: string
  tags: ('ai' | 'engineering' | 'leadership')[]
}

export const testimonials: Testimonial[] = [
  {
    id: 'lauren-tran',
    quote: "His technical depth and thought leadership in Artificial Intelligence enables him to work with the technical talent on his teams in a capacity that is highly effective and impactful. I could not recommend Justin more highly as an incredible asset to any organization.",
    name: "Lauren Tran",
    title: "Chief Architect @ Microsoft, Office of the CTO",
    relationship: "Reported directly to Justin",
    tags: ['ai', 'engineering', 'leadership'],
  },
  {
    id: 'marian-watkins',
    quote: "Justin knows and understands the details of how to apply technology in ways others just don't comprehend. Beyond all his technical and business skills, Justin is an amazing person - reliable, loyal, considerate and generous. He is the kind of person you would want as a business partner and a friend.",
    name: "Marian Watkins",
    title: "Marketing Executive | GTM Advisor",
    relationship: "Reported directly to Justin",
    tags: ['leadership'],
  },
  {
    id: 'jason-skinner',
    quote: "In a year, he brought our attrition down over 20%, grew our GP by 20% and increased revenue by 18%. This was all possible because Justin leads with a collaborative, people-first approach. He is thoughtful, strategic, transparent and wickedly smart. Any company or board would be lucky to have his expertise on their team.",
    name: "Jason Skinner",
    title: "VP at Long View Systems",
    relationship: "Justin was senior",
    tags: ['leadership'],
  },
  {
    id: 'tara-darconte',
    quote: "People work harder for Justin because of how he curates performance and career success. His leadership style is thoughtful, prescriptive, direct, and relatable to both buyers and employees to drive momentum, loyalty, and big results. I would work for him for the rest of my career if the privilege presented itself because he's earned it.",
    name: "Tara DarConte",
    title: "AI & Cloud Acceleration",
    relationship: "Reported directly to Justin",
    tags: ['ai', 'leadership'],
  },
  {
    id: 'karen-trubisky',
    quote: "Justin is an innovator, visionary, and highly technical leader who was an honor to work with in multiple capacities. He was one of the most influential career and technical mentors I've had in my career. Justin is an outstanding people-first leader who creates an empowering environment where everyone can do their best work.",
    name: "Karen Trubisky",
    title: "Advisor | Former AWS, Microsoft, VMware",
    relationship: "Justin was senior",
    tags: ['engineering', 'leadership'],
  },
  {
    id: 'tony-spencer',
    quote: "Justin is one of the most brilliant business minds I have ever met. He has a knack for knowing how to maximize business opportunities that come his way. In addition to his business acumen, he also has incredible knowledge of technology, software, artificial intelligence and machine learning. Having spent time as a talented software engineer, Justin knows and understands the details of how to apply technology in ways others just don't comprehend.",
    name: "Tony Spencer",
    title: "C# Cowboy | Software Engineer",
    relationship: "Worked on the same team",
    tags: ['ai', 'engineering'],
  },
]
