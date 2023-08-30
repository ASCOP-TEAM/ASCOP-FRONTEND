import Layout from "@layout"
import { NextPage } from "next"
import { Col, Container } from "react-bootstrap"
import { SectionContent } from "./styles"
import { QrCode, TextBlockSection, TopBlockSection } from "@components"

const Cadastros: NextPage = () => {

    return (
        <>
            <Layout bgColor={"white"} txColor='black'>

                <TopBlockSection.Root backgroud="./backgroud.jpg">
                    <TopBlockSection.Title title="Doe para a ASCOP e ajude a transformar vidas através do skate!" />
                    <TopBlockSection.Paragrap
                        paragrap="Ao doar para a ASCOP, você está se tornando parte de uma comunidade dedicada a fazer a diferença na vida das crianças e nas comunidades carentes. Cada centavo conta e cada gesto de solidariedade nos aproxima de um mundo onde todas as crianças têm a chance de brilhar."
                    />
                </TopBlockSection.Root>

                <Container>
                    <SectionContent>
                        <Col xs={12} lg={6} className="box light">
                            <div className="my-4">
                                <h1>Faça sua doação!</h1>
                            </div>
                            <div className="mb-4">
                                <p>Agradecemos antecipadamente por sua generosidade e apoio. Juntos, podemos construir um futuro mais brilhante para as crianças que atendemos. Skate é mais do que um esporte – é uma ferramenta para a transformação social.
                                </p>
                                <br />
                                <h4>Nossos dados bancarios:</h4>
                                <p>
                                    Banco: <strong>000 bank</strong><br />
                                    Agência: <strong>000-0</strong><br />
                                    Conta: <strong>00.000-0</strong>
                                </p>
                                <br />
                                <p>Para mais informações sobre a ASCOP nos acompanhe nas redes sociais.</p>

                            </div>
                            <div>
                                <TextBlockSection.Social disableTitle={true} theme />
                            </div>
                        </Col>
                        <Col xs={12} lg={6} className="box donate">
                            <Col xs={12} lg={6}>
                                <QrCode />
                            </Col>
                            <div className="separator my-3">
                                <hr />
                                <p>OU</p>
                                <hr />
                            </div>
                            <div>
                                <a href="#" className="vakinha-btn">Contribuir Pelo Vakinha </a>
                            </div>
                        </Col>
                    </SectionContent>
                </Container>
            </Layout >

        </>
    )
}


export default Cadastros