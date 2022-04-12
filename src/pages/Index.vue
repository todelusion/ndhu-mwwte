<template>
  <Layout>
    <section class="relative h-screen w-full">
      <g-image
        id="landingPage"
        src="~/assets/IMG_4389-4.jpg"
        class="absolute z-10 h-full w-full object-cover"
      ></g-image>
    </section>

    <div class="relative z-20 bg-white">
      <div class="mx-auto max-w-[1440px] pt-20 text-center">
        <h1 class="font-sans text-sm text-second">移工與她的老人</h1>
        <h2 class="font-serif text-4xl font-semibold text-gray-800">
          0321課堂側記 讀書會與壽豐國中組分享
        </h2>
        <g-image src="~/assets/post01.jpg" class="mx-auto mt-5 w-1/2"></g-image>
      </div>
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
