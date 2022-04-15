<template>
  <div class="layout">
    <header class="absolute top-0 left-0 z-[1000] w-full px-20 py-7">
      <nav class="flex w-full none_fixed" :class="{ fixed: active }">
        <g-link to="/">
          <g-image alt="mwwte_LOGO" src="~/assets/LOGO.png" width="100" />
        </g-link>
        <ul
          class="flex items-center justify-center font-serif text-lg font-black tracking-wider text-white"
        >
          <li class="ml-16 rounded-2xl p-3 hover:bg-main hover:text-black">
            <g-link>About</g-link>
          </li>
          <li class="ml-16 rounded-2xl p-3 hover:bg-main hover:text-black">
            <g-link>PODCAST</g-link>
          </li>
        </ul>
      </nav>
    </header>
    <slot />
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
      test: 'test'
    };
  },
  // created() {
  //   window.addEventListener("scroll", this.handleScroll);
  //   window.addEventListener("scroll", this.parallaxScroll);
  // },
  // methods: {
  //   handleScroll() {
  //     console.log("fixed");
  //     this.active = window.scrollY > 28 ? true : false;
  //   },
  //   parallaxScroll() {
  //     console.log("parallax");
  //     let landingPage = document.getElementById("landingPage");
  //     let valueY = window.scrollY;
  //     landingPage.style.top = valueY * 0.5 + "px";
  //   },
  // },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
body {
  min-height: 100vh;
  background-color: #f5f5f5;
}
#landingPage {
  filter: brightness(0.75);
}
.fixed {
  position: fixed;
  top: 0;
  left: 0;
  padding-left: 5rem;
  padding-right: 5rem;
  transition: background-color 0.2s ease-in-out;
  background: rgba(0, 0, 0, 0.7);
}

</style>
