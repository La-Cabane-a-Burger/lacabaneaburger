<template>
  <div class="flex items-center justify-between shadow-lg lg:px-10 px-3 py-3 text-left rounded-2xl my-3 bg-white">
      <div class="flex items-center">
        <img class="lg:w-32 lg:h-32 w-12 h-12 object-cover rounded-full" src="../assets/img/burger2.jpg" alt="">
        <div class="ml-5 w-full">
          <div class="flex items-end whitespace-nowrap">
            <div class="font-extrabold lg:text-lg text-xs">{{ formattedDate }}</div>
            <div class="ml-1 text-xs lg:pb-1">{{formattedHours}}</div>
          </div>

          <p class="lg:text-base text-xs">{{ price }}€</p>
          <p class="lg:text-base text-xs" v-if="items">{{items.length}} plat</p>
        </div>
      </div>
      <div class="flex flex-col lg:w-40 w-32">
        <vs-button class="font-text" color="#EF7202" relief @click="showReceipt=!showReceipt"
        >Reçu
        </vs-button>
        <vs-dialog scroll overflow-hidden auto-width v-model="showReceipt">
          <template #header>
            <div class="text-center font-extrabold font-text">
              <h3 class="text-primary text-2xl">
                La Cabane à Burger
              </h3>
              <h3>Vous remercie pour votre commande</h3>
            </div>
          </template>
          <div class="con-content">
            <h4>
              Facture :
            </h4>
            <p>
              Vuesax (pronounced / vjusacksː /, as view sacks) is a framework of UI components created with Vuejs to make projects easily and with a unique and pleasant style, vuesax is created from scratch and designed for all types of developers from the frontend lover to the backend who wants to easily create their visual approach to the end-user

              We are focused on streamlining the work of the programmer by giving components created in their entirety and with independent customization and very easy to implement, so creativity is in our hands but we do not neglect that each project is different both visually and in its ecosystem

              Vuesax does not have a design line such as other component frameworks based on Material Design, we believe that there are already emaciated frameworks that look visually and in UI / UX and we don't want to be one more of the bunch, apart from that we love to create and design new experiences and surprise you with new elements or details that we can only do by being visually free.
            </p>

            <h4>
              Why Vuesax?
            </h4>

            <p>
              Vuesax is a relatively new framework with a refreshing design and in the latest trends, vuesax based on vuejs which means that we go hand in hand with one of the most popular javascript frameworks in the world and with a huge community with which you will have all the help and documentation to create and make your project
              <br>
              <br>
              - Vuesax, unlike many frameworks, is designed from scratch and we are not anchored to any design line, this is something great since your project is going to be unique and very different from the others

              <br>
              <br>
              - We are focused on the quick and easy creation of projects giving a beautiful visual line but without forgetting the personalization and independence of the developer

              <br>
              <br>
              - Vuesax uses native css variables for better customization and production changes such as changing to dark theme or changing the main color of the entire application with few javascript lines
              <br>
              <br>

              - Vuesax is a frame designed to have a great visual impact and that is always in trend with respect to design.
              <br>
              <br>

              - An open-source community to create, improve and correct any component or function.
              <br>
              <br>

              - Independent components to avoid importing unnecessary code.
              <br>
              <br>

              - Markdown documents for better sustainability.
              <br>
              <br>

              - and much more.
            </p>
          </div>
        </vs-dialog>
        <vs-button class="font-text" color="#EF7202" relief
        >Détails
        </vs-button>
      </div>

  </div>
</template>

<script>
export default {
  props: {
    date: String,
    price: Number,
    items: Array
  },
  data:() => ({
    showReceipt: false,
    input1: '',
    input2: '',
    checkbox1: false
  }),
  computed: {
    formattedDate() {
      const d = new Date(this.date);
      const ye = new Intl.DateTimeFormat('fr', { year: 'numeric' }).format(d);
      const mo = new Intl.DateTimeFormat('fr', { month: 'short' }).format(d);
      const da = new Intl.DateTimeFormat('fr', { day: '2-digit' }).format(d);
      return da + ' ' + mo + ' ' + ye
    },
    formattedHours() {
      const d = new Date(this.date);
      const hh = new Intl.DateTimeFormat('fr', { hour: '2-digit', formatMatcher: 'basic' }).format(d).replace(' h','');
      const mm = new Intl.DateTimeFormat('fr', { minute: '2-digit' }).format(d);
      return hh + ':' + mm
    }
  }
}
</script>
