<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h3 class="pt-3">Acesse sua conta</h3>
            </div><br />
        </div>
        <div class="row">
            <div class="col-3"></div>
            <div class="col-6">
                <form action="login" method="POST">
                    <!-- Email input -->
                    <div class="form-outline mb-4">
                        <input type="email" id="form2Example1" class="form-control"/>
                        <label class="form-label" for="form2Example1">Endereço de e-mail</label>
                    </div>

                    <!-- Password input -->
                    <div class="form-outline mb-4">
                        <input type="password" id="form2Example2" class="form-control" />
                        <label class="form-label" for="form2Example2">Senha</label>
                    </div>

                    <!-- 2 column grid layout for inline styling -->
                    <div class="row mb-4">
                        <div class="col d-flex justify-content-center">
                            <!-- Checkbox -->
                            <div class="form-check">
                                <a href="/signup">Cadastre-se</a>
                            </div>
                        </div>

                        <div class="col">
                            <!-- Simple link -->
                            <a href="#">Esqueci minha senha</a>
                        </div>
                    </div>

                    <!-- Submit button -->
                    <button type="submit" class="btn btn-primary btn-block mb-4">Entrar</button>
                </form>
            </div>
            <div class="col-3"></div>
        </div>
    </div>
</template>

<script lang="ts">
</script>


<style>

</style>