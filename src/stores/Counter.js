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
            this.fetchPost(this.count);
        },
        decrement() {
            this.count--;
        },
        reset() {
            this.count = 0;
        },
        async fetchPost(index) {
            if(this.count > 0) {
                await fetch('https://jsonplaceholder.typicode.com/posts/' + index).then(response => {
                    this.post = response.json();
                });
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
            console.log(this.post)
            return this.post;
        }
    }
})
