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
       			window.location.href = './login.html';
                await axios.post('https://jstodolist.app.ruk-com.cloud/register', {
                    Username: this.form.Username,
                    name: this.form.name,
                    password: this.form.password,
                    email: this.form.email,
                    phone: this.form.phone
                })
                    .then((res) => {
  						console.log(res)
                        if (res.status === 200) {
                            alert(res.data.msg);
                            
                        }
                    alert('สมัครเสร็จสิ้น')
                    })
		},   
        async notRegister() {
                alert('กรุณาสมัครสมาชิกหรือล็อคอินก่อน')
        }
    },
}).mount('#app')

