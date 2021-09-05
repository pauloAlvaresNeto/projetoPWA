$(document).ready(function(){

    $('a').addClass('text-white')
    $('.icon-social').addClass('text-dark')
    $('.icon-nav').addClass('text-white')
    $('.dropdown-menu').addClass('bg-dark')

    $('.light').click(function(light){
        light.preventDefault()
        
        //Remover o CSS existente do tem(jumbotron)
        $('.navbar').removeClass('bg-dark')
        $('body').removeClass('bg-dark')
        $('a').removeClass('text-white')
        $('.modal-content').removeClass('bg-dark')
        $('.icon-modal').removeClass('text-white')
        $('icon-social').removeClass('text-white')
        $('.icon-nav').removeClass('text-white')
        $('footer').removeClass('bg-dark')
        $('.dropdown-menu').removeClass('bg-dark')
        $('.navbar-toggler-icon').removeClass('text-white')
        
        //Aplicar a classe CSS que eu desejo
        $('.navbar').addClass('bg-light')
        $('body').removeClass('bg-white')
        $('a').addClass('text-dark')
        $('.modal-content').addClass('bg-white')
        $('.icon-social').addClass('text-dark')
        $('.icon-nav').addClass('text-dark')
        $('footer').addClass('bg-white')
        $('.dropdown-menu').addClass('bg-white')
        $('.navbar-toggler-icon').addClass('text-dark')

        
    })

    $('.dark').click(function(dark){
        dark.preventDefault()
        
        //Remover o CSS existente do tem(jumbotron)
        $('.navbar').removeClass('bg-white')
        $('body').removeClass('bg-light')
        $('a').removeClass('text-dark')
        $('.modal-content').removeClass('bg-white')
        $('icon-social').removeClass('text-dark')
        $('.normal').removeClass('bg-dark')
        $('.icon-nav').removeClass('text-dark')
        $('.icon-social').removeClass('text-dark')
        $('footer').removeClass('bg-white')
        $('.dropdown-menu').removeClass('bg-white')
        
        
        //Aplicar a classe CSS que eu desejo
        $('.navbar').addClass('bg-dark')
        $('body').addClass('bg-dark')
        $('a').addClass('text-white')
        $('.modal-content').addClass('bg-dark')
        $('.icon-modal').addClass('text-white')
        $('.icon-social').addClass('text-white')
        $('.bg-hr').addClass('bg-white')
        $('.icon-nav').addClass('text-white')
        $('.icon-social').removeClass('text-white')
        $('footer').addClass('bg-dark')
        $('.dropdown-menu').addClass('bg-dark')
        
        
    })

    $('.primary').click(function(danger){
        danger.preventDefault()
        
        //Remover o CSS existente do tem(jumbotron)
        $('body').removeClass('bg-dark')
        $('.navbar').removeClass('bg-white')
        $('a').removeClass('text-dark')
        $('.modal-content').removeClass('bg-dark')
        $('.icon-modal').removeClass('text-white')
        $('.icon-nav').removeClass('text-dark')
        $('.icon-social').removeClass('text-white')
        $('footer').removeClass('bg-dark')
        $('.dropdown-menu').removeClass('bg-white')

        //Aplicar a classe CSS que eu desejo
        $('.body').addClass('bg-white')
        $('.navbar').addClass('bg-dark')
        $('a').addClass('text-white')
        $('.modal-content').removeClass('bg-white')
        $('.icon-social').addClass('text-dark')
        $('footer').addClass('bg-white')
        $('.dropdown-menu').addClass('bg-dark')
        $('.icon-nav').addClass('text-white')

    })
})

