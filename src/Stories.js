const NameStory = [{image: "assets/img/9gag.svg", name:"Jorge"}, {image: "assets/img/meowed.svg" , name :"Julio"}, {image: "assets/img/wawawicomics.svg" , name :"Janet"}, {image: "assets/img/respondeai.svg" , name :"Sebatião"}, {image: "assets/img/filomoderna.svg" , name :"Zamiliano"}, {image: "assets/img/memeriagourmet.svg" , name :"Giraldelli"} , {image: "assets/img/bad.vibes.memes.svg", name:"Aristidis"} , {image: "assets/img/razoesparaacreditar.svg", name: "Macale"}, {image: "assets/img/razoesparaacreditar.svg", name: "Macale"}]

function NewStory(props){
    return(

    <div className="story">
      <div className="imagem">
        <img src={props.imgStory}alt="" />
      </div>
      <div className="usuario">
      {props.usuarioStory}
        
      </div>
    </div>);
    
}


export default function Stories(){
    
return(

    <div className="stories">


        {NameStory.map((NameStory) => (<NewStory imgStory={NameStory.image} usuarioStory ={NameStory.name}/>))}

    <div className="setinha">
      <ion-icon name="chevron-forward-circle"></ion-icon>
    </div>
  </div>
);
}