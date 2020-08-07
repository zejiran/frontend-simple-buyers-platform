<template>
    <div class="mb-16">
        <h1 class="headline mb-10 ml-2 text-center">Recommended products for {{ $route.query.name }}</h1>
        <v-sheet class="mx-auto" elevation="8" max-width="800">
            <v-slide-group :center-active="centerActive" :mandatory="mandatory" :multiple="multiple"
                           :next-icon="nextIcon ? 'mdi-plus' : undefined"
                           :prev-icon="prevIcon ? 'mdi-minus' : undefined"
                           :show-arrows="showArrows" class="pa-1"
                           v-model="model">
                <v-slide-item :key="product.id" v-for="product in products">
                    <v-card class="ma-3 text-center" flat>
                        <v-responsive class="pt-4">
                            <v-icon>mdi-shopping-outline</v-icon>
                        </v-responsive>
                        <v-card-text>
                            <div class="subheading">{{ product.name }}</div>
                            <div class="grey--text">${{ product.price }}</div>
                        </v-card-text>
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
                buyers: [],
                transactions: [],
                // Test data if you don't want to create database
                products: [
                    {name: 'Gomu Gomu', price: '2000', id: 1},
                    {name: 'Nomu Nomu', price: '2434', id: 2},
                    {name: 'Romu Romu', price: '2143', id: 3},
                    {name: 'Fira Fira', price: '2243', id: 4},
                    {name: 'Ton Ton', price: '1634', id: 5},
                    {name: 'Gomu Gomu', price: '2000', id: 1},
                    {name: 'Nomu Nomu', price: '2434', id: 2},
                    {name: 'Romu Romu', price: '2143', id: 3},
                    {name: 'Fira Fira', price: '2243', id: 4},
                    {name: 'Ton Ton', price: '1634', id: 5},
                ],
            }
        },
        mounted() {
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            const userId = urlParams.get('id');
            // Get transactions data by user id
            axios.get('http://localhost:3717/transaction/data/' + userId)
                .then(response => this.transactions = response.data)
                .then(() => Promise.all(this.transactions.map(transaction =>
                    axios.get('http://localhost:3717/transaction/sameip/' + transaction.ip))))
                .then(sameIpResponse => {
                    const buyers = [];
                    sameIpResponse.forEach((b) => {
                        buyers.push(JSON.stringify(b.data).slice(1, -1) + ",")
                    });
                    this.buyers = JSON.parse("[" + buyers[0].slice(0, -1) + "]");
                })
                // Recommend products that the first user with the same IP bought
                .then(() => axios.get('http://localhost:3717/transaction/data/' + this.buyers[0].id))
                .then(transactionIpResponse => transactionIpResponse.data[0].id)
                .then((transactionId) => axios.get('http://localhost:3717/transaction/products/' + transactionId))
                .then(productsSameIp => this.products = productsSameIp.data);
        }
    }
</script>
