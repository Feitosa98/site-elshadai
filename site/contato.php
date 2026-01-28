<!doctype html>
<html lang="pt-br">

<?php
include './head.php';
?>

<body>
    <?php
    include './nav.php';
    ?>
    <main id="contatoPage">
        <div class="container-fluid">
            <div class="container py-2">
                <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="./index.php">Início</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Contatos</li>
                    </ol>
                </nav>
                <div class="title">
                    <h1>Fale com a El shadai</h1>
                </div>
                <div>
                    <p>Teremos o prazer em te ouvir.</p>
                    <div class="row">
                        <div class="col-lg mb-5">
                            <div class="d-flex mb-3">
                                <div class="circle-icons my-auto me-1">
                                    <span><i class="bi bi-whatsapp"></i></span>
                                </div>
                                <div class="my-auto"><a href="https://wa.me/5592993883573" target="_blank">(92) 99388-3573</a></div>
                            </div>
                            <div class="d-flex mb-3">
                                <div class="circle-icons my-auto me-1">
                                    <span><i class="bi bi-whatsapp"></i></span>
                                </div>
                                <div class="my-auto"><a href="https://wa.me/5592994350716" target="_blank">(92) 99435-0716</a></div>
                            </div>
                            <div class="d-flex mb-3">
                                <div class="circle-icons me-1">
                                    <span><i class="bi bi-envelope"></i></span>
                                </div>
                                <div class="my-auto"><a href="#">comercial@transporteselshadai.com.br</a></div>
                            </div>
                            <div class=" d-flex mb-4">
                                <div>
                                    <i class="fa-solid fa-map-pin"></i>
                                </div>
                                <div class="my-auto">
                                    <p class="mx-1">Rua São Miguel, 34 Bairro: Santo Antônio - Cep 69029-550. - Manaus - AM</p>
                                </div>
                            </div>
                            <div id="map-container">
                                <h4>Nossa localização</h4>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.931547675844!2d-60.051158199999996!3d-3.1128136000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c0fa5448e0849%3A0x4a15d3dd62b4c7a1!2sTransportes%20Elshadai!5e0!3m2!1spt-BR!2sbr!4v1711223659892!5m2!1spt-BR!2sbr" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <?php
    include './footer.php';
    ?>
</body>

</html>