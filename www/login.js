Vue.createApp({
    data() {
        return {
            form: {
                Username: "",
                password: ""
            }
        }
    },
    methods: {
        async onLogin() {
            if (this.form.password === this.form.password) {
            await axios.post('http://localhost:3000/login', {
                Username: this.form.Username,
                password: this.form.password
            })
                .then((res) => {
                    if (res.status === 200) {
                        alert(res.data.msg);
                        console.log(res.data)
                        localStorage.setItem("dataUser", JSON.stringify(res.data.data));
                        window.location.href = './../../secA.html';
                    }
                })
                .catch((err) => {
                    alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง')
                }) 
            }
        }
    },methods: {
        async notLogin() {
                alert('กรุณาสมัครสมาชิกหรือล็อคอินก่อน')
        }
    },
}).mount('#app')