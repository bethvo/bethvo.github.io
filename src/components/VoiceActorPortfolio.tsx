import { useState } from "react";
import { 
  Play, 
  Mail, 
  Phone, 
  MapPin, 
  Mic, 
  BookOpen, 
  Tv, 
  Building,
  Youtube,
  Instagram,
  Twitter,
  Linkedin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "./Navigation";
import AudioPlayer from "./AudioPlayer";
import ContactForm from "./ContactForm";
import headshot from "@/assets/headshot.jpg";
import studio from "@/assets/studio.jpg";

const VoiceActorPortfolio = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const services = [
    { icon: Tv, title: "Commercial", description: "TV, radio, and digital advertising campaigns" },
    { icon: BookOpen, title: "E-Learning", description: "Educational content and training materials" },
    { icon: Mic, title: "Audiobooks", description: "Narrative storytelling and character voices" },
    { icon: Building, title: "Corporate", description: "Training videos and internal communications" },
  ];

  const youtubeVideos = [
    {
      id: "demo1",
      title: "Commercial Voice-Over Demo Reel",
      thumbnail: "/api/placeholder/320/180",
      duration: "2:15"
    },
    {
      id: "demo2", 
      title: "Behind the Scenes: Recording Process",
      thumbnail: "/api/placeholder/320/180",
      duration: "3:42"
    },
    {
      id: "demo3",
      title: "Character Voice Showcase",
      thumbnail: "/api/placeholder/320/180", 
      duration: "1:58"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />

      {/* Hero Section */}
      <section id="hero" className="relative pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-semibold text-primary mb-6">
              Sarah Mitchell
            </h1>
            <p className="text-xl sm:text-2xl text-accent font-medium mb-8">
              The Voice of Your Brand
            </p>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Professional voice actor bringing scripts to life with warmth, clarity, and authenticity. 
              From commercials to e-learning, I deliver the perfect voice for your project.
            </p>
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection("demos")}
              className="text-lg px-8 py-4"
            >
              <Play className="mr-2" size={20} />
              Listen to Demos
            </Button>
          </div>
        </div>
      </section>

      {/* Demos Section */}
      <section id="demos" className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-semibold text-primary mb-4">
              Voice Demos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Listen to samples of my work across different styles and industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AudioPlayer title="Commercial Reel" duration="2:45" />
            <AudioPlayer title="Narration Reel" duration="3:20" />
            <AudioPlayer title="Animation Reel" duration="2:15" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl font-display font-semibold text-primary mb-6">
                About
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  With over 8 years of experience in voice acting, I've had the privilege of working 
                  with brands ranging from Fortune 500 companies to innovative startups. My passion 
                  lies in understanding each client's unique vision and translating that into 
                  compelling audio that connects with their audience.
                </p>
                <p>
                  I specialize in conversational, warm, and trustworthy reads that feel natural and 
                  engaging. Whether you need an authoritative corporate narrator, a friendly 
                  commercial spokesperson, or an animated character voice, I bring professionalism 
                  and creativity to every project.
                </p>
                <p>
                  When I'm not in the booth, you'll find me studying new scripts, exploring voice 
                  techniques, or hiking with my rescue dog, Charlie. I believe that life experiences 
                  enrich the authenticity I bring to each performance.
                </p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src={headshot}
                  alt="Sarah Mitchell - Professional Voice Actor"
                  className="w-full h-auto rounded-lg shadow-medium"
                />
                <div className="absolute inset-0 bg-gradient-hero opacity-10 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-semibold text-primary mb-4">
              Specialties
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I bring expertise across multiple voice-over disciplines, ensuring the perfect 
              match for your project's needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-medium transition-shadow border-border">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Section */}
      <section id="youtube" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-semibold text-primary mb-4">
              YouTube Channel
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Go behind the scenes and explore my creative process, voice-over tips, 
              and industry insights.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {youtubeVideos.map((video) => (
              <div key={video.id} className="group cursor-pointer">
                <div className="relative bg-muted rounded-lg overflow-hidden shadow-soft hover:shadow-medium transition-shadow">
                  <div className="aspect-video bg-gradient-hero/10 flex items-center justify-center">
                    <Youtube className="w-16 h-16 text-accent" />
                  </div>
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 bg-accent/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play className="w-8 h-8 text-accent-foreground ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-primary/80 text-primary-foreground px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <h3 className="font-medium text-primary mt-3 group-hover:text-accent transition-colors">
                  {video.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Section */}
      <section id="studio" className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={studio}
                alt="Professional home recording studio"
                className="w-full h-auto rounded-lg shadow-medium"
              />
            </div>
            
            <div>
              <h2 className="text-3xl sm:text-4xl font-display font-semibold text-primary mb-6">
                Studio
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  My professional home studio is equipped with industry-standard equipment to 
                  deliver broadcast-quality audio. I use a Neumann TLM 103 microphone, Universal 
                  Audio Apollo interface, and Pro Tools for recording and editing.
                </p>
                <p>
                  The acoustically treated space ensures pristine sound quality with no 
                  background noise or reflections. I can deliver finished audio files within 
                  24-48 hours, with same-day delivery available for rush projects.
                </p>
                <p>
                  For live sessions, I'm available for remote recording via Source Connect, 
                  SessionLink Pro, or Zoom for real-time direction and collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-semibold text-primary mb-4">
              Let's Work Together
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your project to life? Get in touch and let's discuss how 
              I can help tell your story.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <ContactForm />
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="font-display font-semibold text-xl text-primary mb-4">
                  Get In Touch
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-accent" />
                    <span className="text-muted-foreground">sarah@sarahmitchellvo.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-accent" />
                    <span className="text-muted-foreground">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-accent" />
                    <span className="text-muted-foreground">Los Angeles, CA</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-display font-semibold text-xl text-primary mb-4">
                  Follow Me
                </h3>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" className="hover:bg-accent hover:text-accent-foreground">
                    <Instagram className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="hover:bg-accent hover:text-accent-foreground">
                    <Twitter className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="hover:bg-accent hover:text-accent-foreground">
                    <Linkedin className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="hover:bg-accent hover:text-accent-foreground">
                    <Youtube className="w-5 h-5" />
                  </Button>
                </div>
              </div>
              
              <div className="bg-card p-6 rounded-lg border border-border">
                <h4 className="font-semibold text-primary mb-2">Quick Response Guarantee</h4>
                <p className="text-sm text-muted-foreground">
                  I respond to all inquiries within 2 hours during business hours 
                  (9 AM - 6 PM PST, Monday - Friday).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm opacity-80">
              © 2024 Sarah Mitchell Voice Actor. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VoiceActorPortfolio;