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
                <form action="" method="POST">
                    <div class="form-outline mb-4">
                        <input type="text" id="nomeForm" class="form-control" minlength="2" maxlength="100" required />
                        <label class="form-label" for="nomeForm">Nome<sup>*</sup></label>
                    </div>
                    <div class="form-outline mb-4">
                        <input type="text" id="emailForm" class="form-control" minlength="5" maxlength="100" required />
                        <label class="form-label" for="emailForm">Endereço de e-mail<sup>*</sup></label>
                    </div>
                    <div class="form-outline mb-4">
                        <input type="password" id="senha1Form" class="form-control" minlength="8" maxlength="100"
                            required />
                        <label class="form-label" for="senha1Form">Senha<sup>*</sup></label>
                    </div>
                    <div class="form-outline mb-4">
                        <input type="password" id="senha2Form" class="form-control" minlength="8" maxlength="100"
                            required />
                        <label class="form-label" for="senha2Form">Confirme sua senha<sup>*</sup></label>
                    </div>
                    <button type="button" class="btn btn-primary btn-block mb-4">Cadastrar</button>
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