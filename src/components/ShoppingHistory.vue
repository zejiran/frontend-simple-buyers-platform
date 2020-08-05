<template>
    <div class="mb-13">
        <h1 class="headline ml-4 mb-8">Shopping history</h1>
        <v-col :key="transaction.id" cols="12" v-for="transaction in transactions">
            <v-card class="mr-10" elevation="8" min-width="200">
                <div class="d-flex justify-space-between">
                    <div>
                        <v-card-title class="headline" v-text="'Transaction ID: ' + transaction.name"></v-card-title>
                        <v-card-subtitle v-text="'From a ' + transaction.device + ' device.'"></v-card-subtitle>
                        <v-card-text
                                v-text="'List of purchased products: ' + transaction.products + '.'"></v-card-text>
                    </div>
                </div>
            </v-card>
        </v-col>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                // Test data if you don't want to create database
                transactions: [
                    {
                        name: '952175',
                        device: 'linux',
                        products: [{"name": "Going Merry", "price": 4423334, "id": "1342136bf"}, {
                            "name": "Geuse",
                            "price": 434,
                            "id": "114567f"
                        }]
                    },
                    {
                        name: '234275',
                        device: 'mac',
                        products: [{"name": "Veetee", "price": 4334, "id": "15c136bf"}],
                    },
                ],
            }
        },
        mounted() {
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            const userId = urlParams.get('id')
            // Get products by transaction id and insert on JSON
            function products_list(transactions) {
                for (let i = 0; i < transactions.length; i++) {
                    let transaction = transactions[i];
                    axios.get('http://localhost:3717/transaction/products/' + transaction.name).then(response => {
                        transaction.products = response.data.slice(1, -2)
                    })
                }
                console.log(transactions)
            }
            // Get transactions by user id
            axios.get('http://localhost:3717/transaction/data/' + userId).then(response => {
                this.transactions = JSON.parse(response.data.slice(0, -2) + "]")
            }).then(() => {
                products_list(this.transactions)
            });
        }
    }
</script>

