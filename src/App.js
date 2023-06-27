import logo from './logo.svg';
import './App.css';

function App() {
    function openNav() {
        document.getElementById("mySidepanel").style.width = "250px";
    }

    function closeNav() {
        document.getElementById("mySidepanel").style.width = "0";
    }
  return (
	<div>
    <header id="home">
       
        <nav ClassName="navbar navbar-expand-lg navbar-dark fixed-top" id="full-nav">
            <div ClassName="container-sm">
                <a href="#"></a>
                <button ClassName="navbar-toggler ms-auto" data-bs-toggle="collapse" data-bs-target="#navbar">
                    <span ClassName="navbar-toggler-icon"></span>
                </button>
                <div ClassName="collapse navbar-collapse ms-auto" id="navbar">
                    <ul ClassName="navbar-nav ms-auto">
                        <li ClassName="nav-item ms-auto">
                            <a ClassName="nav-link active" href="#">HOME</a>
                        </li>
                        <li ClassName="nav-item ms-auto">
                            <a ClassName="nav-link" href="about/">SOBRE NÓS</a>
                        </li>
                        <li ClassName="nav-item ms-auto">
                            <a ClassName="nav-link" href="products/">CARRINHO</a>
                        </li>
                        <li ClassName="nav-item ms-auto">
                            <a ClassName="nav-link" href="contact/">CONTATO</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        
        <div id="carouselExampleIndicators" ClassName="carousel slide" data-bs-ride="carousel" data-interval="7000">
            <div ClassName="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" ClassName="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div ClassName="carousel-inner" role="listbox">
                
                <div ClassName="carousel-item active" id="slide1">
                    <div ClassName="carousel-caption text-center">
                        <h1>capulus</h1>
                        <h3>Acreditamos em ótimas pessoas e ótimo café!</h3>
                        <a ClassName="btn btn-lg btn-header" href="about/index.html#aboutCAFÉ">CAFÉ talk</a>
                    </div>
                </div>
                
                <div ClassName="carousel-item" id="slide2">
                    <div ClassName="carousel-caption text-center">
                        <h1>Nossa HISTÓRIA</h1>
                        <h3> SOBRE NÓS!</h3>
                        <a ClassName="btn btn-lg btn-header" href="about/index.html#ethos">NOSSO PENSAMENTO</a>
                    </div>
                </div>
               
                <div ClassName="carousel-item" id="slide3">
                    <div ClassName="carousel-caption text-center">
                        <h1>TÉCNICA</h1>
                        <h3>Compartilhando nossos segredos com você!</h3>
                        <a ClassName="btn btn-lg btn-header" href="products/index.html">APRENDENDO</a>
                    </div>
                </div>
            </div>
        </div>
        <button className="openbtn" onAuxClick={openNav}></button>
        
    </header>
    <main>
     
        <div ClassName="container">
            <div ClassName="row justify-content-center">
                <div ClassName="card col-lg-4">
                    <img src="images/planet.jpg" ClassName="card-img-top" alt="icon representing planeta Earth"/>
                    <div ClassName="card-body">
                        <h5 ClassName="card-title">Planeta</h5>
                        <p ClassName="card-text">Nós nos esforçamos para ser um negócio bom não apenas para seus clientes, mas também
                            para o nosso planeta.</p>
                        <a href="about/index.html#sustainability" ClassName="btn btn-outline-light btn-md">APRENDA MAIS</a>
                    </div>
                </div>
                <div ClassName="card col-lg-4">
                    <img src="images/people.png" ClassName="card-img-top" alt="icon representing happy pessoas"/>
                    <div ClassName="card-body">
                        <h5 ClassName="card-title">pessoas</h5>
                        <p ClassName="card-text">Queremos estar orgulhosos de como tratamos as pessoas ao nosso redor, seja nosso
                            clientes, fornecedores ou funcionários.</p>
                        <a href="about/index.html#ethos" ClassName="btn btn-outline-light btn-md">APRENDA MAIS</a>
                    </div>
                </div>
                <div ClassName="card col-lg-4">
                    <img src="images/beans.jpg" ClassName="card-img-top" alt="icon of a CAFÉ bean"/>
                    <div ClassName="card-body">
                        <h5 ClassName="card-title">produtos</h5>
                        <p ClassName="card-text">Somente o produto da mais alta qualidade é aceito em nossa porta e somente o
                            melhor será servido para você.</p>
                        <a href="about/index.html#aboutCAFÉ" ClassName="btn btn-outline-light btn-md">APRENDA MAIS</a>
                    </div>
                </div>
            </div>
        </div>
       
        <div ClassName="video-container">
            <video autoplay loop muted id="video-bg">
                <source src="images/CAFÉVideo.mp4" type="video/mp4" />
            </video>
        </div>
       
        <div ClassName="container">
            <div ClassName="row description">
                <div ClassName="col-lg-7 text-left order1 order-lg-1 scroll-container">
                    <img src="images/selectionBeans.png" ClassName="description-img scroll-element js-scroll slide-left"
                        alt="selection of different types of CAFÉ beans"/>
                </div>
                <div ClassName="col-lg-5 order-2 order-lg-2">
                    <h3>Apenas os melhores grãos!</h3>
                    <p>Já se foram os dias da dose insípida de cafeína: o mundo do café está passando por uma revolução.
                        Para saborear os melhores produtos e garantir a frescura absoluta,
                        deixe o café pré-embalado para trás!</p>
                    <a href="products/index.html#espresso" ClassName="btn btn-outline-light btn-md">Explore CAFÉ</a>
                </div>
            </div>
            
            <div ClassName="row description">
                <div ClassName="col-lg-5 order-4 order-lg-3">
                    <h3>Só as melhores máquinas!</h3>
                    <p>Você precisa do equipamento certo e do conhecimento de como usá-lo se quiser alcançar resultados excepcionais
                        xícara de CAFÉ.
                        Temos ambos prontos para você explorar. Aprenda os truques do comércio conosco!
                    </p>
                    <a href="products/index.html#requirements" ClassName="btn btn-outline-light btn-md">Explorar equipamento</a>
                </div>
                <div ClassName="col-lg-7 align-right order-3 order-lg-4 scroll-container">
                    <img src="images/gear.png" ClassName="description-img scroll-element js-scroll slide-right"
                        alt=" selection of different CAFÉ making equipment"/>
                </div>
            </div>
        </div>
    </main>
    <footer ClassName="footer-container">
        <div ClassName="footer-col">
            <div ClassName="row-inner1">
                <h6>SEGUE A GENTE!</h6>
            </div>
            <div ClassName="row-inner2">
                <a ClassName="social-icon" href="facebook.com">
                    <img src="./images/facebook.png" alt="facebook logo" width="30" height="30"/>
                </a>
                <a ClassName="social-icon" href="facebook.com">
                    <img src="./images/facebook.png" alt="facebook logo" width="30" height="30"/>
                </a>
                <a ClassName="social-icon" href="facebook.com">
                    <img src="./images/facebook.png" alt="facebook logo" width="30" height="30"/>
                </a>
            </div>
        </div>
        <div ClassName="footer-col">
            <div ClassName="row-inner1">
                <a ClassName="footer-link" href="#">HOME</a>
                <a ClassName="footer-link" href="about/">SOBRE NÓS</a>
                <a ClassName="footer-link" href="products/">CARRINHO</a>
                <a ClassName="footer-link" href="contact/">CONTATO</a>
            </div>
            <div ClassName="row-inner2">
                <h6>Copyright company 2021</h6>
            </div>
        </div>
    </footer>
    <script src="scripts/scripts.js"></script>
</div>
  );
}

export default App;
