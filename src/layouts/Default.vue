<template>
<div class="landingPage h-screen">
  <div class="max-w-[1440px] m-auto flex items-end"> 
    <g-link class="flex">
      <g-image alt="mwwte_LOGO" src="~/assets/LOGO.png" width="100" />
    </g-link>
    <div class="">
      <g-link to="/" class="mx-5 hover:bg-[#FEC6B5] font-serif font-medium duration-100">BLOG</g-link>
      <g-link to="/About/" class="mx-5 hover:bg-[#FEC6B5] font-serif font-medium duration-100">ABOUT</g-link>
      <g-link class="mx-5 hover:bg-[#FEC6B5] font-serif font-medium duration-100">PODCAST</g-link>
    </div>
</div>
</div>

</template>

<script>
export default {
  metaInfo: {
    link: [
      {
        rel: 'favicon',
        href: 'favicon.ico'
      }
    ]
  }
}
</script>

<style>
body {
  background-color: #F5F5F5;
}
.landingPage {
  background-image: url("~@/assets/landingPage.jpg");
  background-size: cover;
  background-position: center;
}

</style>