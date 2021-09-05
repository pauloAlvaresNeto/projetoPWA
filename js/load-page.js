// Leitura completa do nosso documento HTML
$(document).ready(function(){

// Monitorar todos os cliques em cima do elemento "a" do nosso documento HTML

$('a').click(function(e){
    e.preventDefault()

    // Criar uma variável local que receba o atributo href do link
    let page = $(this).attr('href')

    $('.modal-title').empty() //Limpar
    $('.modal-body').empty() //Limpar

    // Verificar qual conteúdo eu devo carregar
    switch (page){
    
        
        // Se for para abrir a pagina Quem Somos?:
        case 'Who': 
          $('.modal-title').append('<strong>Quem Somos?</strong>')
          $('.modal-body').append(`<p>O salão foi aberto em 2010 na cidade de Getulina-SP pela Franciane Elisa, e até então ja contou com duas funcionarias e atualmente ela trabalha sozinha. </p>`)
          $('#modal-info').modal('show')
          break
        
          // Se for para abrir a pagina Contatos:
        case 'contato': 
          $('.modal-title').append('<strong>Formulario de Contato</strong>')
          $('.modal-body').append(`<div class="container-fluid">
          <div class="row justify-content-center">
              <div class="col-12 col-sm-12 col-md-12">
                  <form action="">
                      <div class="form-group">
                          <label><i class="fas fa-user"></i> Nome:</label>
                          <input type="text" name="" id="" placeholder="Digite o Nome." required class="form-control" >
                      </div>
  
                      <div class="form-group">
                          <label><i class="fas fa-envelope"></i> E-mail:</label>
                          <input type="e-mail" name="" id="" placeholder="email@exemplo.com" required class="form-control" >
                      </div>
  
                      <div class="form-group">
                          <label><i class="fas fa-pen"></i> Assunto:</label>
                          <select name="" id=""  required class="form-control" >
                              <option value="">Reclamação</option>
                              <option value="">Sugestão</option>
                              <option value="">Solicitação</option>
                          </select>
                      </div>
  
                      <div class="form-group">
                          <label><i class="fas fa-edit"></i> Mensagem:</label>
                          <textarea name="" id="" cols="30" rows="10" required class="form-control" ></textarea>
                      </div>
  
                      <div class="form-group">
                          <button class="btn btn-personal"><i class="fas fa-paper-plane"></i> Enviar</button>
                      </div>
  
                  </form>
              </div>
          </div>
      </div>`)
          $('#modal-info').modal('show')
        break

        case 'telefone': 
          $('.modal-title').append('<strong>Formas de Contato?</strong>')
          $('.modal-body').append(`<h3>Telefones:</h3><p>+55 14 000000000 </p>
          <p>+55 14 000000000 </p>
          <p class="text-center icon-social padding">
          <a href="https://www.instagram.com/p4ulo_n3to/" target="_blank"><i class="fab fa-instagram icon-social" ></i></a>
          <a href="https://www.facebook.com/profile.php?id=100034751986115" target="_blank"><i class="fab fa-facebook icon-social"></i></a>
          <a href="https://twitter.com/PauloAlvaresNe1/with_replies" target="_blank"><i class="fab fa-twitter icon-social"></i></a>  
      </p>`)
          $('#modal-info').modal('show')
          break
    }

  })
 

})