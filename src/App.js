import Stories from "./Stories"

import Posts from "./Posts"

import Sidebar from "./Sidebar"

import Top from "./Top"

import Botoon from "./Botton"

export default function App(){
    return(
      

        <body>
       
          <div className="navbar">
           <Top/>
          </div>
    
          <div className="corpo">
            <div className="esquerda">
                
             <Stories/>
             <Posts/>
              
            </div>
    
            <Sidebar />
          </div>
    
        
        <Botoon/>
    
      </body>
    )
}