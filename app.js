let notificacion = document.getElementById('notificacion').style.display = 'none'
var firebaseConfig = {
    apiKey: "AIzaSyAWGwf6o51YjchZxQ1sW4-DxMGnpcdXOvQ",
    authDomain: "tedfabuloso.firebaseapp.com",
    databaseURL: "https://tedfabuloso.firebaseio.com",
    projectId: "tedfabuloso",
    storageBucket: "tedfabuloso.appspot.com",
    messagingSenderId: "208304566889",
    appId: "1:208304566889:web:535d55e1add68b9f56e8f8",
    measurementId: "G-Y8CT6LVSB3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
let constactosRef = firebase.database().ref('contactosWeb') 

document.getElementById('myForm').addEventListener("submit", guardarDatosFormulario);

function guardarDatosFormulario(e) {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const comment = document.getElementById("comment").value;

    let nuevoContactoWeb = constactosRef.push();
    nuevoContactoWeb.set({
        email: email,
        comment: comment,
        nombre: nombre
    })
    document.getElementById('notificacion').style.display = 'block'
    
    setTimeout(function (){
        document.getElementById('notificacion').style.display = 'none';
        this.email.value = null;
        this.comment.value = null
        this.nombre.value = null
    },3000)
     


}

console.log("servidor corriendo en el puerto 8080")