

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import { Calendar, Brain, Code, Lightbulb, Link } from "lucide-react";

// --- Event Data (Same data as before) ---
const upcomingEvents = [
  {
    id: 1,
    title: "Generative AI Hackathon: Vision & Voice",
    date: "November 15-17, 2025",
    time: "48-Hour Sprint",
    location: "Online / Discord",
    description: "Collaborate on cutting-edge projects using models like Stable Diffusion and Whisper. Document your process for our GitHub showcase!",
    icon: Brain,
    tags: ["Hackathon", "GenAI", "Project"]
  },
  {
    id: 2,
    title: "Deep Learning Study Group: Transformers",
    date: "October 30, 2025",
    time: "7:00 PM IST",
    location: "Virtual Meetup",
    description: "A guided session breaking down the 'Attention Is All You Need' paper and implementing a basic transformer model in PyTorch.",
    icon: Code,
    tags: ["Workshop", "Research", "Coding"]
  },
];

const pastProjects = [
    {
        id: 101,
        title: "AI Chatbot for Local Non-Profit",
        date: "Sept 2025",
        summary: "Developed a custom fine-tuned model to handle common inquiries, resulting in a 30% reduction in support emails.",
        link: "https://github.com/aiverse/chatbot-project-docs",
        tags: ["Community", "NLP", "Deployment"]
    },
    {
        id: 102,
        title: "Reinforcement Learning Sandbox",
        date: "Aug 2025",
        summary: "A documented series of experiments on Q-learning and Policy Gradients applied to simple games. Code and results publicly available.",
        link: "https://github.com/aiverse/rl-sandbox",
        tags: ["Research", "RL", "Self-Driven"]
    },
];

// --- Events Page Component ---
export default function EventsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-50">
      <Navbar />

      {/* Header Section */}
      <header className="py-24 px-6 text-center bg-gradient-to-b from-indigo-100 to-zinc-50 dark:from-zinc-900 dark:to-black">
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-4">
          <span className="text-indigo-600 dark:text-indigo-400">Events &</span> Projects
        </h1>
        <p className="max-w-3xl mx-auto text-xl text-zinc-700 dark:text-zinc-300">
          From workshops to self-driven projects, see how our community is building the future of AI.
        </p>
      </header>

      <main className="flex-grow">
        {/* Upcoming Events Section */}
        <section id="upcoming" className="max-w-6xl mx-auto py-20 px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Upcoming Workshops & Meetups <Calendar className="inline-block w-8 h-8 ml-2 text-indigo-500" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <Card 
                key={event.id} 
                className="border-2 border-indigo-200 dark:border-zinc-700 hover:shadow-xl transition duration-300"
              >
                <CardHeader>
                  <div className="flex items-center">
                    <event.icon className="w-8 h-8 mr-4 text-indigo-500 flex-shrink-0" />
                    <div>
                      <CardTitle>{event.title}</CardTitle>
                      <CardDescription>
                        {event.date} | {event.time} | {event.location}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-600 dark:text-zinc-300 mb-4">{event.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                      {/* Using the default secondary badge for tags */}
                      {event.tags.map(tag => (
                          <Badge key={tag} variant="secondary">
                              {tag}
                          </Badge>
                      ))}
                  </div>
                  <Button size="sm" asChild>
                    <a href="#join">Register Now</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" asChild>
                <a href="https://calendar.google.com/ai-verse" target="_blank" rel="noopener noreferrer">
                    See Full Calendar
                </a>
            </Button>
          </div>
        </section>

        ---

        {/* Community Projects Showcase Section */}
        <section id="projects" className="bg-zinc-100 dark:bg-zinc-900 max-w-full py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Self-Driven Community Projects <Lightbulb className="inline-block w-8 h-8 ml-2 text-indigo-500" />
            </h2>
            <p className="text-center max-w-3xl mx-auto text-lg text-zinc-600 dark:text-zinc-400 mb-10 font-medium italic">
                **Crucially, every piece of external experience and self-driven, well-documented project counts double.**
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {pastProjects.map((project) => (
                    <Card key={project.id} className="dark:bg-zinc-800 hover:scale-[1.02] transition duration-300">
                        <CardHeader>
                            <CardTitle className="text-indigo-600 dark:text-indigo-400">{project.title}</CardTitle>
                            <CardDescription>Completed: {project.date}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-zinc-700 dark:text-zinc-300 mb-4">{project.summary}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {/* Using the outline badge for project tags */}
                                {project.tags.map(tag => (
                                    <Badge key={tag} variant="outline">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                            <Button variant="link" size="sm" asChild className="p-0 h-auto">
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <Link className="w-4 h-4 mr-1"/> View Documentation & Code
                                </a>
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}