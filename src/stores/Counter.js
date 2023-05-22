import { defineStore } from 'pinia'
import axios from "axios";

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
            this.callPostAPI();
        },
        decrement() {
            this.count--;
            this.callPostAPI();
        },
        reset() {
            this.count = 0;
        },
        callPostAPI() {
            if(this.count > 0) {
                axios.get(`https://jsonplaceholder.typicode.com/posts/${this.count}`).then(response => {
                    this.post = response.data;
                })
            } else {
                this.post = {};
            }
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
            return this.post;
        }
    }
})
