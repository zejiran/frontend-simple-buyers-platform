<template>
    <div class="mb-13">
        <h1 class="headline ml-4 mb-8">Shopping history</h1>
        <v-col :key="transaction.id" cols="12" v-for="transaction in transactions">
            <v-card class="mr-10" elevation="8" min-width="200">
                <div class="d-flex justify-space-between">
                    <div>
                        <v-card-title class="headline" v-text="'Transaction ID: ' + transaction.id"></v-card-title>
                        <v-card-subtitle v-text="'From a ' + transaction.device + ' device.'"></v-card-subtitle>
                        <v-card-text v-text="'List of purchased products: ' + transaction.products + '.'"></v-card-text>
                    </div>
                </div>
            </v-card>
        </v-col>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                transactions: [
                    {
                        id: '952175',
                        device: 'linux',
                        products: ['Going Merry', 'Icecream', 'Rock and Stone'].join(', '),
                    },
                    {
                        id: '234275',
                        device: 'mac',
                        products: 'Excalibur',
                    },
                    {
                        id: '863568',
                        device: 'android',
                        products: 'Keyblade',
                    },
                    {
                        id: '952175',
                        device: 'linux',
                        products: ['Going Merry', 'Icecream', 'Rock and Stone'].join(', '),
                    },
                    {
                        id: '234275',
                        device: 'mac',
                        products: 'Excalibur',
                    },
                    {
                        id: '863568',
                        device: 'android',
                        products: 'Keyblade',
                    },
                ],
            }
        }
    }
</script>

