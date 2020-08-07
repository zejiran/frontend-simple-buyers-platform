<template>
    <div>
        <!--  When user id is valid. 0 is the id for bad queries-->
        <div class="buyers" v-if="$route.query.id">
            <v-app-bar app>
                <h1 class="overline">{{ $route.query.name }} information</h1>
                <v-spacer></v-spacer>
                <v-btn href="/" text>
                    <v-icon>mdi-home</v-icon>
                </v-btn>
            </v-app-bar>
            <v-card class="mx-8 my-7" min-height="800">
                <v-container>
                    <v-layout class="mt-16 mr-10 ml-5" row>
                        <v-flex md6 xs12>
                            <ShoppingHistory/>
                        </v-flex>
                        <v-flex md6 xs12>
                            <RecommendProducts/>
                            <UsersSameIP/>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card>
            <CopyrightBar/>
        </div>
        <!--  Bad query or user search  -->
        <div v-if="$route.query.id == 0">
            <h1 class="overline">Invalid user please go back to home</h1>
            <v-btn href="/" text>
                <v-icon>mdi-home</v-icon>
            </v-btn>
        </div>
    </div>
</template>

<script>
    import ShoppingHistory from '@/components/ShoppingHistory.vue'
    import RecommendProducts from '@/components/RecommendedProducts.vue'
    import UsersSameIP from '@/components/UsersSameIP.vue'
    import CopyrightBar from '@/components/CopyrightBar'

    export default {
        name: 'Buyer',
        components: {ShoppingHistory, RecommendProducts, UsersSameIP, CopyrightBar},
        data() {
            return {}
        }
    }
</script>
