const ArraySygestoes=[{image: "assets/img/bad.vibes.memes.svg", name:"Jorge", action1: "Segue você"}, {image: "assets/img/chibirdart.svg", name:"Zeca", action1: "Novo no Instagram"},{image: "assets/img/razoesparaacreditar.svg", name:"Dunho", action1: "Segue você"},{image: "assets/img/adorable_animals.svg", name:"Wadirene", action1: "Novo no Instagram"},{image: "assets/img/smallcutecats.svg", name:"Mikael", action1: "Novo no Instagram"} ]

function NewSidebar(props){
    return(
       <div>
           <div className="sugestao">
            <div className="usuario">
              <img src={props.imgSidbar} alt=""/>
              <div className="texto">
                <div className="nome">{props.nameSidbar}</div>
                <div className="razao">{props.action}</div>
              </div>
            </div>

            <div className="seguir">Seguir</div>
          </div>
       </div> 

    )
}

function Usuario(props){
    return(
        <div className="usuario">
        <img src={props.imgUsuario} alt=""/>
        <div className="texto">
          <strong>{props.nikcnameUsuario}</strong>
          {props.nameUsuario}
        </div>
      </div>)
}


export default function Sidebar(){

    return(

        
        
        <div className="sidebar">
            {(<Usuario imgUsuario="assets/img/catanacomics.svg" nikcnameUsuario="Vinagrete" nameUsuario="Lineu"/>)}


        <div className="sugestoes">
          <div className="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>

          {ArraySygestoes.map((ArraySygestoes)=>(<NewSidebar imgSidbar={ArraySygestoes.image} nameSidbar={ArraySygestoes.name} action={ArraySygestoes.action1} />))}



        
        </div>

        <div className="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>

        <div className="copyright">
          © 2021 INSTAGRAM DO FACEBOOK
        </div>
      </div>

    )
}