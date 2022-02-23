<template>
  <div>
    <form class="space-y-6" action="#" method="POST">
      <div>
        <client-only>
          <Input v-model:modelValue="loginFormData.email" label="Adresse e-mail" id="email" name="email" type="email" autocomplete="email" required/>
          <Input v-model:modelValue="loginFormData.phone" label="Téléphone" id="phone" name="phone" type="phone" autocomplete="phone" required/>
        </client-only>

      </div>

      <div>
        <label for="password" class="block text-sm font-medium text-gray-700">
          Mot de passe
        </label>
        <div class="mt-1">
          <client-only>
            <Input v-model:modelValue="loginFormData.password" id="password" name="password" type="password" autocomplete="current-password" required/>
          </client-only>
        </div>
      </div>

      <div class="flex items-center justify-between">
        <Checkbox name="stayLogged" label="Rester connecté"/>

        <div class="text-sm">
          <a href="#" class="font-medium text-primary-600 hover:text-primary-500">
            Mot de passe oublié ?
          </a>
        </div>
      </div>

      <div>
        <Button type="submit" class="w-full flex justify-center text-sm font-medium">
          S'inscrire
        </Button>
      </div>
    </form>
  </div>
</template>

<script>
import {defineComponent, ref} from "vue";
import Button from "@/components/form/Button";
import Input from "@/components/form/Input";
import Checkbox from "@/components/form/Checkbox";
import {useSignInMutation} from "../../generated/graphql";

export default defineComponent({
  components: {
    Checkbox,
    Button,
    Input
  },
  setup(_props, { emit }) {
    const loginFormData = ref({email: '', password: '', phone: ''});

    const {mutate: signInMutation} = useSignInMutation({});

    const router = useRouter();

    const submit = async () => {
      try {
        const data = await signInMutation({ input: loginFormData.value});
        console.log(data);
        router.push({ name: 'account' })

      } catch (e) {
        emit('showError', true);
        console.error(e);
      }
    }

    return {
      loginFormData,
      submit
    }

  }
})
</script>
