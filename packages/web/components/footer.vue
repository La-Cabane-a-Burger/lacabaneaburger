<template>
    <!-- Footer -->
    <footer class="footer">
        <div id="container-footer">
            <div class="grid grid-cols-5">
                <div class="col-span-2 ..."><hr class="hr-top"></div>
                <div class="col-span-1 ...">
                    <img class="cab-logo" src="../assets/img/logo_cabane_sombre.png">
                </div>
                <div class="col-span-2 ..."><hr class="hr-top"></div>
            </div>
            <div class="grid grid-cols-5 blockFooter">
                <div>
                    <h2>La Franchise</h2><br>
                    <p>Vous êtes intéréssé par la franchise ?</p>
                    <vs-button
                        border
                        warn
                        @click="active = 1"
                        class="button_footer"
                    >
                        CONTACTEZ NOUS
                    </vs-button>
                </div>
                <div>
                    <h2>Nos Restaurants</h2><br>
                    <p>Un de nos restaurant est peut être prêt de chez vous !</p>
                    <vs-button
                        border
                        warn
                        @click="active = 1"
                        class="object-center button_footer"
                    >
                        NOUS TROUVER
                    </vs-button>
                </div>
                <div></div>
                <div>
                    <h2>Commande</h2><br>
                    <p>Pour moins d'attente, n'hésitez pas à commander en ligne.</p>
                    <vs-button
                        border
                        warn
                        @click="active = 1"
                        class="button_footer"
                    >
                        JE COMMANDE
                    </vs-button>
                </div>
                <div>
                    <h2>La carte</h2><br>
                    <p>Découvrez nos produits du moment !</p>
                    <vs-button
                        border
                        warn
                        @click="active = 1"
                        class="button_footer"
                    >
                        VOIR LE MENU
                    </vs-button>
                </div>
            </div>
            <div class="grid grid-cols-3">
                <div class="col-start-2 col-end-2">
                    <vs-button
                        border
                        warn
                        @click="active = 1"
                        class="button_mobile"
                        style="margin:auto"
                    >
                        JE COMMANDE
                    </vs-button>
                </div>
            </div>
            <div class="grid grid-cols-1">
                <div class="ph-sante">
                    <h4>POUR VOTRE SANTE, MANGEZ CINQ FRUITS ET LEGUMES PAR JOUR. WWW.MANGERBOUGER.FR</h4>
                </div>
            </div>
            <div class="grid grid-cols-1">
                <div>
                    <a class="linkBis" href="#">Mentions légales</a>
                    -
                    <a class="linkBis" href="#">CGV</a>
                    -
                    <a class="linkBis" href="#">Données personnelles</a>
                </div>
            </div>
            <hr class="hr-bottom">
            <div class="grid sm:grid-cols-3">
                <div class="sm:col-span-2 ... menu_left">
                    <a class="link" href="#">La Carte</a>
                    <a>/</a>
                    <a class="link" href="#">Infos Pratiques</a>
                    <a>/</a>
                    <a class="link" href="#">Le Concept</a>
                    <a>/</a>
                    <a class="link" href="#">La Franchise</a>
                </div>
                <div class="rs_right">
                    <a href="#"><svg id="Bold" enable-background="new 0 0 24 24" height="100%" viewBox="0 0 24 24" width="100%" xmlns="http://www.w3.org/2000/svg"><path d="m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z"/></svg></a>
                    <a href="#"><svg height="100%" viewBox="0 0 511 511.9" width="100%" xmlns="http://www.w3.org/2000/svg"><path d="m510.949219 150.5c-1.199219-27.199219-5.597657-45.898438-11.898438-62.101562-6.5-17.199219-16.5-32.597657-29.601562-45.398438-12.800781-13-28.300781-23.101562-45.300781-29.5-16.296876-6.300781-34.898438-10.699219-62.097657-11.898438-27.402343-1.300781-36.101562-1.601562-105.601562-1.601562s-78.199219.300781-105.5 1.5c-27.199219 1.199219-45.898438 5.601562-62.097657 11.898438-17.203124 6.5-32.601562 16.5-45.402343 29.601562-13 12.800781-23.097657 28.300781-29.5 45.300781-6.300781 16.300781-10.699219 34.898438-11.898438 62.097657-1.300781 27.402343-1.601562 36.101562-1.601562 105.601562s.300781 78.199219 1.5 105.5c1.199219 27.199219 5.601562 45.898438 11.902343 62.101562 6.5 17.199219 16.597657 32.597657 29.597657 45.398438 12.800781 13 28.300781 23.101562 45.300781 29.5 16.300781 6.300781 34.898438 10.699219 62.101562 11.898438 27.296876 1.203124 36 1.5 105.5 1.5s78.199219-.296876 105.5-1.5c27.199219-1.199219 45.898438-5.597657 62.097657-11.898438 34.402343-13.300781 61.601562-40.5 74.902343-74.898438 6.296876-16.300781 10.699219-34.902343 11.898438-62.101562 1.199219-27.300781 1.5-36 1.5-105.5s-.101562-78.199219-1.300781-105.5zm-46.097657 209c-1.101562 25-5.300781 38.5-8.800781 47.5-8.601562 22.300781-26.300781 40-48.601562 48.601562-9 3.5-22.597657 7.699219-47.5 8.796876-27 1.203124-35.097657 1.5-103.398438 1.5s-76.5-.296876-103.402343-1.5c-25-1.097657-38.5-5.296876-47.5-8.796876-11.097657-4.101562-21.199219-10.601562-29.398438-19.101562-8.5-8.300781-15-18.300781-19.101562-29.398438-3.5-9-7.699219-22.601562-8.796876-47.5-1.203124-27-1.5-35.101562-1.5-103.402343s.296876-76.5 1.5-103.398438c1.097657-25 5.296876-38.5 8.796876-47.5 4.101562-11.101562 10.601562-21.199219 19.203124-29.402343 8.296876-8.5 18.296876-15 29.398438-19.097657 9-3.5 22.601562-7.699219 47.5-8.800781 27-1.199219 35.101562-1.5 103.398438-1.5 68.402343 0 76.5.300781 103.402343 1.5 25 1.101562 38.5 5.300781 47.5 8.800781 11.097657 4.097657 21.199219 10.597657 29.398438 19.097657 8.5 8.300781 15 18.300781 19.101562 29.402343 3.5 9 7.699219 22.597657 8.800781 47.5 1.199219 27 1.5 35.097657 1.5 103.398438s-.300781 76.300781-1.5 103.300781zm0 0"/><path d="m256.449219 124.5c-72.597657 0-131.5 58.898438-131.5 131.5s58.902343 131.5 131.5 131.5c72.601562 0 131.5-58.898438 131.5-131.5s-58.898438-131.5-131.5-131.5zm0 216.800781c-47.097657 0-85.300781-38.199219-85.300781-85.300781s38.203124-85.300781 85.300781-85.300781c47.101562 0 85.300781 38.199219 85.300781 85.300781s-38.199219 85.300781-85.300781 85.300781zm0 0"/><path d="m423.851562 119.300781c0 16.953125-13.746093 30.699219-30.703124 30.699219-16.953126 0-30.699219-13.746094-30.699219-30.699219 0-16.957031 13.746093-30.699219 30.699219-30.699219 16.957031 0 30.703124 13.742188 30.703124 30.699219zm0 0"/></svg></a>
                    <a href="#"><svg version="1.1" id="Capa_1" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                        <g>
                            <g>
                                <path d="M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016
                                    c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992
                                    c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056
                                    c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152
                                    c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792
                                    c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44
                                    C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568
                                    C480.224,136.96,497.728,118.496,512,97.248z"/>
                            </g>
                        </g>
                    </svg></a>
                </div>
            </div>
        </div>
    </footer>
    <!-- Footer -->
</template>
<script>
  export default {
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
#container-footer {
    padding:10px;
    width:100%;
    color:white;
    background-color:#3C2116;
    display: block;
    text-align:center;
    padding-top: 3%;
}
svg {
    fill:white;
    width: 5%;
    display: inline;
    margin : 1%;
}
.rs_right {
    text-align: right;
    margin-right: 14%;
}
.hr-bottom{
  margin: 1% auto;
  width: 90%;
  height: 2px;
  background-color: rgb(255, 255, 255, 0.3);
  border: none;
}
.hr-top{
  margin: 7% auto;
  width: 75%;
  height: 2px;
  background-color: rgb(255, 255, 255, 0.3);
  border: none;
  vertical-align:middle;
  display:inline-block;
}
.linkBis {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
}
.link {
    margin: 2%;
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    vertical-align:middle;
    display:inline-block;
}
.link:hover, .linkBis:hover {
    color: #EF7202;
}
.menu_left {
    text-align: left;
    margin-left: 6%;
}
.ph-sante {
    margin: 1%;
    margin-top: 3%;
    font-family: 'Bebas Neue', cursive;
    font-size: 24px;
}
.button_footer {
    margin-left: 0;
    margin-top: 6%;
}
h2 {
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
    font-size: 22px;
    text-align: left;
}
p {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    text-align: left;
    padding-right: 10%;
}
.blockFooter {
    padding: 1% 10% 1% 10%;
}
.cab-logo {
    width: 30%;
    margin: auto;
}
.button_mobile {
    display: none;
}
@media (max-width: 875px) {
    .blockFooter, .hr-top {
        display: none;
    }
    .cab-logo {
        width: 50%;
    }
    .ph-sante {
        margin: 1%;
        margin-top: 3%;
        font-family: 'Bebas Neue', cursive;
        font-size: 20px;
    }
    .linkBis {
        font-family: 'Poppins', sans-serif;
        font-size: 10px;
    }
    .button_mobile {
       display: block;
    }
    .menu_left {
        text-align: center;
        margin-left: 8%;
    }
    .rs_right {
        text-align: center;
        margin-right: 0;
    }
}
@media (max-width: 451px) {
    .blockFooter, .hr-top, .hr-bottom, .cab-logo {
        display: none;
    }
    .ph-sante {
        margin: 1%;
        margin-top: 3%;
        font-family: 'Bebas Neue', cursive;
        font-size: 15px;
    }
    .linkBis {
        font-family: 'Poppins', sans-serif;
        font-size: 8px;
    }
    .menu_left {
        text-align: center;
        margin-left: 0%;
    }
    .rs_right {
        text-align: center;
        margin-right: 0;
    }
    .button_mobile {
        display: block;
    }
}
</style>