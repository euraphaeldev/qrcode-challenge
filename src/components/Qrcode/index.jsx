import React from 'react'
import { Container, IntoContainer, QrcodeElement, TextQrcode, TitleQrcode, SubtitleContainer } from './styles'
import qrcodeimage from '../../assets/img/image-qr-code.png'

const Qrcode = () => {
  const radius = {
    borderRadius: '10px',
    width: '100%'
  };
  return (
    <Container>
      <IntoContainer>
        <QrcodeElement>
          <img src={qrcodeimage} alt={'qrcode'} style={radius} />
        </QrcodeElement>
        <SubtitleContainer>
          <TitleQrcode>
            Improve your front-end skills by building projects
          </TitleQrcode>
          <TextQrcode>
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </TextQrcode>
        </SubtitleContainer>

      </IntoContainer>
    </Container>
  )
}

export default Qrcode;
