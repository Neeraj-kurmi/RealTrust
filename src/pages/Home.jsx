import ProjectSection from '../components/ProjectSection';
import NewsletterForm from '../components/NewsletterForm';
import ClientSection from '../components/ClientSection';
import HeroWithForm from '../components/HeroWithForm ';
import Footer from '../components/Footer';

export default function Home() {
  return (
       <>
      <div className="bg-gray-50">

       <section id="home">
          <HeroWithForm />
       </section>

        {/* Our Projects Section */}
        <section id="projects" className="px-6 py-12">
          <h2 className="text-3xl font-bold text-center mb-10 text-blue-500">Our Projects</h2>
          <ProjectSection />
        </section>

        {/* Happy Clients Section */}
        <section id="clients" className="px-6 bg-white py-12 shadow-inner">
          <h2 className="text-3xl font-bold text-center mb-10 text-blue-500">Happy Clients</h2>
          <ClientSection />
        </section>

        {/* Newsletter Subscription Section */}
        <section>
          <NewsletterForm />
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
