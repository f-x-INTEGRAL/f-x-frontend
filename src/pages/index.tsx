import React, { NextPage } from 'next';
import { useEffect, useRef } from 'react';
import { Layout, MainTitle } from '@/components';
import { motion } from 'framer-motion';

import * as S from './styled';
import MainLogo from '@/assets/images/mainLogo.png';
import BandImage1 from '@/assets/images/bandImage1.png';
import BandImage2 from '@/assets/images/bandImage2.png';
import BandImage3 from '@/assets/images/bandImage3.png';
import BandImage4 from '@/assets/images/bandImage4.png';
import BandImage5 from '@/assets/images/bandImage5.png';
import { images } from '@/assets/images';
import Image from 'next/image';

const HomePage: NextPage = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wheelHandler = (e: WheelEvent) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = scrollRef.current;
      const pageHeight = window.innerHeight;

      if (deltaY > 0) {
        if (scrollTop >= 0 && scrollTop < 800) {
          scrollRef.current?.scrollTo({
            top: 800,
            left: 0,
            behavior: 'smooth',
          });
        } else if (scrollTop >= 800 && scrollTop < 788 * 2) {
          scrollRef.current?.scrollTo({
            top: 788 * 2,
            left: 0,
            behavior: 'smooth',
          });
        } else if (scrollTop >= 788 && scrollTop < 800 * 3) {
          scrollRef.current?.scrollTo({
            top: 800 * 3,
            left: 0,
            behavior: 'smooth',
          });
        } else if (scrollTop >= 800 && scrollTop < 855 * 4) {
          scrollRef.current?.scrollTo({
            top: 855 * 4,
            left: 0,
            behavior: 'smooth',
          });
        } else if (scrollTop >= 855 && scrollTop < 900 * 5) {
          scrollRef.current?.scrollTo({
            top: 900 * 5,
            left: 0,
            behavior: 'smooth',
          });
        }
      } else {
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          scrollRef.current?.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          scrollRef.current?.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
          scrollRef.current?.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
        } else {
          scrollRef.current?.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: 'smooth',
          });
        }
      }
    };

    const scrollRefCurrent = scrollRef.current;
    scrollRefCurrent?.addEventListener('wheel', wheelHandler);
    return () => {
      scrollRefCurrent?.removeEventListener('wheel', wheelHandler);
    };
  }, []);
  return (
    <S.ScrollContainer ref={scrollRef}>
      <Layout>
        <S.MainFirstContainer>
          <S.MainLogoImage src={MainLogo} alt="Intergal Logo" />
          <S.MainMiniTitle>INTEGRAL</S.MainMiniTitle>
          <S.MainSubTitle>공연기획</S.MainSubTitle>
          <S.MainDescription>
            2019년, 다른 밴드 공연의 오프닝밴드로 무대를 마지막으로 지금까지
            한번도 무대에 서지 못하였습니다. <br /> 다들 생업과 학업에 치여
            바쁘게 살아서 ‘공연’을 생각할 겨를이 없었습니다. <br /> 그러던중
            올해 초에 한 멤버가 '우리 공연하자' 라는 이야기를 꺼냈습니다. <br />
            그렇게 우리는 4년간의 침묵을 깨고 공연을 하기로 마음먹었습니다.
          </S.MainDescription>
          <S.MainLineContainer>
            <S.MainLineText>Show Plan</S.MainLineText>
            <S.MainLine />
            <S.MainLineText>Title</S.MainLineText>
          </S.MainLineContainer>
          <S.TitleContainer>
            <S.TitleTitle>INTEGRAL</S.TitleTitle>
            <S.TitleDescription>
              <strong>INTEGRAL</strong>은 한글로 ‘적분’입니다.
              <br /> 수학에서 적분은 ‘함수의 그래프와 그 구간으로 둘러싸인
              도형의 넓이’를 뜻합니다.
              <br /> 한문으로는 ‘쌓을 적’자와 ‘나눌 분’자를 씁니다.
              <br /> 그 이유는 적분이 구간을 잘게 나눴을 때 나오는 직사각형 여러
              개를 쌓아서 넓이를 구하는 과정이기 때문입니다.
              <br /> 2017년부터 2023년까지 저희가 함께 쌓아 온 음악에 대한
              열정을 여러분께 보여드리고자
              <br /> 공연 제목을 <strong>INTEGRAL</strong>로 정했습니다.
            </S.TitleDescription>
          </S.TitleContainer>
          <S.MainLineContainer style={{ padding: '200px 0 10px 0' }}>
            <S.MainLineText>Title</S.MainLineText>
            <S.MainLine />
            <S.MainLineText>Team Story</S.MainLineText>
          </S.MainLineContainer>
        </S.MainFirstContainer>
      </Layout>
      <S.MainSecondContainer>
        <Layout>
          <MainTitle title="Team Story" />
          <S.TitleDescription style={{ padding: '50px 0' }}>
            Band f(x)는 홍익대학교 수학교육과에서 음악을 사랑하는 사람들이 만든
            밴드 모임입니다.
            <br /> 그 중에서도 공연을 진행하는 팀은 새로운 이름을 정합니다. 저희
            팀의 이름은 ‘나봄’입니다.
            <br /> 비유를 들자면 NCT-Dream같은 유닛팀이라고 생각할 수 있을 것
            같네요 ㅎㅎ
            <br /> 저희 나봄은 2017년의 첫 공연을 시작으로 지금까지 깊은
            유대관계를 유지하며 음악에 대한 열정을 쌓아가고 있습니다.
          </S.TitleDescription>
          <S.ImageContainer>
            <S.MainImageBox src={BandImage1} alt="BandImage1" />
            <S.MainImageBox src={BandImage2} alt="BandImage2" />
            <S.MainImageBox src={BandImage3} alt="BandImage3" />
            <S.MainImageBox src={BandImage4} alt="BandImage4" />
            <S.MainImageBox src={BandImage5} alt="BandImage5" />
          </S.ImageContainer>
          <S.MainLineContainer>
            <S.MainLineText>Team Story</S.MainLineText>
            <S.MainLine />
            <S.MainLineText>History</S.MainLineText>
          </S.MainLineContainer>
          <MainTitle title="History" white />
          <S.HistoryContainer>
            <S.HistoryBox>
              <S.HistoryTitle>2017.04</S.HistoryTitle>
              <S.HistoryList>
                <S.HistoryListItem>'나봄' 첫 공연</S.HistoryListItem>
              </S.HistoryList>
              <S.HistoryTitle>2017.09</S.HistoryTitle>
              <S.HistoryList>
                <S.HistoryListItem>'나봄' 두번째 공연</S.HistoryListItem>
              </S.HistoryList>
              <S.HistoryTitle>2019.11</S.HistoryTitle>
              <S.HistoryList>
                <S.HistoryListItem>f(x) 공연 '나봄' 찬조</S.HistoryListItem>
              </S.HistoryList>
              <S.HistoryTitle>2023.05.13</S.HistoryTitle>
              <S.HistoryList>
                <S.HistoryListItem>f(x) INTEGRAL 단독 공연</S.HistoryListItem>
              </S.HistoryList>
              <S.HistoryTitle></S.HistoryTitle>
            </S.HistoryBox>
          </S.HistoryContainer>
          <S.MainLineContainer style={{ padding: '200px 0 0 0' }}>
            <S.MainLineText>History</S.MainLineText>
            <S.MainLine />
            <S.MainLineText>Team Member</S.MainLineText>
          </S.MainLineContainer>
        </Layout>
      </S.MainSecondContainer>
      <Layout>
        <S.MainThirdContainer>
          <MainTitle title="Team Member" />
          <S.FramerWrapper>
            <S.Carousel>
              <S.InnerCarousel
                animate={{ scale: [1, 1, 1, 1, 1] }}
                drag="x"
                dragConstraints={{ right: 0, left: -3500 }}
                dragTransition={{ bounceStiffness: 100, bounceDamping: 5 }}
              >
                {images.map((image, index) => {
                  return (
                    <S.CarouselItem
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                      key={index}
                    >
                      <S.CarouselImage src={image.image} alt="image" />
                      <S.CarouselInfo>{image.name}</S.CarouselInfo>
                    </S.CarouselItem>
                  );
                })}
              </S.InnerCarousel>
            </S.Carousel>
          </S.FramerWrapper>
        </S.MainThirdContainer>
      </Layout>
    </S.ScrollContainer>
  );
};

export default HomePage;
