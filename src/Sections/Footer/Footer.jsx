export const Footer = () => {
    const date = new Date();
    const year = `${date.getFullYear()}`;

    return(
        <div className="footer">
            <p className="footer-copyright">Copyright &copy; {year}</p>
        </div>
    )
}