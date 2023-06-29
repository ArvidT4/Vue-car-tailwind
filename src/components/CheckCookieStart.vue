<script>
export default{
    beforeMount(){
        if($cookies.get("sessionID")){
                this.$router.push({name:'Home'})
        }
    }
}

</script>
<template></template>