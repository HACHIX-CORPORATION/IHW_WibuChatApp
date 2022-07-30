<template lang="">
    <div>
        <label>Password</label>
        <input
        title="Password must contains 8 to 16 characters, 
        an UPPERCASE and at least one special character! "
        type="password" 
        placeholder="" 
        v-model="passWord" />

    </div>
</template>
<script>
export default {
    name: "PasswordForm"
}
</script>
<style lang="">
    
</style>