const ArrayPosts=[
    {image:"assets/img/meowed.svg", name:"Ledio", foto1: "assets/img/gato-telefone.svg", imgliked:"assets/img/dog.svg", liked: "Osvadin", Nlikes: "555555"}, 

    {image:"assets/img/barked.svg", name:"Gonzaga", foto1: "assets/img/dog.svg",imgliked:"assets/img/adorable_animals.svg", liked: "Beto", Nlikes: "999999"}
]

function NewPost(props){
    return(

        <div className="post">
        <div className="topo">
          <div className="usuario">
            <img src={props.imagePerfil} alt="" />
            {props.Nikename}
          </div>
          <div className="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>
      
        <div className="conteudo">
          <img src={props.foto} alt="" />
        </div>
      
        <div className="fundo">
          <div className="acoes">
            <div>
              <ion-icon name="heart-outline"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name="bookmark-outline"></ion-icon>
            </div>
          </div>
      
          <div className="curtidas">
            <img src={props.imgliked} alt="" />
            <div className="texto">
              Curtido por <strong>{props.liked}</strong> e <strong>outras {props.Nlikes} pessoas</strong>
            </div>
          </div>
        </div>
      </div>);
}


export default function Posts(){
    return(
        <div className="posts">

              {ArrayPosts.map((ArrayPost) => (<NewPost imagePerfil={ArrayPost.image} Nikename = {ArrayPost.name} foto={ArrayPost.foto1} imgliked={ArrayPost.imgliked} liked={ArrayPost.liked} Nlikes={ArrayPost.Nlikes} />))}

        </div>

    )
}

