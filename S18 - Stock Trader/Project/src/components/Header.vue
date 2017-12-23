<template>
<v-toolbar app>
  <v-toolbar-items>
    <v-btn flat
      to="/"
      exact
      color="primary">
      Stock Trader
    </v-btn>

    <v-btn flat
      to="/portfolio"
      exact>
      Portfolio
    </v-btn>

    <v-btn flat
      to="/stocks"
      exact>
    Stocks</v-btn>
  </v-toolbar-items>

  <v-spacer></v-spacer>
  <v-toolbar-items>
    <v-btn flat @click="endDay">End Day</v-btn>

    <v-menu >
      <v-btn slot="activator" flat>Save & Load</v-btn>
      <v-list>
        <v-list-tile v-for="item in saveLoadOptions" :key="item.title" @click="item.callback">
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar-items>

  <v-toolbar-title>Funds: $100.00</v-toolbar-title>
</v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      saveLoadOptions: [
        {title: "Save Data", callback: () => { this.saveData(); } },
        {title: "Load Data", callback: () => { this.loadData(); } }
      ]
    };
  },

  methods: {
    endDay() {
      console.log("End Day");
    },
    saveData() {
      console.log("Saving");
    },
    loadData() {
      console.log("Loading");
    }
  }
}
</script>

