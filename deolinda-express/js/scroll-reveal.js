// ==========================================================================
// scroll-reveal.js — fades/slides .reveal elements in as they enter view
// ==========================================================================

/**
 * Observes all `.reveal` elements and adds the `.in` class when they
 * scroll into the viewport. Falls back to showing everything immediately
 * if IntersectionObserver is unavailable or the visitor prefers reduced motion.
 * @param {boolean} reduceMotion
 */
export function initScrollReveal(reduceMotion){
  var revealEls = document.querySelectorAll('.reveal');

  if('IntersectionObserver' in window && !reduceMotion){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, {threshold:0.15});

    revealEls.forEach(function(el){ io.observe(el); });
  } else {
    revealEls.forEach(function(el){ el.classList.add('in'); });
  }
}
