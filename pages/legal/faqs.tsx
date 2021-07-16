import { Box, Grid, VStack } from "@chakra-ui/react"

import ReactMarkdown from "react-markdown";
import Description from "../../components/molecules/decorative/description"
import Title from "../../components/molecules/decorative/title"


const sitePrivacyPolicy = {
  title: 'Privacy Policy',
  date: '01/01/2020',
  content: [
    {
      id: '1',
      title: 'Purpose',
      description:
        `- allbVegan is committed to protecting your privacy because we are committed to valuing people. # Our Privacy Policy below sets out how your personal information is collected, used and protected. The <a href="http://demo">Demo Country Privacy Principles</a> also apply to us.- - This Privacy Policy describes our policies and procedures on the collection, holding, use and disclosure of your personal information and should be read together with our&nbsp;Terms and Conditions. By providing your personal information you consent to our collection, use and disclosure of that information in accordance with this Privacy Policy.- `,
    },
    {
      id: '2',
      title: 'What is Personal Data?',
      description:
        '- When used in this Policy, "personal information" has the meaning given in the Privacy Act. Generally, it means any information or an opinion that could be used to identify you.- ',
    },
    {
      id: '3',
      title: 'Personal Data Collected',
      description:
        '- Personal Data collected for the following purposes and using the following services:- -    - Google Analytics: Cookies; Usage Data   -    - Contact form: email address; first name; phone number   -    - Mailing list or newsletter: email address; first name   -    - ',
    },
    {
      id: '4',
      title: 'Accessing your Personal Data',
      description:
        '- You may request access to your personal information collected by us, and ask that we correct that personal information. You can ask for access or correction by contacting us and we will usually respond within 30 days. If we refuse to give you access to, or correct, your personal information, we will notify you in writing setting out the reasons.- ',
    },
    {
      id: '5',
      title: 'Complaints',
      description:
        '- If you believe your privacy has been breached or you have a complaint about how we have handled your personal information, please contact us in writing.  We will respond within a reasonable period (usually within 30 days).- ',
    },
    {
      id: '6',
      title: 'Owner and Data Controller',
      description:
        '- The Contact Commons<br>Garage 6, Shivalik appartments, Alaknanda ,</br>Vesahe NW110019<br>Country: India<br></br>Email: allb@allbvegan.com- ',
    },
  ],
};


function FAQ(){
  return<Grid>
        <Title>{sitePrivacyPolicy.title}</Title>
        {sitePrivacyPolicy.content.map((faq, index)=>{
          return<Box key={faq.id}>
            <VStack>
              <Description>{faq.title}</Description>
              <h3>{faq.description}</h3>
              <ReactMarkdown children={faq.description} />
              {/* <ReactHTML children={faq.description}/>  */}
            </VStack>
          </Box>
        })}
        
      </Grid>
}




export default FAQ
