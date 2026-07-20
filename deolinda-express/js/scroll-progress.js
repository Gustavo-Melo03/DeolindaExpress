// ==========================================================================
// scroll-progress.js — top progress rail + travelling truck marker
// ==========================================================================

/**
 * Wires up the route progress bar: as the visitor scrolls the page,
 * the fill bar and truck icon advance to represent "distance travelled".
 */
export function initScrollProgress(){
  var fill = document.getElementById('progressFill');
  var truck = document.getElementById('progressTruck');
  if(!fill || !truck) return;

  function update(){
    var h = document.documentElement;
    var scrollTop = h.scrollTop || document.body.scrollTop;
    var scrollHeight = h.scrollHeight - h.clientHeight;
    var pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    fill.style.width = pct + '%';
    truck.style.left = pct + '%';
  }

  document.addEventListener('scroll', update, {passive:true});
  update();
}
