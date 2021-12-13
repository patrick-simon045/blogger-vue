<template>
  <div class="hello">
    <div v-if="componentList.length > 0">
      <div
      class="v-html"
        v-html="componentItem"
        v-for="(componentItem, index) in componentList"
        :key="index"
        @dblclick="removeComponentFromPage(index)"
      ></div>
    </div>
    <div v-if="componentList.length == 0">{{ emptyPageMessage }}</div>
    <transition name="pop_up_window">
      <div class="pop-up" v-if="showPopUp === true">
        <input type="text" v-model="enteredText" placeholder="what do you need" autofocus />
        <p class="clear-input" @click="clearInput" v-if="enteredText.length !== 0">clear ✖</p>
      </div>
    </transition>
    <br />
  </div>
</template>

<script>
export default {
  name: 'helloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      emptyPageMessage: 'Nothing added',
      showPopUp: false,
      enteredText: "",
      options: {
        paragraph: { listeningPhrase: 'p:', text: 'paragraph' },
        title: { listeningPhrase: 't:', text: 'title' }
      }
    }
  },
  computed: {
    componentList() {
      return this.$store.getters['GET_COMPONENT_LIST']
    }
  },
  watch: {
    enteredText(newEnteredText) {
      if (newEnteredText == this.options.paragraph.listeningPhrase) {
        this.enteredText = this.options.paragraph.text
      }

      if (newEnteredText == this.options.title.listeningPhrase) {
        this.enteredText = this.options.title.text
      }
    }
  },
  created() {
    window.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.key == "/") {
        this.showPopUp = !this.showPopUp
        this.enteredText = ""
      }

      if (e.key == 'Escape') {
        this.enteredText = ""
      }

      if (e.key == 'Enter') {
        if (this.enteredText == this.options.title.text) {
          var titleText = 'A Brand New Title'
          this.$store.commit('ADD_COMPONENT', { type: this.options.title.text, text: titleText })
          this.enteredText = ""
        }

        if (this.enteredText == this.options.paragraph.text) {
          var paragraphText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium itaque quae earum molestiae dolor facilis nam, illo laboriosam debitis autem vitae assumenda alias dicta provident aspernatur expedita dolorem nemo ex maiores similique impedit ducimus! Natus culpa corporis provident doloribus quae non soluta distinctio enim voluptatum ipsam! Voluptas tempore optio natus?'

          this.$store.commit('ADD_COMPONENT', { type: this.options.paragraph.text, text: paragraphText })
          this.enteredText = ""
        }
      }
    });
  },
  methods: {
    clearInput() {
      this.enteredText = ""
    },
    removeComponentFromPage(ind) {
      // alert(`trying to remove ${this.componentList[ind]}`)
      this.$store.commit('REMOVE_COMPONENT', { index: ind })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pop_up_window-enter-from,
.pop_up_window-leave-to {
  /* opacity: 0; */
  transform: scale(0);
}
.pop_up_window-enter-active,
.pop_up_window-leave-active {
  transition: all 0.1s ease-in-out;
}
.hello {
  width: 60%;
  margin: 50px 0;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  background-color: whitesmoke;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.pop-up {
  width: 50%;
  height: 40px;
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 50px;
  border: 1px solid red;
  border-left: 5px solid red;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: whitesmoke;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

input {
  width: 80%;
  height: 35px;

  padding: 0 10px;
  border-radius: 10px;
  font-size: 20px;
  border: none;
  outline: none;
  background-color: whitesmoke;
}

.clear-input {
  margin-right: 10px;
  padding: 5px 0;
  font-weight: bold;
  cursor: pointer;
}
</style>
