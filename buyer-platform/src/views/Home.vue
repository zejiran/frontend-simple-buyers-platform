<template>
    <div class="home">
        <v-container fluid>
            <v-col cols="12">
                <h1 class="font-weight-bold display-3 white--text mt-16 mb-5 text-center">Simple Buyer Platform</h1>
                <v-img alt="Buyers Logo" class="mx-auto" contain src="../assets/logo.png" transition="scale-transition"
                       width="400"/>
                <p class="headline text-center mb-15">This is a Vue.js app that represents a simple buyer platform.</p>
                <v-row class="mb-16">
                    <v-btn x-large color="#EE2000" class="mx-auto">
                        <v-icon left large>mdi-human-handsup</v-icon>
                        <span>Our buyers</span>
                    </v-btn>
                </v-row>
            </v-col>
        </v-container>
        <CopyrightBar/>
    </div>
</template>

<script>
    import CopyrightBar from '@/components/CopyrightBar'

    export default {
        name: 'Home',
        components: {CopyrightBar},
        data() {
            return {}
        }
    }
</script>
