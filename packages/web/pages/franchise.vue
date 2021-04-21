<template>
    <div class="mb-20">
        <div class="background relative w-full">
            <img
                alt="..."
                class="mx-auto vertical-middle"
                src="~/assets/cab_design.png"
            />
            <div class="absolute top-1/2 w-full mx-auto">
                <h1 class="uppercase text-s md:text-sm custom:text-base xl:text-xl font-extrabold tracking-tighter text-white text-center">Et si vous aussi,<br>vous aviez votre propre<br><span class="text-yellow-600">Cabane à Burger ?</span></h1>
            </div>
        </div>
        <div class="mt-10 grid gap-4 lg:grid-cols-2 grid-cols-1">
            <div class="p-10 pl-12 m-auto vertical-middle">
                <h1 class="uppercase text-2xl font-extrabold tracking-tighter">Le goût d'apprendre<br><span class="text-yellow-600">et d'entreprendre</span></h1>
                <p class="mt-10 text-justify ...">Vous souhaitez devenir franchisé ?
                    <br>Vous avez la volonté de lancer votre propre <span class="text-yellow-600">Cabane à Burger</span> ?
                    <br><br>Faites-le-nous savoir !
                </p>
                <vs-button
                    class="card-form__button"
                    @click="active = 1"
                    warn
                    >
                    Plus d'infos
                </vs-button>
            </div>
            <div class="p-10">
                <img
                    alt="..."
                    class="mx-auto vertical-middle"
                    src="~/assets/burger_franchise.png"
                />
            </div>
        </div>
        <div class="mt-10 grid gap-4 grid-cols-1">
            <div class="m-auto vertical-middle">
                <h1 class="uppercase text-2xl font-extrabold tracking-tighter">Vos avantages</h1>
            </div>
        </div>
        <div class="grid gap-4 lg:grid-cols-2 grid-cols-1">
            <div class="p-10 xl:mx-44 m-auto vertical-middle">
                <img
                    alt="..."
                    class="mx-auto vertical-middle lg:float-left"
                    src="~/assets/wallet.png"
                />
                <div>
                    <p class="mt-5 text-center ...">Un investissement minimum pour une rentabilité maximum</p>
                </div>
            </div>
            <div class="p-10 xl:mx-44 m-auto vertical-middle">
                <img
                    alt="..."
                    class="mx-auto vertical-middle lg:float-left"
                    src="~/assets/key.png"
                />
                <p class="mt-5 text-center ...">Une solution clé en main : vous signez, vous vous lancez !</p>
            </div>
            <div class="p-10 xl:mx-44 m-auto vertical-middle">
                <img
                    alt="..."
                    class="mx-auto vertical-middle lg:float-left"
                    src="~/assets/training.png"
                />
                <p class="mt-5 text-center ...">Formation et accompagnement assurés (conseil sur le choix du lieu d’implantation, installation de la structure, réseau d’approvisionnement négocié...)</p>
            </div>
            <div class="p-10 xl:mx-44 m-auto vertical-middle">
                <img
                    alt="..."
                    class="mx-auto vertical-middle lg:float-left"
                    src="~/assets/location.png"
                />
                <p class="mt-5 text-center ...">Une carte nationale partagée, mais aussi une liberté de création de recettes suivant vos envies et vos régions.</p>
            </div>
        </div>
        <vs-button
            class="card-form__button w-full"
            @click="active = 1"
            warn
            style="md:width:30%"
            >
            Je souhaite me lancer
        </vs-button>
    </div>
</template>

<script>
export default {
}
</script>
<style>
.card-form__button {
width: 50%;
height: 50px;
background: #EF7202;
border: none;
border-radius: 10px;
font-size: 18px;
font-weight: 500;
font-family: "Source Sans Pro", sans-serif;
box-shadow: 3px 10px 20px 0px #e0b895;
color: #fff;
margin-top: 50px;
cursor: pointer;
margin-left: auto;
margin-right: auto;
}
.background {
    background: linear-gradient(180deg, #FBD69F 65%, #F7CA89 35%);
}
</style>
