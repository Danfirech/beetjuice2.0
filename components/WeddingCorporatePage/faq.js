import React from "react";
import styled from "styled-components";
import "../../pages/_document";

// FAQ SECTION  //

const FaqSection = styled.div`
  height: 1200px;
  width: 100vw;
  display: flex;
  background-color: #e5e4e2;
  margin-top: -190px;
  height: 1600px;
  @media (max-width: 1068px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2500px;
    padding-top: 60px;
  }
  @media (max-width: 868px) {
    height: 1700px;
    margin-top: 200px;
  }
`;

const QuestionsPageContainer = styled.div`
  height: 1100px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 170px;
  @media (max-width: 1068px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1900px;
    padding-top: 60px;
  }
  @media (max-width: 868px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    padding-top: 60px;
    padding-top: 0px;
  }
`;

const QuestionsBox = styled.div`
  background-color: black;
  width: 1200px;
  height: 100px;
  background-color: white;
  margin-top: 40px;
  align-items: center;
  justify-content: center;
  @media (max-width: 1068px) {
    width: 100%;
    height: 400px;
  }
  @media (max-width: 868px) {
    width: 350px;
    height: 200px;
  }
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  width: 1200px;
  font-size: 20px;
  /* background-color: #fefefe; */
  background-color: #d1cfcc;
  @media (max-width: 1068px) {
    width: 100%;
    height: 100px;
    font-size: 12px;
  }
  @media (max-width: 868px) {
    width: 350px;
    height: 70px;
    font-size: 10px;
  }
  .boxBorderTop {
    font-family: "Bebas Neue", cursive;
  }
  .boxBorderBottom {
    font-family: "Bebas Neue", cursive;
  }
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  width: 1200px;
  font-size: 20px;
  /* background-color: #fefefe; */
  background-color: white;
  color: gray;
  font-family: "Roboto", sans-serif;
  @media (max-width: 1068px) {
    width: 100%;
    height: 50px;
    font-size: 12px;
  }
  @media (max-width: 868px) {
    width: 350px;
    height: 100px;
    font-size: 12px;
  }
`;

const Sections = styled.div`
  height: 220px;
  width: 100vw;
  padding-top: 10px;
  background-color: #e5e4e2;
  z-index: 100;
  font-size: 65px;
  font-family: "Bebas Neue", cursive;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 868px) {
    font-size: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 0px;
    padding-left: 0px;
    height: 120px;
  }
`;

const FAQ = () => {
  return (
    <>
      <FaqSection>
        <QuestionsPageContainer>
          <Sections>FAQ</Sections>
          <QuestionsBox>
            <Top>
              <h1
                className="boxBorderTop"
                style={{
                  paddingRight: 20,
                  paddingLeft: 15,
                  color: "black",
                }}
              >
                Q.
              </h1>
              <h4
                style={{
                  paddingTop: 10,
                  paddingLeft: 10,
                }}
              >
                What is needed from you once the B33t Ju1c3 band is booked?
              </h4>
            </Top>
            <Bottom>
              <h1
                className="boxBorderBottom"
                style={{
                  paddingRight: 20,
                  paddingLeft: 15,
                }}
              >
                A.
              </h1>
              <h4
                style={{
                  paddingTop: 10,
                }}
              >
                We ask for a 20% down payment upon booking. After that logistics
                will be taken care of between your wedding planner and our
                liasion. The final 80% of payment is due 2 weeks out from your
                booked date.
              </h4>
            </Bottom>
          </QuestionsBox>
          <QuestionsBox>
            <Top>
              <h1
                className="boxBorderTop"
                style={{
                  paddingRight: 20,
                  paddingLeft: 15,
                  color: "black",
                }}
              >
                Q.
              </h1>
              <h4
                style={{
                  paddingTop: 10,
                  paddingLeft: 10,
                }}
              >
                How is pricing determined?
              </h4>
            </Top>
            <Bottom>
              <h1
                className="boxBorderBottom"
                style={{
                  paddingRight: 20,
                  paddingLeft: 15,
                }}
              >
                A.
              </h1>
              <h4
                style={{
                  paddingTop: 10,
                }}
              >
                We have a base rate for our packeges. Aditional costs are added
                based on customization and your needs. Location and timing also
                dictates our prices. We know everyone has a budget and we can
                customize our services to match yours.
              </h4>
            </Bottom>
          </QuestionsBox>
          <QuestionsBox>
            <Top>
              <h1
                className="boxBorderTop"
                style={{
                  paddingRight: 20,
                  paddingLeft: 15,
                  color: "black",
                }}
              >
                Q.
              </h1>
              <h4
                style={{
                  paddingTop: 10,
                  paddingLeft: 10,
                }}
              >
                What do our musicians wear?
              </h4>
            </Top>
            <Bottom>
              <h1
                className="boxBorderBottom"
                style={{
                  paddingRight: 20,
                  paddingLeft: 15,
                }}
              >
                A.
              </h1>
              <h4
                style={{
                  paddingTop: 10,
                }}
              >
                Our band can match your theme.
              </h4>
            </Bottom>
          </QuestionsBox>
          <QuestionsBox>
            <Top>
              <h1
                className="boxBorderTop"
                style={{
                  paddingRight: 20,
                  paddingLeft: 15,
                  color: "black",
                }}
              >
                Q.
              </h1>
              <h4
                style={{
                  paddingTop: 10,
                  paddingLeft: 10,
                }}
              >
                Will your band learn knew songs for us?
              </h4>
            </Top>
            <Bottom>
              <h1
                className="boxBorderBottom"
                style={{
                  paddingRight: 20,
                  paddingLeft: 15,
                }}
              >
                A.
              </h1>
              <h4
                style={{
                  paddingTop: 10,
                }}
              >
                While we do have a curated setlist of songs we know you will
                enjoy, we do learn new songs!
              </h4>
            </Bottom>
          </QuestionsBox>
          <QuestionsBox>
            <Top>
              <h1
                className="boxBorderTop"
                style={{
                  paddingRight: 20,
                  paddingLeft: 15,
                  color: "black",
                }}
              >
                Q.
              </h1>
              <h4
                style={{
                  paddingTop: 10,
                  paddingLeft: 10,
                }}
              >
                Is the sound system included?
              </h4>
            </Top>
            <Bottom>
              <h1
                className="boxBorderBottom"
                style={{
                  paddingRight: 20,
                  paddingLeft: 15,
                }}
              >
                A.
              </h1>
              <h4
                style={{
                  paddingTop: 10,
                }}
              >
                Yes! Our team will set up all sound needs.
              </h4>
            </Bottom>
          </QuestionsBox>
          {/* <QuestionsBox>
            <Top>
              <h1
                className="boxBorderTop"
                style={{
                  paddingRight: 20,
                  paddingLeft: 15,
                  color: "black",
                }}
              >
                Q.
              </h1>
              <h4
                style={{
                  paddingTop: 10,
                  paddingLeft: 10,
                }}
              >
                A.
              </h4>
            </Top>
            <Bottom>
              <h1
                className="boxBorderBottom"
                style={{
                  paddingRight: 20,
                  paddingLeft: 15,
                }}
              >
                A.
              </h1>
              <h4
                style={{
                  paddingTop: 10,
                }}
              >
                Please Answer your first question here. It may be any length you
                chose?
              </h4>
            </Bottom>
          </QuestionsBox> */}
        </QuestionsPageContainer>
      </FaqSection>
      ;
    </>
  );
};

export default FAQ;
