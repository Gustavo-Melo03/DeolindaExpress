// ==========================================================================
// utils.js — small shared helpers
// ==========================================================================

/** Whether the user has requested reduced motion at the OS/browser level. */
export function prefersReducedMotion(){
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/** Writes the current year into any element with id="year" (footer copyright). */
export function setYear(){
  var el = document.getElementById('year');
  if(el){ el.textContent = new Date().getFullYear(); }
}
