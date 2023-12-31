import React from "react";
import styled from "styled-components";
import { GlobalLayout } from "../global";
import { ContentBox, ContentsTitle, GenreBox } from "../components/index";

const SearchPage = () => {
  return (
    <GlobalLayout>
      <SSearchPage>
        <div></div>
        <div className="container">
          <div></div>
          <div className="container-slider">
            <ContentsTitle title="인기" />
            <div className="container-slide_contents">
              <ul className="contents">
                <ContentBox img="https://an2-img.amz.wtchn.net/image/v2/cUd87tC-O7nptoEl-XXcKw.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5EQXdlRFF3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk5USXpNekV3TmpJeE5EUXlNemd3TkRBaWZRLjVVYmg1NnAzYTF4aTdtSUtnY2RTTmhYSDBaSXRmVWVrUUNabm9vQ2N4Qnc" />
                <ContentBox img="https://an2-img.amz.wtchn.net/image/v2/eKF-pdLY5tbergbPSC8sjQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5EQXdlRFF3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk5UWTBNRE14Tmpnek5USTVPVEUxTlRVaWZRLkp0WW1jYlBTZGVLcWt6am1mY3dCdVI1U1l6NEQ5eFViRjhMeDNzYkxtQ0U" />
                <ContentBox img="https://an2-img.amz.wtchn.net/image/v2/SBNgOzimAOsvFNCsWFV_vQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5EQXdlRFF3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk5USXpNVGcwT0RRNE5UVTNPRGt6TkRRaWZRLkkycWVMS1lzelpsZThvUFJodDMySzV1b0VCeVdsbElXa1ZyQ0REZE1CRXM" />
                <ContentBox img="https://an2-img.amz.wtchn.net/image/v2/e-tAqiLFRw6HUJ7YzTs0LA.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5EQXdlRFF3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk5USXpNekV4TURjME16UTJOemN6TlRBaWZRLkRfX09YT2FseFVTSmRhbzRFT2pfTmp5enJObkJuQlltLS1ISmNYZjZERGs" />
                <ContentBox img="https://an2-img.amz.wtchn.net/image/v2/Saobl6tsaBCqmFzWaLssuA.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5EQXdlRFF3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk5URTRNekk1TWpZNU5UWTBNRFU0TlRJaWZRLmpSNlNUN3dHbE1rY25Cdk5uc25XaF9YUEpXRk1pcG9FT24zTGJ3N1A4U1k" />
                <ContentBox img="https://an2-img.amz.wtchn.net/image/v2/q93-NejmzE5iO3Zu1jimVQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5EQXdlRFF3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk5USXpNekk0T0RjMU5UZ3lPVFUyTXpjaWZRLlVTX0pxU1VFU0ltX2xtN1hMUjY2TkJoZ2FJQlpPV2xTNFJCaERRLVpMLVk" />
                <ContentBox img="https://an2-img.amz.wtchn.net/image/v2/NlAAsKoCI-k051kTcjRE4A.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5EQXdlRFF3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk5UWXpPRGt5TWpjNU5qTXdNRFEyTURFaWZRLnN0X2pGZ2w1WDVqdklydVk0Z21GcG1aQ2Nyb3h5NVdLQkwweGlrbGplVVE" />
              </ul>
            </div>
          </div>
          <div className="container-slider">
            <ContentsTitle title="웹툰 장르" />
            <div className="container-slide_contents">
              <ul className="contents-genre">
                <GenreBox
                  img="https://an2-img.amz.wtchn.net/image/v2/eEtmM07lXFYer0NKD_mOYw.png?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaVlXTnJaM0p2ZFc1a0lqcDdJbklpT2pJMU5Td2laeUk2TWpVMUxDSmlJam95TlRWOUxDSm9Jam95TnpBc0luQWlPaUl2ZGpJdmMzUnZjbVV2YzNablgzUmxiWEJzWVhSbEx6RTJOVGMxTURJeU56STVPREEzTWpFM01ETWlMQ0p6ZG1kZmNHRnlZVzBpT25zaVkyOXNiM0l4SWpvaUl6UTJNVVk1T1NKOUxDSjNJam8zTWpCOS45N0NWclFRbExMcXA4eVBtZFdrWGFEb3UxS0Y2emMtRjFFSk5HMmE0b1Bn"
                  title="판타지"
                />
                <GenreBox
                  img="https://an2-img.amz.wtchn.net/image/v2/eEtmM07lXFYer0NKD_mOYw.png?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaVlXTnJaM0p2ZFc1a0lqcDdJbklpT2pJMU5Td2laeUk2TWpVMUxDSmlJam95TlRWOUxDSm9Jam95TnpBc0luQWlPaUl2ZGpJdmMzUnZjbVV2YzNablgzUmxiWEJzWVhSbEx6RTJOVGMxTURJeU56STVPREEzTWpFM01ETWlMQ0p6ZG1kZmNHRnlZVzBpT25zaVkyOXNiM0l4SWpvaUl6UTJNVVk1T1NKOUxDSjNJam8zTWpCOS45N0NWclFRbExMcXA4eVBtZFdrWGFEb3UxS0Y2emMtRjFFSk5HMmE0b1Bn"
                  title="코미디"
                />
                <GenreBox
                  img="https://an2-img.amz.wtchn.net/image/v2/eEtmM07lXFYer0NKD_mOYw.png?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaVlXTnJaM0p2ZFc1a0lqcDdJbklpT2pJMU5Td2laeUk2TWpVMUxDSmlJam95TlRWOUxDSm9Jam95TnpBc0luQWlPaUl2ZGpJdmMzUnZjbVV2YzNablgzUmxiWEJzWVhSbEx6RTJOVGMxTURJeU56STVPREEzTWpFM01ETWlMQ0p6ZG1kZmNHRnlZVzBpT25zaVkyOXNiM0l4SWpvaUl6UTJNVVk1T1NKOUxDSjNJam8zTWpCOS45N0NWclFRbExMcXA4eVBtZFdrWGFEb3UxS0Y2emMtRjFFSk5HMmE0b1Bn"
                  title="짝사랑"
                />
                <GenreBox
                  img="https://an2-img.amz.wtchn.net/image/v2/eEtmM07lXFYer0NKD_mOYw.png?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaVlXTnJaM0p2ZFc1a0lqcDdJbklpT2pJMU5Td2laeUk2TWpVMUxDSmlJam95TlRWOUxDSm9Jam95TnpBc0luQWlPaUl2ZGpJdmMzUnZjbVV2YzNablgzUmxiWEJzWVhSbEx6RTJOVGMxTURJeU56STVPREEzTWpFM01ETWlMQ0p6ZG1kZmNHRnlZVzBpT25zaVkyOXNiM0l4SWpvaUl6UTJNVVk1T1NKOUxDSjNJam8zTWpCOS45N0NWclFRbExMcXA4eVBtZFdrWGFEb3UxS0Y2emMtRjFFSk5HMmE0b1Bn"
                  title="삼각관계"
                />
                <GenreBox
                  img="https://an2-img.amz.wtchn.net/image/v2/eEtmM07lXFYer0NKD_mOYw.png?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaVlXTnJaM0p2ZFc1a0lqcDdJbklpT2pJMU5Td2laeUk2TWpVMUxDSmlJam95TlRWOUxDSm9Jam95TnpBc0luQWlPaUl2ZGpJdmMzUnZjbVV2YzNablgzUmxiWEJzWVhSbEx6RTJOVGMxTURJeU56STVPREEzTWpFM01ETWlMQ0p6ZG1kZmNHRnlZVzBpT25zaVkyOXNiM0l4SWpvaUl6UTJNVVk1T1NKOUxDSjNJam8zTWpCOS45N0NWclFRbExMcXA4eVBtZFdrWGFEb3UxS0Y2emMtRjFFSk5HMmE0b1Bn"
                  title="액션"
                />
              </ul>
            </div>
          </div>
          <div className="container-slider">
            <ContentsTitle title="웹툰 장르" />
            <div className="container-slide_contents">
              <ul className="contents-genre">
                <GenreBox
                  img="https://an2-img.amz.wtchn.net/image/v2/eEtmM07lXFYer0NKD_mOYw.png?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaVlXTnJaM0p2ZFc1a0lqcDdJbklpT2pJMU5Td2laeUk2TWpVMUxDSmlJam95TlRWOUxDSm9Jam95TnpBc0luQWlPaUl2ZGpJdmMzUnZjbVV2YzNablgzUmxiWEJzWVhSbEx6RTJOVGMxTURJeU56STVPREEzTWpFM01ETWlMQ0p6ZG1kZmNHRnlZVzBpT25zaVkyOXNiM0l4SWpvaUl6UTJNVVk1T1NKOUxDSjNJam8zTWpCOS45N0NWclFRbExMcXA4eVBtZFdrWGFEb3UxS0Y2emMtRjFFSk5HMmE0b1Bn"
                  title="판타지"
                />
                <GenreBox
                  img="https://an2-img.amz.wtchn.net/image/v2/eEtmM07lXFYer0NKD_mOYw.png?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaVlXTnJaM0p2ZFc1a0lqcDdJbklpT2pJMU5Td2laeUk2TWpVMUxDSmlJam95TlRWOUxDSm9Jam95TnpBc0luQWlPaUl2ZGpJdmMzUnZjbVV2YzNablgzUmxiWEJzWVhSbEx6RTJOVGMxTURJeU56STVPREEzTWpFM01ETWlMQ0p6ZG1kZmNHRnlZVzBpT25zaVkyOXNiM0l4SWpvaUl6UTJNVVk1T1NKOUxDSjNJam8zTWpCOS45N0NWclFRbExMcXA4eVBtZFdrWGFEb3UxS0Y2emMtRjFFSk5HMmE0b1Bn"
                  title="코미디"
                />
                <GenreBox
                  img="https://an2-img.amz.wtchn.net/image/v2/eEtmM07lXFYer0NKD_mOYw.png?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaVlXTnJaM0p2ZFc1a0lqcDdJbklpT2pJMU5Td2laeUk2TWpVMUxDSmlJam95TlRWOUxDSm9Jam95TnpBc0luQWlPaUl2ZGpJdmMzUnZjbVV2YzNablgzUmxiWEJzWVhSbEx6RTJOVGMxTURJeU56STVPREEzTWpFM01ETWlMQ0p6ZG1kZmNHRnlZVzBpT25zaVkyOXNiM0l4SWpvaUl6UTJNVVk1T1NKOUxDSjNJam8zTWpCOS45N0NWclFRbExMcXA4eVBtZFdrWGFEb3UxS0Y2emMtRjFFSk5HMmE0b1Bn"
                  title="짝사랑"
                />
                <GenreBox
                  img="https://an2-img.amz.wtchn.net/image/v2/eEtmM07lXFYer0NKD_mOYw.png?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaVlXTnJaM0p2ZFc1a0lqcDdJbklpT2pJMU5Td2laeUk2TWpVMUxDSmlJam95TlRWOUxDSm9Jam95TnpBc0luQWlPaUl2ZGpJdmMzUnZjbVV2YzNablgzUmxiWEJzWVhSbEx6RTJOVGMxTURJeU56STVPREEzTWpFM01ETWlMQ0p6ZG1kZmNHRnlZVzBpT25zaVkyOXNiM0l4SWpvaUl6UTJNVVk1T1NKOUxDSjNJam8zTWpCOS45N0NWclFRbExMcXA4eVBtZFdrWGFEb3UxS0Y2emMtRjFFSk5HMmE0b1Bn"
                  title="삼각관계"
                />
                <GenreBox
                  img="https://an2-img.amz.wtchn.net/image/v2/eEtmM07lXFYer0NKD_mOYw.png?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaVlXTnJaM0p2ZFc1a0lqcDdJbklpT2pJMU5Td2laeUk2TWpVMUxDSmlJam95TlRWOUxDSm9Jam95TnpBc0luQWlPaUl2ZGpJdmMzUnZjbVV2YzNablgzUmxiWEJzWVhSbEx6RTJOVGMxTURJeU56STVPREEzTWpFM01ETWlMQ0p6ZG1kZmNHRnlZVzBpT25zaVkyOXNiM0l4SWpvaUl6UTJNVVk1T1NKOUxDSjNJam8zTWpCOS45N0NWclFRbExMcXA4eVBtZFdrWGFEb3UxS0Y2emMtRjFFSk5HMmE0b1Bn"
                  title="액션"
                />
              </ul>
            </div>
          </div>
          <div className="container-slider">
            <ContentsTitle title="웹툰 장르" />
            <div className="container-slide_contents">
              <ul className="contents-genre">
                <GenreBox
                  img="https://an2-img.amz.wtchn.net/image/v2/eEtmM07lXFYer0NKD_mOYw.png?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaVlXTnJaM0p2ZFc1a0lqcDdJbklpT2pJMU5Td2laeUk2TWpVMUxDSmlJam95TlRWOUxDSm9Jam95TnpBc0luQWlPaUl2ZGpJdmMzUnZjbVV2YzNablgzUmxiWEJzWVhSbEx6RTJOVGMxTURJeU56STVPREEzTWpFM01ETWlMQ0p6ZG1kZmNHRnlZVzBpT25zaVkyOXNiM0l4SWpvaUl6UTJNVVk1T1NKOUxDSjNJam8zTWpCOS45N0NWclFRbExMcXA4eVBtZFdrWGFEb3UxS0Y2emMtRjFFSk5HMmE0b1Bn"
                  title="판타지"
                />
                <GenreBox
                  img="https://an2-img.amz.wtchn.net/image/v2/eEtmM07lXFYer0NKD_mOYw.png?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaVlXTnJaM0p2ZFc1a0lqcDdJbklpT2pJMU5Td2laeUk2TWpVMUxDSmlJam95TlRWOUxDSm9Jam95TnpBc0luQWlPaUl2ZGpJdmMzUnZjbVV2YzNablgzUmxiWEJzWVhSbEx6RTJOVGMxTURJeU56STVPREEzTWpFM01ETWlMQ0p6ZG1kZmNHRnlZVzBpT25zaVkyOXNiM0l4SWpvaUl6UTJNVVk1T1NKOUxDSjNJam8zTWpCOS45N0NWclFRbExMcXA4eVBtZFdrWGFEb3UxS0Y2emMtRjFFSk5HMmE0b1Bn"
                  title="코미디"
                />
                <GenreBox
                  img="https://an2-img.amz.wtchn.net/image/v2/eEtmM07lXFYer0NKD_mOYw.png?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaVlXTnJaM0p2ZFc1a0lqcDdJbklpT2pJMU5Td2laeUk2TWpVMUxDSmlJam95TlRWOUxDSm9Jam95TnpBc0luQWlPaUl2ZGpJdmMzUnZjbVV2YzNablgzUmxiWEJzWVhSbEx6RTJOVGMxTURJeU56STVPREEzTWpFM01ETWlMQ0p6ZG1kZmNHRnlZVzBpT25zaVkyOXNiM0l4SWpvaUl6UTJNVVk1T1NKOUxDSjNJam8zTWpCOS45N0NWclFRbExMcXA4eVBtZFdrWGFEb3UxS0Y2emMtRjFFSk5HMmE0b1Bn"
                  title="짝사랑"
                />
                <GenreBox
                  img="https://an2-img.amz.wtchn.net/image/v2/eEtmM07lXFYer0NKD_mOYw.png?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaVlXTnJaM0p2ZFc1a0lqcDdJbklpT2pJMU5Td2laeUk2TWpVMUxDSmlJam95TlRWOUxDSm9Jam95TnpBc0luQWlPaUl2ZGpJdmMzUnZjbVV2YzNablgzUmxiWEJzWVhSbEx6RTJOVGMxTURJeU56STVPREEzTWpFM01ETWlMQ0p6ZG1kZmNHRnlZVzBpT25zaVkyOXNiM0l4SWpvaUl6UTJNVVk1T1NKOUxDSjNJam8zTWpCOS45N0NWclFRbExMcXA4eVBtZFdrWGFEb3UxS0Y2emMtRjFFSk5HMmE0b1Bn"
                  title="삼각관계"
                />
                <GenreBox
                  img="https://an2-img.amz.wtchn.net/image/v2/eEtmM07lXFYer0NKD_mOYw.png?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaVlXTnJaM0p2ZFc1a0lqcDdJbklpT2pJMU5Td2laeUk2TWpVMUxDSmlJam95TlRWOUxDSm9Jam95TnpBc0luQWlPaUl2ZGpJdmMzUnZjbVV2YzNablgzUmxiWEJzWVhSbEx6RTJOVGMxTURJeU56STVPREEzTWpFM01ETWlMQ0p6ZG1kZmNHRnlZVzBpT25zaVkyOXNiM0l4SWpvaUl6UTJNVVk1T1NKOUxDSjNJam8zTWpCOS45N0NWclFRbExMcXA4eVBtZFdrWGFEb3UxS0Y2emMtRjFFSk5HMmE0b1Bn"
                  title="액션"
                />
              </ul>
            </div>
          </div>
          <div className="container-slider"></div>
          <div className="container-slider"></div>
        </div>
      </SSearchPage>
    </GlobalLayout>
  );
};

export default SearchPage;

const SSearchPage = styled.div`
  .container {
    padding: 32px 0px 0px;

    .container-slider {
      margin: 0 auto;
      max-width: 1680px;
      padding-left: 40px;
      padding-bottom: 32px;
      padding-right: 40px;
      overflow: hidden;

      .container-slide_contents {
        position: relative;

        .contents {
          position: relative;
          z-index: 0;
          white-space: nowrap;
          margin: 0px -8px;
        }

        .btn-left {
          color: rgb(186, 186, 193);
          padding: 0px;
          border: 0px;
          outline: none;
          appearance: none;
          background: linear-gradient(
            90deg,
            rgb(0, 0, 0) 70%,
            rgba(0, 0, 0, 0) 100%
          );
          position: absolute;
          top: 0px;
          bottom: 0px;
          left: -10px;
          z-index: 2;
          width: 40px;
          height: 100%;

          cursor: pointer;

          span {
            display: flex;
            align-items: center;
            position: relative;
            width: 100%;
            height: 100%;
            color: white;
            font-size: 30px;
          }
        }
        .btn-right {
          color: rgb(186, 186, 193);
          padding: 0px;
          border: 0px;
          outline: none;
          appearance: none;
          background: linear-gradient(
            90deg,
            rgb(0, 0, 0) 70%,
            rgba(0, 0, 0, 0) 100%
          );
          position: absolute;
          top: 0px;
          bottom: 0px;
          right: -20px;
          z-index: 2;
          width: 40px;
          height: 100%;
          cursor: pointer;

          span {
            display: flex;
            align-items: center;
            position: relative;
            width: 100%;
            height: 100%;
            color: white;
            font-size: 30px;
          }
        }
        .contents-genre {
          position: relative;
          z-index: 0;
          white-space: nowrap;
          margin: 0px -6px;
        }
      }
    }
  }
`;
