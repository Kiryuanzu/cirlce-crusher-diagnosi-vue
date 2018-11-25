Vue.component('hoge', {
  template: `
    <question v-if="idx < this.questions.length" v-on:question-event="QuestionClick" 
    v-bind:text="this.questions[idx].text" 
    v-bind:options="this.questions[idx].options">
    </question>
    <result v-else></result>`,
  methods: {
  QuestionClick: function(point){
    this.score += point
    this.idx++
  }
},
data: function() {
  return {
    idx: 0,
    score: 0,
    questions: [
      {
        text: "家族との関係は良好だ",
        options: [
          { text: "あてはまる", type: "A", value: "4" },
          { text: "どちらかと言えば当てはまる", type: "A", value: "3" },
          { text: "どちらかと言えば当てはまらない", type: "A", value: "2" },
          { text: "あてはまらない", type: "A", value: "1" }
        ]
      },
      {
        text: "家族との関係は良好だ",
        options: [
          { text: "あてはまる", type: 'A' },
          { text: "あてはまる", type: 'A' },
          { text: "あてはまる", type: 'A' },
          { text: "あてはまる", type: 'A' }
        ]
      },
      {
        text: "家族との関係は良好だ",
        options: [
          { text: "あてはまる", type: 'A' },
          { text: "あてはまる", type: 'A' },
          { text: "あてはまる", type: 'A' },
          { text: "あてはまる", type: 'A' }
        ]
      },
      {
        text: "家族との関係は良好だ",
        options: [
          { text: "あてはまる", type: 'A' },
          { text: "あてはまる", type: 'A' },
          { text: "あてはまる", type: 'A' },
          { text: "あてはまる", type: 'A' }
        ]
      }
    ]
  }
}
})

Vue.component('question', {
  template: `<div><p>{{ text }}</p>
    <label v-for="option in {{ options }}" v-bind:val="option.value" v-bind:select-text="option.text">
      <input type="radio" value = {{val}} v-model.number = "point"> {{select-text}} </label>
      </div>
      <p> {{point}} </p>
      <button v-on:click="ChildQuestionClick">次へ</button>`,
  props: {
    point: Number
  },
  methods: {
    ChildQuestionClick: function() {
      this.$emit('question-event', this.point)
    }
  }
})


new Vue({ el: '#app'
})

