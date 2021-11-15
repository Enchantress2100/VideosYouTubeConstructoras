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
const peliculas=document.querySelector('#peliculas')
const series=document.querySelector('#series')

//instancias para probar e insertar videos

const m1 = new Reproductor("https://www.youtube.com/embed/5qap5aO4i9A", musica)
m1.playMultimedia()
m1.setInicio()
const p1 = new Reproductor("https://www.youtube.com/embed/_a1BtZmqIRg", peliculas)
p1.playMultimedia()
p1.setInicio()
const s1 = new Reproductor("https://www.youtube.com/embed/Z4TuS0HEJP8", series)
s1.playMultimedia()
s1.setInicio()

