<template>
    <div>
       <div v-if="isSubmitted" class="success">
           <h4>Great! Your tickets have been reserved.</h4>
       </div>
       <form v-else @submit.prevent="submit">
            <input type="text" v-model="name" placeholder="Type your name" />
            <input type="text" v-model="surname" placeholder="Type your surname" />
            <select v-model="payment">
                <option v-for="p in paymentTypes" :key="p">{{ p }}</option>
            </select>
            <button type="submit" class="reversed" :class="{disabled: !validate}">Reserve seats</button>
        </form> 
    </div>
</template>

<script>
    export default {
        name: 'reservation-form',
        data () {
            return {
                name: '',
                surname: '',
                payment: '',
                paymentTypes: ['cash', 'credit card'],
                isSubmitted: false
            }
        },
        computed: {
            validate() {
                return this.name && this.surname && this.payment
            }
        },
        methods: {
            submit () {
                if(this.validate) {
                    this.$nextTick(() => {
                        this.isSubmitted = true;
                        setTimeout(() => {
                            this.$emit('close-modal', true)
                        }, 2000)
                    })
                }
            }
        }
    }
</script>

<style lang="css" scoped>
  input, select {
    width: 100%;
    margin: 8px 0;
    color: black;
    font-size: 20px;
    padding: 12px 20px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    background-color: white;
    border-radius: 5px;
    appearance: none;
  }
  select::after {
    content: '';
    top: 10px;
    right: 10px;
    width: 20px;
    height: 20px;
    position: absolute;
    display: inline-block;
    background-repeat: no-repeat;
    background-image: url('/assets/arrow.png')
  }
  h4 {
    color: green;
    /* text-align: center; */
  }
</style>