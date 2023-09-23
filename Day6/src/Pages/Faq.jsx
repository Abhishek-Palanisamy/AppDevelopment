import React from 'react'
import '../Assets/CSS/Faq.css'
import Navbar1 from '../Components/Navbar1'
import Sidebar1 from '../Components/Sidebar1'
import Footer from '../Components/Footer'

export default function Faq() {
  return (
    <div>
    <Navbar1/>
    <Sidebar1/>
    <div className='faqname'>
    <h3>FAQ</h3></div>
    <div className="faq">
  <input id="faq-a" type="checkbox" />
  <label htmlFor="faq-a">
    <p className="faq-heading">Can I see the photographer’s profile before I book?</p>
    <div className="faq-arrow" />
    <p className="faq-text">
    Of course! You can view each photographer’s profile from their city page! Select your destination here. When you have chosen your favourite photographer check their availability with our concierge team by submitting an inquiry.
      <br />
      <br />
      We also offer professional development trainings that include the
      opportunity to pursue credit while also receiving a discounted license. If
      you have more questions, please feel free to submit a request!
    </p>
  </label>
  <input id="faq-b" type="checkbox" />
  <label htmlFor="faq-b">
    <p className="faq-heading">
      Do you have professional development trainings available?
    </p>
    <div className="faq-arrow" />
    <p className="faq-text">
<br/>
    Yes, we have professional development trainings available almost every
    month. Teachers can take our online course that will train you on the
    theory and practice of putting lessons online, often called flipped or
    blended learning. These trainings also include in depth instruction on how
    to use Brainitz.
      Online training start at $45, include a 1 year subscription Brainitz, and
      come with 1 hour of advancement credit available through Adams State
      University or $55. For dates on upcoming trainings, email us at
      welcome@brainitz.com. If you have more questions, please feel free to
      submit a request!
    </p>
  </label>
  <input id="faq-c" type="checkbox" />
  <label htmlFor="faq-c">
    <p className="faq-heading">Does Brainitz accept purchase orders?</p>
    <div className="faq-arrow" />
    <p className="faq-text">
      Yes, Brainitz accepts purchase order for site licenses. Please set the PO,
      including a description of the order to welcome@brainitz.com and we will
      invoice you for the amount. Once we send the invoice, someone will be in
      touch to set up your Brainitz account.
      <br />
      <br />
      You can learn more about our licensing structure on our pricing page. If
      you have more questions, please feel free to submit a request!
    </p>
  </label>
  <input id="faq-d" type="checkbox" />
  <label htmlFor="faq-d">
    <p className="faq-heading">
      What are the technical requirements for Brainitz?
    </p>
    <div className="faq-arrow" />
    <p className="faq-text">
      To get setup with Brainitz, instructors will need a computer with working
      Internet connection and a web browser. <br />
      <br />
      Students will need any device with a web browser, ranging from smartphones
      to tablets and personal computer, as well as an Internet or cellular
      connection. <br />
      <br />
      For the be st experience, we recommend using the latest version of Google
      Chrome, but it should work on a recent version of any major browser. If
      you have any more questions, please feel free to submit a request!{" "}
    </p>
  </label>
  <input id="faq-e" type="checkbox" />
  <label htmlFor="faq-e">
    <p className="faq-heading">Can I add a PowerPoint to Brainitz</p>
    <div className="faq-arrow" />
    <p className="faq-text">
      Yes, you can add a PowerPoint to Brainitz. The easiest way is to record
      your PowerPoint presentation using a screen capture program like
      www.screencast-o-matic.com You can view our tutorial on how to do this
      here. <br />
      <br />
      This will allow you to record your PowerPoint as a video with your voice
      describing the slides. You will then be able to upload the video on
      Brainitz and create an interactive video lesson. If you have any more
      questions, please feel free to submit a request!
    </p>
  </label>
  <input id="settings" type="checkbox" />
  <input id="faq-f" type="checkbox" />
  <label htmlFor="faq-f">
    <p className="faq-heading">
      Did my student really get logged out and lose their progress?
    </p>
    <div className="faq-arrow" />
    <p className="faq-text">
      If a student does not answer a question in 5 minutes after it pops up the
      student will be ‘timed out’ and they will lose their progress from the
      last previously answered question <br />
      <br />
      This feature is built in to discourage students from playing a video
      lesson and walking away. Students must stay engaged with the video lesson
      to avoid being timed out. If you have more questions, please feel free to
      submit a request!
    </p>
  </label>
</div>
<Footer/>
</div>
)
}
