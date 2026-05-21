import React from 'react';
import { SKILL_CATEGORIES, SkillCategory } from '../data/portfolio';

const SkillCard: React.FC<{ category: SkillCategory }> = ({ category }) => (
  <div className="glass-panel border border-[#564338]/20 p-8 rounded-2xl hover:border-primary/50 transition-all group h-full">
    <div className="flex items-center gap-3 mb-8">
      <span className="material-symbols-outlined text-primary">{category.icon}</span>
      <h3 className="font-headline font-semibold text-xl">{category.title}</h3>
    </div>

    {/* Skill bars */}
    {category.bars && (
      <div className="space-y-6">
        {category.bars.map(({ name, level }) => (
          <div key={name}>
            <div className="flex justify-between mb-2">
              <span className="font-body text-label uppercase">{name}</span>
              <span className="text-primary font-code text-code-sm">{level}%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-fill" data-level={level} />
            </div>
          </div>
        ))}
      </div>
    )}

    {/* List */}
    {category.list && (
      <ul className="space-y-4 font-body text-body-md text-[#ddc1b3]">
        {category.list.map((item) => (
          <li key={item} className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    )}

    {/* Tags */}
    {category.tags && (
      <div className="flex flex-wrap gap-2">
        {category.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full bg-[#353534]/30 text-primary font-body text-label border border-primary/20 hover:border-primary/60 transition-colors cursor-default"
          >
            {tag}
          </span>
        ))}
      </div>
    )}
  </div>
);

const Skills: React.FC = () => (
  <section
    id="skills"
    className="px-5 md:px-6 max-w-[1280px] mx-auto reveal"
    style={{ marginTop: '120px' }}
  >
    <div className="text-center mb-16">
      <div className="inline-block text-primary font-body text-label tracking-widest uppercase mb-3">
        Technical Arsenal
      </div>
      <h2 className="font-headline font-bold text-[32px] md:text-[48px] tracking-tight">
        Technical Dashboard
      </h2>
      <div className="h-[2px] w-24 bg-primary mx-auto mt-4 glow-copper" />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {SKILL_CATEGORIES.map((cat) => (
        <SkillCard key={cat.title} category={cat} />
      ))}
    </div>
  </section>
);

export default Skills;
