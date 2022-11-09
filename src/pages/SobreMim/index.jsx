
import BannerChange from 'components/BannerChange';
import BigCards from 'components/BigCards';

function SobreMim () {
    return(
        <>
            <BannerChange/>
            <BigCards temp='1' img='./assets/minha-foto.jpg'/>
            <BigCards temp='2'/>
            <BigCards temp='3'/>
        </>
    );
}

export default SobreMim;