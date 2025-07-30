/* simple fake counter (ramps up on load) */
const target = 148203;  // your fake tree count
let current = 0;
const counter = document.getElementById('treeCounter');

function tick(){
  current += Math.ceil((target-current)/40); // ease‑out
  counter.textContent = `🌳 ${current.toLocaleString()} trees planted`;
  if(current < target) requestAnimationFrame(tick);
}
requestAnimationFrame(tick);

/* activate category pill on click */
document.querySelectorAll('.pill').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelector('.pill.active')?.classList.remove('active');
    btn.classList.add('active');
  });
});
