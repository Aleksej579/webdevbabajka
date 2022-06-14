<template>
  <div class="main__form container max-w-7xl mx-auto flex gap-5 h-full">
    <div class="p-3 flex flex-col mx-auto">
      <form>
        <label title="Enter the main content (headline, paragraph, pictures)"></label>
        <span class="font-bold">Enter the content</span>
        <QuillEditor class="aaif__paragraph" ref="paragraph" contentType="html"
          placeholder="Enter any content - headline, paragraph, picture ..." theme="snow" :toolbar="options"
          v-model:content="form.paragraph" />
        <span class="text-xs italic">* Here you can put titles, text, pictures,
          videos, links, quotes, and much more...</span>

        <h2 v-on:click="toggleSeo" class="cursor-pointer flex justify-between">Advanced
          <span v-if="seoVisible"><i class="fa-solid fa-chevron-up"></i></span>
          <span v-else><i class="fa-solid fa-chevron-down"></i></span>
        </h2>
        <div v-if="seoVisible">
          <label class="!flex-row items-center">
            <input type="checkbox" v-model="form.check" />
            <span class="ml-2.5">Click to select options</span>
          </label>
          <label class="!flex-row items-center">
            <input type="radio" v-model="form.radioFirst" name="radioName" />
            <span class="ml-2.5">Option 1</span>
          </label>
          <label class="!flex-row items-center">
            <input type="radio" v-model="form.radioSecond" name="radioName" />
            <span class="ml-2.5">Option 2</span>
          </label>
          <label title="URL Canonical">
            <span class="font-bold">Comment</span>
            <input type="text" v-model="form.comment" placeholder="Write your comment"
              class="focus:outline-none focus:ring focus:sky-500" />
          </label>
        </div>

        <div class="w-max float-right">
          <input @click="emptyEditor" type="reset" value='Cancel'
            class="!border-2 !rounded-none !p-1 !m-2.5 !w-36 !text-green-500 !border-green-500 cursor-pointer" />
          <button type="submit" @click="submitMethod"
            class="border-2 border-green-500 bg-green-500 hover:bg-transparent text-slate-800 hover:text-green-500 p-1 m-2.5 w-36">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

export default {
  components: {
    QuillEditor
  },
  data() {
    return {
      errors: [],
      options: [
        { header: [1, 2, 3, 4, 5, 6, false] },
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'link', 'image', 'video', 'code-block',
        { 'color': [] }, { 'background': [] },
        { 'font': [] }, { 'size': ['small', false, 'large', 'huge'] },
        { 'list': 'ordered' }, { 'list': 'bullet' },
        'clean'
      ],
      seoVisible: false,
      form: {
        paragraph: "",
        radioFirst: false,
        radioSecond: false,
        check: false,
        comment: "",
      }
    };
  },

  methods: {
    emptyEditor() {
      this.$refs.paragraph.setHTML('')
    },
    toggleSeo() {
      this.seoVisible = !this.seoVisible
    },

    submitMethod() {
      let dataSendToDB = JSON.stringify(this.form);
      axios.post(`http://localhost:3001/api/article`, {
        data: dataSendToDB
      })
        .then(response => {
          console.log(data)
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
}
</script>

<style>
.ql-container {
  height: auto;
}

.aaif__paragraph {
  min-height: 400px;
}

.ql-toolbar.ql-snow,
.ql-container.ql-snow {
  background-color: white;
}
</style>