<template>
    <div>
        <h1 class="headline my-10 ml-2 text-center">Users that used same IP on any transaction</h1>
        <v-sheet class="mx-auto mb-16" elevation="8" max-width="800">
            <v-slide-group :center-active="centerActive" :mandatory="mandatory" :multiple="multiple"
                           :next-icon="nextIcon ? 'mdi-plus' : undefined"
                           :prev-icon="prevIcon ? 'mdi-minus' : undefined"
                           :show-arrows="showArrows" class="pa-1"
                           v-model="model">
                    <v-slide-item :key="buyer.id" v-for="buyer in buyers">
                        <v-card class="ma-3 text-center" flat>
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
                                    <span class="mr-2">Information</span>
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-slide-item>
            </v-slide-group>
        </v-sheet>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                // Test data if you don't want to create database
                buyers: [
                    {name: 'Luffy', age: 20, id: 1213},
                    {name: 'Zoro', age: 24, id: 2213},
                    {name: 'Nami', age: 21, id: 3231},
                    {name: 'Ussop', age: 22, id: 4421},
                    {name: 'Tony Tony Chopper', age: 16, id: 5421},
                    {name: 'Nico Robin', age: 28, id: 6412},
                    {name: 'Franky', age: 20, id: 4127},
                    {name: 'Brook', age: 24, id: 8412},
                    {name: 'Karoo', age: 21, id: 9142},
                    {name: 'Vivi', age: 22, id: 10412},
                    {name: 'Doctorine', age: 16, id: 11142},
                    {name: 'Cocodrile', age: 28, id: 12412},
                ],
                transactions: []
            }
        },
        mounted() {
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            const userId = urlParams.get('id');
            // Get transactions data by user id
            axios.get('http://localhost:3717/transaction/data/' + userId)
                .then(response => {
                    this.transactions = response.data;
                })
                .then(() => Promise.all(this.transactions.map(transaction =>
                    axios.get('http://localhost:3717/transaction/sameip/' + transaction.ip))))
                .then(sameIpResponse => {
                    const buyers = [];
                    sameIpResponse.forEach((b) => {
                        buyers.push(JSON.stringify(b.data).slice(1,-1) + ",")
                    });
                    this.buyers = JSON.parse("["  + buyers[0].slice(0,-1)  + "]");
                });
        }
    }
</script>
