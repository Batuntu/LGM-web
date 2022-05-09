// En el tsconfig se cambio: "module" ="amd" y "allowSyntheticDefaultImports": false y outdir
//tsc --watch.
define(["require", "exports", "jquery"], function (require, exports, jquery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // Esto es para trabajar con jquery en ts, sin esto no lo reconoce.
    const $ = jquery;
    construirNav();
    construirHeader();
    $("head").append(`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">`);
    //FUNCIONES
    function construirNav() {
        $("body").prepend(`
    <nav class="navbar sticky-top navbar-expand-lg navbar-dark" style="background-color: #3D99CE;">
        <div class="container-fluid">
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"><span class="bi-house-door"></span> INICIO</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="foro.html"><span class="bi-file-earmark-person"></span> FORO</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="comunidad.html"><span class="bi-people"></span> COMUNIDAD</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="soporte.html"><span class="bi-telephone"></span> SOPORTE</a>
            </li>
            </ul>
            
        </div>
        </div>
    </nav>
    `);
    }
    function construirHeader() {
        $("body").prepend(`
    <header>

        <!-- <h2><a href="/iniciar-sesion.html">Iniciar sesion</a></h2> -->
        <nav class="navbar navbar-expand-lg navbar-light bg-light" style="background-color: white;">
            <div class="container-fluid">
                <a class="navbar-brand" href="/index.html">
                    <div class="contenedorLogo">
                        <img src="/imagenes/loclsoclso.png">
                    </div>
                </a>

                <form class="navbar-form navbar-left" role="search">
                    <input type="search" placeholder="Search...">
                    <button class="btn" type="submit"><i class="bi-search" style="color: white;"></i></button>
                </form>

                <div class="iniciarSesion">
                    <a class="nav-link active" aria-current="page" href="/iniciar-sesion.html"><img src="/imagenes/310818.png"></a>
                </div>
            </div>
        </nav>

    </header>
    `);
    }
});
