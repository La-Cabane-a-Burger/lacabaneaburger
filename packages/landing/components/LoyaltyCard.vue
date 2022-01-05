<template>
  <div class="w-full xl:w-4/12 px-4 pub-account">
    <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded" style="background-color: rgb(67,38,23)">
      <div class="px-4 py-5 flex-auto custom_cardInfo">
        <div class="tab-content tab-space">
          <div>
            <img class="mx-auto" src="~/assets/pub.png">
            <p class="text-3xl text-center text-orange-cab font-bold uppercase mt-8">
              Pourquoi résister ?
            </p>
            <div class="mt-8">
              <img class="mx-auto" style="display:inline" src="~/assets/cab-turn.png">
              <p class="text-lg text-center text-white-color font-semibold" style="display:inline;color:white">
                Cumulez des points à chaque achat d'un menu
              </p>
            </div>
            <div class="mt-8">
              <img class="mx-auto" style="display:inline" src="~/assets/burger-log.png">
              <p class="text-lg text-center font-semibold" style="display:inline;color:white">
                Transformez-les en menu gratuit
              </p>
            </div>
            <img class="mx-auto mt-2" src="~/assets/fidelite-number.png">
            <p class="text-3xl text-center text-white-color font-bold uppercase" style="color:white">
              =
            </p>
            <img class="mx-auto" src="~/assets/burger-mini.png">
            <vs-button
                class="card-form__button"
                @click="active = 1"
                warn
            >
              Rejoingez-nous
            </vs-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-form__button {
  width: 50%;
  height: 50px;
  background: #EF7202;
  border: none;
  border-radius: 10px;
  font-size: 22px;
  font-weight: 500;
  font-family: "Source Sans Pro", sans-serif;
  color: #fff;
  margin-top: 30px;
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
}
@media screen and (max-width: 768px) {
  .card-form__button {
    margin-top: 10px;
    width: 80%;
    height: 50px;
  }
  .pub-account {
    display: none;
  }
}
.custom_cardInfo {
  min-height: 650px;
}
</style>
