<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            GUI Converter
          </h1>
          <h2 class="subtitle">
            If you want to switch from TuSKe to skript-gui, this converter will do the job for you.
          </h2>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <b-field
          :label="'Your ' + (isConverted ? 'skript-gui' : 'TuSKe') + ' code'"
        >
          <b-input v-model="code" type="textarea" rows="10" :readonly="isConverted" />
        </b-field>
        <b-field>
          <b-button type="is-primary" class="mr-5" :disabled="isConverted" @click="parse">
            Convert
          </b-button>
          <b-button type="is-light" class="mr-5" :disabled="!isConverted" @click="reset">
            Reset
          </b-button>
          <b-checkbox
            v-model="isUsingTabs"
            native-value="Silver"
            :disabled="isConverted"
          >
            I use tabulations
          </b-checkbox>
        </b-field>
      </div>
    </section>
  </div>
</template>

<script>
import { parse } from 'assets/js/gui-converter';

export default {
  name: 'GuiConverter',
  data () {
    return {
      code: '',
      isUsingTabs: false,
      isConverted: false
    };
  },
  methods: {
    async parse () {
      this.code = await parse(this.code, this.isUsingTabs);
      this.$buefy.snackbar.open('Your code has been converted correctly. You can copy it directly.');
      this.isConverted = true;
    },
    reset () {
      this.code = '';
      this.isConverted = false;
    }
  }
};
</script>
