import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
    id: 'counter',
    state: () => ({
        count: 0,
        evenOrOdd: '',
        post: {}
    }),
    actions: {
        increment() {
            this.count++;
        },
        decrement() {
            this.count--;
        },
        reset() {
            this.count = 0;
        }
    },
    getters: {
        evenOrOddValue() {
            return  (this.count % 2) === 0 ? 'even' : 'odd'
        },
        countValue() {
            return this.count
        },
        postValue() {
            return this.post
        }
    }
})
