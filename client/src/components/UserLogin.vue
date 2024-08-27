<template>
    <div>
        <h2>User Login</h2>
        <form @submit.prevent="login">
            <input v-model="username" type="text" placeholder="Username" required />
            <input v-model="password" type="password" placeholder="Password" required />
            <button type="submit">Login</button>
        </form>
        <p v-if="error">{{ error }}</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    mounted() {
        document.title = 'Login';
    },
    data() {
        return {
            username: '',
            password: '',
            error: ''
        };
    },
    methods: {
        async login() {
            try {
                const response = await axios.post('http://localhost:3000/api/auth/login', {
                    username: this.username,
                    password: this.password
                });
                
                if (response.data.success) {
                    localStorage.setItem('token', response.data.token);
                    this.$router.push('/revenue');
                } else {
                    this.error = 'Invalid username or password';
                }
            } catch (err) {
                this.error = 'An error occurred. Please try again.';
            }
        }
    }
};
</script>
