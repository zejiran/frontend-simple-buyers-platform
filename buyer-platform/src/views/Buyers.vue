<template>
    <div class="buyers">
        <v-app-bar app>
            <h1 class="overline text-6">Our list of Buyers</h1>
            <v-spacer></v-spacer>
            <SearchBar/>
        </v-app-bar>
        <v-container class="my-5 text-center">
            <v-layout row wrap>
                <v-flex xs12 sm6 md4 lg3 v-for="buyer in buyers" :key="buyer.id">
                    <v-card class="ma-3" shaped>
                        <v-responsive class="pt-4">
                            <v-avatar size="100">
                                <img :src="'https://api.adorable.io/avatars/' + buyer.id">
                            </v-avatar>
                        </v-responsive>
                        <v-card-text>
                            <div class="subheading">{{ buyer.name }}</div>
                            <div class="grey--text">{{ buyer.age}} years old</div>
                        </v-card-text>
                        <v-card-actions class="pb-4">
                            <v-btn small color="#960200" class="mx-auto">
                                <v-icon small left>mdi-information-outline</v-icon>
                                <span>See information</span>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    import SearchBar from '@/components/SearchBar'

    export default {
        name: 'Buyers',
        components: {SearchBar},
        data() {
            return {
                buyers: [
                    {name: 'Luffy', age: 20, id: 1},
                    {name: 'Zoro', age: 24, id: 2},
                    {name: 'Nami', age: 21, id: 3},
                    {name: 'Ussop', age: 22, id: 4},
                    {name: 'Tony Tony Chopper', age: 16, id: 5},
                    {name: 'Nico Robin', age: 28, id: 6},
                    {name: 'Franky', age: 20, id: 7},
                    {name: 'Brook', age: 24, id: 8},
                    {name: 'Karoo', age: 21, id: 9},
                    {name: 'Vivi', age: 22, id: 10},
                    {name: 'Doctorine', age: 16, id: 11},
                    {name: 'Cocodrile', age: 28, id: 12},
                ]
            }
        }
    }
</script>
