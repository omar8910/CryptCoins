import { Injectable } from '@angular/core';
import { onAuthStateChanged, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GithubAuthProvider } from "firebase/auth";
import { Router} from '@angular/router'; // Importamos el router para poder redirigir a otras páginas
import { Auth } from '@angular/fire/auth'; // Importamos el servicio de autenticación de Firebase

@Injectable({
  providedIn: 'root'
})
export class InicioUsuariosService {
  public idUsuario= "";
  public correoUsuario= "";
  public usuarioIdentificado = false;
  public mensaje = "";
  public mensajeError ="";

  constructor(private auth:Auth, private router: Router) { }

  // Comprobamos si el usuario está logueado
  comprobarUsuarioLogueado(){
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.idUsuario = user.uid;
        this.correoUsuario = user.email ?? "No tiene email"; // Si el usuario no tiene correo, se le asigna un string vacío.
        this.usuarioIdentificado = true;
        return true;
      } else {
        this.usuarioIdentificado = false;
        this.idUsuario = "";
        return false;
      }
    });
  }

  // Registro por email y contraseña
  registroEmailPassword(correo: string, password: string){
    createUserWithEmailAndPassword(this.auth, correo, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        this.mensaje = "Registro exitoso. Se le redirigirá a la página de inicio de sesión en 3 segundos.";
        setTimeout(() => {
            signOut(this.auth).then(() => {
                // Sign-out successful.
                this.router.navigate(['/inicio-sesion']); // Redirige al usuario a la página de inicio de sesión
            }).catch((error) => {
                // An error happened.
                console.log("Error al cerrar sesión", error);
            });
        }, 3000);
    })
    .catch((error) => {
        console.log("Error al registrarse con email y contraseña")
        console.log(error);
        this.mensaje = "Error al registrarse. Comprueba que el correo y la contraseña sean correctos.";
    });
}

  // Registro con Google
  registroGoogle(){
    const provider = new GoogleAuthProvider();
    signInWithPopup(this.auth, provider)
    .then((result) => {
      // Signed in
      this.mensaje= "";
      const user = result.user;
      this.usuarioIdentificado = true;
      this.mensaje="Sesión iniciada con Google correctamente. Se le redirigirá al portfolio en 3 segundos."
      setTimeout(()=>{
      this.router.navigate(['/portfolio']); // Redirigimos al usuario a la página de inicio si el registro es correcto
      }, 3000)
     //  console.log("Sesión iniciada con email y contraseña correctamente");
    })
    .catch((error) => {
     //  console.log("Error al iniciar sesión con Google")
      console.log(error);
      this.mensajeError = "Error al iniciar sesión con Google.";
      this.usuarioIdentificado = false;
      this.idUsuario = "";
     });
  }

  // Registro con GitHub
  registroGithub(){
    const provider = new GithubAuthProvider();
    signInWithPopup(this.auth, provider)
    .then((result) => {
      // Signed in
      this.mensaje= "";
      const user = result.user;
      this.usuarioIdentificado = true;
      this.mensaje="Sesión iniciada con Github correctamente. Se le redirigirá al portfolio en 3 segundos."
      setTimeout(()=>{
      this.router.navigate(['/portfolio']); // Redirigimos al usuario a la página de inicio si el registro es correcto
      }, 3000)
    })
    .catch((error) => {
      console.log(error);
      this.mensajeError = "Error al iniciar sesión con Github.";
      this.usuarioIdentificado = false;
      this.idUsuario = "";
     });
  }

  // Inicio de sesión por email y contraseña
  inicioSesionEmailPassword(correo: string, password: string){
    signInWithEmailAndPassword(this.auth, correo, password)
    .then((userCredential) => {
      // Signed in
      this.mensaje= "";
      const user = userCredential.user;
      this.usuarioIdentificado = true;
      this.mensaje="Sesión iniciada con email y contraseña correctamente. Se le redirigirá al portfolio en 3 segundos."
      setTimeout(()=>{
      this.router.navigate(['/portfolio']); // Redirigimos al usuario a la página de inicio si el registro es correcto
      }, 3000)
      console.log("Sesión iniciada con email y contraseña correctamente");
    })
    .catch((error) => {
      console.log("Error al iniciar sesión con email y contraseña")
      console.log(error);
      this.mensajeError = "Error al iniciar sesión con email y contraseña. Comprueba que el correo y la contraseña sean correctos.";
      this.usuarioIdentificado = false;
      this.idUsuario = "";
    });
  }

  // Inicio de sesión con Google
  inicioSesionGoogle(){
    const provider = new GoogleAuthProvider();
    signInWithPopup(this.auth, provider)
    .then((result) => {
     // Signed in
     this.mensaje= "";
     const user = result.user;
     this.usuarioIdentificado = true;
     this.mensaje="Sesión iniciada con Google correctamente. Se le redirigirá al portfolio en 3 segundos."
     setTimeout(()=>{
     this.router.navigate(['/portfolio']); // Redirigimos al usuario a la página de inicio si el registro es correcto
     }, 3000)
    //  console.log("Sesión iniciada con email y contraseña correctamente");
   })
   .catch((error) => {
    //  console.log("Error al iniciar sesión con Google")
     console.log(error);
     this.mensajeError = "Error al iniciar sesión con Google.";
     this.usuarioIdentificado = false;
     this.idUsuario = "";
    });
  }

  // Inicio de sesión con GitHub
  inicioSesionGithub(){
    const provider = new GithubAuthProvider();
    signInWithPopup(this.auth, provider)
    .then((result) => {
      // Signed in
      this.mensaje= "";
      const user = result.user;
      this.usuarioIdentificado = true;
      this.mensaje="Sesión iniciada con Github correctamente. Se le redirigirá al portfolio en 3 segundos."
      setTimeout(()=>{
      this.router.navigate(['/portfolio']); // Redirigimos al usuario a la página de inicio si el registro es correcto
      }, 3000)
    })
    .catch((error) => {
      console.log(error);
      this.mensajeError = "Error al iniciar sesión con Github.";
      this.usuarioIdentificado = false;
      this.idUsuario = "";
     });
  }

  // Cerrar Sesión
  cerrarSesion(){
    signOut(this.auth).then(() => {
      // Sign-out successful.
      this.usuarioIdentificado = false;
      this.idUsuario = "";
      this.router.navigate(['/']); // Redirigimos al usuario a la página de inicio si el registro es correcto
      console.log("Sesión cerrada correctamente");

    }).catch((error) => {
      // An error happened.
      console.log("Error al cerrar sesión");
    
    });
  }

}
