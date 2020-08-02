<template>
    <v-toolbar flat>

        <v-text-field label="By ID" color="#EE2000" class="mt-8 mr-2"></v-text-field>

        <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="date"
                transition="scale-transition" offset-y min-width="290px">
            <template v-slot:activator="{ on, attrs }">
                <v-text-field v-model="date" label="Filter by date" readonly
                              v-bind="attrs" v-on="on" color="#EE2000" class="mt-8"></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="#960200" @click="menu = false">Cancel</v-btn>
                <v-btn text color="#960200" @click="$refs.menu.save(date)">OK</v-btn>
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