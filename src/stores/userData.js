import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserData = defineStore('userData', () => {
    const userData = ref({
        fname: null,
        lname: null,
        email: null,
        number: null,
        password: null,
    });

    function updateUserData(user) {
        userData.value.fname = user.fname;
        userData.value.lname = user.lname;
        userData.value.email = user.email;
        userData.value.number = user.number;
        userData.value.password = user.password;
    }

    return {
        userData,
        updateUserData,
    }

});
