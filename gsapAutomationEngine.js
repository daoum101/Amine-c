export function injectPremiumAnimations(sections) {
  return sections.map((section) => ({
    ...section,
    animations: [
      "fade-up",
      "stagger",
      "hover-lift",
      "smooth-scroll"
    ]
  }));
}
