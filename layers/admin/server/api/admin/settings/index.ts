export default defineEventHandler(async (event) => {
  
  const settings = await $fetch('http://localhost:3001/settings');

  return settings;
})
