const Footer = () => {
    const d = new Date();
    const crrYear = d.getFullYear();
    return (
        <footer className="container margin-top-30">
            <div className="row">
                <div className="col-lg-12">
                    <p className="text-uppercase templatemo-brown">
                        <span className="templatemo-copyright-text">
                            Copyright © {crrYear} <a href="/" className="templatemo-gold">{process.env.SITENAME}</a>
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    )
}
export default Footer