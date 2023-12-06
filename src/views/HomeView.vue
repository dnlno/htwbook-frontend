<template>
  <div class="home-container">
    <!-- Header-Bereich -->
    <div class="home-header">
      <header class="home-navbar-interactive">
        <span class="home-logo">UNINET</span>
        <div class="spacer"></div> <!-- Zusätzlicher Platzhalter -->
        <div class="home-desktop-menu">
          <button class="home-hero-button1 button">Login</button>
          <button class="home-hero-button2 button">Register</button>
        </div>
      </header>
    </div>

    <!-- Hero-Bereich -->
    <div class="home-hero">
      <div class="home-hero1">
        <div class="home-container01">
          <h1 class="home-hero-heading heading1">htwbook.</h1>
          <span class="home-hero-sub-heading">CONNECT AND SHARE WITH PEOPLE</span>
          <button class="home-learn-more-button">Learn More →</button> <!-- Button zentriert unter dem Text -->
        </div>
      </div>
    </div>

    <!-- Weitere Abschnitte... -->

    <div class="second-page">
      <div class="second-page-content">
        <div class="image-box">
          <img src="dein-bild.jpg" alt="Bild 1">
        </div>
        <div class="image-box">
          <img src="dein-bild.jpg" alt="Bild 2">
        </div>
      </div>
    </div>

    <!-- Weitere Abschnitte... -->
  </div>
</template>

<script>
export default {
  name: 'HomeView'
  // Weitere Skripte...
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');

.home-container {
  font-family: 'Open Sans', sans-serif;
  background-color: #333; /* Grüner Hintergrund für den gesamten Container */
  padding-top: 20px; /* Grüne Lücke am oberen Rand */
  margin: 0;
}

.home-container01 {
  display: flex;           /* Flexbox-Layout aktivieren */
  flex-direction: column;  /* Elemente vertikal anordnen */
  align-items: center;     /* Elemente zentrieren */
  text-align: center;      /* Text zentrieren */
}

.home-header {
  background-color: #FFFFFF;
  padding: 20px 40px;
  border-radius: 38px;
  width: 90%;
  margin: 0 auto 30px; /* Unteren Rand beibehalten */
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
}

.home-navbar-interactive {
  display: flex;
  align-items: center;
  width: 100%;
}

.home-logo {
  color: #000000;
  font-size: 28px;
  font-weight: 700; /* Dickerer Schriftstil */
}

.spacer {
  flex-grow: 1;
}

.home-desktop-menu {
  display: flex;
  align-items: center;
}

.home-hero-button1, .home-hero-button2 {
  padding: 10px 20px;
  border: none;
  border-radius: 30px;
  font-weight: 600;
  transition: background-color 0.3s;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.home-hero-button1 {
  background-color: #FFFFFF; /* Weißer Hintergrund */
  color: #333; /* Dunkle Schriftfarbe */
  border: 2px solid #333; /* Grüne Outline */
}

.home-hero-button1:hover {
  background-color: #e0e0e0; /* Hover-Effekt */
}

.home-hero-button2 {
  background-color: #333;
  color: #f8f8f8; /* Weiße Schriftfarbe */
  margin-right: 30px;
  margin-left: 30px;
}

.home-hero-button2:hover {
  background-color: #e0e0e0;
}

.home-hero {
  background-color: #333; /* Grüner Hintergrund für den Hero-Bereich */
  padding: 150px 0; /* Verringerte obere Polsterung */
  text-align: center;
}

.home-hero1 {
  color: #333;
}

.home-hero-heading {
  color: #FFFFFF; /* Weiße Schriftfarbe */
  font-size: 90px; /* Größere Schrift */
  font-weight: 700; /* Dickerer Schriftstil */
  margin-bottom: 50px; /* Verringerte untere Polsterung */
}

.home-hero-sub-heading {
  color: #FFFFFF; /* Weiße Schriftfarbe */
  font-size: 20px;
  margin-bottom: 20px; /* Verringerte untere Polsterung */
}

.home-learn-more-button {
  background-color: transparent; /* Unsichtbarer Hintergrund */
  color: #FFFFFF;
  border-radius: 30px;
  border: 2px solid transparent; /* Unsichtbare Umrandung */
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: border 0.3s, color 0.3s;
  display: inline-block; /* Ermöglicht Zentrierung */
}

.home-learn-more-button:hover {
  border-color: #FFFFFF; /* Weiße Umrandung beim Hover */
  color: #FFFFFF; /* Farbwechsel beim Hover */
}

/* Weitere spezifische Styles für andere Abschnitte und Komponenten */

.second-page {
  background-color: #f2f2f2; /* Grauer Hintergrund für die zweite Seite */
  padding: 80px 0; /* Anpassen des oberen und unteren Abstands */
}

.second-page-content {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
}

.image-box {
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.image-box img {
  max-width: 100%;
  height: auto;
  display: block;
}

</style>
