import Reveal from "@/components/Reveal";
import Link from "next/link";
import TiltPhoto from "@/components/TiltPhoto";
import ProjectVisual from "@/components/ProjectVisual";

const PROJECTS = [
  {
    id: "01",
    title: "Panchayat Bhawan, Maharajganj",
    category: "Computer Hardware & Networking",
    scope: "Desktop assembly, Windows installation, and local network configuration for a goverment department.",
    image: "/panchayat.jpeg"
  },
  {
    id: "02",
    title: "Regency Hospital,Gorakhpur",
    category: "Video wall",
    scope: "Provided installation, troubleshooting, and maintenance of networking equipment and computer systems for hospital",
    image: "/regency.jpeg"
  },
  {
    id: "03",
    title: "Suraj Multiplex, Gorakhpur",
    category: "Complete full IT setup",
    scope: "Complete IT solution for a multiplex, including server setup, network configuration, and CCTV integration.",
    image: "/suraj.jpeg"
  },
  {
    id: "04",
    title: "AD Cinema, Gorakhpur",
    category: "Server Engineer",
    scope: "Installation and maintenance of computer systems, network infrastructure, and IT support services for a multiplex cinema ",
    image: "/ADcinema.jpeg"
  },
  {
    id: "05",
    title: "Ganapati Hyundai,Deoria",
    category: "computer networking and CCTV installation",
    scope: "Implemented network infrastructure, system maintenance, and technical support services for an automotive dealership.",
    image: "/hyundai.jpeg"
  },
  {
    id: "06",
    title: "Seasons Restaurant,Gorakhpur",
    category: "CCTV and network monitoring setup",
    scope: "Provided installation, troubleshooting, and maintenance of networking equipment and computer systems for restaurant.",
    image: "/seasons.jpeg"
  },
];

export default function PortfolioPage() {
  return (
    <>
     <section className="relative pt-40 pb-24 border-b border-line grid-bg">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-5 gap-14 items-center">
          <Reveal className="lg:col-span-3">
            <p className="eyebrow mb-6">02 / Portfolio</p>
            <h1 className="font-display text-5xl md:text-7xl text-ink text-balance max-w-3xl">
              Installations across homes, offices & warehouses, industries.
            </h1>
            <p className="mt-6 max-w-xl text-muted text-lg leading-relaxed">
              A sample of recent CCTV and network deployments. Full site photos
              available on request during your consultation.
            </p>
          </Reveal>
          <div className="flex lg:col-span-2 justify-center order-first lg:order-last mb-4 lg:mb-0 px-8 lg:px-0">
            <TiltPhoto
              src="/server.png"
              alt="CCTV and network monitoring setup"
              className="w-full max-w-[260px] sm:max-w-[340px] md:max-w-[420px] lg:max-w-[480px]"
            />
          </div>
        </div>
      </section>

      <section className="relative z-10 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.id} delay={(i % 3) * 0.08} className="group">
              <ProjectVisual index={i + 1} src={project.image} />
              <div className="pt-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] text-cyan">{project.id}</span>
                  <span className="font-mono text-[10px] text-muted uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
                <h3 className="font-display text-xl text-ink mb-2 group-hover:text-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{project.scope}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative z-10 py-28 text-center border-t border-line">
        <Reveal>
          <h2 className="font-display text-3xl md:text-5xl text-ink mb-8 text-balance max-w-2xl mx-auto">
            Want your property to look like this?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-cyan text-bg px-8 py-4 font-medium hover:bg-cyan-glow transition-colors"
          >
            Request a Site Visit
          </Link>
        </Reveal>
      </section>
    </>
  );
}
