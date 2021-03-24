<template>
  <div
    class="fixed z-50 flex flex-col w-full h-auto bg-transparent bg-opacity-95 ellipse"
    :class="{ 'bg-navbar': isMenuOpen || scrollPosition > 0 }"
    style="transition: 0.4s"
  >
    <div class="flex justify-between mx-2 my-6 sm:mx-16">
      <div class="flex-row items-center flex-1 hidden text-xs lg:flex">
        <div class="m-4 text-white font-text">Carte</div>
        <div class="m-4 text-white font-text">Informations</div>
        <div class="m-4 text-white font-text">Concept</div>
        <div class="m-4 text-white font-text">Franchise</div>
      </div>
      <div class="flex items-center flex-1 lg:hidden">
        <Menu v-if="!isMenuOpen" class="w-full fill-current text-primary" @click="onToggleMenu" />
        <Cross v-if="isMenuOpen" class="w-full fill-current text-primary" @click="onToggleMenu" />
      </div>
      <div class="flex items-center justify-center flex-1">
        <img src="~/assets/images/cab-logo.png" alt="La Cabane à Burger logo" />
      </div>
      <div class="flex items-center justify-end flex-1">
        <div>
          <vs-button class="font-text" color="#EF7202" relief
            >Commander
          </vs-button>
        </div>
        <div class="hidden lg:block">
          <vs-button class="font-text" color="#EF7202" relief icon
            ><User class="w-full" />
          </vs-button>
        </div>
      </div>
    </div>
      <div
        v-if="isMenuOpen"
        class="flex flex-col justify-start w-full pb-10 bg-opacity-95"
        style="transition: 0.4s"
      >
        <div class="m-4 text-white font-text">Carte</div>
        <div class="m-4 text-white font-text">Informations</div>
        <div class="m-4 text-white font-text">Concept</div>
        <div class="m-4 text-white font-text">Franchise</div>
      </div>

  </div>
</template>

<script>
import User from "~/assets/icons/user.svg?inline";
import Menu from "~/assets/icons/menu.svg?inline";
import Cross from "~/assets/icons/cross.svg?inline";

export default {
  name: "Navbar",
  components: {
    User,
    Menu,
    Cross,
  },
  data() {
    return {
      isMenuOpen: false,
      scrollPosition: 0,
    };
  },
  mounted() {
    this.scrollPosition = window.scrollY;
    window.addEventListener("scroll", this.updateScroll);
  },
  destroy() {
    window.removeEventListener("scroll", this.updateScroll);
  },
  methods: {
    onToggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
};
</script>


<style>
.ellipse {
  clip-path: ellipse(150% 100% at 50% 0);
}
</style>
