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
      		alert('Login Success')
      		window.location.href = './secA.html';
            await axios.post('https://jstodolist.app.ruk-com.cloud/login', {
                Username: this.form.Username,
                password: this.form.password
            })
                .then((res) => {
                    if (res.status === 200) {
                        alert(res.data.msg);
                        console.log(res.data)
                        localStorage.setItem("dataUser", JSON.stringify(res.data.data));
                        
                    }
              	alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง')
                })
                .catch((err) => {
                    
                }) 
            },
        async notLogin() {
                alert('กรุณาสมัครสมาชิกหรือล็อคอินก่อน')
        }
    },
}).mount('#app')


