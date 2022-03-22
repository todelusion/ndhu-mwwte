<template>
  <div class="layout">
    <div class="landingImage h-screen">
      <header class="mx-auto max-w-[1440px] px-5 pt-10">
        <nav class="flex items-center justify-between">
          <g-link to="/">
            <g-image alt="mwwte_LOGO" src="~/assets/LOGO.png" width="125" />
          </g-link>
          <div class="button">
            <g-link
              to="/blog/"
              class="mx-5 font-serif font-medium text-white duration-100 hover:bg-[#FEC6B5]"
              >BLOG</g-link
            >
            <g-link
              to="/About/"
              class="mx-5 font-serif font-medium text-white duration-100 hover:bg-[#FEC6B5]"
              >ABOUT</g-link
            >
            <g-link
              class="mx-5 font-serif font-medium text-white duration-100 hover:bg-[#FEC6B5]"
              >PODCAST</g-link
            >
          </div>
        </nav>
        <div>
          <g-image alt="mwwte_LOGO" src="~/assets/LOGO.png" width="300" class="mx-auto mt-52" />
          <!-- <h1
            class="mt-96 pb-10 font-sans 2xl:text-7xl font-bold 2xl:leading-[5rem] tracking-widest text-white"
          >
            移工<br />與她的老人
          </h1> -->
        </div>
      </header>
    </div>
    <section class="mx-auto max-w-[1440px] pt-10">
      <h1>TEST</h1>
    </section>
  </div>
</template>

<script>
export default {
  metaInfo: {
    link: [
      {
        rel: "favicon",
        href: "favicon.ico",
      },
    ],
  },
};
</script>

<style>
body {
  background-color: #f5f5f5;
}
.landingImage {
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)),
    url("~@/assets/landingPage.jpg");
  background-size: cover;
  background-position: center;
}
</style>
