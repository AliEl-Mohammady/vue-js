
const {createApp} = Vue

const myGlobalAge=20;
const globalData={
    age:myGlobalAge,
    name:"First Component"
}

const myFirstComponent = {
    template: `<div>
                <h1>Welocome From Compontent</h1>
                <h4>Compontent Name is {{name}}</h4>
                <h4>Compontent Age is {{age}}</h4>
                <button @click="changeAge">Change Age</button>
            </div>`,
    data() {
        return globalData
    },
    methods: {
        changeAge() {
            this.age ++}}}


const app = createApp({
    data() {
        return {
            message: 'Hello World',
            count: 0,
            name: 'Ali',
            textInput:"",
            ageInpuut:"",
            green:"green",
            dynamicClass:"red",
            dynamicStyle:"20px",
            students: [
                {
                    name: "Ali",
                    age: 20,
                    id: 1,
                    subjects: ["Math", "Physics", "Chemistry"]
                },
                {
                    name: "Ahmed",
                    age: 20,
                    id: 2,
                    subjects: ["Science", "Physics", "Chemistry"]

                },
                {
                    name: "Mohamed",
                    age: 28,
                    id: 3,
                    subjects: ["Math", "Physics", "geography"]
                }
            ]
        }
    },
    methods: {
        Increment() {
            app_2.count_2 ++
            return this.count += 1;
        },
        decrement() {
            return this.count -= 1;
        },
        testKeydown() {
            console.log("Entered")
        },
        sendObject() {
            const new_user={
                name: this.textInput,
                age: this.ageInpuut
            }
            console.log(new_user)
        }
    },
    computed: {
        numberMultiplied() {
            return this.count * 2
        }
    },
    components: {
        "my-first-component": myFirstComponent,
    }
}).mount('#app')

const app_2 = createApp({
    data() {
        return {
            message: 'Hello World',
            count_2: app.count
        }
    },
    methods: {
        refsFunction() {
            console.log(this.$refs.app2Message.innerHTML)
            console.log(this.$refs.app2Count)
        }
    },
    components: {
        "my-scond-component": myFirstComponent,
    }
}).mount('#app-2')