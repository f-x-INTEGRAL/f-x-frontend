import React, { NextPage } from 'next';
import { useEffect, useRef } from 'react';
import { Layout, MainTitle } from '@/components';
import { motion } from 'framer-motion';
import Image from 'next/image';

import MainLogo from '@/assets/images/mainLogo.png';
import BandImage1 from '@/assets/images/bandImage1.png';
import BandImage2 from '@/assets/images/bandImage2.png';
import BandImage3 from '@/assets/images/bandImage3.png';
import BandImage4 from '@/assets/images/bandImage4.png';
import BandImage5 from '@/assets/images/bandImage5.png';
import Piano1 from '@/assets/images/piano2.png';
import Piano2 from '@/assets/images/piano1.png';
import Manager from '@/assets/images/manager.png';
import Teacher from '@/assets/images/teacher.png';
import Drum from '@/assets/images/drum.png';
import Bass from '@/assets/images/bass.png';
import Guitar1 from '@/assets/images/guitar1.png';
import Guitar2 from '@/assets/images/guitar2.png';
import Mike from '@/assets/images/mike.png';

import styled from '@emotion/styled';

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

export const SVGContainer = styled.div`
  position: relative;
`;

export const SVGGuitarContainer = styled.div`
  z-index: 2;
  position: absolute;
  top: -150px;
  right: 150px;
`;

export const SVGDrumContainer = styled.div`
  z-index: 2;
  position: absolute;
  top: -150px;
  left: 150px;
`;

export const MainLogoImage = styled(Image)`
  width: 210px;
  height: 180px;
`;

export const MainMiniTitle = styled.h1`
  z-index: 5;
  letter-spacing: 0.3em;
  font-size: 2.5rem;
  color: #62a1f1;
  padding: 0 0 20px 20px;
`;

export const MainSubTitle = styled.p`
  z-index: 5;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 0 0 20px 0;
`;

export const MainDescription = styled.p`
  z-index: 5;
  text-align: center;
  font-size: 1.2rem;
  color: #757575;
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

export const MemberContainer = styled.div`
  width: 75%;
  padding: 100px 0 0 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const MemberBox = styled.div`
  width: 230px;
  height: 280px;
  background-color: ${(props) => props.color};
  border: 3px solid ${(props) => props.color};
  border-radius: 15px;
  opacity: 0.8;

  padding: 20px 0 0 20px;
  margin-bottom: 25px;

  &:hover {
    opacity: 1;
  }
`;

export const MemberImage = styled(Image)`
  display: none;
  position: relative;
  bottom: 60px;
  right: 10px;

  ${MemberBox}:hover & {
    display: block;
  }
`;

const HomePage: NextPage = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wheelHandler = (e: WheelEvent) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = scrollRef.current || { scrollTop: 0 };
      const pageHeight = window.innerHeight;

      if (deltaY > 0) {
        if (scrollTop >= 0 && scrollTop < 880) {
          console.log('1 d');
          scrollRef.current?.scrollTo({
            top: 880,
            left: 0,
            behavior: 'smooth',
          });
        } else if (scrollTop >= 850 && scrollTop < 880 * 2) {
          console.log('2 d');
          scrollRef.current?.scrollTo({
            top: 880 * 2,
            left: 0,
            behavior: 'smooth',
          });
        } else if (scrollTop >= 788 && scrollTop < 860 * 3) {
          console.log('3 d');
          scrollRef.current?.scrollTo({
            top: 860 * 3,
            left: 0,
            behavior: 'smooth',
          });
        } else if (scrollTop >= 800 && scrollTop < 900 * 4) {
          console.log('4 d');
          scrollRef.current?.scrollTo({
            top: 900 * 4,
            left: 0,
            behavior: 'smooth',
          });
        } else if (scrollTop >= 855 && scrollTop < 940 * 5) {
          console.log('5 d');
          scrollRef.current?.scrollTo({
            top: 940 * 5,
            left: 0,
            behavior: 'smooth',
          });
        } else if (scrollTop >= 855 && scrollTop < 940 * 6) {
          console.log('6 d');
          scrollRef.current?.scrollTo({
            top: 940 * 6,
            left: 0,
            behavior: 'smooth',
          });
        } else if (scrollTop >= 855 && scrollTop < 1050 * 7) {
          console.log('7 d');
          scrollRef.current?.scrollTo({
            top: 1050 * 7,
            left: 0,
            behavior: 'smooth',
          });
        }
      } else {
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          console.log('1 u');
          scrollRef.current?.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
        } else if (scrollTop >= pageHeight && scrollTop <= 1760) {
          console.log('2 u');
          scrollRef.current?.scrollTo({
            top: 880,
            left: 0,
            behavior: 'smooth',
          });
        } else if (scrollTop >= 1760 && scrollTop <= 3520) {
          console.log('3 u');
          scrollRef.current?.scrollTo({
            top: 1760,
            left: 0,
            behavior: 'smooth',
          });
        } else if (scrollTop >= 3520 && scrollTop <= 4400) {
          console.log('4 u');
          scrollRef.current?.scrollTo({
            top: 1760,
            left: 0,
            behavior: 'smooth',
          });
        } else if (scrollTop >= 4400 && scrollTop <= 4700) {
          console.log('5 u');
          scrollRef.current?.scrollTo({
            top: 3600,
            left: 0,
            behavior: 'smooth',
          });
        } else if (scrollTop >= 4430 && scrollTop <= 5640) {
          console.log('6 u');
          scrollRef.current?.scrollTo({
            top: 4700,
            left: 0,
            behavior: 'smooth',
          });
        } else if (scrollTop >= 5640 && scrollTop <= 6750) {
          console.log('7 u');
          scrollRef.current?.scrollTo({
            top: 5520,
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

  const variants = {
    start: { pathLength: 0, fill: 'rgba(255, 255, 255,0)' },
    end: { pathLength: 1, fill: 'rgba(255,255,255,1)' },
  };
  return (
    <ScrollContainer ref={scrollRef}>
      <Layout>
        <MainFirstContainer>
          <SVGContainer>
            <SVGGuitarContainer style={{ width: '700px' }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 465.072 465.072"
              >
                <motion.path
                  style={{ stroke: '#cfcfcf', strokeWidth: 2 }}
                  variants={variants}
                  initial="start"
                  animate="end"
                  transition={{
                    default: { duration: 13 },
                    fill: { duration: 1, delay: 1.1 },
                  }}
                  d="M464.423,53.43c0.201-0.866,4.711-21.407-13.333-39.452C433.045-4.066,412.505,0.441,411.638,0.645   c-1.366,0.316-2.616,1.011-3.608,2.002l-2.88,2.88l-1.768-1.768c-2.93-2.928-7.677-2.929-10.606,0.001   c-2.929,2.929-2.929,7.678,0.001,10.606l1.767,1.767l-7.986,7.986l-1.768-1.768c-2.93-2.928-7.677-2.929-10.606,0.001   c-2.929,2.929-2.929,7.678,0.001,10.606l1.767,1.767l-7.986,7.986l-1.768-1.768c-2.93-2.928-7.678-2.928-10.607,0   c-2.929,2.93-2.929,7.678,0,10.607l3.249,3.249l-11.219,22.438l-80.766,77.747c-16.543-12.764-49.225-31.294-83.268-13.071   c-22.692,12.115-28.734,27.553-34.064,41.173c-4.247,10.853-7.915,20.225-19.394,28.731c-5.339,3.952-15.196,5.917-26.61,8.192   c-28.515,5.684-67.567,13.468-93.229,60.904c-30.572,56.524,14.76,111.313,35.693,132.269l5.939,5.929   c15.912,15.911,51.405,45.96,92.376,45.96c12.89-0.001,26.323-2.976,39.858-10.3c47.438-25.661,55.223-64.704,60.906-93.212   c2.275-11.411,4.24-21.266,8.191-26.603c8.504-11.482,17.878-15.152,28.732-19.401c13.623-5.333,29.064-11.378,41.169-34.063   c18.224-34.048-0.311-66.731-13.078-83.274l77.735-80.754l22.461-11.231l3.244,3.243c1.465,1.464,3.384,2.196,5.303,2.196   s3.839-0.732,5.304-2.197c2.929-2.929,2.929-7.678-0.001-10.606l-1.767-1.767l7.986-7.986l1.767,1.767   c1.465,1.464,3.385,2.196,5.304,2.196s3.839-0.732,5.304-2.196c2.929-2.93,2.929-7.678,0-10.607l-1.767-1.767l7.985-7.985   l1.767,1.767c1.465,1.464,3.385,2.196,5.304,2.196s3.839-0.732,5.304-2.196c2.929-2.93,2.929-7.678,0-10.607l-1.767-1.767   l2.879-2.879C463.412,56.046,464.107,54.796,464.423,53.43z M309.925,274.423c-9.501,17.807-20.58,22.145-33.407,27.166   c-11.365,4.449-24.246,9.492-35.32,24.443c-5.949,8.037-8.219,19.417-10.846,32.596c-5.387,27.018-12.091,60.642-53.334,82.952   c-47.683,25.804-95.949-14.535-114.479-33.064l-5.968-5.957c-18.535-18.555-58.861-66.855-33.089-114.507   c22.31-41.24,55.942-47.943,82.968-53.331c13.181-2.627,24.564-4.896,32.605-10.849c14.947-11.077,19.987-23.956,24.435-35.318   c5.019-12.825,9.354-23.9,27.167-33.411c25.473-13.636,51.046-0.133,65.255,10.375l-48.613,46.795   c-0.711-0.031-1.424-0.052-2.14-0.052c-12.778,0-24.779,4.965-33.788,13.973c-9.008,8.989-13.968,20.968-13.965,33.729   c0.002,12.761,4.967,24.738,13.968,33.713c8.998,9.011,20.983,13.974,33.749,13.974s24.746-4.964,33.716-13.959   c9.001-8.963,13.967-20.926,13.982-33.687c0.001-0.753-0.019-1.504-0.052-2.251l46.775-48.592   C310.054,223.369,323.562,248.944,309.925,274.423z M209.293,227.527c7.171,0.894,13.793,4.096,18.959,9.252   c5.177,5.181,8.393,11.807,9.297,18.982c0.008,0.076,0.018,0.152,0.028,0.228c0.157,1.316,0.245,2.649,0.243,3.997   c-0.011,8.748-3.408,16.942-9.585,23.094c-6.153,6.171-14.362,9.569-23.113,9.569c-8.755,0-16.971-3.399-23.146-9.584   c-6.17-6.152-9.569-14.358-9.57-23.105c-0.002-8.747,3.394-16.954,9.565-23.113c6.182-6.181,14.416-9.585,23.188-9.585   c1.318,0,2.621,0.086,3.909,0.238C209.142,227.509,209.217,227.519,209.293,227.527z M248.66,240.392   c-2.344-5.231-5.634-10.049-9.805-14.223c-4.16-4.151-8.964-7.426-14.181-9.76L353.647,92.256l19.152,19.175L248.66,240.392z    M450.041,48.204l-6.391,6.391c-0.007,0.007-0.014,0.012-0.02,0.018c-0.007,0.007-0.012,0.014-0.018,0.02l-18.554,18.554   c-0.007,0.007-0.014,0.012-0.02,0.018c-0.007,0.007-0.012,0.014-0.018,0.02l-17.73,17.73l-22.502,11.251l-21.913-21.938   l11.254-22.508l42.729-42.729c4.118-0.302,14.189,0.116,23.625,9.553C449.943,34.045,450.341,44.143,450.041,48.204z"
                />
              </svg>
            </SVGGuitarContainer>
            <SVGDrumContainer style={{ width: '700px' }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 465.072 465.072"
              >
                <motion.path
                  style={{ stroke: '#cfcfcf', strokeWidth: 2 }}
                  variants={variants}
                  initial="start"
                  animate="end"
                  transition={{
                    default: { duration: 20 },
                    fill: { duration: 1, delay: 1.1 },
                  }}
                  d="M443.305,369.556l-75.462-65.811V74.992c34.605-3.688,68.305-15.166,66.799-30.356c-0.597-6.007-6.243-10.604-16.783-13.664  c-8.872-2.575-20.751-3.937-34.354-3.937c-5.092,0-10.341,0.202-15.662,0.585V17.315c0-2.209-1.791-4-4-4s-4,1.791-4,4v11.018  c-34.606,3.688-68.305,15.167-66.798,30.357c0.597,6.007,6.242,10.604,16.781,13.663c8.871,2.575,20.749,3.938,34.352,3.938  c0.002,0,0.002,0,0.003,0c5.092,0,10.34-0.202,15.662-0.586v228.04l-42.87,37.383c0.432-3.701,0.661-7.463,0.661-11.278  c0-0.636,0-26.898,0-26.898c0-22.103-7.454-42.491-19.97-58.802v-29.983h55.909c2.209,0,4-1.791,4-4v-41.08c0-2.209-1.791-4-4-4  h-34.173c0.552-1.329,0.71-2.741,0.288-4.23c0,0,0-0.001,0-0.001l0.003-0.001l-13.256-46.762c-1.653-5.832-10.19-6.06-16.461-5.716  c-7.653,0.414-17.413,2.214-27.48,5.067c-6.762,1.917-40.328,12.063-37.056,23.608l3.31,11.678h-16.358l2.541-13.441  c2.644-13.998-42.415-22.935-47.562-23.907s-50.35-9.1-52.996,4.899l-6.003,31.757c-9.059,0.301-17.428,0.882-24.288,1.681V92.536  l11.435-11.322c1.454,0.258,2.915,0.507,4.385,0.744c14.118,2.283,28.252,3.489,40.874,3.489c13.361,0,24.872-1.334,33.289-3.858  c9.996-2.998,15.563-7.6,16.545-13.677c1.365-8.449-6.784-17.141-23.567-25.137c-15.132-7.209-35.763-13.168-58.092-16.777  c-0.175-0.028-0.35-0.052-0.524-0.08v-8.604c0-2.209-1.791-4-4-4s-4,1.791-4,4v7.447c-11.228-1.472-22.272-2.253-32.35-2.253  c-13.361,0-24.872,1.334-33.289,3.858c-9.996,2.998-15.563,7.6-16.545,13.677c-1.365,8.449,6.784,17.141,23.567,25.137  c11.935,5.686,27.297,10.588,44.208,14.179l-61.242,60.636c-1.569,1.555-1.582,4.087-0.028,5.657  c0.782,0.79,1.813,1.186,2.843,1.186c1.017,0,2.034-0.386,2.814-1.157l45.678-45.226v50.412c-8.131,1.442-13.047,3.447-13.047,7.844  v92.362c0,3.899,3.559,6.159,13.047,7.849v45.474L1.371,369.556c-1.665,1.452-1.838,3.979-0.386,5.644  c0.791,0.907,1.9,1.371,3.017,1.371c0.933,0,1.869-0.324,2.627-0.985l50.475-44.02l18.979,10.217v10.264c0,2.209,1.791,4,4,4  s4-1.791,4-4v-9.457l20.477-11.023l21.667,18.897c0.001,0.007,0.003,0.014,0.005,0.02l-23.344,75.697  c-0.651,2.111,0.532,4.35,2.644,5.001c0.393,0.121,0.789,0.179,1.18,0.179c1.709,0,3.291-1.104,3.821-2.822l19.825-64.285  c13.905,36.442,49.199,62.407,90.466,62.407c41.685,0,77.301-26.483,90.908-63.507l20.165,65.385  c0.53,1.719,2.112,2.822,3.821,2.822c0.39,0,0.787-0.058,1.18-0.179c2.111-0.651,3.295-2.89,2.644-5.001l-22.874-74.171  l23.447-20.446l19.73,10.621v10.621c0,2.209,1.791,4,4,4s4-1.791,4-4v-10.621l19.729-10.62l50.475,44.02  c0.758,0.661,1.694,0.985,2.627,0.985c1.116,0,2.226-0.464,3.017-1.371C445.143,373.535,444.97,371.008,443.305,369.556z   M45.252,57.96c-14.94-7.118-19.633-13.411-19.11-16.638c0.868-5.373,15.552-10.813,41.936-10.813  c12.202,0,25.895,1.171,39.597,3.386c21.602,3.493,41.463,9.212,55.928,16.103c14.94,7.118,19.633,13.411,19.11,16.638  c-0.868,5.373-15.552,10.813-41.936,10.813c-11.799,0-24.994-1.105-38.243-3.18l5.893-5.835V53.978c0-2.209-1.791-4-4-4  s-4,1.791-4,4v11.117l-7.568,7.493C74.511,69.062,57.838,63.956,45.252,57.96z M76.083,332.697l-12.537-6.75l12.537-10.934V332.697z   M76.083,250.799c-2.302-0.449-4.006-0.905-5.047-1.34v-84.006c1.496,0.408,3.197,0.762,5.047,1.09V250.799z M337.604,173.086h11.97  v33.08h-11.97V173.086z M329.604,173.086v33.08H263.43v-17.507c5.894-0.866,12.478-2.295,19.198-4.2  c10.065-2.854,19.316-6.442,26.048-10.104c0.724-0.394,1.477-0.818,2.233-1.269H329.604z M289.664,214.166v20.812  c-8.624-8.729-18.88-15.842-30.283-20.812H289.664z M280.446,176.761c-10.886,3.086-21.265,4.855-28.476,4.855  c-2.08,0-3.497-0.153-4.438-0.328c3.329-2.97,13.496-8.589,30.403-13.381c10.886-3.086,21.265-4.855,28.476-4.855  c2.08,0,3.497,0.153,4.438,0.328C307.522,166.35,297.356,171.968,280.446,176.761z M255.43,189.507v16.658h-11.97v-17.732  c3.113,1.174,6.822,1.184,8.511,1.184c0,0,0,0,0.001,0C253.063,189.617,254.222,189.578,255.43,189.507z M309.765,155.169  c-1.373-0.113-2.578-0.117-3.353-0.117c-7.918,0-19.092,1.88-30.657,5.158c-4.701,1.332-22.342,6.643-31.572,13.632l-4.851-17.113  h5.073c2.209,0,4-1.791,4-4s-1.791-4-4-4h-6.793c2.584-2.777,12.92-8.813,30.938-13.921c19.132-5.424,31.465-5.416,34.254-4.191  L309.765,155.169z M298.929,116.944l1.453,5.127c-2.207-0.183-4.489-0.137-6.532-0.027c-1.868,0.101-3.865,0.288-5.958,0.549  l-1.663-5.865C293.002,115.981,297.396,116.276,298.929,116.944z M264.676,121.14c5.013-1.421,9.546-2.462,13.577-3.213l1.687,5.948  c-4.343,0.836-8.918,1.917-13.57,3.236c-5.145,1.458-10.074,3.11-14.566,4.865l-1.681-5.93  C254.239,124.404,259.077,122.727,264.676,121.14z M242.732,129.313l1.6,5.644c0.019,0.067,0.05,0.128,0.073,0.193  c-1.442,0.683-2.806,1.374-4.079,2.067c-1.798,0.978-3.764,2.136-5.547,3.45l-1.453-5.126  C234.211,134.267,237.36,131.971,242.732,129.313z M224.82,156.729h6.196l4.443,15.674v34.859c-3.49-0.532-7.039-0.883-10.64-1.03  V156.729z M308.51,288.85c-15.465-32.943-48.953-55.812-87.688-55.812c-38.74,0-72.232,22.876-87.694,55.825  c6.772-42.297,43.516-74.72,87.697-74.72C264.997,214.143,301.734,246.559,308.51,288.85z M216.82,156.729v49.503  c-11.964,0.489-23.37,3.169-33.84,7.632v-11.312c12.953-0.166,19.766-2.824,20.769-8.127c0-0.001,0-0.001,0-0.002l0.004,0.001  l7.126-37.695H216.82z M202.78,130.954c2.331,1.333,3.735,2.473,4.211,3.274l-0.842,4.453c-1.447-0.976-2.964-1.82-4.353-2.52  L202.78,130.954z M169.14,119.886c11.206,2.294,19.923,5.014,26.165,7.536l-1.032,5.458c-7.362-2.843-16.435-5.41-26.189-7.41  L169.14,119.886z M134.115,116.145c6.591-0.174,15.72,0.369,27.159,2.276l-1.055,5.584c-9.904-1.65-19.315-2.493-27.131-2.426  L134.115,116.145z M122.154,118.191c0.592-0.46,1.828-0.905,3.671-1.265l-0.967,5.115c-1.148,0.142-2.351,0.336-3.546,0.603  L122.154,118.191z M119.612,131.644c2.612-2.056,17.938-3.833,43.73,1.043c25.802,4.877,39.423,12.126,41.105,14.994l-0.198,1.049  h-7.951c-2.209,0-4,1.791-4,4s1.791,4,4,4h6.439l-5.227,27.648c-3.084-2.08-6.499-3.562-8.276-4.332  c-8.644-3.745-20.378-7.127-33.04-9.521c-11.097-2.097-22.083-3.252-30.935-3.252c-5.086,0-9.27,0.364-12.588,1.095L119.612,131.644  z M125.259,175.273c8.368,0,18.826,1.105,29.448,3.113c24.261,4.586,37.759,11.271,40.68,14.435  c-1.589,0.724-5.612,1.748-13.7,1.748c-8.369,0-18.828-1.105-29.449-3.113c-24.259-4.586-37.758-11.271-40.679-14.434  C113.148,176.297,117.171,175.273,125.259,175.273z M84.083,157.78c5.861-0.715,13.477-1.335,22.765-1.685l-0.98,5.185  c-8.844-0.355-16.132-0.957-21.785-1.646V157.78z M84.083,167.695c2.478,0.287,5.148,0.546,7.976,0.774v5.56c0,2.209,1.791,4,4,4  s4-1.791,4-4v-5.02c1.414,0.078,2.846,0.151,4.308,0.214l-1.17,6.191l0,0c0,0.001,0,0.001,0,0.002  c-1.413,7.477,10.576,12.672,14.516,14.379c8.644,3.745,20.377,7.127,33.039,9.521c8.439,1.595,16.808,2.641,24.229,3.052v15.35  c-15.529,8.384-28.524,20.879-37.504,36.028c-4.735,0.159-9.587,0.244-14.469,0.244c-16.335,0-29.683-0.858-38.925-1.976V167.695z   M84.083,333.503v-19.796l14.034,12.241L84.083,333.503z M124.006,302.951c0,0,0.004,26.256,0.004,26.898  c0,2.826,0.129,5.621,0.367,8.386l-40.294-35.144v-43.021c10.584,1.239,24.338,1.92,38.925,1.92c3.41,0,6.804-0.043,10.161-0.12  C127.296,274.349,124.006,288.272,124.006,302.951z M220.822,418.661c-48.972,0-88.813-39.841-88.813-88.812  s39.841-88.812,88.813-88.812c48.971,0,88.812,39.841,88.812,88.812S269.793,418.661,220.822,418.661z M359.843,333.1l-13.288-7.154  l13.288-11.587V333.1z M363.843,47.663c-2.209,0-4,1.791-4,4v16.027c-5.329,0.398-10.577,0.601-15.662,0.601  c-0.001,0-0.002,0-0.003,0c-31.529-0.001-42.849-7.136-43.172-10.391c-0.614-6.189,23.52-18.034,61.294-21.783  c7.23-0.718,14.364-1.081,21.205-1.081c31.532,0,42.853,7.136,43.176,10.391c0.6,6.054-22.482,17.512-58.838,21.519V51.663  C367.843,49.454,366.052,47.663,363.843,47.663z M367.843,333.1v-18.74l13.287,11.587L367.843,333.1z"
                />
              </svg>
            </SVGDrumContainer>
          </SVGContainer>
          <MainLogoImage src={MainLogo} alt="Intergal Logo" />
          <MainMiniTitle>INTEGRAL</MainMiniTitle>
          <MainSubTitle>공연기획</MainSubTitle>
          <MainDescription>
            2019년, 다른 밴드 공연의 오프닝밴드로 무대를 마지막으로 지금까지
            한번도 무대에 서지 못하였습니다. <br /> 다들 생업과 학업에 치여
            바쁘게 살아서 ‘공연’을 생각할 겨를이 없었습니다. <br /> 그러던중
            올해 초에 한 멤버가 '우리 공연하자' 라는 이야기를 꺼냈습니다. <br />
            그렇게 우리는 4년간의 침묵을 깨고 공연을 하기로 마음먹었습니다.
          </MainDescription>
          <MainLineContainer>
            <MainLineText>Show Plan</MainLineText>
            <MainLine />
            <MainLineText>Title</MainLineText>
          </MainLineContainer>
          <TitleContainer>
            <TitleTitle>INTEGRAL</TitleTitle>
            <TitleDescription>
              <strong>INTEGRAL</strong>은 한글로 ‘적분’입니다.
              <br /> 수학에서 적분은 ‘함수의 그래프와 그 구간으로 둘러싸인
              도형의 넓이’를 뜻합니다.
              <br /> 한문으로는 ‘쌓을 적’자와 ‘나눌 분’자를 씁니다.
              <br /> 그 이유는 적분이 구간을 잘게 나눴을 때 나오는 직사각형 여러
              개를 쌓아서 넓이를 구하는 과정이기 때문입니다.
              <br /> 2017년부터 2023년까지 저희가 함께 쌓아 온 음악에 대한
              열정을 여러분께 보여드리고자
              <br /> 공연 제목을 <strong>INTEGRAL</strong>로 정했습니다.
            </TitleDescription>
          </TitleContainer>
          <MainLineContainer style={{ padding: '200px 0 10px 0' }}>
            <MainLineText>Title</MainLineText>
            <MainLine />
            <MainLineText>Team Story</MainLineText>
          </MainLineContainer>
        </MainFirstContainer>
      </Layout>
      <MainSecondContainer>
        <Layout>
          <MainTitle title="Team Story" />
          <TitleDescription style={{ padding: '50px 0' }}>
            Band f(x)는 홍익대학교 수학교육과에서 음악을 사랑하는 사람들이 만든
            밴드 모임입니다.
            <br /> 그 중에서도 공연을 진행하는 팀은 새로운 이름을 정합니다. 저희
            팀의 이름은 ‘나봄’입니다.
            <br /> 비유를 들자면 NCT-Dream같은 유닛팀이라고 생각할 수 있을 것
            같네요 ㅎㅎ
            <br /> 저희 나봄은 2017년의 첫 공연을 시작으로 지금까지 깊은
            유대관계를 유지하며 음악에 대한 열정을 쌓아가고 있습니다.
          </TitleDescription>
          <ImageContainer>
            <MainImageBox src={BandImage1} alt="BandImage1" />
            <MainImageBox src={BandImage2} alt="BandImage2" />
            <MainImageBox src={BandImage3} alt="BandImage3" />
            <MainImageBox src={BandImage4} alt="BandImage4" />
            <MainImageBox src={BandImage5} alt="BandImage5" />
          </ImageContainer>
          <MainLineContainer>
            <MainLineText>Team Story</MainLineText>
            <MainLine />
            <MainLineText>History</MainLineText>
          </MainLineContainer>
          <MainTitle title="History" white />
          <HistoryContainer>
            <HistoryBox>
              <HistoryTitle>2017.04</HistoryTitle>
              <HistoryList>
                <HistoryListItem>'나봄' 첫 공연</HistoryListItem>
              </HistoryList>
              <HistoryTitle>2017.09</HistoryTitle>
              <HistoryList>
                <HistoryListItem>'나봄' 두번째 공연</HistoryListItem>
              </HistoryList>
              <HistoryTitle>2019.11</HistoryTitle>
              <HistoryList>
                <HistoryListItem>f(x) 공연 '나봄' 찬조</HistoryListItem>
              </HistoryList>
              <HistoryTitle>2023.05.13</HistoryTitle>
              <HistoryList>
                <HistoryListItem>f(x) INTEGRAL 단독 공연</HistoryListItem>
              </HistoryList>
              <HistoryTitle></HistoryTitle>
            </HistoryBox>
          </HistoryContainer>
          <MainLineContainer style={{ padding: '200px 0 0 0' }}>
            <MainLineText>History</MainLineText>
            <MainLine />
            <MainLineText>Team Member</MainLineText>
          </MainLineContainer>
        </Layout>
      </MainSecondContainer>
      <Layout>
        <MainThirdContainer>
          <MainTitle title="Team Member" />
          <MemberContainer>
            <MemberBox color="#a8ffb7">
              <h2>강예담</h2>
              <h4>POSITION</h4>
              <h3>KEYBOARD</h3>
              <MemberImage
                src={Piano1}
                alt="piano"
                style={{ marginTop: '90px' }}
              />
            </MemberBox>
            <MemberBox color="#FFB762">
              <h2>곽호윤</h2>
              <h4>POSITION</h4>
              <h3>MANAGER</h3>
              <MemberImage
                src={Manager}
                alt="piano"
                style={{ marginRight: '5px' }}
              />
            </MemberBox>
            <MemberBox color="#8F73FF">
              <h2>김정완</h2>
              <h4>POSITION</h4>
              <h3>KEYBOARD</h3>
              <MemberImage
                src={Piano2}
                alt="piano"
                style={{ marginTop: '90px' }}
              />
            </MemberBox>
            <MemberBox color="#9DDD34">
              <h2>남인식</h2>
              <h4>POSITION</h4>
              <h3>HAKWONGANGSA</h3>
              <MemberImage
                src={Teacher}
                alt="Teacher"
                style={{ marginTop: '50px' }}
              />
            </MemberBox>
            <MemberBox color="#FF5775">
              <h2>이민형</h2>
              <h4>POSITION</h4>
              <h3>DRUM</h3>
              <MemberImage
                src={Drum}
                alt="Drum"
                style={{ marginTop: '80px' }}
              />
            </MemberBox>
            <MemberBox color="#3491FF">
              <h2>안정기</h2>
              <h4>POSITION</h4>
              <h3>BASS</h3>
              <MemberImage src={Bass} alt="Bass" style={{ rotate: '45deg' }} />
            </MemberBox>
            <MemberBox color="#FF74F9">
              <h2>장희준</h2>
              <h4>POSITION</h4>
              <h3>VOCAL</h3>
              <MemberImage
                src={Mike}
                alt="Mike"
                style={{ marginTop: '40px' }}
              />
            </MemberBox>
            <MemberBox color="#575757">
              <h2>조경식</h2>
              <h4>POSITION</h4>
              <h3>GUITAR</h3>
              <MemberImage
                src={Guitar1}
                alt="Guitar1"
                style={{ rotate: '45deg' }}
              />
            </MemberBox>
            <MemberBox color="#64E3FF">
              <h2>최현규</h2>
              <h4>POSITION</h4>
              <h3>GUITAR</h3>
              <MemberImage
                src={Guitar2}
                alt="Guitar2"
                style={{ rotate: '45deg' }}
              />
            </MemberBox>
          </MemberContainer>
        </MainThirdContainer>
      </Layout>
    </ScrollContainer>
  );
};

export default HomePage;
