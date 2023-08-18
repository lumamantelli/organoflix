import './Rodape.css'

const Rodape = () => {
    return (
    <footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="https://github.com/lumamantelli" target="_blank" rel="noreferrer">
                        <img src="/imagens/github.svg" alt="Git Hub" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/lumamantelli/" target="_blank" rel="noreferrer">
                        <img src="/imagens/linkedin.svg" alt="Linkedin" />
                    </a>
                </li>
                <li>
                    <a href="instagram.com" target="_blank">
                        <img src="/imagens/instagram.png" alt="" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/imagens/Logo.svg" alt="" />
        </section>
        <section>
            <p>
                Desenvolvido por Luma Mantelli.
            </p>
        </section>
    </footer>)
}

export default Rodape