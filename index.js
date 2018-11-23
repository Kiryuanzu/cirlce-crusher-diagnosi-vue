Vue.component('question', {
  template: `<question1 v-on:question1-event="Question1Click" v-if="question1"></question1>
             <question2 v-on:question2-event="Question2Click" v-else-if="question2"></question2>
             <question3 v-on:question3-event="Question3Click" v-else-if="question3"></question3>
             `
             ,
  data: function() {
    return {
      point: 0,
      question1: true,
      question2: false,
      question3: false,
      question4: false,
      question5: false,
      question6: false,
      question7: false,
      question8: false,
      question9: false,
      question10: false,
      question11: false,
      question12: false,
      question13: false,
      question14: false,
      question15: false,
      question16: false,
      question17: false,
      question18: false,
      question19: false,
      question20: false,
      question21: false,
      question22: false,
      question23: false,
      question24: false,
      question25: false,
      resultA: false,
      resultB: false,
      resultC: false,
      resultD: false,
      resultE: false,
      resultF: false,
      resultG: false,
      resultH: false
    }
  },
  methods: {
    Question1Click: function(point) {
      this.point += point
      this.question1 = false
      this.question2 = true
      console.log(this.point)
    },
    Question2Click: function(point) {
      this.point += point
      this.question2 = false
      this.question3 = true
      console.log(this.point)
    },
    Question3Click: function(point) {
      this.point += point
      this.question3 = false
      this.question4 = true
    }
  }
})

Vue.component('question1', {
  template: `<div><p>家族との関係は良好だ</p>
              <label><input type="radio" name="q01" class="typeA" value="1" v-model.number="point" /> あてはまる</label><br/>
              <label><input type="radio" name="q01" class="typeA" value="2" v-model.number="point" /> どちらかかと言えばあてはまる</label><br/>
              <label><input type="radio" name="q01" class="typeA" value="3" v-model.number="point" />どちらかといえばあてはまらない</label></br>
              <label><input type="radio" name="q01" class="typeA" value="4" v-model.number="point" /> あてはまらない</label><br/>
              <p>{{point}}</p>
              <button v-on:click="ChildQuestion1Click">次へ</button>
            </div>`,
  props: {
    point: Number
  },
  methods: {
    ChildQuestion1Click: function() {
      this.$emit('question1-event', this.point)
    }
  }
})

Vue.component('question2', {
  template: `<div><p>学校との関係は良好だ</p>
              <label><input type="radio" name="q01" class="typeA" value="1" v-model.number="point" /> あてはまる</label><br/>
              <label><input type="radio" name="q01" class="typeA" value="2" v-model.number="point" /> どちらかかと言えばあてはまる</label><br/>
              <label><input type="radio" name="q01" class="typeA" value="3" v-model.number="point" />どちらかといえばあてはまらない</label></br>
              <label><input type="radio" name="q01" class="typeA" value="4" v-model.number="point" /> あてはまらない</label><br/>
              <p>{{point}}</p>
              <button v-on:click="ChildQuestion2Click">次へ</button>
            </div>`,
  props: {
    point: Number
  },
  methods: {
    ChildQuestion2Click: function() {
      this.$emit('question2-event', this.point)
    }
  }
})

Vue.component('question3', {
  template: `<div><p>との関係は良好だ</p>
              <label><input type="radio" name="q01" class="typeA" value="1" v-model.number="point" /> あてはまる</label><br/>
              <label><input type="radio" name="q01" class="typeA" value="2" v-model.number="point" /> どちらかかと言えばあてはまる</label><br/>
              <label><input type="radio" name="q01" class="typeA" value="3" v-model.number="point" />どちらかといえばあてはまらない</label></br>
              <label><input type="radio" name="q01" class="typeA" value="4" v-model.number="point" /> あてはまらない</label><br/>
              <p>{{point}}</p>
              <button v-on:click="ChildQuestion2Click">次へ</button>
            </div>`,
  props: {
    point: Number
  },
  methods: {
    ChildQuestion2Click: function() {
      this.$emit('question2-event', this.point)
    }
  }
})

new Vue({
  el: '#app',
  data: {
    point: 0
  }
})


