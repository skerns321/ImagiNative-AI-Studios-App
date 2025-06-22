export function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (!element) return;

  const headerHeight = 80; // Height of fixed header
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY - headerHeight;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
} 