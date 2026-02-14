import { motion } from 'framer-motion';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  link,
}: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      className="group rounded-xl border border-border-color overflow-hidden transition-shadow hover:shadow-xl hover:shadow-accent/5"
      style={{ backgroundColor: 'var(--secondary-bg)' }}
    >
      <div className="relative aspect-video overflow-hidden bg-border-color">
        <Image
          src={image}
          alt={`Screenshot of ${title}`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
        {/* Placeholder when image is missing */}
        <div className="absolute inset-0 flex items-center justify-center text-text-secondary text-sm">
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="opacity-30"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-text-primary mb-2">{title}</h3>
        <p className="text-sm text-text-secondary mb-4 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-accent/10 text-accent"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
        >
          View Project
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </a>
      </div>
    </motion.article>
  );
}
