function showPopup() {
  document.getElementById('popup').classList.add('active');
}
function hidePopup() {
  document.getElementById('popup').classList.remove('active');
}
function selectPlan(el) {
  document.querySelectorAll('.plan').forEach(plan => plan.classList.remove('selected'));
  el.classList.add('selected');
}

document.addEventListener('click', (e) => {
  const plans = document.querySelectorAll('.plan');
  const isClickInside = [...plans].some(plan => plan.contains(e.target));
  if (!isClickInside) {
    plans.forEach(plan => plan.classList.remove('selected'));
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.plan').forEach(plan => plan.classList.remove('selected'));
  }
});