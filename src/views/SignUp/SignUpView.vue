<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h3 class="pt-3">Crie sua conta</h3>
            </div><br />
        </div>
        <div class="row">
            <div class="col-3"></div>
            <div class="col-6">
                <form action="" method="POST" @submit.prevent="submit">
                    <div class="form-outline mb-4">
                        <input type="text" v-model="data.name" id="name" class="form-control" minlength="2" maxlength="100" required />
                        <label class="form-label" for="name">Nome<sup>*</sup></label>
                    </div>
                    <div class="form-outline mb-4">
                        <input type="text" v-model="data.email"  id="email" class="form-control" minlength="5" maxlength="100" required />
                        <label class="form-label" for="email">Endereço de e-mail<sup>*</sup></label>
                    </div>
                    <div class="form-outline mb-4">
                        <input type="password" v-model="data.password"  id="password" class="form-control" minlength="8" maxlength="100"
                            required />
                        <label class="form-label" for="password">Senha<sup>*</sup></label>
                    </div>
                    <div class="form-outline mb-4">
                        <input type="password" v-model="data.pwd2Form"  id="pwd2Form" class="form-control" minlength="8" maxlength="100"
                            required />
                        <label class="form-label" for="pwd2Form">Confirme sua senha<sup>*</sup></label>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block mb-4">Cadastrar</button>
                </form>
            </div>
            <div class="col-3"></div>
        </div>
    </div>
</template>
<script lang="ts">
import { reactive } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default {
  name: "SignUp",
  setup() {
    const data = reactive({
      name: "",
      email: "",
      password: "",
      pwd2Form: ""
    });

    const router = useRouter();

    const submit = async () => {
      try {
        await axios.post("http://localhost:8080/signup", data, {
          headers: { 'Content-Type': 'application/json' },
        });

        await router.push("/login");
      } catch (error) {
        console.log(error);
      }
    };

    return {
      data,
      submit
   };
}
};

</script>

<style>

</style>