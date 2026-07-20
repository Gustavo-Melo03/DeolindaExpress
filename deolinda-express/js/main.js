// ==========================================================================
// main.js — entry point, wires up all modules
// ==========================================================================
import { prefersReducedMotion, setYear } from './utils.js';
import { initScrollProgress } from './scroll-progress.js';
import { initScrollReveal } from './scroll-reveal.js';

document.addEventListener('DOMContentLoaded', function(){
  setYear();
  initScrollProgress();
  initScrollReveal(prefersReducedMotion());
});
