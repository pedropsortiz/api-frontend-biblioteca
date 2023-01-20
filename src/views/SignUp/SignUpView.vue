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
                        <p v-if="errors.name" class="text-danger">{{errors.name}}</p>
                    </div>
                    <div class="form-outline mb-4">
                        <input type="text" v-model="data.email"  id="email" class="form-control" minlength="5" maxlength="100" required />
                        <label class="form-label" for="email">Endereço de e-mail<sup>*</sup></label>
                        <p v-if="errors.email" class="text-danger">{{errors.email}}</p>
                    </div>
                    <div class="form-outline mb-4">
                        <input type="password" v-model="data.password"  id="password" class="form-control" minlength="8" maxlength="100" required />
                        <label class="form-label" for="password">Senha<sup>*</sup></label>
                        <p v-if="errors.password" class="text-danger">{{errors.password}}</p>
                    </div>
                    <div class="form-outline mb-4">
                        <input type="password" v-model="data.confirmPassword"  id="confirmPassword" class="form-control" minlength="8" maxlength="100" required />
                        <label class="form-label" for="confirmPassword">Confirme sua senha<sup>*</sup></label>
                        <p v-if="errors.confirmPassword" class="text-danger">{{errors.confirmPassword}}</p>
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
      confirmPassword: ""
    });
    const errors = reactive({
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
    const router = useRouter();

    const validatePasswords = () => {
        if (data.password !== data.confirmPassword) {
            errors.confirmPassword = "As senhas não coincidem.";
        } else {
            errors.confirmPassword = "";
        }
    };

    const submit = async () => {
        validatePasswords();
        if (errors.confirmPassword) {
            return;
        }
        try {
            const response = await axios.post("http://localhost:8080/signup", data, {
                headers: { 'Content-Type': 'application/json' },
            });
            await router.push("/login");
        } catch (error) {
            errors.name = error.response.data.errors.name || "";
            errors.email = error.response.data.errors.email || "";
            errors.password = error.response.data.errors.password || "";
            console.log(error);
        }
    };

    return {
        data,
        errors,
        submit,
        validatePasswords
    };
  }
};

</script>

<style>

</style>