import styled from '@emotion/styled';

const MapLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
`
const HeaderMap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  background: var(--blueheader);
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
  min-height: 15vh;
  place-content: space-between;

  @media (max-width: 960px) {
    width: 100%;
    position: absolute;
    z-index: 1;
  }
`
const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25px;
  height: auto;
  font-size: 18px;
  font-weight: 700;
  line-height: 27px;
  color: var(--headertext);
  font-family: 'Poppins', sans-serif;

  @media (max-width: 960px) {
    font-size: 1.2em;
  }

  @media (min-width: 961px) {
    font-size: 2em;
  }

  @media (min-width: 3180px) {
    font-size: 6em;
  }
`
const ChatBtnContainer = styled.div`
  width: 28.33%;
  height: auto;
  display: flex;
  justify-content: flex-end;
  cursor: default;
  margin-right: 15px;
`
const ChatBtn = styled.img`
  cursor: pointer;
  margin: auto 10px;

  @media (min-width: 1025px) {
    width: auto;
    height: 7vh;
  }

  @media (max-width: 960px) {
    width: 50px;
    height: 50px;
  }
`
const HeaderTitle = styled.div`
  font-weight: 900;
  font-family: 'Poppins', sans-serif;
`
const HeaderSubTitle = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: var(--headertext);
  margin-top: 8px;
  margin-bottom: 5px;
  line-height: 19px;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 960px) {
    margin-top: 0;
  }
`
const FooterMap = styled.div`
  align-self: flex-end;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  height: auto;
  margin: 0 auto;
  background-color: var(--blueheader);
  font-family: 'Poppins', sans-serif;

  @media (max-width: 960px) {
    width: 100%;
    position: absolute;
    bottom: 0;
  }

  @media (min-width: 961px) {
    width: 50%;
  }

  @media (min-width: 3180px) {
    width: 70%;
  }
`

/**
 * @typedef {{
 * cols?: number,
 * txt?: string,
 * }} FooterMapProps
 */
const FooterMapAddress = styled.div`
  flex: ${ /** @param {FooterMapProps} props */ props => props.cols};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  color: var(--headertext);
  font-size: 12px;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  line-height: 18px;

  ::after {
    content: '${props => props.txt}';
  }

  @media (max-width: 960px) {
    font-size: 0.7em;
  }

  @media (min-width: 1025px) {
    font-size: 1em;
  }

  @media (min-width: 3180px) {
    font-size: 3em;
  }
`
const MapContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;

  @media (max-width: 960px) {
    min-height: 100vh;
  }

  @media (min-width: 1025px) {
    margin: 0 auto;
  }
`
export {
  MapLayoutContainer,
  HeaderMap,
  HeaderText,
  ChatBtnContainer,
  ChatBtn,
  HeaderTitle,
  HeaderSubTitle,
  FooterMap,
  FooterMapAddress,
  MapContainer,
}
