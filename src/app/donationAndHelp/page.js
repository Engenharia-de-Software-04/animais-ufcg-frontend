"use client";
import "./styles.css"


import Menu from '@/components/Menu';

export default function DonationAndHelp(){

    return( 
        <>
            <Menu></Menu>
            <div className="sections">
                <section className="section-1">
                    <div className="image-caramel-dog">
                        <img src="/images/white-caramel-dog.png"/>
                    </div>
                    <div className="donation">
                        <h1 className="title-1">Doe</h1>
                        <h2 className="subtitle">Sua doação salva vidas!</h2>
                        <img className="image-qrcode-pix"src="/images/qrcode-pix.png"/>
                        <p className="key-pix">chave: animaisufcg@gmail.com</p>
                        <p className="name-pix">LUIZA LEDRA DE AZEVEDO</p>
                    </div>
                </section>

                <section className="section-2">
                    <div className="container-major-1">
                        <div className="container-donation-image">
                            <div className="image-wrapper-1">
                                <img src="/images/handshake.png"/>
                            </div>
                            <div className="small-box-1">
                                <h3>Doações Essenciais</h3>
                            </div>
                        </div>
                        <div className="box-1">
                            <ul> 
                                <li>Ração para cães e gatos</li> 
                                <li>Areia sanitária</li> 
                                <li>Medicamentos</li> 
                            </ul>
                        </div>
                    </div>
                    <div className="container-major-2">
                        <div className="box-2">
                            <ul>
                                <li>Secretaria do CEEI (UFCG- campus sede)</li> 
                            </ul>
                        </div>
                        <div className="container-collection-point-image"> 
                            <div className="image-wrapper-2">
                                <img src="/images/building.png"/>
                            </div>
                            <div className="small-box-2">
                                <h3>Pontos de Coleta</h3>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-3">
                    <h1 className="title-2">Seja um voluntário</h1>
                    <div className="container-help">
                        <div className="box-3">
                            <p>Ajude a proteger os animais que vivem no campus da UFCG! Seja voluntário na nossa ONG e 
                                faça a diferença na vida desses animais. Contribua com cuidados, resgates, campanhas educativas e 
                                eventos de adoção.Toda ajuda é valiosa!<br /><br />Junte-se a nós e transforme vidas.<br /><br />
                                </p>
                            <a href="#">Fale conosco</a>
                        </div>
                        <div className="image-animal-volunteer">
                            <img src="/images/animal-volunteer.png"/>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
