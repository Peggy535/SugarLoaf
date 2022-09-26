/* export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$router.options.scrollBehavior = async (to, from, savedPosition) => {
    if (to.path !== from.path && process.client) {
      window.scrollTo(0, 0);
    }
  };
});
 */
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("page:finish", () => {
    console.log("Page finished loading..");
    window.scrollTo(0, 0);
  });
});
console.log("Hi from scroll plugin");
