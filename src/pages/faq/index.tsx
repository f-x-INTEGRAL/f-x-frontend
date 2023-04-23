import * as React from 'react';
import { Layout, MainTitle } from '@/components';
import Image from 'next/image';
import Map from '../../assets/images/map.png';

import { css, makeStyles, styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { useMediaQuery } from '@mui/material';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  border: 'none',
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  background: 'none',
  border: 'none',
  borderBottom: '1px solid #62A1F1',
  height: '55px',
  boxShadow: '5px 5px 5px #62A1F1',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

// const isMobile = useMediaQuery('(max-width: 768px)');

// const useStyles = makeStyles(() => ({
//   mobileFont: {
//     Font
//   },
//   font: {
//     font-size: "18px"
//   },
// }));

export const MapImage = styled(Image)`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin-top: 20px;

  &:hover {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  }
`;

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  React.useEffect(() => {
    document.body.style.overflow = 'scroll';
  }, []);

  return (
    <Layout>
      <div style={{ padding: '50px 0' }}>
        <MainTitle x45 title="자주 묻는 질문" />
      </div>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography style={{ fontSize: '18px' }}>
            Q. 티켓 예매는 어디서 해야하나요?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A. 페이지 상단의 '티켓 예매' 버튼을 눌러 안내에 따라 내용을
            입력하시면 됩니다. 양식을 제출하신 후 입금이 확인되면 예매를
            확정해드립니다.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography style={{ fontSize: '18px' }}>
            Q. 예매 확정 안내는 어떻게 받을 수 있나요?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A. 입금이 확인되면 개별적으로 예매 확정 문자를 발송할 예정입니다.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography style={{ fontSize: '18px' }}>
            Q. 예매 취소는 언제까지 가능한가요?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A. 5.12(금) 오후 5시까지 가능합니다. 취소 방법은 문자로
            안내드립니다.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography style={{ fontSize: '18px' }}>
            Q. 티켓값을 입금해야할 계좌번호가 어떻게 되나요?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A. '카카오뱅크 3333-09-0806205 곽호윤'으로 입급 부탁드립니다.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel5'}
        onChange={handleChange('panel5')}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography style={{ fontSize: '18px' }}>
            Q. 입장 나이제한이 있나요?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A. 입장 나이제한은 없지만, 스탠딩 공연의 특성상 안전상의 문제로 만
            13세 이상 입장을 권고하고 있습니다.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel6'}
        onChange={handleChange('panel6')}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography style={{ fontSize: '18px' }}>
            Q. 공연장 입장은 몇시부터 가능한가요?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A. 공연장 입장은 공연 시작 1시간 전인 5시 30분부터 가능합니다.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel7'}
        onChange={handleChange('panel7')}
      >
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography style={{ fontSize: '18px' }}>
            Q. 공연 시작 이후에도 입장이 가능한가요?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A. 입장 가능합니다. 매표소에 있는 도우미의 안내에 따라 입장해주세요.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel8'}
        onChange={handleChange('panel8')}
      >
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography style={{ fontSize: '18px' }}>
            Q. 공연 당일 예매 취소가 가능한가요?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A. 공연 당일 예매 취소는 불가능합니다. 예매 양도는 가능합니다. (양도
            사실 확인 필요)
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel9'}
        onChange={handleChange('panel9')}
      >
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
          <Typography style={{ fontSize: '18px' }}>
            Q. 공연장 내에 식음료 시설이 있나요?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            입장 나이제한이 없는 관계로, 식수 외의 주류 및 음식은 반입
            불가합니다.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel10'}
        onChange={handleChange('panel10')}
      >
        <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
          <Typography style={{ fontSize: '18px' }}>
            Q. 공연장 근처에 주차가 가능한가요?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A. 공연장에는 주차공간이 없고 근처 공영주차장을 이용하셔야 합니다.
            공영주차장의 공간이 협소할 수 있으니 참고바랍니다.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel11'}
        onChange={handleChange('panel11')}
      >
        <AccordionSummary aria-controls="panel9d-content" id="panel9d-header">
          <Typography style={{ fontSize: '18px' }}>
            Q. 교통편이 어떻게 되나요?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A. 지하철 : 상수역(6호선) 1번 출구 또는 합정역(2·6호선) 4,5번
            출구에서 도보로 약 7분 이동 (약도의 빨간선 및 파란선 참고) 버스 :
            7011, 7013A, 7013B을 타고 '서울화력발전소입구' 정류장에서 하차 후
            도보로 약 2분 이동 (약도의 초록선 참고)
            <MapImage
              src={Map}
              alt="map"
              css={css`
                width: 1000px;
                height: 550px;
                @media (max-width: 768px) {
                  margin-top: 15px;
                  width: 400px;
                  height: 250px;
                }
              `}
            />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Layout>
  );
}
