<template>
    <v-toolbar flat>

        <v-text-field class="mt-8 mr-2" color="#EE2000" label="Search by ID"></v-text-field>

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
</template>

<script>
    export default {
        data: () => ({
            date: new Date().toISOString().substr(0, 10),
            menu: false,
        }),
    }
</script>