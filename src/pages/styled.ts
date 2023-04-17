import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const ScrollContainer = styled.div`
  height: 100vh;
  overflow-y: auto;
`;

export const MainFirstContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 280px 0 0 0;
`;

export const MainLogoImage = styled(Image)`
  width: 210px;
  height: 180px;
`;

export const MainMiniTitle = styled.h1`
  letter-spacing: 0.3em;
  font-size: 2.5rem;
  color: #62a1f1;
  padding: 0 0 20px 20px;
`;

export const MainSubTitle = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  padding: 0 0 20px 0;
`;

export const MainDescription = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #abaaaa;
`;

export const MainLineContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 200px 0;
`;

export const MainLineText = styled.p`
  font-size: 1rem;
  color: #abaaaa;
`;

export const MainLine = styled.div`
  background-color: #abaaaa;
  height: 2px;
  width: 85%;
`;

export const TitleContainer = styled.div`
  width: 100%;
  flex-direction: column;
  margin-left: 30px;

  padding: 92px 0 92px 0;
`;

export const TitleTitle = styled.h1`
  letter-spacing: 0.25em;
  font-size: 60px;
  color: #62a1f1;
  padding: 0 0 15px 0;
`;

export const TitleDescription = styled.p`
  font-size: 20px;
`;

export const MainSecondContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  background: linear-gradient(
    white,
    #62a1f1,
    #0f78ff,
    #0f78ff,
    #004193,
    #0f78ff,
    #0f78ff,
    #62a1f1,
    white
  );
`;

export const ImageContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const MainImageBox = styled(Image)`
  width: 400px
  height: 300px;

  margin: 15px 15px 15px 15px;
  border: 1px solid #fff;
  border-radius: 15px;
`;

export const HistoryContainer = styled.div`
  width: 100%;
  padding: 100px 0 0 0;
  text-align: start;
  display: flex;
`;

export const HistoryBox = styled.div`
  position: relative;
  padding: 0 0 0 40px;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 8px;
    height: 100%;
    border-left: 2px solid white;
  }

  :first-child:before {
    top: 10px;
    height: calc(100% - 10px);
  }
`;

export const HistoryTitle = styled.p`
  position: relative;
  font-size: 16px;
  color: #abaaaa;
  line-height: 1;

  :before {
    content: '';
    position: absolute;
    top: 50%;
    left: -40px;
    width: 17px;
    height: 17px;
    border-radius: 100%;
    transform: translateY(-50%);
    background-color: white;
    border: 5px solid white;
    box-sizing: border-box;
  }
`;

export const HistoryList = styled.ol`
  list-style: none;
  padding: 0 0 74px;
`;

export const HistoryListItem = styled.li`
  font-size: 16px;
  color: white;
  list-style: none;
  line-height: 30px;
`;

export const MainThirdContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FramerWrapper = styled.div`
  width: 100%;
  padding: 100px 0 0 0;
`;

export const Carousel = styled(motion.div)`
  cursor: grab;
  overflow: hidden;
  height: 30rem;
`;

export const InnerCarousel = styled(motion.div)`
  display: flex;
  align-items: center;
  height: 30rem;
`;

export const CarouselItem = styled(motion.div)`
  padding: 2rem;
  margin: 0 1rem;
  width: 300px;
  height: 400px;

  background-color: #62a1f1;
  border-radius: 10px;
  border-right: 1px solid #fff;
`;

export const CarouselImage = styled(Image)`
  border-radius: 1rem;
  pointer-events: none;
`;

export const CarouselInfo = styled.p`
  display: none;

  ${CarouselItem}:hover & {
    display: block;
    font-size: 1.5rem;
    position: absolute;
    transition: 0.5s;
    top: 30px;
  }
`;
