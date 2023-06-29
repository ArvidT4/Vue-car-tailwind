<script>
export default{
    beforeMount(){
        if(!$cookies.get("sessionID")){
                this.$router.push({name:'Start'})
        }
    }
}

</script>
<template></template>