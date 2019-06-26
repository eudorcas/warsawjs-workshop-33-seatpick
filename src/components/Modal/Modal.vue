<template>
    <div class="modal">
        <div class="overlay" @click="hideModal(true)"></div>
        <div class="content">
            <h4>Reservation form</h4>
            <reservation-form @close-modal="hideModal($event)"/>
        </div>
    </div>
</template>

<script>
    import ReservationForm from './Form'
    export default {
        name: 'modal',
        components: {
            ReservationForm
        },
        methods: {
            hideModal ($event) {
                this.$emit('hide-modal', $event)
            }
        }
    }
</script>

<style lang="css" scoped>
  h4 {
    margin-bottom: 15px;
  }
  .modal {
    position: relative;
    height: 100vh;
  }
  .overlay {
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    position: fixed;
    display: inline-block;
    background-color: rgba(0, 0, 0, .5);
  }
  .content {
    left: 0;
    right: 0;
    top: 40%;
    width: 500px;
    margin: 0 auto;
    padding: 20px;
    min-height: auto;
    border-radius: 5px;
    position: absolute;
    background-color: white;
    transform: translateY(-50%);
    box-shadow: 10px 10px 50px rgba(0, 0, 0, .5);
  }
</style>