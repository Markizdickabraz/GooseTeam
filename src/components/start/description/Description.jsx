import {
  MainContainer,
  Container,
  ContainerReverse,
  DescriptionLeft,
  DescriptionRight,
  Image,
  Number,
  TitleColoured,
  TitleUncoloured,
  AboutText,
} from './Description.styled';

import ImageCalendarD from '../../../images/start_page/Desktop/calendarDesktop@1x.png';
import ImageCalendarD2x from '../../../images/start_page/Desktop/calendarDesktop@2x.png';
import ImageSidebarD from '../../../images/start_page/Desktop/sidebarDesktop@1x.png';
import ImageSidebarD2x from '../../../images/start_page/Desktop/sidebarDesktop@2x.png';
import ImageAllinOneD from '../../../images/start_page/Desktop/all_inDecktop@1x.png';
import ImageAllinOneD2x from '../../../images/start_page/Desktop/all_inDecktop@2x.png';

import ImageCalendarT from '../../../images/start_page/Tablet/calendarTablet@1x.png';
import ImageCalendarT2x from '../../../images/start_page/Tablet/calendarTablet@2x.png';
import ImageSidebarT from '../../../images/start_page/Tablet/sidebarTablet@1x.png';
import ImageSidebarT2x from '../../../images/start_page/Tablet/sidebarTablet@2x.png';
import ImageAllinOneT from '../../../images/start_page/Tablet/all_inTablet@1x.png';
import ImageAllinOneT2x from '../../../images/start_page/Tablet/all_inTablet@2x.png';

import ImageCalendarM from '../../../images/start_page/Tablet/calendarTablet@1x.png';
import ImageCalendarM2x from '../../../images/start_page/Tablet/calendarTablet@2x.png';
import ImageSidebarM from '../../../images/start_page/Tablet/sidebarTablet@1x.png';
import ImageSidebarM2x from '../../../images/start_page/Tablet/sidebarTablet@2x.png';
import ImageAllinOneM from '../../../images/start_page/Tablet/all_inTablet@1x.png';
import ImageAllinOneM2x from '../../../images/start_page/Tablet/all_inTablet@2x.png';

const Description = () => {
  return (
    <MainContainer>
      <Container>
        <DescriptionLeft>
          <Number>1.</Number>
          <TitleColoured>Calendar</TitleColoured>
          <TitleUncoloured>view</TitleUncoloured>
          <AboutText>
            GooseTrack's Calendar view provides a comprehensive overview of your
            schedule, displaying all your tasks, events, and appointments in a
            visually appealing and intuitive layout.
          </AboutText>
        </DescriptionLeft>
        <Image
          alt="Callendar view"
          srcSet={`${ImageCalendarD} 1440w, ${ImageCalendarD2x} 2880w,  ${ImageCalendarT} 768w, ${ImageCalendarT2x} 1536w, ${ImageCalendarM} 375w, ${ImageCalendarM2x} 750w,`}
          src={ImageCalendarM}
        />
      </Container>
      <ContainerReverse>
        <DescriptionRight>
          <Number>2.</Number>
          <TitleUncoloured>Sidebar</TitleUncoloured>
          <AboutText>
            GooseTrack offers easy access to your account settings, calendar,
            and filters. The "My Account" section allows you to manage your
            profile information and preferences, while the calendar provides a
            quick and convenient way to view your upcoming events and tasks.
          </AboutText>
        </DescriptionRight>
        <Image
          alt="Sidebar view"
          srcSet={`${ImageSidebarD} 1440w, ${ImageSidebarD2x} 2880w,  ${ImageSidebarT} 768w, ${ImageSidebarT2x} 1536w, ${ImageSidebarM} 375w, ${ImageSidebarM2x} 750w,`}
          src={ImageSidebarM}
        />
      </ContainerReverse>
      <Container>
        <DescriptionLeft>
          <Number>3.</Number>
          <TitleColoured>All in</TitleColoured>
          <TitleUncoloured>one</TitleUncoloured>
          <AboutText>
            GooseTrack is an all-in-one productivity tool that helps you stay on
            top of your tasks, events, and deadlines. Say goodbye to scattered
            to-do lists and hello to streamlined productivity with GooseTrack.
          </AboutText>
        </DescriptionLeft>
        <Image
          alt="All in view"
          srcSet={`${ImageAllinOneD} 1440w, ${ImageAllinOneD2x} 2880w,  ${ImageAllinOneT} 768w, ${ImageAllinOneT2x} 1536w, ${ImageAllinOneM} 375w, ${ImageAllinOneM2x} 750w,`}
          src={ImageAllinOneM}
        />
      </Container>
    </MainContainer>
  );
};

export default Description;
