import * as React from 'react';
import { Layout, MainTitle } from '@/components';
import Image from 'next/image';
import Map from '../../assets/images/map.png';

import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

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

  return (
    <Layout>
      <div style={{ padding: '50px 0' }}>
        <MainTitle title="자주 묻는 질문" />
      </div>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography style={{ fontSize: '18px' }}>
            Q. 공연장에 늦게 도착했을 경우 입장할 수 있나요?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A. 입장 가능합니다. 매표소에 있는 도우미의 안내에 따라 입장해주세요.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography style={{ fontSize: '18px' }}>
            Q. 공연장 입장 시각은 언제인가요?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A. 공연장 입장은 공연 시작 30분 전인 6시까지 가능합니다.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
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
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography style={{ fontSize: '18px' }}>
            Q. 티켓 예매는 어디서 해야하나요?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A. 위의 티켓 예매 버튼을 눌러 안내에 따라 예매하시면 됩니다. 입금이
            확인되면 예매를 확정해드립니다.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel5'}
        onChange={handleChange('panel5')}
      >
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography style={{ fontSize: '18px' }}>
            Q. 공연 당일 예매 취소가 가능한가요?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A. 공연 당일 예매 취소는 불가능합니다. 다만 양도는 가능합니다.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel6'}
        onChange={handleChange('panel6')}
      >
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography style={{ fontSize: '18px' }}>
            Q. 예매 확정 안내는 어떻게 받을 수 있나요?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A. 입금이 확인되면 개별적으로 예매 확정 문자가 발송됩니다.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel7'}
        onChange={handleChange('panel7')}
      >
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
          <Typography style={{ fontSize: '18px' }}>
            Q. 공연장 내에 식음료 시설이 있나요?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A. 공연장 내에 식음료를 판매하는 시설은 따로 없으니 공연장에
            입장하시기 전에 준비해오시길 바랍니다.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel8'}
        onChange={handleChange('panel8')}
      >
        <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
          <Typography style={{ fontSize: '18px' }}>
            Q. 공연장 근처에 주차공간이 있나요?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A. 공연장 근처에 주차공간이 없으므로 대중교통 이용을 추천드립니다.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel9'}
        onChange={handleChange('panel9')}
      >
        <AccordionSummary aria-controls="panel9d-content" id="panel9d-header">
          <Typography style={{ fontSize: '18px' }}>
            Q. 교통편이 어떻게 되나요?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A. 지하철의 경우 6호선 상수역 또는 2 · 6호선 합정역을 통해, 버스의
            경우 서울화력발전소 입구 정류장에 정차하는 7011번, 7013A번,
            7013B번을 이용하시거나 로데오거리 정류장에 정차하는 마포07번을
            이용하시면 됩니다.
            <Image
              src={Map}
              alt=""
              style={{ width: '1000px', height: '550px' }}
            />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Layout>
  );
}
