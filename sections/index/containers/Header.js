import { t } from '../../../polyglot-modules/polyglot.js'
import Modal from '../components/Modal'
import Submit from '../components/Submit'
import SocialBar from '../../../components/SocialBar.js'

const Header = ( {modal, content, hideModal} ) => (
	<header>
		<div className="img-container"><img className='logoDerMenu' src='../static/assets/Logo-der-header.svg'/></div>
		<div className="subtext-container"><p className='subtext'>{t('index.header.subtitle')}</p></div>
		{/* <Submit /> */}
		<SocialBar alignSelf={'center'} iconsSize={'30px'} width={'214px'} mobileWidth={'100%'} justifyContent={'space-around'} iconHover={'#3CA2DA'} iconMobileHover={'#999'} />
		{modal && 
      <Modal content={content} hideModal={hideModal} />
    }
    <style jsx>{`
      .img-container {
        background-position: center bottom;
        width: 100%;
        display: flex;
        justify-content: center;
      }
      .subtext-container {
        width: 100%;
        display: flex;
        justify-content: center;
      }
      img.logoDerMenu{
        width:45em;
        padding-bottom:4em;
      }
      @media (max-width: 440px) {
        img.logoDerMenu{
          width:30em;
          padding-bottom:4em;
        }
      }
      header {
     		background-image: url('../static/assets/header/headerWeb.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        flex-direction: column;
        padding: 144px 40px 32px 85px;
        background-position: center bottom;
    	}
    	header h1 {
    		color: var(--white);
    	}
    	header p {
    		color: var(--white);
        line-height: 1.5;
        letter-spacing: 0.08rem;
        margin: 24px 0 53px;
        max-width: 598px;
    	}
      @media (max-width: 1024px) {
        header {
          align-items: center;
          padding: 90px 26px 37px;
          text-align: center;
        }
        header h1 {
          font-size: 3.6rem;
        }
        header p {
          font-size: 2.0rem;
          letter-spacing: 0.07rem;
          line-height: 3.6rem;
          margin: 25px 0px 6px;
        }
      }
  	`}</style>
	</header>
	)

export default Header

