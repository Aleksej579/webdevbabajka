<template>
  <div class="main container max-w-7xl mx-auto flex gap-5 h-full pb-8">
    <!-- <div class="article w-3/4 p-3 border">
      <div v-for="itemField in html" :key="itemField" v-html="itemField"></div>
    </div>
    <div class="w-1/4 p-3 border">
      <ul>
        <li v-for="itemId in arrId" :key="itemId">
          <button @click="setPageArticle(itemId)"
            class="border border-slate-800 px-3 m-0.5 hover:bg-slate-800 hover:text-white">
            Download Article ID: {{ itemId }}
          </button>
        </li>
      </ul>
    </div> -->
  </div>
</template>

<!-- <script>
import axios from "axios";

export default {
  data() {
    return {
      html: {},
      allArticleId: [],
    };
  },
  computed: {
    arrId() {
      let getArrId = [];
      for (const iter of this.allArticleId) {
        getArrId.push(Object.values(iter)[0]);
      }
      return getArrId;
    }
  },
  methods: {
    setPageArticle(numberPage) {
      axios
        .get(`http://localhost:3001/api/article/${numberPage}`)
        .then(resJson => {
          this.html = new Set(Object.values(JSON.parse(resJson.data[0].data)));
        });
    }
  },
  created: function () {
    axios
      .get(`http://localhost:3001/api/article`)
      .then(resId => {
        this.allArticleId = resId.data;
      });
  },
};
</script> -->