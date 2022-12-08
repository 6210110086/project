<!-- <template>
    <q-layout view="hHh Lpr lFf">
        <q-page-container class="bg-grey-2">
            <q-page padding class="row items-center justify-center">
                <div class="row full-width">
                    <div class="col-md-8 offset-md-2 col-xs-12 q-pl-md q-pr-md q-pt-sm">
                        <q-card flat class="bg-white text-black">
                            <div class="row">
                                <div class="col-md-6 col-xs-12 q-pa-md">
                                    <q-img placeholder-src="~assets/images/ไก่.jpg"
                                        src="~assets/images/ไก่.jpg" spinner-color="white"></q-img>
                                </div>
                                <div class="col-md-6 col-xs-12">
                                    <div class="q-pa-md">
                                        <div class="text-h6 q-pb-md text-blue-8 text-center text-weight-bolder">
                                            THAI VARK
                                        </div>
                                        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
                                            <q-input filled v-model="name" label="Username" lazy-rules :rules="[
                                                (val) =>
                                                    (val && val.length > 0) || 'Please type Username',
                                            ]" />
                                            <q-input filled type="password" v-model="password" label="Password"
                                                lazy-rules :rules="[
                                                    (val) =>
                                                        (val !== null && val !== '') ||
                                                        'Please type your password',
                                                    (val) =>
                                                        (val > 0 && val < 100) || 'Please type a real age',
                                                ]" />
                                            <div>
                                                <q-btn label="Login" type="submit" color="primary" />
                                                <q-btn label="Reset" type="reset" color="primary" flat
                                                    class="q-ml-sm" />
                                            </div>
                                        </q-form>
                                    </div>
                                </div>
                            </div>
                        </q-card>
                    </div>
                </div>
            </q-page>
        </q-page-container>
    </q-layout>
</template>

<script>
export default {
    data() {
        return {
            name: null,
            password: null,
        };
    }
    methods: {
        onSubmit() {
            console.log("click submit");
        },
        onReset() {
            this.name = null;
            this.password = null;
        }
    }
}
</script> -->
<template>
    <img src="~assets/images/wave.png" class="wave" alt="login-wave">
    <div class="row" style="height: 90vh">
        <div class="col-0 col-md-6 flex justify-center content-center">
            <img src="~assets/images/wave4.png" class="responsive" alt="login-image">
        </div>
        <div v-bind:class="{ 'justify-center': $q.screen.md || $q.screen.sm || $q.screen.xs }"
            class="col-12 col-md-6 flex content-center">
            <q-card v-bind:style="$q.screen.lt.sm ? { 'width': '80%' } : { 'width': '50%' }">
                <q-card-section>
                    <q-avatar size="103px" class="absolute-center shadow-10">
                        <img src="~assets/images/sun.jpg" alt="avatar">
                    </q-avatar>
                </q-card-section>
                <q-card-section>
                    <div class="q-pt-lg">
                        <div class="col text-h6 ellipsis flex justify-center">
                            <h2 class="text-h2 text-uppercase q-my-none text-weight-regular">Login</h2>
                        </div>
                    </div>
                </q-card-section>
                <q-card-section>
                    <q-form class="q-gutter-md">
                        <q-field label="Username">
                        </q-field>
                        <q-field label="Password" type="password">
                        </q-field>
                        <div>
                            <q-btn class="full-width" color="primary" label="Login" type="submit" rounded></q-btn>
                            <div class="text-center q-mt-sm q-gutter-lg">
                                <router-link class="text-black" to="/login">Esqueceu a senha?</router-link>
                                <router-link class="text-black" to="/login">Criar conta</router-link>
                            </div>
                        </div>
                    </q-form>
                </q-card-section>
            </q-card>
        </div>
    </div>
</template>

<!-- <script>
import { useQuasar } from 'quasar'
import { mapActions } from 'vuex'
let $q
export default {
    name: 'Login',
    data() {
        return {
            login: {
                username: 'Joabson',
                password: 'a2d4g6j8'
            }
        }
    },
    methods: {
        ...mapActions('auth', ['doLogin']),
        async submitForm() {
            if (!this.login.username || !this.login.password) {
                $q.notify({
                    type: 'negative',
                    message: 'Os dados informados são inválidos.'
                })
            } else if (this.login.password.length < 6) {
                $q.notify({
                    type: 'negative',
                    message: 'A senha deve ter 6 ou mais caracteres.'
                })
            } else {
                try {
                    await this.doLogin(this.login)
                    const toPath = this.$route.query.to || '/admin'
                    this.$router.push(toPath)
                } catch (err) {
                    if (err.response.data.detail) {
                        $q.notify({
                            type: 'negative',
                            message: err.response.data.detail
                        })
                    }
                }
            }
        }
    },
    mounted() {
        $q = useQuasar()
    }
}
</script> -->

<style scoped>
.wave {
    position: fixed;
    width: 100%;
    z-index: -1;
}
</style>
