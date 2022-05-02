Vue.createApp({
    data() {
        return {
            form: {
                Username: "",
                name: "",
                password: "",
                email: "",
                phone: ""
            }
        }
    },
    methods: {
        async onRegister() {
                await axios.post('http://localhost:3000/register', {
                    username: this.form.Username,
                    name: this.form.name,
                    password: this.form.password,
                    email: this.form.email,
                    phone: this.form.phone
                })
                    .then((res) => {
                        if (res.status === 200) {
                            alert(res.data.msg);
                            window.location.href = './../../secA.html';
                        }
                    alert('สมัครเสร็จสิ้น')
                    })
                
        }
    },methods: {
        async notRegister() {
                alert('กรุณาสมัครสมาชิกหรือล็อคอินก่อน')
        }
    },
}).mount('#app')