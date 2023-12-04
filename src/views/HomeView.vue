<template>
  <div id="app" class="container">
    <div id="welcome-container" class="d-flex flex-column align-items-center justify-content-center min-vh-100 text-center">
      <img src="@/assets/logo.png" alt="HTWBook Logo" class="app-logo mb-4">
      <input type="text" class="form-control mb-3" placeholder="Benutzername">
      <input type="password" class="form-control mb-3" placeholder="Passwort">
      <button @click="onJoinNowClicked" class="btn btn-success btn-lg" style="max-width: 200px;">ANMELDEN</button>
      <p class="caption mt-4">Verbinden Sie sich, um Ihre Freunde auf HTWBook zu finden und zu chatten.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  methods: {
    onJoinNowClicked () {
      this.$router.push({ name: 'dashboard' })
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

/* Das scoped Attribut bewirkt, dass diese Stile nur auf dieses Komponenten-Template angewendet werden */

.app-logo {
  width: 120px; /* Angepasste Größe für das größere Logo */
  margin-bottom: 2em; /* Platz unter dem Logo hinzufügen */
}

.form-control {
  font-size: 1em;
  margin: 0.5em 0;
  max-width: 320px; /* Angepasste Eingabefeldbreite */
  border-radius: 5px;
}

.btn-success {
  font-size: 1em;
  padding: 0.5em 2em;
  margin: 0.5em 0;
  cursor: pointer;
  width: 100%; /* Button auf volle Breite des Containers ausdehnen */
}

.caption {
  font-size: 1em; /* Größere Beschriftung für bessere Lesbarkeit */
  color: #666;
  margin-top: 2em;
}
</style>
