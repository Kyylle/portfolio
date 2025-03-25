<template>
  <nav>
    <NuxtLink to="/portal/aboutform">About Form</NuxtLink>
    <NuxtLink to="/portal">Dashboard</NuxtLink>
    <NuxtLink to="/portal/about">About</NuxtLink>

  </nav>
</template>

<style scoped>
nav {
  display: flex;
  flex-direction: column;
  padding: 10px;
}
a {
  margin-bottom: 10px;
  text-decoration: none;
  color: #cec8c8;
}
a:hover {
  color: #01ce34;
}
</style>
