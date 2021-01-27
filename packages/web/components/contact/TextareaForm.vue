<template>
    <div class="card-input">
    	<label :for="value" class="card-input__label">{{ label }}</label>
    	<textarea :id="value" class="card-textarea__textarea"></textarea><!-- v-model="value" -->
    </div>
</template>
<script>
export default {
    props: ['value', 'label']
}
</script>
<style>
.card-input {
margin-bottom: 20px;
}
.card-input__label {
font-size: 14px;
margin-bottom: 5px;
font-weight: 500;
color: #7e7e7e;
width: 100%;
display: block;
user-select: none;
}
.card-textarea__textarea {
width: 100%;
height: 100px;
border-radius: 5px;
box-shadow: none;
border: 1px solid #ced6e0;
transition: all 0.3s ease-in-out;
font-size: 18px;
padding: 5px 15px;
background: none;
color: #343a3f;
font-family: "Source Sans Pro", sans-serif;
}
.card-textarea__textarea:hover, .card-textarea__textarea:focus {
border-color: #343a3f;
}
.card-textarea__textarea:focus {
box-shadow: 0px 10px 20px -13px rgba(32, 56, 117, 0.35);
}
.card-textarea__textarea.-select {
-webkit-appearance: none;
background-size: 12px;
background-position: 90% center;
background-repeat: no-repeat;
padding-right: 30px;
}
.card-textarea__textarea {
flex: 1;
margin-right: 15px;
}
.card-textarea__textarea:last-child {
margin-right: 0;
}
</style>