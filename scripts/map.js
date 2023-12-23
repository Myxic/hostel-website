  // Initialize the map
  const map = L.map('map').setView([6.263245, 7.126529], 15); // Set initial coordinates and zoom level

  // Add OpenStreetMap tile layer to the map
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OenStreetMap</a> contributors'
  }).addTo(map);

