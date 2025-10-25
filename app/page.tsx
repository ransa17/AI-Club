import { Button } from "@/components/ui/button";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-50">
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center min-h-screen px-6 bg-gradient-to-b from-indigo-50 to-zinc-50 dark:from-zinc-900 dark:to-black">
        <h1 className="text-5xl sm:text-6xl font-bold mb-4">
          Welcome to <span className="text-indigo-600 dark:text-indigo-400">AI Verse</span>
        </h1>
        <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400 mb-8">
          A universe of learners, creators, and innovators exploring Artificial Intelligence together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg">
            <a href="#join">Join the Club</a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#events">View Events</a>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-5xl mx-auto py-24 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">About AI Verse</h2>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
          AI Verse is a community-driven initiative aimed at fostering knowledge and collaboration in AI. 
          From coding sessions to research meetups, we empower members to explore the future of technology together.
        </p>
      </section>

      {/* Events Section */}
      <section id="events" className="bg-zinc-100 dark:bg-zinc-900 py-24 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Upcoming Events</h2>
        <p className="text-zinc-600 dark:text-zinc-400">
          Stay tuned for AI Verse workshops, hackathons, and speaker sessions featuring industry experts.
        </p>
      </section>

      {/* Join Section */}
      <section id="join" className="py-24 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Join the Community</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-6">
          Ready to be part of something extraordinary? Join us and connect with fellow AI enthusiasts!
        </p>
        <Button asChild size="lg">
          <a href="https://discord.gg/yourserver" target="_blank" rel="noopener noreferrer">
            Join Our Discord
          </a>
        </Button>
      </section>

      <Footer />
    </div>
  );
}
