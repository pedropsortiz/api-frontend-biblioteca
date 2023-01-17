<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h3 class="pt-3">Adicionar Livro</h3>
            </div>
        </div>
        <div class="row">
            <div class="col-3"></div>
            <div class="col-6">
                <form action="" method="POST">
                    <div class="form-group">
                        <label for="">Nome: <strong>*</strong></label>
                        <input type="text" class="form-control" required/>
                    </div>
                    <div class="form-group">
                        <label>Descrição: </label>
                        <textarea class="form-control"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="">Autor: <strong>*</strong></label><br/>
                        <select class="form-select" required>
                            <option>-----------------</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="">Capa: </label>
                        <input type="file" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="">Quantidade total: <strong>*</strong></label>
                        <input type="text" class="form-control" required/>
                    </div>
                    <div class="form-group">
                        <label for="">Quantidade em uso: <strong>*</strong></label>
                        <input type="text" class="form-control" required/>
                    </div>
                    <button type="submit" class="btn btn-success">Cadastrar</button>
                </form>
            </div>
            <div class="col-3"></div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style>

</style>