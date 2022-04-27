<template>
  <div class="layout">
    <header
      class="top-0 left-0 z-[1000] flex w-full items-center justify-center px-20 py-7 sm:justify-start md:absolute"
    >
      <nav
        class="fixed top-0 left-0 w-full px-20 flex justify-center md:justify-start"
        :class="{ bg_black: active, bg_none: !active }"
      >
        <g-link to="/">
          <g-image
            alt="mwwte_LOGO"
            src="~/assets/LOGO.png"
            width="100"
            class="min-w-[100px] duration-150 hover:scale-105"
          />
        </g-link>
        <ul
          class="hidden items-center justify-center font-serif text-lg font-black tracking-wider text-white sm:flex"
        >
          <li
            class="bg-main ml-16 rounded-full bg-primary p-3 text-gray-900 duration-150 hover:scale-105"
          >
            <g-link to="/blog/">BLOG</g-link>
          </li>
          <li
            class="bg-main ml-16 rounded-full bg-primary p-3 text-gray-900 duration-150 hover:scale-105"
          >
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
    };
  },
  created() {
    if (process.isClient) {
      window.addEventListener("scroll", this.handleScroll);
      window.addEventListener("scroll", this.parallaxScroll);
    }
  },
  methods: {
    handleScroll() {
      if (process.isClient) {
        this.active = window.scrollY > 28 ? true : false;
      }
    },
    parallaxScroll() {
      if (process.isClient) {
        let landingPage = document.getElementById("landingPage");
        let valueY = window.scrollY;
        let screenX = document.body.clientWidth;
        if (screenX>=768){
          landingPage.style.top = valueY * 0.5 + "px";
        }
      }
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  min-height: 100vh;
  background-color: #f5f5f5;
  scroll-behavior: smooth;
}
#landingPage {
  filter: brightness(0.75);
}

@media (min-width: 768px) {
  .bg_black {
    /* position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding-left: 5rem;
    padding-right: 5rem; */
    transition: background-color 0.2s ease-in-out;
    background: rgba(0, 0, 0, 0.7);
  }
  .bg_none {
    background: rgba(0, 0, 0, 0);
    transition: background-color 0.2s ease-in-out;
  }
}
</style>
