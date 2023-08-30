import Layout from "@layout"
import { NextPage } from "next"
import { Col, Container } from "react-bootstrap"
import { SectionContent, SectionMain } from "./styles"
import { Button } from "@components"

const Cadastros: NextPage = () => {

    return (
        <>
            <Layout bgColor={"white"} txColor='black'>

                <SectionMain>

                    <Container>

                        <SectionContent>
                            <Col xs={12} lg={5} className="box dark">
                                <div className="my-4">
                                    <h1>Seja um Voluntário na ASCOP e Faça a Diferença!</h1>
                                </div>
                                <div className="mb-4">
                                    <p>A ASCOP, Associação de Skate da Costeira do Pirajubaé, convida você a se juntar a nós como voluntário e fazer parte de uma iniciativa que está transformando vidas através do skate. Se você tem paixão pelo esporte, deseja contribuir para o desenvolvimento das crianças e fortalecer comunidades, venha fazer parte da nossa equipe!</p>
                                </div>
                                <div>
                                    <Button text=" Voluntário - Clique para se cadastrar" theme />
                                </div>
                            </Col>
                            <Col xs={12} lg={5} className="box light">
                                <div className="my-4">
                                    <h1>Junte-se a Nós como Aluno e Desperte seu Potencial no Skate.</h1>
                                </div>
                                <div className="mb-4">
                                    <p>Se você é uma criança apaixonada por skate e deseja aprender, se divertir e crescer através do esporte, a ASCOP é o lugar certo para você!</p>
                                </div>
                                <div>
                                    <Button text="Aluno - Clique aqui para se cadastrar" theme={false} />
                                </div>
                            </Col>
                        </SectionContent>
                    </Container>

                </SectionMain>

            </Layout>

        </>
    )
}


export default Cadastros