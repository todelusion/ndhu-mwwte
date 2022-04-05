<template>
  <Layout>
    <section class="relative h-screen w-full">
      <g-image
        id="landingPage"
        src="~/assets/landingPage.jpg"
        class="absolute z-10 h-full w-full object-cover"
      ></g-image>
    </section>

    <div class="relative z-20 bg-white">
      <h1>TEST</h1>
      <p class="text-2xl">
        Lorem ipsum dolor sit amet consectetur, <br />adipisicing elit. Illo
        similique velit modi magnam <br />sint reiciendis optio excepturi
        cupiditate laborum necessitatibus.
      </p>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Index",
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
