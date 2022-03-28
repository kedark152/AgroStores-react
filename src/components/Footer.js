
import "../styles/layouts/footer.css"

export const Footer = ()=>{
    return( 
    <footer className="flex-column-center pd-sm">
        <p className="mg-bottom-xsm">Made by Kedar Kulkarni</p>
        <div className="footer-links mg-bottom-xsm">
        <a className="mg-xsm fs-sm-plus" href="https://github.com/kedark152"  target="_blank" rel="noreferrer"
            ><i className="fab fa-github"></i
        ></a>
        <a
            className="mg-xsm fs-sm-plus"
            href="https://www.linkedin.com/in/kedark152"
            target="_blank" rel="noreferrer"
            ><i className="fab fa-linkedin-in"></i
        ></a>
        <a className="mg-xsm fs-sm-plus" href="https://twitter.com/Kulkarni12Kedar"  target="_blank" rel="noreferrer"
            ><i className="fab fa-twitter"></i
        ></a>
        </div>
        <p className="copyright mg-bottom-xsm">© 2022 AgroStores</p>
  </footer>
  );
}
