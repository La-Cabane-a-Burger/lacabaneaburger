<template>
  <div>
    <form class="space-y-6" action="#" method="POST">
      <div>
        <Input label="Adresse e-mail" id="email" name="email" type="email" autocomplete="email" required/>
      </div>

      <div>
        <label for="password" class="block text-sm font-medium text-gray-700">
          Mot de passe
        </label>
        <div class="mt-1">
          <Input id="password" name="password" type="password" autocomplete="current-password" required />
        </div>
      </div>

      <div class="flex items-center justify-between">
        <Checkbox name="stayLogged" label="Rester connecté" />

        <div class="text-sm">
          <a href="#" class="font-medium text-primary-600 hover:text-primary-500">
            Mot de passe oublié ?
          </a>
        </div>
      </div>

      <div>
        <Button type="submit" class="w-full flex justify-center text-sm font-medium">
          Se connecter
        </Button>
      </div>
    </form>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import Button from "@/components/form/Button";
import Input from "@/components/form/Input";
import Checkbox from "@/components/form/Checkbox";

export default defineComponent({components: {
    Checkbox,
  Button, Input
  }})
</script>
