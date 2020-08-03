<template>
    <div>
        <h1 class="headline my-10 ml-2 text-center">Users with same IP</h1>
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
    export default {
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
                ],
            }
        }
    }
</script>
