<template>
    <div class="buyers">
        <v-app-bar app>
            <h1 class="overline hidden-sm-and-down">Our list of Buyers</h1>
            <v-spacer></v-spacer>
            <v-toolbar flat>
                <v-text-field @change="search(model)" class="mt-8 mr-2" color="#EE2000"
                              hint="Press enter to search" label="Search by ID" v-model="model"></v-text-field>

                <v-menu :close-on-content-click="false" :return-value.sync="date" min-width="290px" offset-y
                        ref="menu" transition="scale-transition" v-model="menu">
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field class="mt-8" color="#EE2000" label="Filter by date"
                                      readonly v-bind="attrs" v-model="date" v-on="on"></v-text-field>
                    </template>
                    <v-date-picker no-title scrollable v-model="date">
                        <v-spacer></v-spacer>
                        <v-btn @click="menu = false" color="#960200" text>Cancel</v-btn>
                        <v-btn @click="$refs.menu.save(date)" color="#960200" text>OK</v-btn>
                    </v-date-picker>
                </v-menu>
            </v-toolbar>
        </v-app-bar>
        <v-container class="my-5 text-center">
            <v-layout row wrap>
                <v-flex :key="buyer.id" lg3 md4 sm6 v-for="buyer in buyers" xs12>
                    <v-card class="ma-3" shaped>
                        <v-responsive class="pt-4">
                            <v-avatar size="100">
                                <img :src="'https://api.adorable.io/avatars/' + buyer.id">
                            </v-avatar>
                        </v-responsive>
                        <v-card-text>
                            <div class="subheading">{{ buyer.name }}</div>
                            <div class="grey--text">{{ buyer.age }} years old</div>
                        </v-card-text>
                        <v-card-actions class="pb-4">
                            <v-btn :href="'/buyer' + '?' + 'id=' + buyer.id + '&name=' + buyer.name + '&age=' + buyer.age"
                                   class="mx-auto" color="#960200" small>
                                <v-icon left small>mdi-information-outline</v-icon>
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
    import axios from 'axios'

    export default {
        name: 'Buyers',
        data() {
            return {
                date: new Date().toISOString().substr(0, 10),
                menu: false,
                model: '',
                buyers:
                // Test data if you don't want to create database
                    [
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
        },
        mounted() {
            axios.get('http://localhost:3717/buyers').then(response => {
                this.buyers = response.data
            })
        },
        methods: {
            search(model) {
                axios.get('http://localhost:3717/search/' + model).then(response => {
                    this.buyers = response.data
                })
            }
        }
    }
</script>
