new Vue({
    el: '#app',
    data: {
        formData: {
            name: '',
            email: '',
            phone: '',
            gender: '',
            country: '',
            message: ''
        }
    },
    methods: {
        clearForm() {
            this.formData.name = '';
            this.formData.email = '';
            this.formData.phone = '';
            this.formData.gender = '';
            this.formData.country = '';
            this.formData.message = '';
        },
        submitForm() {
            // Form kontrol işlemleri
            if (!this.formData.name || !this.formData.email || !this.formData.phone || !this.formData.gender || !this.formData.country || !this.formData.message) {
                alert('Lütfen tüm alanları doldurunuz.');
                return;
            }

            if (!this.validateEmail(this.formData.email)) {
                alert('Geçerli bir e-posta adresi giriniz.');
                return;
            }

            if (!this.validatePhone(this.formData.phone)) {
                alert('Geçerli bir telefon numarası giriniz.');
                return;
            }

            // Form verilerini başka bir sayfada göster
            const queryString = new URLSearchParams(this.formData).toString();
            window.location.href = 'iletisimform_info_vue.html?' + queryString;
        },
        validateEmail(email) {
            var re = /\S+@\S+\.\S+/;
            return re.test(email);
        },
        validatePhone(phone) {
            var re = /^\d{10,15}$/; // 10-15 haneli rakamlardan oluşan bir telefon numarası
            return re.test(phone);
        }
    }
});
