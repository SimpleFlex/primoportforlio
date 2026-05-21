import React from 'react';
import { PROJECTS, Project } from '../data/portfolio';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="group relative bg-[#0e0e0e] rounded-2xl border border-[#564338]/10 overflow-hidden hover:border-primary/40 transition-all duration-500">
    <div className="aspect-[4/5] overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/60 to-transparent p-8 flex flex-col justify-end">
      <div className="flex gap-2 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] uppercase font-body text-label px-2 py-1 bg-primary/20 text-primary border border-primary/30"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="font-headline font-semibold text-xl mb-2">{project.title}</h3>
      <p className="text-[#ddc1b3] font-body text-body-md line-clamp-2 mb-6">
        {project.description}
      </p>
      <div className="flex gap-4">
        <button className="flex-1 bg-primary text-[#532200] py-3 rounded-lg font-body text-label uppercase tracking-wider text-center hover:opacity-90 transition-opacity">
          Live Demo
        </button>
        <button className="w-12 h-12 flex items-center justify-center border border-[#564338] rounded-lg hover:bg-[#353534]/30 transition-all">
          <span className="material-symbols-outlined text-[#e5e2e1]">code</span>
        </button>
      </div>
    </div>
  </div>
);

const Projects: React.FC = () => (
  <section
    id="projects"
    className="px-5 md:px-6 max-w-[1280px] mx-auto reveal"
    style={{ marginTop: '120px' }}
  >
    <div className="flex justify-between items-end mb-12">
      <div>
        <h2 className="font-headline font-bold text-[32px] md:text-[48px] tracking-tight">
          Selected Works
        </h2>
        <p className="text-[#ddc1b3] font-body text-body-md mt-2">
          A showcase of technical complexity and visual refinement.
        </p>
      </div>
      <div className="hidden md:block h-px flex-grow mx-8 bg-[#564338]/20" />
      <span className="font-code text-code-sm text-primary whitespace-nowrap">03 / PROJECTS</span>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {PROJECTS.map((p) => (
        <ProjectCard key={p.title} project={p} />
      ))}
    </div>
  </section>
);

export default Projects;
