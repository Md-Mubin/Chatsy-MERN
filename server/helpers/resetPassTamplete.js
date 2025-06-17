const resetPassTamplet = (name, userEmail, generatedString) => {
    return `
  <div style="margin:0; padding:0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
    <table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px; background-color:#ffffff; margin-top:30px; border:1px solid #dddddd;">
      <tr>
        <td style="padding: 20px; text-align: center; background-color: #007BFF; color: #ffffff;">
          <h1 style="margin: 0; font-size: 24px;">Reset Your Password</h1>
        </td>
      </tr>
      <tr>
        <td style="padding: 30px;">
          <p style="font-size: 16px; color: #333333;">
            Hi ${name},
          </p>
          <p style="font-size: 16px; color: #333333;">
            We received a request to reset your password. Click the button below to set up a new password.
          </p>
          <p style="text-align: center; margin: 30px 0;">
            <a href="${process.env.FRONTEND_MAIN_URL}/resetPass/${generatedString}?email=${userEmail}" style="background-color: #007BFF; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block; font-weight: bold;">
              Reset Password
            </a>
          </p>
          <p style="font-size: 14px; color: #777777;">
            If you didn't request a password reset, please ignore this email or contact support if you have questions.
          </p>
        </td>
      </tr>
    </table>
  </div>
`
}

module.exports = resetPassTamplet