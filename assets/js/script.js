//iife privada
const modulo=(()=>{
    function mostrar (url, id){
        id.setAttribute('src',url)
    }
    return {mostrar}
})()

//clase padre y clase hija, para crear las instancias.

class Multimedia{
    constructor(url){
        this. _url=url;
        }
        get url(){
            return this._url
        }
       setInicio=()=>{
            return `este metodo es para hacer cambios en la url`
        }
}

class Reproductor extends Multimedia{
    constructor (url, id){
        super(url)
        this._id=id
    }
    get id(){
        return this._id
    }
    playMultimedia(){
        modulo.mostrar(this.url,this.id)
    }
    setInicio(tiempo){
        this.id.setAttribute('src',`${this.url}?start${tiempo}`)
    }
}

//musica, pelicula y serie que se llaman desde el DOM

const musica=document.querySelector('#musica')
const pelicula=document.querySelector('#pelicula')
const serie=document.querySelector('#serie')