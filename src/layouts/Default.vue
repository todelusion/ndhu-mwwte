<template>
<div class="layout">
  <div class="max-w-[1440px] m-auto"> 
    <header class="flex justify-between items-center px-10 py-6 border-b-2">
      <g-link class="flex items-center">
        <g-image alt="mwwte_LOGO" src="~/assets/LOGO.png" width="100" />
      </g-link>
      <div class="">
        <g-link to="/" class="mx-5 hover:bg-[#FEC6B5] font-serif font-medium duration-100">BLOG</g-link>
        <g-link to="/About/" class="mx-5 hover:bg-[#FEC6B5] font-serif font-medium duration-100">ABOUT</g-link>
        <g-link class="mx-5 hover:bg-[#FEC6B5] font-serif font-medium duration-100">PODCAST</g-link>
      </div>
    </header>
    <slot />
  </div>
</div>

</template>

<script>
export default {
  metaInfo: {
    link: [
      {
        rel: 'Shortcut Icon"',
        type: 'image/ico',
        href: '/static/favicon.ico',
      }
    ]
  }
}
</script>