
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Montserrat', sans-serif;

    background-color: #28332d;

    color: #f4f1e8;

    min-height: 100vh;
}




.encabezado {

    height: 90px;

    background-color: #f5f2e9;

    display: flex;

    align-items: center;

    justify-content: space-between;

    padding: 0 20px;

    position: sticky;

    top: 0;

    z-index: 100;
}




.logo {

    font-family: 'Cinzel', serif;

    font-size: 27px;

    font-weight: 700;

    letter-spacing: 3px;

    color: #28332d;

    line-height: 25px;
}

.logo span {

    display: block;

    font-size: 12px;

    letter-spacing: 6px;

    text-align: center;

    color: #71806f;
}




.boton-menu {

    width: 48px;

    height: 48px;

    border: none;

    border-radius: 8px;

    background-color: #aab8a4;

    color: #28332d;

    font-size: 27px;

    cursor: pointer;
}




.menu-lateral {

    position: fixed;

    top: 0;

    right: -280px;

    width: 280px;

    height: 100vh;

    background-color: #f5f2e9;

    z-index: 1000;

    padding: 80px 30px;

    transition: 0.3s;

    box-shadow: -5px 0 20px rgba(0,0,0,0.25);
}

.menu-lateral.activo {

    right: 0;
}


.menu-lateral h2 {

    font-family: 'Cinzel', serif;

    color: #28332d;

    margin-bottom: 25px;

    font-size: 22px;
}


.menu-lateral a {

    display: block;

    text-decoration: none;

    color: #3e4c43;

    padding: 14px 0;

    border-bottom: 1px solid #d7d8ce;

    font-size: 15px;

    font-weight: 500;
}


.menu-lateral a:hover {

    color: #71806f;
}


.cerrar-menu {

    position: absolute;

    top: 20px;

    right: 22px;

    border: none;

    background: none;

    font-size: 35px;

    color: #28332d;

    cursor: pointer;
}




.fondo-menu {

    position: fixed;

    inset: 0;

    background-color: rgba(0,0,0,0.45);

    z-index: 900;

    display: none;
}

.fondo-menu.activo {

    display: block;
}



.bienvenida {

    text-align: center;

    padding: 35px 20px 25px;
}


.bienvenida h1 {

    font-family: 'Cinzel', serif;

    font-size: 27px;

    letter-spacing: 2px;

    color: #e5e2d5;

    margin-bottom: 10px;
}


.bienvenida p {

    color: #bec5ba;

    font-size: 13px;

    line-height: 1.5;
}




.categorias {

    display: grid;

    grid-template-columns: repeat(2, 1fr);

    gap: 15px;

    padding: 10px 16px 40px;

    max-width: 700px;

    margin: auto;
}




.categoria {

    position: relative;

    display: block;

    height: 170px;

    border-radius: 10px;

    overflow: hidden;

    text-decoration: none;

    border: 2px solid #c6cec1;

    background-color: #59675d;
}




.categoria img {

    width: 100%;

    height: 100%;

    object-fit: cover;

    display: block;

    transition: 0.3s;

    filter: brightness(65%);
}




.categoria:active img {

    transform: scale(1.05);
}




.nombre-categoria {

    position: absolute;

    inset: 0;

    display: flex;

    align-items: center;

    justify-content: center;

    text-align: center;

    padding: 5px;

    color: white;

    font-family: 'Cinzel', serif;

    font-size: 18px;

    font-weight: 600;

    letter-spacing: 1px;

    text-shadow: 2px 2px 5px #000;
}




footer {

    background-color: #202922;

    text-align: center;

    padding: 30px 20px;

    color: #9fa99f;

    font-size: 12px;
}


.footer-logo {

    color: #dce0d7;

    font-size: 20px;

    margin-bottom: 10px;
}

.footer-logo span {

    color: #9eaa9d;
}




.pagina-categoria {

    max-width: 700px;

    margin: auto;

    padding: 25px 18px 50px;
}


.volver {

    display: inline-block;

    color: #dce1d7;

    text-decoration: none;

    font-size: 14px;

    margin-bottom: 25px;
}


.titulo-categoria {

    text-align: center;

    font-family: 'Cinzel', serif;

    font-size: 30px;

    letter-spacing: 2px;

    color: #e4e2d7;

    margin-bottom: 30px;
}




.lista-productos {

    display: flex;

    flex-direction: column;

    gap: 14px;
}


.producto {

    background-color: #35423a;

    border: 1px solid #637065;

    border-radius: 10px;

    padding: 17px;

    display: flex;

    justify-content: space-between;

    align-items: center;

    gap: 15px;
}


.producto-info {

    flex: 1;
}


.producto h3 {

    font-size: 16px;

    color: #f2f0e7;

    margin-bottom: 6px;
}


.producto p {

    font-size: 12px;

    line-height: 1.5;

    color: #b9c1b8;
}


.precio {

    color: #d4dacd;

    font-size: 15px;

    font-weight: 600;

    white-space: nowrap;
}




@media (min-width: 700px) {

    .categorias {

        grid-template-columns: repeat(3, 1fr);

        gap: 20px;

        padding: 20px;
    }

    .categoria {

        height: 210px;
    }

    .nombre-categoria {

        font-size: 20px;
    }

}