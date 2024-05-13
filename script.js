new Vue({
    el: '#app',
    data: {
        formData: {
            name: '',
            email: '',
            message: ''
        }
    },
    methods: {
        clearForm() {
            this.formData.name = '';
            this.formData.email = '';
            this.formData.message = '';
        },
        submitForm() {
            // Form kontrol işlemleri
            if (!this.formData.name || !this.formData.email || !this.formData.message) {
                alert('Lütfen tüm alanları doldurunuz.');
                return;
            }

            if (!this.validateEmail(this.formData.email)) {
                alert('Geçerli bir e-posta adresi giriniz.');
                return;
            }

            // Form verilerini başka bir sayfada göster
            localStorage.setItem('formData', JSON.stringify(this.formData));
            window.location.href = 'form_info_vue.html';
        },
        validateEmail(email) {
            var re = /\S+@\S+\.\S+/;
            return re.test(email);
        }
    }
});