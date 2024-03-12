<script>

export default {
    name: 'home',
  
}
</script>
<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2 class="text-center">WELCOME</h2>
            </div>
            <div class="col-4">
                <p class="filter">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore amet assumenda nisi. Distinctio explicabo velit magni fugiat laudantium. Architecto recusandae consequatur aut autem mollitia totam perspiciatis molestiae laboriosam et ex!</p>
            </div>
            <div class="col-8">
                <img  src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1710028800&semt=sph" alt="">
            </div>
        </div>
    </div>
    <div>

        <footer>
            <div class="container p-4">
                <div class="row d-flex justify-content-between">
                    
                    <div class="col-5 d-flex p-3">
                        <h3>FRONT-END: </h3>
                        <i class="fa-brands fa-html5 fa-2xl p-2" style="color: #f07400;"></i>
                        <i class="fa-brands fa-js fa-2xl p-2" style="color: #FFD43B;"></i>
                        <i class="fa-brands fa-css3-alt fa-2xl p-2" style="color: #47c7e1;"></i>
                        <i class="fa-brands fa-vuejs fa-2xl p-2" style="color: #158428;"></i>
                        <i class="fa-brands fa-bootstrap fa-2xl p-2" style="color: #B197FC;"></i>
                    </div>
                    <div class="col-5 d-flex p-3">
                        <h3>BACK-END: </h3>
                        <i class="fa-brands fa-php fa-2xl p-2" style="color: #447ee4;"></i>
                        <i class="fa-solid fa-database fa-2xl p-2" style="color: #413aa1;"></i>
                        <i class="fa-brands fa-laravel fa-2xl p-2" style="color: #d71414;"></i>
                    </div>
                </div>
                <div class="row d-flex justify-content-center">
                    <div class="col-3">
                        <i class="fa-brands fa-linkedin fa-2xl p-2" style="color: #2668d9;"><a href="https://github.com/AimanFadil"></a></i>
                        <p class="p-1">Linkedin</p>
                    </div>
                    <div class="col-3">
                        <i class="fa-brands fa-github fa-2xl p-2" style="color: #0d249c;"><a href="https://github.com/AimanFadil"></a></i>
                        <p class="p-1">GitHub</p>
                    </div>
                    <div class="col-3">
                        <i class="fa-solid fa-square-phone fa-2xl" style="color: #54c723;"></i>
                        <p class="p-1">+39 3408373456</p>
                    </div>
                    <div class="col-3">
                        <i class="fa-solid fa-envelope fa-2xl" style="color: #fafafa;"></i>
                        <p class="p-1">aimanbello2001@gmail.com</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/generals.scss';
*{
    color: white;
}
footer{
    bottom:0;
    left:0;
    right: 0;
    position: absolute;
    background-color: black;
}


</style>