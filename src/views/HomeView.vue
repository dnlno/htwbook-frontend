<template>
  <div id="app">
    <div id="welcome-container">
      <img src="../assets/logo.png" alt="HTWBook Logo" class="app-logo">
      <input type="text" placeholder="Username">
      <input type="password" placeholder="Password">
      <button @click="onJoinNowClicked">SIGN IN</button>
      <p class="caption">Connect to find and chat with your friends on HTWBook.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WelcomePage',
  methods: {
    onJoinNowClicked () {
      this.$router.push({ name: 'dashboard' })
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

#welcome-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  font-family: SFProText-Regular, Helvetica, Arial, sans-serif;
}

.app-logo {
  width: 120px; /* Adjusted size for larger logo */
  margin-bottom: 2em; /* Add space below the logo */
}

#welcome-container input {
  font-size: 1em;
  padding: 12px;
  margin: 12px 0;
  width: 80%;
  max-width: 320px; /* Adjusted input width */
  border: 1px solid #ccc;
  border-radius: 5px;
}

#welcome-container button {
  font-size: 1em;
  padding: 12px 24px;
  margin: 12px 0;
  color: white;
  background-color: #4CAF50; /* A green color */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 80%;
  max-width: 320px; /* Adjusted button width */
}

#welcome-container button:hover {
  background-color: #45a049;
}

.caption {
  font-size: 1em; /* Larger caption for better readability */
  color: #666;
  margin-top: 2em;
}
</style>
