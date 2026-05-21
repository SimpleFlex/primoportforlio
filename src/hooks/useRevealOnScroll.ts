import { useEffect } from 'react';

export function useRevealOnScroll(): void {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Trigger skill bars if present
            const fills = entry.target.querySelectorAll<HTMLElement>('.skill-fill');
            fills.forEach((fill) => {
              const level = fill.dataset.level ?? '0';
              fill.style.width = `${level}%`;
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
