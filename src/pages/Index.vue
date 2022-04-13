<template>
  <Layout>
    <section class="relative h-screen w-full">
      <g-image
        id="landingPage"
        src="~/assets/landingPage.jpg"
        class="absolute z-10 h-full w-full object-cover"
      ></g-image>
    </section>

    <div class="relative z-20 bg-third">
      <div class="mx-auto max-w-[1440px] py-20 text-center">
        <h1 class="font-sans text-sm text-second">移工與她的老人</h1>
        <h2 class="font-serif text-4xl font-semibold text-gray-800">
          0321課堂側記 讀書會與壽豐國中組分享
        </h2>
        <g-image src="~/assets/post01.jpg" width="650" class="mx-auto mt-5"></g-image>
      </div> 
    </div>
    <div class="z-20 bg-white py-20">
      <div class="grid grid-rows-2 grid-flow-col gap-4 max-w-[1440px] mx-auto border-2 text-center">
        <div>01</div>
        <div>02</div>
        <div>03</div>
        <div>04</div>
        <div>05</div>
        <div>06</div>
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
