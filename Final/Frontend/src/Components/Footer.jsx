import React,{useState} from 'react'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import '../Assests/CSS/Footer.css'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../Redux/userSlice';
import footer1 from '../Assests/Images/footer1.avif'
import footer2 from '../Assests/Images/footer2.avif'
import footer3 from '../Assests/Images/footer3.avif'
import footer4 from '../Assests/Images/footer4.avif'
import footerr5 from '../Assests/Images/footerr5.avif'
import footer6 from '../Assests/Images/footer6.avif'
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));
function Footer() {
  const nav=useNavigate('');
  
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [op, setOp] = React.useState(false);

  const handleClickOp = () => {
    setOp(true);
  };
  const handleClos= () => {
    setOp(false);
  };
  const feedback=()=>{
    if(!isLoggedIn)
    {
      alert("Please Login to Proceed..")
    }
    else{
    nav("/feedback")
    }
  }
  const user = useSelector(selectUser);
  const username = user.user && user.user.username ? user.user.username:'Guest';
  const isLoggedIn = user.user && user.user.username;
  return (
    <>
    <footer className="footer">
    <div className="main-part">
      <div className="footer-list-wrapper">
        <h3 className="footer-heading">Grand Hotel</h3>
        <ul className="footer-list">
          <li className="footer-list-item">
            <a href="#" className="footer-list-link">
              support@hoteltulip.com
            </a>
          </li>
          <li className="footer-list-item">
            <a href="#" className="footer-list-link">
              Erode, Main Street 123
            </a>
          </li>
          <li className="footer-list-item">
            <a href="#" className="footer-list-link">
              Tel: +91 7894561230
            </a>
          </li>
          <li className="footer-list-item">
          <a href="https://www.facebook.com/" className="social-link">
          <i class="fa fa-facebook-square" style={{fontSize:"17px",color:"white"}}/>   
          </a>
        <a href="https://twitter.com/?lang=en-in" className="social-link">
        <i class="fa fa-twitter" style={{fontSize:"17px",color:"white"}}/>
              </a>
      <a href="https://www.instagram.com/" className="social-link">
      <i class="fa fa-instagram" style={{fontSize:"17px",color:"white"}}/>
      </a>
          <a href="https://www.pinterest.com/" className="social-link">
          <i class="fa fa-pinterest" style={{fontSize:"17px",color:"white"}}/>
          </a>
          </li>
          
        </ul>
      </div>
      <div className="footer-list-wrapper">
        <h3 className="footer-heading">Explore</h3>
        <ul className="footer-list">
          <li className="footer-list-item">
            <a href="/" className="footer-list-link">
              Home
            </a>
          </li>
          <li className="footer-list-item">
            <a href="about" className="footer-list-link">
              About Us
            </a>
          </li>

          <li className="footer-list-item">
            <a href="contact" className="footer-list-link">
              Contact Us
            </a>
          </li>
          <li className="footer-list-item">
            <a href="faq" className="footer-list-link">
              FAQ
            </a>
          </li>
        </ul>
      </div>
      <div className="contact">
        <h3 className="footer-heading">Contact</h3>
        <p  onClick={handleClickOpen} style={{cursor:"pointer"}} >Privacy Policy</p>
        <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2}} id="customized-dialog-title">
        PRIVACY POLICY
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            left:250,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent sx={{ fontSize: '1400%' }} dividers>
        <h4 style={{fontSize: '80%',color:"black" }}>Information We Collect</h4>
    
        <p>Personal Information: We may collect certain personal information when users register for an account or use certain features of the App. This information may include:
        
        Child's first name (no last names)
        Parent or legal guardian's email address
        We do not collect any personally identifiable information from children without parental consent. Parents and legal guardians are responsible for providing consent for their children to use the App.
        
        Non-Personal Information: We may also collect non-personal information such as device type, device ID, IP address, and usage data to improve the App's performance and user experience.</p>
        
        <h4 style={{fontSize: '80%',color:"black" }}>How We Use Information</h4>
        
        <p>We use the information collected for the following purposes:
        
        Account Creation: To create and manage user accounts for the App.
        
        Communication: To communicate with parents and legal guardians regarding the App, including updates, promotions, and important information.
        
        Customization: To personalize the App's content based on user preferences and usage patterns.
        
        Analytics: To analyze user behavior and improve the App's functionality and content.</p>
        
        <h4 style={{fontSize: '80%',color:"black" }}>Sharing of Information</h4>
        
        <p>We do not sell, trade, or share personal information with third parties for their marketing purposes. We may share information as follows:
        
        Service Providers: We may share information with third-party service providers who assist in app development, hosting, maintenance, and other related services.
        
        Compliance with Law: We may disclose information as required by law or to protect our rights, privacy, safety, or property.</p>
        
        <h4 style={{fontSize: '80%',color:"black" }}>Parental Consent</h4>
        
        <p>We require parental consent for the collection of personal information from children. Parents and legal guardians can review, update, or request the deletion of their child's information by contacting us at [contact@email.com].</p>
        
        <h4 style={{fontSize: '80%',color:"black" }}>Security</h4>
        
        <p>We take reasonable measures to protect the security and confidentiality of information collected through the App. However, no data transmission or storage system is 100% secure. We cannot guarantee the security of information provided to or collected by the App.</p>
        
        <h4 style={{fontSize: '80%',color:"black" }}>Changes to Privacy Policy</h4>
        
        <p>We may update this Privacy Policy from time to time to reflect changes in our practices and services. We will notify users of any material changes to this policy through the App or via email.</p>
        
        <h4 style={{fontSize: '80%',color:"black" }}>Contact Information</h4>
        
        <p>If you have any questions or concerns about this Privacy Policy, please contact us at [contact@email.com].</p>
        
        <h4 style={{fontSize: '80%',color:"black" }}>Effective Date</h4>
        
        <p>This Privacy Policy is effective as of [Effective Date].
        
        This privacy policy is provided as a general template and should be customized to fit your specific needs and legal requirements. Consulting with a legal professional is advisable to ensure compliance with applicable laws and regulations, especially those related to children's privacy protection, such as the Children's Online Privacy Protection Act (COPPA) in the United States.</p>
        <br/>
    
        </DialogContent>
   
      </BootstrapDialog>



        <p onClick={handleClickOp} style={{cursor:"pointer"}}>Terms and conditions</p>
        <BootstrapDialog
        onClose={handleClos}
        aria-labelledby="customized-dialog-title"
        open={op}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title" >
        Terms and Conditions
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClos}
          sx={{
            position: 'absolute',
            left:250,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent sx={{ fontSize: '1400%' }} dividers>
        <h4 style={{fontSize: '80%',color:"black" }}>Information We Collect</h4>
        
        <p>We use the information collected for the following purposes:
        
        Account Creation: To create and manage user accounts for the App.
        
        Communication: To communicate with parents and legal guardians regarding the App, including updates, promotions, and important information.
        
        Customization: To personalize the App's content based on user preferences and usage patterns.
        
        Analytics: To analyze user behavior and improve the App's functionality and content.</p>
        
        <h4 style={{fontSize: '80%',color:"black" }}>Sharing of Information</h4>
        
        <p>We do not sell, trade, or share personal information with third parties for their marketing purposes. We may share information as follows:
        
        Service Providers: We may share information with third-party service providers who assist in app development, hosting, maintenance, and other related services.
        
        Compliance with Law: We may disclose information as required by law or to protect our rights, privacy, safety, or property.</p>
        
        <h4 style={{fontSize: '80%',color:"black" }}>Parental Consent</h4>
        
        <p>We require parental consent for the collection of personal information from children. Parents and legal guardians can review, update, or request the deletion of their child's information by contacting us at [contact@email.com].</p>
        </DialogContent>
      </BootstrapDialog>
        <p onClick={feedback} style={{cursor:"pointer"}}>Feedback</p>
      </div>
      <div className="gallery">
        <h3 className="footer-heading">Gallery</h3>
        <div className="gallery-images">
          <div className="image-wrapper">
            <img
              src={footer1}
              className="footer-image"
            />
          </div>
          <div className="image-wrapper">
            <img
              src={footer2}
              className="footer-image"
            />
          </div>
          <div className="image-wrapper">
            <img
              src={footer3}
              className="footer-image"
            />
          </div>
          <div className="image-wrapper">
            <img
              src={footer4}
              className="footer-image"
            />
          </div>
          <div className="image-wrapper">
            <img
              src={footerr5}
              className="footer-image"
            />
          </div>
          <div className="image-wrapper">
            <img
              src={footer6}
              className="footer-image"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="creator-part">
      <div className="copyright-text">
        <p className='text'>Copyright © 2019. Grand Hotel. All Rights Reserved</p>
      </div>
    </div>
  </footer>
    </>
  )
}

export default Footer