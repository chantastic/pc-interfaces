if (window.CustomEvent) {
  var userBadgeHovered = new CustomEvent('user-badge:hovered');
} else {
  var userBadgeHovered = document.createEvent('CustomEvent');
  userBadgeHovered.initCustomEvent('user-badge:hovered', true, true);
}
