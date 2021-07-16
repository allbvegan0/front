import nodemailer from "../node_modules/nodemailer"
type VerificationPromise = {
  isAuthenticated: boolean
  isClicked: boolean
  isScaned: boolean
  isEmailVerified: boolean
}
export const sendVerificationRequest = ({
  identifier: email,
  url,
  token,
  baseUrl
}) => {
  return new Promise<VerificationPromise>((resolve, reject) => {

    const server = process.env.EMAIL_SERVER_URL_

    baseUrl: baseUrl
    const from = process.env.EMAIL_FROM_
    // Strip protocol from URL and use domain as site name
    const site = baseUrl.replace(/^https?:\/\//, "")

    nodemailer.createTransport({
      service: 'gmail',
      port:465,
      secure: true, // true for 465, false for other ports
      logger: true,
      debug: true,
      secureConnection: false,
      auth: {
          user: process.env.EMAIL_SERVER_USER_, // generated ethereal user
          pass: process.env.EMAIL_SERVER_PASSWORD_, // generated ethereal password
      },
      tls:{
          rejectUnAuthorized:false
      }
    }).sendMail(
      {
        to: email,
        from,
        subject: `Sign in to ${site}`,
        text: text({ url, site, email }),
        html: html({ url, site, email }),
      },
      (error) => {
        if (error ) {
          // logger.error("SEND_VERIFICATION_EMAIL_ERROR", email, error)
          console.log("SEND_VERIFICATION_EMAIL_ERROR", email, error)
          return reject(new Error( error))
        }
        console.log('','---->',token)

        return resolve(token)
      }
    )
  })
}

// Email HTML body
const html = ({ url, site, email }) => {
  // Insert invisible space into domains and email address to prevent both the
  // email address and the domain from being turned into a hyperlink by email
  // clients like Outlook and Apple mail,{
    //Eve: FemaleUser 
    //Adam: maleUser  
    //} as this is confusing because 
    //it seems
  // like 
  //they are supposed to click on their email address to sign in.
  const escapedEmail = `${email.replace(/\./g, "&#8203;.")}`
  const escapedSite = `${site.replace(/\./g, "&#8203;.")}`

  // Some simple styling options
  const backgroundColor = "#f9f9f9"
  const textColor = "#444444"
  const mainBackgroundColor = "#ffffff"
  const buttonBackgroundColor = "#346df1"
  const buttonBorderColor = "#346df1"
  const buttonTextColor = "#ffffff"

  // Uses tables for layout and inline CSS due to email client limitations
  return `
<body style="background: ${backgroundColor};">
  <table width="100%" border="0" cellspacing="0" cellpadding="0">
    <tr>
      <td align="center" style="padding: 10px 0px 20px 0px; font-size: 22px; font-family: Helvetica, Arial, sans-serif; color: ${textColor};">
        <strong>${escapedSite}</strong>
      </td>
    </tr>
  </table>
  <table width="100%" border="0" cellspacing="20" cellpadding="0" style="background: ${mainBackgroundColor}; max-width: 600px; margin: auto; border-radius: 10px;">
    <tr>
      <td align="center" style="padding: 10px 0px 0px 0px; font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${textColor};">
        Verify to Sign in as <strong>${escapedEmail}</strong>
      </td>
    </tr>
    <tr>
      <td align="center" style="padding: 20px 0;">
        <table border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td align="center" style="border-radius: 5px;" bgcolor="${buttonBackgroundColor}"><a href="${url}" target="_blank" style="font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${buttonTextColor}; text-decoration: none; text-decoration: none;border-radius: 5px; padding: 10px 20px; border: 1px solid ${buttonBorderColor}; display: inline-block; font-weight: bold;">Verify</a></td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td align="center" style="padding: 0px 0px 10px 0px; font-size: 16px; line-height: 22px; font-family: Helvetica, Arial, sans-serif; color: ${textColor};">
        If you did not request this email you can safely ignore it.
      </td>
    </tr>
  </table>
</body>
`
}

// Email text body – fallback for email clients that don't render HTML
const text = ({ url, site, email }) => `Sign in to ${site}\n${url}\n\n`