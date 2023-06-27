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

import ImageCalendarD_wp from '../../../images/start_page/Desktop/calendarDesktop@1x.webp';
import ImageCalendarD2x_wp from '../../../images/start_page/Desktop/calendarDesktop@2x.webp';
import ImageSidebarD_wp from '../../../images/start_page/Desktop/sidebarDesktop@1x.webp';
import ImageSidebarD2x_wp from '../../../images/start_page/Desktop/sidebarDesktop@2x.webp';
import ImageAllinOneD_wp from '../../../images/start_page/Desktop/all_inDecktop@1x.webp';
import ImageAllinOneD2x_wp from '../../../images/start_page/Desktop/all_inDecktop@2x.webp';

import ImageCalendarT_wp from '../../../images/start_page/Tablet/calendarTablet@1x.webp';
import ImageCalendarT2x_wp from '../../../images/start_page/Tablet/calendarTablet@2x.webp';
import ImageSidebarT_wp from '../../../images/start_page/Tablet/sidebarTablet@1x.webp';
import ImageSidebarT2x_wp from '../../../images/start_page/Tablet/sidebarTablet@2x.webp';
import ImageAllinOneT_wp from '../../../images/start_page/Tablet/all_inTablet@1x.webp';
import ImageAllinOneT2x_wp from '../../../images/start_page/Tablet/all_inTablet@2x.webp';

import ImageCalendarM_wp from '../../../images/start_page/Tablet/calendarTablet@1x.webp';
import ImageCalendarM2x_wp from '../../../images/start_page/Tablet/calendarTablet@2x.webp';
import ImageSidebarM_wp from '../../../images/start_page/Tablet/sidebarTablet@1x.webp';
import ImageSidebarM2x_wp from '../../../images/start_page/Tablet/sidebarTablet@2x.webp';
import ImageAllinOneM_wp from '../../../images/start_page/Tablet/all_inTablet@1x.webp';
import ImageAllinOneM2x_wp from '../../../images/start_page/Tablet/all_inTablet@2x.webp';

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
        <picture>
          <source
            type="image/webp"
            alt="Callendar view"
            srcSet={`${ImageCalendarD_wp} 1440w, ${ImageCalendarD2x_wp} 2880w,  ${ImageCalendarT_wp} 768w, ${ImageCalendarT2x_wp} 1536w, ${ImageCalendarM_wp} 375w, ${ImageCalendarM2x_wp} 750w,`}
            src={ImageCalendarM_wp}
          />
          <Image
            alt="Callendar view"
            srcSet={`${ImageCalendarD} 1440w, ${ImageCalendarD2x} 2880w,  ${ImageCalendarT} 768w, ${ImageCalendarT2x} 1536w, ${ImageCalendarM} 375w, ${ImageCalendarM2x} 750w,`}
            src={ImageCalendarM}
          />
        </picture>
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
        <picture>
          <source
            type="image/webp"
            alt="Sidebar view"
            srcSet={`${ImageSidebarD_wp} 1440w, ${ImageSidebarD2x_wp} 2880w,  ${ImageSidebarT_wp} 768w, ${ImageSidebarT2x_wp} 1536w, ${ImageSidebarM_wp} 375w, ${ImageSidebarM2x_wp} 750w,`}
            src={ImageSidebarM_wp}
          />
          <Image
            alt="Sidebar view"
            srcSet={`${ImageSidebarD} 1440w, ${ImageSidebarD2x} 2880w,  ${ImageSidebarT} 768w, ${ImageSidebarT2x} 1536w, ${ImageSidebarM} 375w, ${ImageSidebarM2x} 750w,`}
            src={ImageSidebarM}
          />
        </picture>
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
        <picture>
          <source
            type="image/webp"
            alt="All in view"
            srcSet={`${ImageAllinOneD_wp} 1440w, ${ImageAllinOneD2x_wp} 2880w,  ${ImageAllinOneT_wp} 768w, ${ImageAllinOneT2x_wp} 1536w, ${ImageAllinOneM_wp} 375w, ${ImageAllinOneM2x_wp} 750w,`}
            src={ImageAllinOneM_wp}
          />
          <Image
            alt="All in view"
            srcSet={`${ImageAllinOneD} 1440w, ${ImageAllinOneD2x} 2880w,  ${ImageAllinOneT} 768w, ${ImageAllinOneT2x} 1536w, ${ImageAllinOneM} 375w, ${ImageAllinOneM2x} 750w,`}
            src={ImageAllinOneM}
          />
        </picture>
      </Container>
    </MainContainer>
  );
};

export default Description;
